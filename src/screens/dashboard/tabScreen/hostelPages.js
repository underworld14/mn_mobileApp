import React, { useEffect } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { connect } from 'react-redux';

import useRefresh from '../../../components/hooks/useRefresh';
import * as hostelAct from '../../../store/actions/hostels';
import { HostelList } from './listComp';

function HostelPages(props) {
  const { dispatch, hostel } = props;
  const [refresh, onRefresh] = useRefresh(() => initialLoadPage());

  useEffect(() => {
    initialLoadPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initialLoadPage = async () => {
    await dispatch(hostelAct.get());
  };

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}>
      {hostel.data.map((data, i) => (
        <HostelList
          key={i}
          name={data.name}
          supervisor={data.teacher.name}
          total={data.totalStudents}
          loading={hostel.isLoading}
        />
      ))}
    </ScrollView>
  );
}

const mapStateToProps = state => ({
  hostel: state.hostel,
});

export default connect(mapStateToProps)(HostelPages);

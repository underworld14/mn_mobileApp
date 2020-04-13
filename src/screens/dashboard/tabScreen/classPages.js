import React from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import useRefresh from '../../../components/hooks/useRefresh';

import * as classroomAct from '../../../store/actions/classroom';
import { ClassList } from './listComp';

function ClassPages(props) {
  const { dispatch, classroom } = props;
  const [refresh, onRefresh] = useRefresh(() => initialLoadPage());

  const initialLoadPage = async () => {
    await dispatch(classroomAct.get());
  };

  return (
    <ScrollView refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={refresh} />}>
      {classroom.data.map((data, i) => (
        <ClassList
          key={i}
          data={data}
          name={data.name}
          supervisor={data.teacher.name}
          place={data.place}
          total={data.total}
          loading={classroom.isLoading}
        />
      ))}
    </ScrollView>
  );
}

const mapStateToProps = state => ({
  classroom: state.classroom,
});

export default connect(mapStateToProps)(ClassPages);

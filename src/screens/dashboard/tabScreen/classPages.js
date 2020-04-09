import React from 'react';
import { ScrollView } from 'react-native';

import { ClassList } from './listComp';

function ClassPages() {
  return (
    <ScrollView>
      <ClassList
        name="2A"
        supervisor="Muhammad Firman"
        place="Madinah Building"
        total={29}
        loading={false}
      />
      <ClassList name="2A" supervisor="Muhammad Firman" place="Madinah Building" total={29} />
    </ScrollView>
  );
}

export default ClassPages;

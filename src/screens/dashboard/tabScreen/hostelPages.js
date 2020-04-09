import React from 'react';
import { ScrollView } from 'react-native';

import { ClassList } from './listComp';

function HostelPages() {
  return (
    <ScrollView>
      <ClassList name="2A" supervisor="Muhammad Firman" place="Madinah Building" total={29} />
      <ClassList name="2A" supervisor="Muhammad Firman" place="Madinah Building" total={29} />
    </ScrollView>
  );
}

export default HostelPages;

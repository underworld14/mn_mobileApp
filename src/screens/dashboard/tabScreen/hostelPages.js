import React from 'react';
import { ScrollView } from 'react-native';

import { HostelList } from './listComp';

function HostelPages() {
  return (
    <ScrollView>
      <HostelList name="Makkah" supervisor="Muhammad Firman" total={29} loading={false} />
      <HostelList name="Saudi" supervisor="Muhammad Firman" total={29} />
    </ScrollView>
  );
}

export default HostelPages;

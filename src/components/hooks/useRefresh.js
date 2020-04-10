import React from 'react';

function useRefresh(refreshCallback) {
  const [refresh, setRefresh] = React.useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefresh(true);
    await refreshCallback();
    setRefresh(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [refresh, onRefresh];
}

export default useRefresh;

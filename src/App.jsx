import React from 'react';
import Stack from './components/Stack';
import Charts from './components/Charts';

const App = () => {
  return (
    <div>
      <Stack></Stack>
      <div style={{ width: '100%', height: 400 }}>
        <Charts />
      </div>

    </div>
  );
};

export default App;
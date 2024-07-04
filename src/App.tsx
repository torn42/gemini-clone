import { FC } from 'react';

import { Sidebar } from './components/Sidebar';
import { Main } from './components/Main';

const App: FC = () => {

  return (
    <>
      <Sidebar />
      <Main />
    </>
  );
};

export default App;
import { Container } from 'components/container';
import { Header } from 'components/header';
import Main from 'pages/main';
import { useState } from 'react';
import 'styles/global.css';

function App() {
  const [navigate, setNatigate] = useState("/");

  const routeTable = {
    "/" : <Main/>,
  }
  const viewer = routeTable[navigate];

  return (
    <div className="App">
      <Header/>
      <Container>
      {viewer}
      </Container>
    </div>
  );
}

export default App;

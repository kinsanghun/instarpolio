import { Container } from 'components/container';
import { Header } from 'components/header';
import Main from 'pages/main';
import MyPage from 'pages/mypage';
import { createContext, useEffect, useState } from 'react';
import 'styles/global.css';

export const NavContext = createContext({
  navigate : "/",
  setNavigate : () => {}
})
function App() {
  const [navigate, setNavigate] = useState("/");

  const routeTable = {
    "/" : <Main/>,
    "/mypage" : <MyPage/>
  }
  const viewer = routeTable[navigate];

  return (
    <div className="App">
      <NavContext.Provider value={{navigate:navigate, setNavigate:setNavigate}}>
        <Header/>
        <Container>{viewer}</Container>
      </NavContext.Provider>
    </div>
  );
}

export default App;

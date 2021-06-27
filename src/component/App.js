import React from 'react';
import AppRouter from './AppRouter';


//왜 여기서 선언한 useRef가 작동이 안될까???
//scrollToTop이 안되는 이유를 알려줘 미래의 나!!

const App = () => {

  return (
    <>
      <AppRouter />
      <footer>
        Tel :  +82)1050495056  /  E-mail : nfs82young@gmail.com
      </footer>
    </>
  )
}

export default App;

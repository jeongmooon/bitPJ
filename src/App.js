import './App.css';
import NavbarContainer from './containers/common/NavbarContainer';
import GlobalStyle from './libs/styles/GlobalStlye';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MemberSignInPage from './pages/MemberSignInPage';
import MemberSignUpPage from './pages/MemberSignUpPage';

function App() {
  return (
    <>
    <GlobalStyle />
    <NavbarContainer />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signin" element={<MemberSignInPage />} />
      <Route path="/signup" element={<MemberSignUpPage />} />
    </Routes>
    </>
  );
}

export default App;

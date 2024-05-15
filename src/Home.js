import './App.css';
import Search from './components/Search/Search';
import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    height : 100%;
   

    .app-header {
        background-color: #FFF;
    }
`;


function Home() {
  return (
    <AppContainer>
      <Search/>
    </AppContainer>
  );
}

export default Home;

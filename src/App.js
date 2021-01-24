import {
  BrowserRouter as Router,
} from "react-router-dom";

import Routes from './routes'

import styled from 'styled-components'

function App() {

  const App = styled.div`
  
    width: 100vw;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;

  `;
  return (
    <App>
      <Router>
        <Routes></Routes>
      </Router>
    </App>

  );
}

export default App;

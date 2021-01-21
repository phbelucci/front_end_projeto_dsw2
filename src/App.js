import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes'
import './App.css';

import { Container } from './components/Container/Container'

import styled from 'styled-components'

function App() {

  const App = styled.div`
  
    width: 100vw;
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

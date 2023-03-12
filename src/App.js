import './App.css';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stocks from './components/Stocks.js';

function App() {
  return (
	  <div className="App">
	  <Container>
	  <Stocks />
	  </Container>
    </div>
  );
}

export default App;

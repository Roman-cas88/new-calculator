import { Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Calculator } from './Components/Calculator';

function App() {
  return (
    <div className="App">
      <Container>
        Calculator
        <Calculator />
      </Container>
    </div>
  );
}

export default App;

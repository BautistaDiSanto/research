import styled from "styled-components";
import './App.css';
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <Container className="App">
      <Navbar />
    </Container>
  );
}

const Container = styled.div`
    background-color: #1a202c;
    height: 100vh
`;

export default App;

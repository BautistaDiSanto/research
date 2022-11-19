import styled from "styled-components";
import './App.css';
import { Navbar } from "./components/Navbar"
import { NotesList } from "./components/NotesList"

function App() {
  return (
    <Container className="App">
      <Navbar />
      <NotesList />
    </Container>
  );
}

const Container = styled.div`
    background-color: #2d3748;
    height: 100vh
`;

export default App;

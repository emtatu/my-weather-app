
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./Weather"
import { Container } from 'react-bootstrap';

export default function App() {
  return (
    <div className="App  ">

      <div className="bg_image">
        <Container className="Container"  >
          <Weather />
          <footer>
            <p className=" ">
              This project was coded by <a href="https://www.linkedin.com/in/emiliatatu">Emilia Tatu</a> and is outsounrced.
          </p>

          </footer>
        </Container >


      </div>
    </div >
  );
}



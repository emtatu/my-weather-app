
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Container, Form, FormControl } from 'react-bootstrap';

export default function App() {
  return (
    <div className="App">
      <Container className="Container"  >
        <div className="Weather-app">
          <Form inline className="Form" >
            <div className="row input-container" >
              <div className="col-9"  >
                <FormControl type="text" placeholder="Add your city" className=" mr-sm-2 input-lenght" />
              </div>
              <div className="col-3" >
                <Button type="submit" >Submit</Button>
              </div>
            </div>
          </Form>
          <div className="App-body">
            <div>
              <h3 className="Geo-location">Brussels</h3>
              <div className="day-description">
                <ul>
                  <li> Tuesday 16:30</li>
                  <li> Sunny</li>

                </ul>
              </div>
              <div className="row  mt-3">
                <div className="col-6" >

                  <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny"></img>
                  <div className="degrees-content">
                    <span className="degrees">12</span>
                    <p className="temp-unit">°C | °F</p>
                  </div>



                </div>

                <div className="col-6" >
                  <ul>

                    <li> humidity</li>
                    <li> wind</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div >

      </Container >


    </div >
  );
}



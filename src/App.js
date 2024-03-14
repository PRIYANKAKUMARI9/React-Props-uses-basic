
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Header from './Header';





function App() {
 
  return (
    <div className="App">
      <h1 className='text-danger'>hello</h1>
      <Header email="pk@gmail.come" phone="7258907728" vill="Pandit pur saran"></Header>
      <Container fluid>
        <Container>
          <Row>
            <Col className='col-12 text-center py-4' >
              welcome the world
              <h1>hello world this is class page</h1>
            </Col>
          </Row>
          <Row>
            <Col lg="3" md="6">
            
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
                </div>
                
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;


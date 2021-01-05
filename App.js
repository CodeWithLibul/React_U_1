import './App.css';
import React from 'react';
import {Header} from './component/Header';
import {Home} from './component/Home'
import {Course} from './component/Course'
import {AllCourses} from './component/AllCourses'
import {AddCourses} from './component/Form'
import { Col, Container ,Row} from 'reactstrap';
import { Menu } from './component/Menu';
import {BrowserRouter as Router,Route} from 'react-router-dom'
function App() {
  return (
    <div >
   <Router>
   <Header/>
     <Container>
       <Row>
       <Col md={4}>
         <Menu/>
       </Col>
<Col md={8}> 
<Route path='/' component={Home} exact/>
<Route path='/add-course' component={AddCourses} exact/>
<Route path='/view-course' component={AllCourses} exact/>
</Col>
       </Row>
     </Container>

   </Router>
    </div>
  );
}

export default App;

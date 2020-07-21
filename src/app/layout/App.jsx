import React, { Component, Fragment } from "react";
import CourseDashboard from "../../features/course/CourseDashboard/CourseDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import {Container} from 'semantic-ui-react';
class App extends Component {
  render() {
    return (
      <Fragment>
            <NavBar />
            <Container className="main">


            <CourseDashboard />
            </Container>

             </Fragment>
  
      
        
    
    );
  }
}

export default App;

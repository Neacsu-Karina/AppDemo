import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import SignedOutMenu from "./Menus/SignedOutMenu";
import SignedInMenu from "./Menus/SignedInMenu";

class NavBar extends Component {

  state={
    authenticated: true
  };

  handleSignIn = () => this.setState({authenticated: true});
  handleSignOut = () => {
    this.setState({authenticated: false});
    this.props.history.push('/');
  }
  

  render() {
    const{authenticated}=this.state;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} exact to="/" header>
            <img src="/assets/logo.png" alt="logo" />
            App Name
          </Menu.Item>
          <Menu.Item as={NavLink} to="/courses" name="Courses" />
          <Menu.Item as={NavLink} to="/people" name="People" />
          <Menu.Item>
            <Button
              as={Link}
              to="/createCourse"
              floated="right"
              positive
              inverted
              content="Create Course"
            />
          </Menu.Item>
          {authenticated ? (
          <SignedInMenu signOut={this.handleSignOut}/> 
          ) :(
          <SignedOutMenu signIn={this.handleSignIn}/>
          )}
          
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);

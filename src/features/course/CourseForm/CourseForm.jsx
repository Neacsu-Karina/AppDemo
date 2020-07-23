import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class CourseForm extends Component {
  state = {
    title: "",
    date: "",
    hostedBy: "",
  };

  componentDidMount() {
    if (this.props.selectedCourse !== null) {
      this.setState({
        ...this.props.selectedCourse,
      });
    }
  }

  handleFormSubmit = (crs) => {
    crs.preventDefault();
    if (this.state.id) {
      this.props.updatedCourse(this.state);
    } else {
      this.props.createCourse(this.state);
    }
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { cancelFormOpen } = this.props;
    const { title, date, hostedBy } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.handleFormSubmit} autoComplete="off">
          <Form.Field>
            <label>Course Title</label>
            <input
              name="title"
              onChange={this.handleInputChange}
              value={title}
              placeholder="Course Title"
            />
          </Form.Field>
          <Form.Field>
            <label>Course Date</label>
            <input
              name="date"
              onChange={this.handleInputChange}
              value={date}
              type="date"
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              onChange={this.handleInputChange}
              value={hostedBy}
              placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={cancelFormOpen} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default CourseForm;

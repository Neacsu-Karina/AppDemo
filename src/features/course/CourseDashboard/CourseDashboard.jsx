import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import CourseList from "../CourseList/CourseList";
import CourseForm from "../CourseForm/CourseForm";
import cuid from "cuid";

const coursesFromDashboard = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
      },
    ],
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      },
    ],
  },
];

class CourseDashboard extends Component {
  state = {
    courses: coursesFromDashboard,
    isOpen: false,
  };

  // handleIsOpenToggle = () => {
  //     this.setState(({isOpen}) => ({
  //         isOpen:!isOpen
  //     }))
  // }

  handleCreateFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedCourse: null,
    });
  };

  handleFormCancel = () => {
    this.setState({
      isOpen: false,
    });
  };

  handleCreateCourse = (newCourse) => {
    newCourse.id = cuid();
    newCourse.hostPhotoURL = "/assets/user.png";
    this.setState(({ courses }) => ({
      courses: [...courses, newCourse],
      isOpen: false,
      selectedCourse: null,
    }));
  };

  handleSelectCourse = (crs, course) => {
    console.log(crs);
    console.log(course);
    this.setState({
      selectedCourse: course,
      isOpen: true,
    });
  };

  handleUpdateCourse = (updatedCourse) => {
    this.setState(({ courses }) => ({
      courses: courses.map((course) => {
        if (course.id === updatedCourse.id) {
          return { ...updatedCourse };
        } else {
          return course;
        }
      }),
      isOpen: false,
      selectedCourse: null,
    }));
  };
  render() {
    const { courses, isOpen, selectedCourse } = this.state;
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <CourseList
              courses={courses}
              selectCourse={this.handleSelectCourse}
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <Button
              onClick={this.handleCreateFormOpen}
              positive
              content="Create Course"
            />
            {isOpen && (
              <CourseForm
                key={selectedCourse ? selectedCourse.id : 0}
                updatedCourse={this.handleUpdateCourse}
                selectedCourse={selectedCourse}
                createCourse={this.handleCreateCourse}
                cancelFormOpen={this.handleFormCancel}
              />
            )}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default CourseDashboard;

import React, { Component, Fragment } from 'react'
import CourseListItem from './CourseListItem'

class CourseList extends Component {
    render() {
        const{courses, selectCourse} = this.props;
        return (
            <Fragment>
                {courses.map(course => (
                <CourseListItem key={course.id} course={course} selectCourse={selectCourse}/>
            
                ))}
            </Fragment>
        )
    }
}

export default CourseList;
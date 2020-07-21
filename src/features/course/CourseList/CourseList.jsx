import React, { Component, Fragment } from 'react'
import CourseListItem from './CourseListItem'

class CourseList extends Component {
    render() {
        return (
            <Fragment>
                {this.props.courses.map(course => (
                <CourseListItem key={course.id} course={course}/>
            
                ))}
            </Fragment>
        )
    }
}

export default CourseList;
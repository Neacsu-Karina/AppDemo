import React, { Component } from 'react'
import { Segment, Item, Icon, Button, List } from 'semantic-ui-react';
import CourseList from './CourseList';
import CourseListAtendee from './CourseListAtendee';

class CourseListItem extends Component {
    render() {
      const {course} =this.props;
        return (
                 <Segment.Group>
                    <Segment>
                      <Item.Group>
                        <Item>
                          <Item.Image size="tiny" 
                          circular 
                          src={course.hostPhotoURL} />
                          <Item.Content>
                            <Item.Header as="a">{course.title}</Item.Header>
                            <Item.Description>
                              Hosted by <a>{course.hostedBy}</a>
                            </Item.Description>
                          </Item.Content>
                        </Item>
                      </Item.Group>
                    </Segment>
                    <Segment>
                      <span>
                        <Icon name="clock" />{course.date} |
                        <Icon name="marker" /> {course.venue}
                      </span>
                    </Segment>
                    <Segment secondary>
                      <List horizontal>
                        {course.attendees.map(attendee => (
                          <CourseListAtendee key={attendee.id} attendee={attendee}/>
                        ))}
                        
                      </List>
                    </Segment>
                    <Segment clearing>
                        <span>{course.description}</span>
                      <Button as="a" color="teal" floated="right" content="View" />
                    </Segment>
                  </Segment.Group>
        )
    }
}
export default CourseListItem;
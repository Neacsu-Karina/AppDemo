import React, { Component } from 'react'
import { Segment, Item, Icon, Button, List } from 'semantic-ui-react';
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
                            <Item.Header>{course.title}</Item.Header>
                            <Item.Description>
                              Hosted by {course.hostedBy}
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
                        {course.attendees && course.attendees.map(attendee => (
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
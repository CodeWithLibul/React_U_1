import React from 'react'
import {Card,CardBody,CardTitle,CardSubtitle,CardText,CardFooter,Button,Container} from 'reactstrap'

export const Course =(props)=>{

    

    return(
        <Card>
<CardBody>
    <CardSubtitle className="font-weight-bold">{props.course.title}</CardSubtitle>
    <CardText>{props.course.about}</CardText>
    <Container >
    <Button color="danger" outline>Delete</Button>
        <Button outline color="warning ml-3">Update</Button>
    </Container>
</CardBody>

        </Card>
    )
}
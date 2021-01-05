
import React , {useEffect} from 'react'
import { Container, Form, FormGroup, Input, Label,Button} from 'reactstrap'


export const AddCourses = () =>{

    useEffect(()=>{
        document.title=("Add-Course")
    },[])

    return(

        <React.Fragment>
<h1>Fill the Course</h1>
            <Form>
<FormGroup>

    <Label for='userId'>Course ID</Label>
    <Input 
    type='text' 
    placeholder='Enter here' 
    name='userId'
    id='userId' ></Input>
</FormGroup>
<FormGroup>

<Label for='title'>Course</Label>
    <Input input='text' placeholder='Enter here' name='title' id='title'>Coure</Input>




</FormGroup>

<FormGroup>

<Label for='about'> About</Label>
    <Input input='textarea' 
    placeholder="Enter here" 
    name='about' 
    id='about' 
    style={{height:150}}>Coure</Input>


<Container>

    <Button outline color = "primary">  Add Course</Button>
    <Button outline color = "warning ml-3">  Add Course</Button>
</Container>

</FormGroup>
            </Form>
        </React.Fragment>
    )
}
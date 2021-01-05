import React from 'react';
import Button from 'react-bootstrap/Button'
import { ToastContainer, toast } from 'react-toastify';
import { Card, CardBody } from 'reactstrap';


export const Header =() =>{

    // const HandleToast = () =>{
    //     toast.success("You CLicked !!! ", {position:'top-center'})
    // }

    return (
        <React.Fragment>
<Card className="text-center my-2 bg-warning">
    <CardBody>
    <h1>Hi this is header</h1>
    </CardBody>
</Card>


<React.Fragment>
<ToastContainer/>
{/* <Button variant="outline-success" onClick={HandleToast}>Click here</Button> */}

</React.Fragment>


        </React.Fragment>
    )

}
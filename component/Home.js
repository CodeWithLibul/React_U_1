import React, {useEffect} from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

export const Home =()=>{

    useEffect(()=>{
        document.title=("Home")
    },[])

    return(
        <React.Fragment>

            <Jumbotron>


<h1>Welcome to Your page</h1>

            </Jumbotron>
        </React.Fragment>
    )
}
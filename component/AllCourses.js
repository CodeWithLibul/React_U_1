import React, { useState,useEffect } from 'react'
import {Course} from './Course'
import base_url from '../api/boot-api'
import axios from 'axios'

export const AllCourses =()=>{
    useEffect(()=>{
        document.title=("View-Course")
    },[])

    //function call

    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
//success
console.log(response);
            },
            (error)=>{
                //for error
                console.log(error);
            }
        )
    }

    //calling loading course function
    useEffect(()=>{
        getAllCoursesFromServer()
    })
const [courses,setCourses] = useState([

    {title:'JAVA Course', about:'this is a Java Course'},
    {title:'REACT Course', about:'this is a React Course'}
])


    return(
<div>

    <h1>All Courses</h1>

    {

courses.length>0 && courses.map((item)=>
  
<Course course={item}/>) 

    }

</div>

    )
}
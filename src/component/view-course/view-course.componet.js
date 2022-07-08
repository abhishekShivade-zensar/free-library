import React,{useState,useEffect} from "react";
import { Link,useParams } from "react-router-dom";
import axios from 'axios'

export const CourseView= ()=>{

    const [course,setCourse]=useState({
        title:"",
        slug:"",
        authorId:"",
        category:""
    })

    const {id}= useParams()

    useEffect(() => {
        loadCourses()
    }, [])
    
    const loadCourses = async () => {
        const response = await axios.get(`http://localhost:3003/courses/${id}`)
        setCourse(response.data)
    }

    return (
        <div className="container" >
            <Link className="btn btn-primary" to='/' >Back to Home</Link>
            <h1 className="display-4" >Course Id: {id}</h1>
            <hr/>
            <ul  className="list-group w-50">
                <li className="llist-group-item" >title: {course.title}</li>
                <li className="llist-group-item" >slug: {course.slug}</li>
                <li className="llist-group-item" >authorId: {course.authorId}</li>
                <li className="llist-group-item" >category: {course.category}</li>
            </ul>
        </div>
    )
}
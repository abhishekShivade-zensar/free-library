import React, { useState, useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'

export const CourseView = () => {

    const [course, setCourse] = useState({
        title: "",
        slug: "",
        authorId: "",
        category: ""
    })

    const { id } = useParams()

    useEffect(() => {
        loadCourses()
    }, [])

    const loadCourses = async () => {
        const response = await axios.get(`http://localhost:3003/courses/${id}`)
        setCourse(response.data)
    }

    return (
        <Fragment>
        <div className="heading"></div>
            <div className="view-page-container ms-5 " >
                <h1 className="display-4" >Course Id: {id}</h1>
                <hr />
                <ul className="list-group w-50">
                    <li className="llist-group-item" >Title: {course.title}</li>
                    <li className="llist-group-item" >Slug: {course.slug}</li>
                    <li className="llist-group-item" >AuthorId: {course.authorId}</li>
                    <li className="llist-group-item" >Category: {course.category}</li>
                </ul>
            </div>
        </Fragment>
    )
}
import React, { useState, useEffect, Fragment } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export const EditCourse = () => {
    let History = useNavigate()
    const { id } = useParams()

    const [course, setCourse] = useState({
        title: "",
        slug: "",
        authorId: "",
        category: ""
    })

    const { title, slug, authorId, category } = course

    const onInputChange = e => {
        setCourse({ ...course, [e.target.title]: e.target.value })
    }

    useEffect(() => {
        loadCourse()
    }, [])

    const onSubmit = async e => {
        e.preventDefault()
        await axios.put("http://localhost:3003/courses", course)
        History.push("/")
    }

    const loadCourse = async () => {
        const result = await axios.get(`http://localhost:3003/courses/${id}`)
        setCourse(result.data)
    }

    return (
        <Fragment>
            <div className="heading"></div>
            <div className="container" >
                <div className="w-75 mx-auto shadow p-5" >
                    <h2 className="text-centre mb-4" >Edit Course</h2>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group" >
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Entre Title"
                                name="title"
                                value={title}
                                onChange={e => onInputChange(e)} />
                        </div>
                        <div className="form-group" >
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Entre Slug"
                                name="slug"
                                value={slug}
                                onChange={e => onInputChange(e)} />
                        </div>
                        <div className="form-group" >
                            <input
                                type="number"
                                className="form-control form-control-lg"
                                placeholder="Entre AuthorId"
                                name="authorId"
                                value={authorId}
                                onChange={e => onInputChange(e)} />
                        </div>
                        <div className="form-group" >
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Entre Category"
                                name="category"
                                value={category}
                                onChange={e => onInputChange(e)} />
                        </div>
                        <button className="btn btn-warning btn-block " >Update Course</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}
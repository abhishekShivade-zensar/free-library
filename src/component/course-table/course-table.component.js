import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from "react-router-dom";
import './course-table.styles.css'

export const CourseTable = () => {

  const [courses, setCourses] = useState([])

  useEffect(() => {
    loadCourses()
  }, [])

  const loadCourses = async () => {
    const response = await axios.get('http://localhost:3003/courses')
    setCourses(response.data)
  }

  const deleteCourse = async id => {
    await axios.delete(`http://localhost:3003/courses${id}`)
    loadCourses()
  }

  return (
    <table className='course-table table table-striped table-bordered table-hover table-responsive'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Slug</th>
          <th>Author Id</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course, index) => (
          <tr key={course.id}>
            <th scope="row">{index + 1}</th>
            <td>{course.title}</td>
            <td>{course.slug}</td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>
              <Link className='btn btn-primary' to={`/courses/${course.id}`} >View</Link>
              <Link className='btn btn-warning' to={`/courses/edit/${course.id}`} >Edit</Link>
              <Link className='btn btn-danger' to={`/courses/delete`} onClick={() => deleteCourse(course.id)} >Delete</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

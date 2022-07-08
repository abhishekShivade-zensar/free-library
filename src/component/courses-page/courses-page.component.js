import React from 'react'
import { CourseForm } from '../course-form/course-form.component'
import { CourseTable } from '../course-table/course-table.component'
import './courses.styles.css'
import { Route, Routes } from 'react-router-dom'

export const CoursesPage = () => {

  return (
    <div>
      <h1 className='mx-auto heading'>Read Learn Develop</h1>
      <div className='course-page-container'>
        <Routes>
          <Route index element={<CourseTable />} ></Route>
          <Route path=':id' element={<CourseTable />} ></Route>
        </Routes>
        <CourseForm />
      </div>
    </div>
  )
}

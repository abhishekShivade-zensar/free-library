import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Fragment } from 'react';
import { HomePage } from './component/home/home-page.component';
import { CoursesPage } from './component/courses-page/courses-page.component';
import { AboutPage } from './component/about/about-page.component';
import Header from './component/header/header.component';
import { PageNotFound } from './component/page-not-found/page-not-found.component'
import { EditCourse } from './component/edit-course/edit-course.component'
import { CourseView } from './component/view-course/view-course.componet'

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        {/* <Route exact='true' path="/" element={<Home />} />
        <Route exact='true' path="/about" element={<About />} />
        <Route exact='true' path="/contact" element={<Contact />} />
        <Route exact='true' path="/courses/add" element={<AddCourse />} />
        <Route exact='true' path="/courses/edit/:id" element={<EditCourse />} />
        <Route exact='true' path="/courses/:id" element={<Course />} />
        <Route path='/*' element={<NotFound/>} /> */}

        <Route exact='true' path='/' element={<Header />} />
        <Route exact='true' index element={<HomePage />} />
        <Route exact='true' path='/courses/*' element={<CoursesPage />} />
        <Route exact='true' path="/courses/edit/:id" element={<EditCourse />} />
        <Route exact='true' path="/courses/:id" element={<CourseView />} />
        <Route exact='true' path='/about' element={<AboutPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;

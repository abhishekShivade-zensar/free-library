import axios from 'axios'
import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import './course-form.styles.css'
import { useNavigate } from 'react-router-dom'

const defaultFormFeilds = {
    title: '',
    slug: '',
    authorId: '',
    category: ''
}

export const CourseForm = () => {
    // const [formFeilds, setFormFeilds] = useState(defaultFormFeilds)

    let History=useNavigate()
    const [course,setCourse]=useState(defaultFormFeilds
        // {
    //     title:"",
    //     slug:"",
    //     authorId:"",
    //     category:""
    // }
    )

    const { title, slug, authorId, category } = course

    // const {title,slug,authorId,category}=course

    const resetFormFeilds = () => {
        setCourse(defaultFormFeilds)
    }
    
    // const handleChange = (event) => {
    //     const { name, value } = event.target
    //     setFormFeilds({ ...formFeilds, [name]: value })
    // }

    // const handleSubmit = async (event) => {
    //     event.preventDefault()
    //     if (title.length < 3 || slug.length < 3 || category.length < 3) {
    //         alert('Please fill data correctly')
    //     }
    //     try {
    //         const { courses } = await axios.post('/add-courses',event.target)
    //         // createNewCourse(title, slug, authorId, category)
    //         resetFormFeilds()
    //     } catch (error) {
    //         /* write code for course already exists
    //         if(error.code===){
    //             alert('Course already exists')
    //         } else {
    //             console.log(`error occured while creating new course ${error}`)
    //         }
    //          */
    //         console.log(`error occured while creating new course ${error}`)
    //     }

    //     // courses = 
    // }

    const onInputChange=e=>{
        setCourse({...course,[e.target.title]:e.target.value})
    }

    const onSubmit= async e=>{
        e.preventDefault()
        await axios.post("http://localhost:3003/courses",course)
        History.push("/")
        resetFormFeilds()
    }

    return (
        <div className='form-container'>
            <h2>Add New Course</h2>
            <form onSubmit={e=>onSubmit(e)} className='form' >
                <FormInput
                    type='text'
                    required
                    onChange={e=> onInputChange(e)}
                    name='title'
                    value={title}
                    placeholder='title' />

                <FormInput
                    type='text'
                    required
                    onChange={e=> onInputChange(e)}
                    name='slug'
                    value={slug}
                    placeholder='slug' />

                <FormInput
                    type='number'
                    required
                    onChange={e=> onInputChange(e)}
                    name='authorId'
                    value={authorId}
                    placeholder='Author Id' />

                <FormInput
                    type='text'
                    required
                    onChange={e=> onInputChange(e)}
                    name='category'
                    value={category}
                    placeholder='category' />

                <button type='submit' className='mb-2 button btn-seconday'>Add Course</button>
            </form>
        </div>
    )
}

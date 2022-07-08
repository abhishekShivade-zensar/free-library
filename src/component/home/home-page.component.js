import React, { Fragment } from 'react'
import './home-page.styles.css'

export const HomePage = () => {
  const HelloCoder = '<> HelloCoder </>'
  return (
    <Fragment>
      <div className='home-page-container' >
        
        <h1 className='greet' >{HelloCoder}</h1>
      </div>
    </Fragment>
  )
}

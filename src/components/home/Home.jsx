import React from 'react'
import { Breadcrumb, OverallHistory } from './sub-component'

const Home = () => {
  return (
    <>
    <div className='main-wrapper'>
    <Breadcrumb />
        <OverallHistory />
    </div>
    </>
  )
}

export default Home
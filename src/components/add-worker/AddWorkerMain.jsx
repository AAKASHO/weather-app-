import React from 'react'
import { AddWorkerForm, Breadcrumb } from './sub-component'

const AddWorkerMain = () => {
  return (
    <>
    <div className='main-wrapper'>
        <Breadcrumb />
        <AddWorkerForm />
    </div>
    </>
  )
}

export default AddWorkerMain
import React from 'react'
import { Breadcrumb, WorkOrderForm } from './sub-component'

const WorkOrderMain = () => {
  return (
    <>
    <div className='main-wrapper'>
        <Breadcrumb />
        <WorkOrderForm />
    </div>
    </>
  )
}

export default WorkOrderMain
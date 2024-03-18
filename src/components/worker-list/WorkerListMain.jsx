import React from 'react'
import { WorkersTable, Breadcrumb } from './sub-component'

const WorkerListMain = () => {
  return (
    <>
    <div className='main-wrapper'>
        <Breadcrumb />
        <WorkersTable />
    </div>
    </>
  )
}

export default WorkerListMain
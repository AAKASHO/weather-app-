import React from 'react'
import { Breadcrumb, EquipmentTable } from './sub-component'

const EquipmentListMain = () => {
  return (
    <>
    <div className='main-wrapper'>
        <Breadcrumb />
        <EquipmentTable />
    </div>
    </>
  )
}

export default EquipmentListMain
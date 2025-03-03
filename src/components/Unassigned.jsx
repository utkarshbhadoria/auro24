import React from 'react'
import Sidebar from './Sidebar';

function Unassigned() {
  return (
    <div className='flex flex-row'>
        <Sidebar/>
        <div>Unassigned</div>

    </div>
  )
}

export default Unassigned
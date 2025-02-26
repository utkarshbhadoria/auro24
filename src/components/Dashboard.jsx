import React from 'react'
import Sidebar from './Sidebar';

function Dashboard() {
  return (
    <div className='flex flex-row'>
        <Sidebar/>
        <div>Dashboard</div>

    </div>
  )
}

export default Dashboard;
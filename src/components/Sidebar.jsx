import React, {useState } from 'react'
import {ChevronLast, ChevronFirst} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom";

function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);

  return (
    <div className='h-screen h-full flex flex-col border shadow-sm justify-between rounded-md m-2 bg-gray-800'>
        {/* Branding */}
        <div className="p-4 pb-2 flex justify-between items-center">
            <img src="src\assets\brand.png" className={`overflow-hidden transition-all ${expanded? 'w-32' :'w-0' }`} alt=""/>
            <button className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100' onClick={() => setExpanded((curr) => !curr)}>{expanded? <ChevronFirst/> :<ChevronLast/>}</button>
        </div>

       
        {/* list */}
        <ul className='text-white space-y-2'>
          <li>
            <div className={`flex pl-4 pt-2 pb-2 ${pathname.includes("/dashboard") ? 'bg-blue-500 rounded-md' : ''}`}>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
               <NavLink to="/dashboard" className={`overflow-hidden ${expanded? 'w-full pl-2' :'w-0'}`}>Dashboard</NavLink>
            </div>
          </li>

          <li>
            <div className={`flex pl-4 pt-2 pb-2 ${pathname.includes("/userManagement") ? 'bg-blue-500 rounded-md' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-round-cog"><path d="M2 21a8 8 0 0 1 10.434-7.62"/><circle cx="10" cy="8" r="5"/><circle cx="18" cy="18" r="3"/><path d="m19.5 14.3-.4.9"/><path d="m16.9 20.8-.4.9"/><path d="m21.7 19.5-.9-.4"/><path d="m15.2 16.9-.9-.4"/><path d="m21.7 16.5-.9.4"/><path d="m15.2 19.1-.9.4"/><path d="m19.5 21.7-.4-.9"/><path d="m16.9 15.2-.4-.9"/></svg>
              <NavLink to="/userManagement" className={`overflow-hidden ${expanded? 'w-full pl-2' :'w-0'}`}>User Management</NavLink>
            </div>
          </li>

          <li>
            <div className={`flex pl-4 pt-2 pb-2 ${pathname.includes("/appManagement") ? 'bg-blue-500 rounded-md' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tablet-smartphone"><rect width="10" height="14" x="3" y="8" rx="2"/><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"/><path d="M8 18h.01"/></svg>
              <NavLink to="/appManagement" className={`overflow-hidden ${expanded? 'w-full pl-2' :'w-0'}`}>App Management</NavLink>
            </div>
          </li>

          <li>
            <div className={`flex pl-4 pt-2 pb-2 ${pathname.includes("/geofence") ? 'bg-blue-500 rounded-md' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-earth"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"/><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/><circle cx="12" cy="12" r="10"/></svg>
              <NavLink to="/geofence" className={`overflow-hidden ${expanded? 'w-full pl-2' :'w-0'}`}>Geofence</NavLink>
            </div>             
          </li>

          <li>  
           <div className={`flex pl-4 pt-2 pb-2 ${pathname.includes("/wifiNetwork") ? 'bg-blue-500 rounded-md' : ''}`}>
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wifi"><path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/></svg>
              <NavLink to="/wifiNetwork" className={`overflow-hidden ${expanded? 'w-full pl-2' :'w-0'}`}>Wi-Fi Network</NavLink>
            </div>             
          </li>

          <li>  
            <div className={`flex pl-4 pt-2 pb-2 ${pathname.includes("/compilance") ? 'bg-blue-500 rounded-md' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-text"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M8 11h8"/><path d="M8 7h6"/></svg>
              <NavLink to="/compilance" className={`overflow-hidden ${expanded? 'w-full pl-2' :'w-0'}`}>Compilance</NavLink>
            </div>             
          </li>

          <li>  
            <div className={`flex pl-4 pt-2 pb-2 ${pathname.includes("/reports") ? 'bg-blue-500 rounded-md' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-pie"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"/><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/></svg>
              <NavLink to="/reports" className={`overflow-hidden ${expanded? 'w-full pl-2' :'w-0'}`}>Reports</NavLink>
            </div>             
          </li>

          <li>   
            <div className={`flex pl-4 pt-2 pb-2 ${pathname.includes("/logs") ? 'bg-blue-500 rounded-md' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
              <NavLink to="/logs" className={`overflow-hidden ${expanded? 'w-full pl-2' :'w-0'}`}>Logs</NavLink>
            </div>            
          </li>
        </ul>

        {/* Footer */}
        <div className='border-t flex p-3 text-white'> 
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 rounded-md" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        <div className={`flex justify-between items-center overflow-hidden ${expanded? 'w-52 ml-3': 'w-0'}`}> 
          <span className='overflow-hidden font-semibold'>Account</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-last"><path d="m7 18 6-6-6-6"/><path d="M17 6v12"/></svg>       
       </div>
        </div>

    </div>
  )
}

export default Sidebar
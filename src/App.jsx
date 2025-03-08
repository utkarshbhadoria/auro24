import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Usermanagement from './components/Usermanagement';
import AppManagement from './components/AppManagement';
import Geofence from './components/Geofence';
import WifiNetwork from './components/WifiNetwork';
import Compilance from './components/Compilance';
import Reports from './components/Reports';
import Logs from './components/Logs';
import DeviceProfiles from './components/Devices/DeviceProfiles'
import DeviceGroups from './components/Devices/DeviceGroups'
import Assigned from './components/Assigned'
import Unassigned from './components/Unassigned'


function App() {
  //comment
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/userManagement' element={<Usermanagement/>}/>
        <Route path='/appManagement' element={<AppManagement/>}/>
        <Route path='/geofence' element={<Geofence/>}/>
        <Route path='/wifiNetwork' element={<WifiNetwork/>}/>
        <Route path='/compilance' element={<Compilance/>}/>
        <Route path='/reports' element={<Reports/>}/>
        <Route path='/logs' element={<Logs/>}/>

        <Route path="/deviceProfiles" element={<DeviceProfiles />} />
        <Route path='/deviceGroups' element={<DeviceGroups/>}/>
        <Route path='/deviceAssigned' element={<Assigned/>}/>
        <Route path='/deviceUnassigned' element={<Unassigned/>}/>
        
      </Routes>
    </>
  )
}

export default App

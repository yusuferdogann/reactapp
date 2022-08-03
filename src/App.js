import React,{useState} from 'react'
// import './App.css';
// import Cards from './components/Cards'
// import Sidebar from './components/Sidebar'
// import SidebarUserDetail from './components/SidebarUserDetail'
// import Search from './components/Search'
import LatestActivityCardItem from './components/LatestActivityCardItem'
import TimeSheet from './components/TimeSheet'
import TimeSheetCardItem from './components/TimeSheetCardItem';
import TimeSheetCards from './components/TimeSheetCards';
import {Button} from './components/Button'
import Navbar from './components/Navbar'
import Calendar from './components/Calendar'
import CalendarExample from './components/CalendarExample'
import Dashboard from './components/Dashboard'
import Flickity from './components/Flickity';
import TimeLine from './components/TimeLine';

function App() {

  
  return (
    <div>
     
      {/* <Sidebar/> */}
      {/* <SidebarUserDetail/> */}
      {/* <Cards/> */}
     {/* <Search/> */}
     {/* <LatestActivityCardItem/> */}
     {/* <TimeSheet/> */}
     {/* <TimeSheetCardItem/> */}
     {/* <TimeSheetCards/> */}
    {/* <Button
    text='selam'
    className = 'btn btn-primary'
    />
    <Button
    text='selam1'
    className = 'btn btn-danger'
    /> */}
    {/* <Navbar/> */}
    {/* <CalendarExample/> */}
    {/* <div className='calendar-rectangle'>
    <div id="calendar-content" className='calendar-content'>
    <Calendar/>
    </div>
    </div> */}
  <Dashboard/>
{/* <Flickity/> */}
  {/* <TimeSheet/> */}
  {/* <TimeLine/> */}
    </div>
  );
}

export default App;

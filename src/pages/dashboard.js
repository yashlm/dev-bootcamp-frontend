import React from 'react';
import NavBar from '../components/Navbar.js';
import '../css/dashboard.css';
// import Sidebar from './Sidebar';
import ChartComponent1 from '../components/barchart.js';
import LineChart1 from '../components/linechart1.js';
import LineChart2 from '../components/linechart2.js';
import LineChart3 from '../components/linechart3.js';
import { Box } from '@mui/system';
import dash from '../assests/images/dash.svg';

const Dashboard = () => {
  return (
    <div>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="container">
        {/* <Sidebar /> */}
        <div className="first">
          <div className='intro'>
            <Box>
              <h3>Welcome to your dashboard!</h3>
              <p>Try our new Admin Dashboard Template, build with live Ant-Design components. Customize it to your needs and release to production!</p>
            </Box>
            <img src={dash} alt='icon'></img>
          </div>
          <div className="chart">
            <ChartComponent1 />
          </div>
        </div>
        <div className="second">
          <div className='linechart1'><LineChart1 style={{ width: '60px' }} /></div>
          <div className='linechart2'><LineChart2 style={{ width: '60px' }} /></div>
          <div className='linechart3'><LineChart3 style={{ width: '60px' }} /></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

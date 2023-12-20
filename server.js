import http from 'http';
import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';
import IndianEmployer from './/models/user.js'
import mongoose from 'mongoose';
import userData from "./userData.js"; // Replace with the correct path to your userData file
import JobsModel from './models/jobs.js'
import SeekerModel from "./models/seeker.js";
import userRoutes from './router/user.js'
import loginRoutes from './router/login.js'
import dashboardRoutes from './router/dashboard.js'
import { saveIndianEmployerData } from './contontrollers/dailyupdate.js';
import { createRandom } from './functions.js';
import { getUsersByAgeCount, getUsersByCityWithTehsilCount, getUsersByCourseCount, getUsersByEducationCount, getUsersBySexCount } from './contontrollers/dashboard.js';
const app = express();
const server = http.createServer(app);
mongoose.connect("mongodb+srv://sih202227:sih202227@cluster0.bjhqbah.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true})


mongoose.connection.on('error',err=>{
  console.log('connection failed');
});

mongoose.connection.on('connected',()=>{
  console.log('connected successfully with database');
})
const DeviceCounts = {
  iOS: [],
  
  WebOS: [],
  
  Android: [],
  
  Chrome: [],
  
  Firefox: [],
  
  Safari: [],
  
  Other: [],
  
  Linux: [],}
const pageCounts = {
  skilltraining: [],
  
  jobsforwomangovt: [],
  
  jobsforwomanpvt: [],
  
  notifications: [],
  
  disability: [],
  
  armedforcesgirl: [],
  
  armedforcesboy: [],
  
  localservices: [],
  
  counselling: [],
  
  pvtjobs: [],
  
  footer: [],
  
  downloads: [],
  govtjobs:[],
  home:[]
};

const nonloginuser = {
  skilltraining: [],
  
  jobsforwomangovt: [],
  
  jobsforwomanpvt: [],
  
  notifications: [],
  
  disability: [],
  
  armedforcesgirl: [],
  
  armedforcesboy: [],
  
  localservices: [],
  
  counselling: [],
  
  pvtjobs: [],
  
  footer: [],
  
  downloads: [],
  govtjobs:[],
  home:[]
};
const componentStats = {
  
  
    skilltraining: 0,
    
    jobsforwomangovt: 0,
    
    jobsforwomanpvt: 0,
    
    notifications: 0,
    
    disability: 0,
    
    armedforcesgirl: 0,
    
    armedforcesboy: 0,
    
    localservices: 0,
    
    counselling: 0,
    
    pvtjobs: 0,
    
    footer: 0,
    
    downloads: 0,
    govtjobs:0,
    home:0
  
};

const userActivity = {}; // Map to track which user is on which component

app.use(express.json());
app.use(cors());

app.use('/seeker',userRoutes)

app.use('/user',loginRoutes)

app.use('/dashboard',dashboardRoutes)



// Create a Socket.IO server attached to the HTTP server
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // Update with your React app's URL
    methods: ['GET', 'POST'],
  },
});

// Function to update the dashboard with user activity
const updateDashboard = () => {


  const nonloginuserLengths = Object.fromEntries(
    Object.entries(nonloginuser).map(([key, value]) => [key, value.length])
  );
  const pageCountsLengths = Object.fromEntries(
    Object.entries(pageCounts).map(([key, value]) => [key, value.length])
  );

  const deviceCountsLengths = Object.fromEntries(
    Object.entries(DeviceCounts).map(([key, value]) => [key, value.length])
  );

  const dataToSend = {
    nonloginuser: nonloginuserLengths,
    loginuser:pageCountsLengths,
    deviceCounts: deviceCountsLengths,
    // Add other array lengths as needed
  };
console.log(dataToSend)
  io.emit('dashboard-update', dataToSend);
};
io.on('connection', (socket) => {

  socket.on('track-device', (data) => {
    
    const { userId, device } = data;
    if (!DeviceCounts[device].includes(userId)) {
      // Push userId to the array
      DeviceCounts[device].push(userId);
    }
  })



  // Handle user behavior events
  socket.on('user-behavior', (data) => {
  
    const { userId, currentPage, newPage } = data;
if(data.login){
    
  
    
    if (currentPage !== newPage) {
      // If the current page and new page are different, update counts accordingly
      if (pageCounts[currentPage]) {
        pageCounts[currentPage] = pageCounts[currentPage]?.filter(id => id !== userId);
      }
      if (!pageCounts[newPage]) {
        pageCounts[newPage] = [];
      }
      pageCounts[newPage].push(userId);
    }
    else{
      
      pageCounts[currentPage] = pageCounts[currentPage]?.filter(id => id !== userId);
      pageCounts[newPage].push(userId);
    }

componentStats[newPage]=+1;
    // componentStats[newPage] = Math.max(componentStats[newPage], pageCounts[newPage].length);
    // Broadcast the updated page counts to all connected clients
    io.emit('user-behavior', { currentPage: newPage, counts: pageCounts });

    // Update user activity
    userActivity[userId] = newPage;

   
  }else{
    if (currentPage !== newPage) {
      // If the current page and new page are different, update counts accordingly
      if (nonloginuser[currentPage]) {
        nonloginuser[currentPage] = nonloginuser[currentPage]?.filter(id => id !== userId);
      }
      if (!nonloginuser[newPage]) {
        nonloginuser[newPage] = [];
      }
      nonloginuser[newPage].push(userId);
    }
    else{
      
      nonloginuser[currentPage] = nonloginuser[currentPage]?.filter(id => id !== userId);
      nonloginuser[newPage].push(userId);
    }

componentStats[newPage]=+1;
    // componentStats[newPage] = Math.max(componentStats[newPage], pageCounts[newPage].length);
    // Broadcast the updated page counts to all connected clients
    io.emit('user-behavior', { currentPage: newPage, counts: pageCounts });

    // Update user activity
    userActivity[userId] = newPage;
  }
  console.log("componentstts",componentStats)
  updateDashboard();
}
  
  );
console.log(DeviceCounts)
  // Handle client disconnect
  socket.on('disconnect', () => {
    const userId = socket.id; 
    const previousComponent = userActivity[userId];
    if (previousComponent) {
      delete userActivity[userId];

      Object.keys(pageCounts).forEach(page => {
        pageCounts[page] = pageCounts[page]?.filter(id => id !== userId);
        
        nonloginuser[page] = nonloginuser[page]?.filter(id => id !== userId);
      });
      Object.keys(DeviceCounts).forEach(page => {
        DeviceCounts[page] = DeviceCounts[page]?.filter(id => id !== userId);
        
   });

      updateDashboard();
    }

    console.log('Client disconnected');
  });
});








setTimeout(() => {
}, 5000);


// createRandom()


const twentyFourHoursInMilliseconds = 24*60*60*1000; 
setInterval(() => {
  saveIndianEmployerData(componentStats)
}, twentyFourHoursInMilliseconds);
server.listen(5000, () => {
  console.log('Server is running on port 5000');
});

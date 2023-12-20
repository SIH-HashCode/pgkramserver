// async function insertData() {
//     try {
   
//       // Insert each user data into MongoDB
//       for (const user of userData) {
//         await IndianEmployer.create(user);
//         console.log(`User "${user.companyname}" inserted into MongoDB.`);
//       }
  
//       console.log("Data insertion completed.");
//     } catch (error) {
//       console.error("Error inserting data:", error);
//     } finally {
//       // Disconnect from MongoDB
    
//     }
//   }
  
//   // Run the function to insert data
//   insertData();

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
import { saveIndianEmployerData } from './contontrollers/dailyupdate.js';
























  




  
// // mongoose.connect("mongodb+srv://sih202227:sih202227@cluster0.bjhqbah.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true})


// // import SeekerModel from "./models/seeker.js"; 

// // // // Function to generate a random number between min and max (inclusive)
// // const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// // mongoose.connection.on('error',err=>{
// //   console.log('connection failed');
// // });

// // mongoose.connection.on('connected',()=>{
// //   console.log('connected successfully with database');
// // })
// // // Function to generate random Seeker data
// // const generateRandomSeeker = (i) => {
 
    
// //   return {
// //     name: `User${i + 1}`,
// //     age: getRandomNumber(20, 35).toString(),
// //     email: `user${i + 1}@example.com`,
// //     state: "Punjab",
// //     location: cities[getRandomNumber(0, cities.length - 1)],
// //    sex: i % 2 === 0 ? "Male" : "Female",
// //     education: educationLevels[getRandomNumber(0, educationLevels.length - 1)].value,
// //     course: coursesArray[getRandomNumber(0, coursesArray.length - 1)],
    
// //     maritialstatus: i % 2 === 0 ? "Single" : "Married",
// //     skills: [
// //       skillsArray[getRandomNumber(0, skillsArray.length - 1)],
// //       skillsArray[getRandomNumber(0, skillsArray.length - 1)],
// //       skillsArray[getRandomNumber(0, skillsArray.length - 1)],
// //     ],
// //     intrest: [
// //       interestsArray[getRandomNumber(0, interestsArray.length - 1)],
// //       interestsArray[getRandomNumber(0, interestsArray.length - 1)],
// //       interestsArray[getRandomNumber(0, interestsArray.length - 1)],
// //     ],
// //     componenttime: [],
// //     phoneno: "1234567890",
// //     password: "password123",
// //   };
// // };

// // // Create 300 users
// // (async () => {
// //   for (let i = 0; i < 300; i++) {
// //     const seekerData = generateRandomSeeker(i);
// //     try {
// //       const user = await SeekerModel.create(seekerData);
// //       console.log(`User "${user.name}" created successfully.`);
// //     } catch (err) {
// //       console.error(`Error creating user: ${err}`);
// //     }
// //   }
// // })();








































































// const educationLevels = [
//   { value: '10', label: 'No Schooling' },
//   { value: '1', label: '5th' },
//   { value: '2', label: '8th' },
//   { value: '3', label: '10th' },
//   { value: '4', label: '12th' },
//   { value: '5', label: 'Diploma After 10th' },
//   { value: '6', label: 'Diploma After 12th' },
//   { value: '11', label: 'ITI' },
//   { value: '7', label: 'Graduate' },
//   { value: '12', label: 'PG Diploma' },
//   { value: '8', label: 'Post Graduate' },
//   { value: '13', label: 'M Phill' },
//   { value: '9', label: 'Phd' },
// ];


// const skillsArray = [
//   "JavaScript",
//   "React",
//   "Node.js",
//   "Python",
//   "Java",
//   "C++",
//   "HTML",
//   "CSS",
//   "SQL",
//   "Angular",
//   "Vue.js",
//   "Express",
//   "MongoDB",
// ];

// const interestsArray = [
//   "Coding",
//   "Reading",
//   "Traveling",
//   "Gaming",
//   "Music",
//   "Cooking",
//   "Fitness",
//   "Photography",
//   "Art",
// ];
// const coursesArray = [
//   "Computer Science",
//   "Electrical Engineering",
//   "Mechanical Engineering",
//   "Physics",
//   "Mathematics",
//   "Biology",
//   "Chemistry",
//   "Psychology",
//   "Business Administration",
//   "Economics",
//   // Add more courses as needed
// ];
// const cities = [
//   "Amritsar",
//   "Ludhiana",
//   "Jalandhar",
//   "Patiala",
//   "Bathinda",
//   "Hoshiarpur",
//   "Pathankot",
//   "Mohali",
//   "Batala",
//   "Moga",
//   "Sangrur",
//   "Firozpur",
//   "Kapurthala",
//   "Fazilka",
//   "Mansa",
//   "Gurdaspur",
//   "Rupnagar",
//   "Faridkot",
//   "Fatehgarh Sahib",
//   "Tarn Taran",
// ];
// function getRandomIndianState() {
//   const indianStatesArray = [
//       "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
//       "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
//       "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
//       "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
//       "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
//       "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh",
//       "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Delhi", "Puducherry"
//   ];

//   // Generate a random index
//   const randomIndex = Math.floor(Math.random() * indianStatesArray.length);

//   // Return the random state
//   return indianStatesArray[randomIndex];
// }

// const jobTitles = [
// "Software Engineer",
// "Data Analyst",
// "Marketing Specialist",
// "Graphic Designer",
// "Financial Analyst",
// "Human Resources Manager",
// "Customer Service Representative",
// "Sales Executive",
// "Web Developer",
// "Project Manager",
// "UX/UI Designer",
// "Quality Assurance Engineer",
// "Content Writer",
// "Business Development Manager",
// "IT Support Specialist",
// "Digital Marketing Manager",
// "Network Administrator",
// "Mobile App Developer",
// "Product Manager",
// "Data Scientist",
// "Front-end Developer",
// "Back-end Developer",
// "DevOps Engineer",
// "Technical Support Specialist",
// "Social Media Manager",
// "E-commerce Specialist",
// "Cybersecurity Analyst",
// "UI/UX Developer",
// "Cloud Solutions Architect",
// ];
// const citiesByState = {
// "Andhra Pradesh": ["Vijayawada", "Visakhapatnam", "Tirupati", "Guntur", "Nellore"],
// "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat", "Namsai", "Roing"],
// "Assam": ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Tezpur"],
// "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga"],
// "Chhattisgarh": ["Raipur", "Bilaspur", "Bhilai", "Korba", "Durg"],
// "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda"],
// "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"],
// "Haryana": ["Chandigarh", "Faridabad", "Gurgaon", "Hisar", "Panipat"],
// "Himachal Pradesh": ["Shimla", "Mandi", "Dharamshala", "Solan", "Kullu"],
// "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh"],
// "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
// "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam"],
// "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain"],
// "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik"],
// "Manipur": ["Imphal", "Thoubal", "Churachandpur", "Bishnupur", "Kakching"],
// "Meghalaya": ["Shillong", "Tura", "Jowai", "Nongpoh", "Baghmara"],
// "Mizoram": ["Aizawl", "Lunglei", "Saiha", "Champhai", "Kolasib"],
// "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha"],
// "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur"],
// "Punjab": ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
// "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur", "Ajmer", "Kota"],
// "Sikkim": ["Gangtok", "Namchi", "Mangan", "Rangpo", "Singtam"],
// "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
// "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
// "Tripura": ["Agartala", "Udaipur", "Dharmanagar", "Kailasahar", "Belonia"],
// "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Meerut"],
// "Uttarakhand": ["Dehradun", "Haridwar", "Rishikesh", "Nainital", "Almora"],
// "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"],
// "Andaman and Nicobar Islands": ["Port Blair", "Diglipur", "Mayabunder", "Rangat", "Little Andaman"],
// "Chandigarh": ["Chandigarh"],
// "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Diu", "Dadra", "Nagar Haveli"],
// "Lakshadweep": ["Kavaratti", "Agatti", "Amini", "Andrott", "Minicoy"],
// "Delhi": ["New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi"],
// "Puducherry": ["Puducherry", "Karaikal", "Mahe", "Yanam"],
// };
// function getRandomType() {
// const types = ["govt", "pvt"];
// const randomIndex = Math.floor(Math.random() * types.length);
// return types[randomIndex];
// }
// function getRandomCitiesForState(state, minCities = 1, maxCities = 1) {


// const cities = citiesByState[state] || [];
// const numberOfCities = getRandomNumber(minCities, Math.min(maxCities, cities.length));

// // Shuffle the array to get random cities
// const shuffledCities = cities.sort(() => Math.random() - 0.5);

// return shuffledCities[0];
// }
// const jobDescriptions = [
// "We are seeking a talented Software Engineer to join our dynamic team. Contribute to the development of cutting-edge software solutions.",
// "Join our team as a Data Analyst and contribute to data-driven decision-making. Analyze and interpret complex data sets.",
// "Exciting opportunity for a Marketing Specialist to drive brand awareness. Develop and implement effective marketing strategies.",
// "Creative Graphic Designer needed to produce stunning visual content. Bring artistic and innovative ideas to the table.",
// "Financial Analyst position available for a detail-oriented professional. Analyze financial data and provide valuable insights.",
// "Manage human resources functions as a Human Resources Manager. Ensure a positive and productive workplace environment.",
// "Customer Service Representative wanted to provide exceptional support. Assist customers with inquiries and problem resolution.",
// "Sales Executive role available for a motivated and results-driven individual. Identify and pursue new business opportunities.",
// "Web Developer position for someone passionate about web technologies. Design and implement web applications with the latest tools.",
// "Project Manager needed to lead and execute key projects. Ensure successful project delivery on time and within budget.",
// "UX/UI Designer role for creating intuitive and visually appealing user experiences. Work on enhancing user interface designs.",
// "Quality Assurance Engineer responsible for ensuring software quality through testing and debugging.",
// "Content Writer position available to create engaging and informative content across various platforms.",
// "Business Development Manager to identify new business opportunities and build strategic partnerships.",
// "IT Support Specialist to provide technical support and troubleshooting for IT-related issues.",
// "Digital Marketing Manager to lead digital marketing campaigns and optimize online presence.",
// "Network Administrator responsible for managing and maintaining computer networks.",
// "Mobile App Developer to design and develop mobile applications for iOS and Android platforms.",
// "Product Manager to oversee the entire product development lifecycle and drive product strategy.",
// "Data Scientist to analyze and interpret complex data sets to inform business decisions.",
// "Front-end Developer to create visually appealing and responsive user interfaces.",
// "Back-end Developer to develop server-side logic and integrate user-facing elements.",
// "DevOps Engineer to improve and streamline the development and deployment processes.",
// "Technical Support Specialist to provide technical assistance and support to end-users.",
// "Social Media Manager to develop and implement social media strategies to increase brand awareness.",
// "E-commerce Specialist to manage and optimize e-commerce platforms and online sales.",
// "Cybersecurity Analyst to protect computer systems and networks from cybersecurity threats.",
// "UI/UX Developer to combine design principles with programming skills for a seamless user experience.",
// "Cloud Solutions Architect to design and implement scalable and secure cloud solutions.",
// ];


// const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// const getRandomTitleAndDescription = (jobTitles, jobDescriptions) => {
// const randomIndex = getRandomNumber(0, jobTitles.length - 1);
// return {
//   title: jobTitles[randomIndex],
//   description: jobDescriptions[randomIndex],
// };
// };




// const generateRandomSeeker = (i) => {
// const state=getRandomIndianState();
//   console.log(state)
// return {
//   name: `User${i + 1}`,
//   age: getRandomNumber(20, 35).toString(),
//   email: `user${i + 1}@example.com`,
//   state: state,
  
//   location:getRandomCitiesForState(state),
//  sex: i % 2 === 0 ? "Male" : "Female",
//   education: educationLevels[getRandomNumber(0, educationLevels.length - 1)].label,
//   course: coursesArray[getRandomNumber(0, coursesArray.length - 1)],
  
//   maritialstatus: i % 2 === 0 ? "Single" : "Married",
//   skills: [
//     skillsArray[getRandomNumber(0, skillsArray.length - 1)],
//     skillsArray[getRandomNumber(0, skillsArray.length - 1)],
//     skillsArray[getRandomNumber(0, skillsArray.length - 1)],
    
//     skillsArray[getRandomNumber(0, skillsArray.length - 1)],
    
//     skillsArray[getRandomNumber(0, skillsArray.length - 1)],
//   ],
//   intrest: [
//     interestsArray[getRandomNumber(0, interestsArray.length - 1)],
//     interestsArray[getRandomNumber(0, interestsArray.length - 1)],
//     interestsArray[getRandomNumber(0, interestsArray.length - 1)],
    
//     interestsArray[getRandomNumber(0, interestsArray.length - 1)],
    
//     interestsArray[getRandomNumber(0, interestsArray.length - 1)],
//   ],
//   componenttime: [],
//   phoneno: "1234567890",
//   password: "password123",
// };
// };








//     for (let i = 0; i < 300; i++) {
//   const seekerData = generateRandomSeeker(i);
//   try {
//     const user = await SeekerModel.create(seekerData);
//     console.log(`User "${user.name}" created successfully.`);
//   } catch (err) {
//     console.error(`Error creating user: ${err}`);
//   }
// }






































































      const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;


//   export const createRandomJobs = async () => {
//     try {
     
//       const getRandomNumber = (min, max) =>
//     Math.floor(Math.random() * (max - min + 1)) + min;
  
//       const indianEmployers = await IndianEmployer.find().limit(40);
//       console.log(indianEmployers);
      
//   console.log(indianEmployers)
//       for (const employer of indianEmployers) {
//         const employerId = employer._id;
  
//         for (let i = 0; i < 5; i++) {
//           const { title, description } =  await getRandomTitleAndDescription(jobTitles, jobDescriptions);
//           const state=getRandomIndianState();
//           const jobData = {
//             provider: employerId,
//             title,
//             description,
//             state: state,
//             type:getRandomType(),
//             salarytype: "Monthly",
//             salary: `${getRandomNumber(30000, 80000)}`,
//             education: educationLevels[getRandomNumber(0, educationLevels.length - 1)].label,
//             gender: i % 2 === 0 ? "Male" : "Female",
//             vaccancy: `${getRandomNumber(1, 10)}`,
//             maxage: `${getRandomNumber(25, 40)}`,
//             ispwd: i % 2 === 0 ? "Yes" : "No",
//             disabilitytype: "Some Disability",
//             interview: "Some Interview Process",
//             skills: [
//               skillsArray[getRandomNumber(0, skillsArray.length - 1)],
//               skillsArray[getRandomNumber(0, skillsArray.length - 1)],
//               skillsArray[getRandomNumber(0, skillsArray.length - 1)],
              
//               skillsArray[getRandomNumber(0, skillsArray.length - 1)],
//               skillsArray[getRandomNumber(0, skillsArray.length - 1)],
//             ],
//             expirience: ["1 year", "2 years","Fresher"],
//             location:getRandomCitiesForState(state),
          
//           };
  
//           await JobsModel.create(jobData);
//         }
//       }
  
//       console.log("Jobs created successfully.");
//     } catch (error) {
//       console.error("Error creating jobs:", error);
//     } finally {
//       mongoose.disconnect();
//     }
//   };
  
//   // Run the function to create random jobs
//   // createRandomJobs(educationLevels, skillsArray, interestsArray, coursesArray, cities);

  
















  














const educationLevels = [
  { value: '10', label: 'No Schooling' },
  { value: '1', label: '5th' },
  { value: '2', label: '8th' },
  { value: '3', label: '10th' },
  { value: '4', label: '12th' },
  { value: '5', label: 'Diploma After 10th' },
  { value: '6', label: 'Diploma After 12th' },
  { value: '11', label: 'ITI' },
  { value: '7', label: 'Graduate' },
  { value: '12', label: 'PG Diploma' },
  { value: '8', label: 'Post Graduate' },
  { value: '13', label: 'M Phill' },
  { value: '9', label: 'Phd' },
];


const skillsArray = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "Java",
  "C++",
  "HTML",
  "CSS",
  "SQL",
  "Angular",
  "Vue.js",
  "Express",
  "MongoDB",
];

const interestsArray = [
  "Coding",
  "Reading",
  "Traveling",
  "Gaming",
  "Music",
  "Cooking",
  "Fitness",
  "Photography",
  "Art",
];
const coursesArray = [
  "Computer Science",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Physics",
  "Mathematics",
  "Biology",
  "Chemistry",
  "Psychology",
  "Business Administration",
  "Economics",
  // Add more courses as needed
];
const cities = [
  "Amritsar",
  "Ludhiana",
  "Jalandhar",
  "Patiala",
  "Bathinda",
  "Hoshiarpur",
  "Pathankot",
  "Mohali",
  "Batala",
  "Moga",
  "Sangrur",
  "Firozpur",
  "Kapurthala",

  "Mansa",
  "Gurdaspur",
  "Rupnagar",
  "Faridkot",
  "Fatehgarh Sahib",
  "Tarn Taran",
];





function getRandomIndianState() {
  const indianStatesArray = [
    "Amritsar",
    "Ludhiana",
    "Jalandhar",
    "Patiala",
    "Bathinda",
    "Hoshiarpur",
    "Pathankot",
    "Mohali",
    "Batala",
    "Moga",
    "Sangrur",
    "Firozpur",
    "Kapurthala",
  
    "Mansa",
    "Gurdaspur",
    "Rupnagar",
    "Faridkot",
    "Fatehgarh Sahib",
    "Tarn Taran",
  ];

  // Generate a random index
  const randomIndex = Math.floor(Math.random() * indianStatesArray.length);

  // Return the random state
  return indianStatesArray[randomIndex];
}

const jobTitles = [
"Software Engineer",
"Data Analyst",
"Marketing Specialist",
"Graphic Designer",
"Financial Analyst",
"Human Resources Manager",
"Customer Service Representative",
"Sales Executive",
"Web Developer",
"Project Manager",
"UX/UI Designer",
"Quality Assurance Engineer",
"Content Writer",
"Business Development Manager",
"IT Support Specialist",
"Digital Marketing Manager",
"Network Administrator",
"Mobile App Developer",
"Product Manager",
"Data Scientist",
"Front-end Developer",
"Back-end Developer",
"DevOps Engineer",
"Technical Support Specialist",
"Social Media Manager",
"E-commerce Specialist",
"Cybersecurity Analyst",
"UI/UX Developer",
"Cloud Solutions Architect",
];
const citiesByState = {
  "Amritsar": ["Amritsar", "Ajnala", "Baba Bakala", "Majitha", "Tarn Taran"],
  "Ludhiana": ["Ludhiana", "Jagraon", "Khanna", "Samrala"],
  "Jalandhar": ["Jalandhar", "Nakodar", "Phillaur"],
  "Patiala": ["Patiala", "Nabha", "Samana"],
  "Bathinda": ["Bathinda", "Rampura Phul", "Talwandi Sabo"],
  "Hoshiarpur": ["Hoshiarpur", "Dasua", "Mukerian"],
  "Mohali": ["Mohali"],
  "Pathankot": ["Pathankot", "Sujanpur"],
  "Moga": ["Moga", "Nihal Singh Wala"],
  "Sangrur": ["Sangrur", "Sunam", "Dhuri"],
  "Batala": ["Batala"],
  "Firozpur": ["Firozpur", "Fazilka", "Zira"],
  "Kapurthala": ["Kapurthala", "Phagwara", "Sultanpur Lodhi"],
  "Gurdaspur": ["Gurdaspur", "Dera Baba Nanak", "Batala"],
  "Rupnagar": ["Rupnagar", "Anandpur Sahib", "Nangal"],
  "Faridkot": ["Faridkot", "Kotkapura", "Jaitu"],
  "Fatehgarh Sahib": ["Fatehgarh Sahib", "Amloh", "Bassi Pathana"],
  "Tarn Taran": ["Tarn Taran"],
  "Mansa": ["Mansa", "Budhlada"],
  "Gurdaspur": ["Gurdaspur", "Dera Baba Nanak", "Batala"],
};
function getRandomType() {
const types = ["govt", "pvt"];
const randomIndex = Math.floor(Math.random() * types.length);
return types[randomIndex];
}
function getRandomCitiesForState(state) {
  const cities = citiesByState[state];

  // Check if cities are available for the given state
  if (cities && cities.length > 0) {
    // Shuffle the array to get random cities
    const shuffledCities = cities.sort(() => Math.random() - 0.5);

    // Return a single random city as a string
    return shuffledCities[0];
  } else {
    return null; // Return null if no cities are available for the given state
  }
}
const jobDescriptions = [
"We are seeking a talented Software Engineer to join our dynamic team. Contribute to the development of cutting-edge software solutions.",
"Join our team as a Data Analyst and contribute to data-driven decision-making. Analyze and interpret complex data sets.",
"Exciting opportunity for a Marketing Specialist to drive brand awareness. Develop and implement effective marketing strategies.",
"Creative Graphic Designer needed to produce stunning visual content. Bring artistic and innovative ideas to the table.",
"Financial Analyst position available for a detail-oriented professional. Analyze financial data and provide valuable insights.",
"Manage human resources functions as a Human Resources Manager. Ensure a positive and productive workplace environment.",
"Customer Service Representative wanted to provide exceptional support. Assist customers with inquiries and problem resolution.",
"Sales Executive role available for a motivated and results-driven individual. Identify and pursue new business opportunities.",
"Web Developer position for someone passionate about web technologies. Design and implement web applications with the latest tools.",
"Project Manager needed to lead and execute key projects. Ensure successful project delivery on time and within budget.",
"UX/UI Designer role for creating intuitive and visually appealing user experiences. Work on enhancing user interface designs.",
"Quality Assurance Engineer responsible for ensuring software quality through testing and debugging.",
"Content Writer position available to create engaging and informative content across various platforms.",
"Business Development Manager to identify new business opportunities and build strategic partnerships.",
"IT Support Specialist to provide technical support and troubleshooting for IT-related issues.",
"Digital Marketing Manager to lead digital marketing campaigns and optimize online presence.",
"Network Administrator responsible for managing and maintaining computer networks.",
"Mobile App Developer to design and develop mobile applications for iOS and Android platforms.",
"Product Manager to oversee the entire product development lifecycle and drive product strategy.",
"Data Scientist to analyze and interpret complex data sets to inform business decisions.",
"Front-end Developer to create visually appealing and responsive user interfaces.",
"Back-end Developer to develop server-side logic and integrate user-facing elements.",
"DevOps Engineer to improve and streamline the development and deployment processes.",
"Technical Support Specialist to provide technical assistance and support to end-users.",
"Social Media Manager to develop and implement social media strategies to increase brand awareness.",
"E-commerce Specialist to manage and optimize e-commerce platforms and online sales.",
"Cybersecurity Analyst to protect computer systems and networks from cybersecurity threats.",
"UI/UX Developer to combine design principles with programming skills for a seamless user experience.",
"Cloud Solutions Architect to design and implement scalable and secure cloud solutions.",
];



const getRandomTitleAndDescription = (jobTitles, jobDescriptions) => {
const randomIndex = getRandomNumber(0, jobTitles.length - 1);
return {
  title: jobTitles[randomIndex],
  description: jobDescriptions[randomIndex],
};
};




const generateRandomSeeker = (i) => {
const state=getRandomIndianState();
  console.log(state)
return {
  name: `User${i + 1}`,
  age: getRandomNumber(20, 35).toString(),
  email: `user${i + 1}@example.com`,
  state: state,
  
  city:getRandomCitiesForState(state),
  
  tehsil:getRandomCitiesForState(state),
 sex: i % 2 === 0 ? "Male" : "Female",
  education: educationLevels[getRandomNumber(0, educationLevels.length - 1)].label,
  course: coursesArray[getRandomNumber(0, coursesArray.length - 1)],
  
  maritialstatus: i % 2 === 0 ? "Single" : "Married",
  skills: [
    skillsArray[getRandomNumber(0, skillsArray.length - 1)],
    skillsArray[getRandomNumber(0, skillsArray.length - 1)],
    skillsArray[getRandomNumber(0, skillsArray.length - 1)],
    
    skillsArray[getRandomNumber(0, skillsArray.length - 1)],
    
    skillsArray[getRandomNumber(0, skillsArray.length - 1)],
  ],
  intrest: [
    interestsArray[getRandomNumber(0, interestsArray.length - 1)],
    interestsArray[getRandomNumber(0, interestsArray.length - 1)],
    interestsArray[getRandomNumber(0, interestsArray.length - 1)],
    
    interestsArray[getRandomNumber(0, interestsArray.length - 1)],
    
    interestsArray[getRandomNumber(0, interestsArray.length - 1)],
  ],
  componenttime: [],
  phoneno: "1234567890",
  password: "password123",
};
};





export const  createRandom =async()=> {
try {
 
console.log('called')


    for (let i = 0; i < 300; i++) {
  const seekerData = generateRandomSeeker(i);
  try {
    const user = await SeekerModel.create(seekerData);
    console.log(`User "${user.name}" created successfully.`);
  } catch (err) {
    console.error(`Error creating user: ${err}`);
  }
}






  console.log("users created successfully.");
} catch (error) {
  console.error("Error creating jobs:", error);
} finally {
 
}
};



async function insertData() {
    try {
   
      // Insert each user data into MongoDB
      for (const user of userData) {
        await IndianEmployer.create(user);
        console.log(`User "${user.companyname}" inserted into MongoDB.`);
      }
  
      console.log("Data insertion completed.");
    } catch (error) {
      console.error("Error inserting data:", error);
    } finally {
      // Disconnect from MongoDB
    
    }
  }
  
  // Run the function to insert data
  insertData();

























  




  
mongoose.connect("mongodb+srv://sih202227:sih202227@cluster0.bjhqbah.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true})


import SeekerModel from "./models/seeker.js"; 

// Function to generate a random number between min and max (inclusive)
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
mongoose.connection.on('error',err=>{
  console.log('connection failed');
});

mongoose.connection.on('connected',()=>{
  console.log('connected successfully with database');
})
// Function to generate random Seeker data
const generateRandomSeeker = (i) => {
 
    
  return {
    name: `User${i + 1}`,
    age: getRandomNumber(20, 35).toString(),
    email: `user${i + 1}@example.com`,
    state: "Punjab",
    location: cities[getRandomNumber(0, cities.length - 1)],
   sex: i % 2 === 0 ? "Male" : "Female",
    education: educationLevels[getRandomNumber(0, educationLevels.length - 1)].value,
    course: coursesArray[getRandomNumber(0, coursesArray.length - 1)],
    
    maritialstatus: i % 2 === 0 ? "Single" : "Married",
    skills: [
      skillsArray[getRandomNumber(0, skillsArray.length - 1)],
      skillsArray[getRandomNumber(0, skillsArray.length - 1)],
      skillsArray[getRandomNumber(0, skillsArray.length - 1)],
    ],
    intrest: [
      interestsArray[getRandomNumber(0, interestsArray.length - 1)],
      interestsArray[getRandomNumber(0, interestsArray.length - 1)],
      interestsArray[getRandomNumber(0, interestsArray.length - 1)],
    ],
    componenttime: [],
    phoneno: "1234567890",
    password: "password123",
  };
};

// Create 300 users
(async () => {
  for (let i = 0; i < 300; i++) {
    const seekerData = generateRandomSeeker(i);
    try {
      const user = await SeekerModel.create(seekerData);
      console.log(`User "${user.name}" created successfully.`);
    } catch (err) {
      console.error(`Error creating user: ${err}`);
    }
  }
})();




















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
    "Fazilka",
    "Mansa",
    "Gurdaspur",
    "Rupnagar",
    "Faridkot",
    "Fatehgarh Sahib",
    "Tarn Taran",
  ];
  
  
  const createRandomJobs = async (educationLevels, skillsArray, interestsArray, coursesArray, cities) => {
    try {
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
      ];
  
      const jobDescriptions = [
        "We are seeking a talented Software Engineer to join our dynamic team.",
        "Join our team as a Data Analyst and contribute to data-driven decision-making.",
        "Exciting opportunity for a Marketing Specialist to drive brand awareness.",
        "Creative Graphic Designer needed to produce stunning visual content.",
        "Financial Analyst position available for a detail-oriented professional.",
        "Manage human resources functions as a Human Resources Manager.",
        "Customer Service Representative wanted to provide exceptional support.",
        "Sales Executive role available for a motivated and results-driven individual.",
        "Web Developer position for someone passionate about web technologies.",
        "Project Manager needed to lead and execute key projects.",
      ];
      const getRandomTitleAndDescription = (jobTitles, jobDescriptions) => {
        const randomIndex = getRandomNumber(0, jobTitles.length - 1);
        return {
          title: jobTitles[randomIndex],
          description: jobDescriptions[randomIndex],
        };
      };
      const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  
      const indianEmployers = await IndianEmployer.find().limit(30);
      console.log(indianEmployers);
      
  console.log(indianEmployers)
      for (const employer of indianEmployers) {
        const employerId = employer._id;
  
        for (let i = 0; i < 5; i++) {
          const { title, description } =  await getRandomTitleAndDescription(jobTitles, jobDescriptions);
  
          const jobData = {
            provider: employerId,
            title,
            description,
            state: "Punjab",
            salarytype: "Monthly",
            salary: `${getRandomNumber(30000, 80000)}`,
            education: educationLevels[getRandomNumber(0, educationLevels.length - 1)].value,
            gender: i % 2 === 0 ? "Male" : "Female",
            vaccancy: `${getRandomNumber(1, 10)}`,
            maxage: `${getRandomNumber(25, 40)}`,
            ispwd: i % 2 === 0 ? "Yes" : "No",
            disabilitytype: "Some Disability",
            interview: "Some Interview Process",
            skills: [
              skillsArray[getRandomNumber(0, skillsArray.length - 1)],
              skillsArray[getRandomNumber(0, skillsArray.length - 1)],
              skillsArray[getRandomNumber(0, skillsArray.length - 1)],
            ],
            expirience: ["1 year", "2 years","Fresher"],
            location: [cities[getRandomNumber(0, cities.length - 1)]],
          
          };
  
          await JobsModel.create(jobData);
        }
      }
  
      console.log("Jobs created successfully.");
    } catch (error) {
      console.error("Error creating jobs:", error);
    } finally {
      mongoose.disconnect();
    }
  };
  
  // Run the function to create random jobs
  createRandomJobs(educationLevels, skillsArray, interestsArray, coursesArray, cities);
  
  ;
  
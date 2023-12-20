import Seeker from '../models/seeker.js'; // Adjust the path accordingly

 export async function getUsersByCityWithTehsilCount() {
  try {
    const result = await Seeker.aggregate([
      {
        $group: {
          _id: { city: "$city", tehsil: "$tehsil" },
          count: { $sum: 1 },
        },
      },
      {
        $group: {
          _id: "$_id.city",
          tehsils: {
            $push: {
              name: "$_id.tehsil",
              count: "$count",
            },
          },
        },
      },
    ]);

    const formattedResult = result.reduce((acc, cityData) => {
      acc[cityData._id] = cityData.tehsils;
      return acc;
    }, {});

    console.log("Users by City with Tehsil Count:", formattedResult);
    return formattedResult;
  } catch (error) {
    console.error("Error fetching users by city with tehsil count:", error.message);
    throw error;
  }
}

// Example usage








export async function getUsersByAgeCount() {
    try {
      const result = await Seeker.aggregate([
        {
          $group: {
            _id: "$age",
            count: { $sum: 1 },
          },
        },
      ]);
  
      const formattedResult = result.reduce((acc, ageData) => {
        acc[ageData._id] = ageData.count;
        return acc;
      }, {});
  
      console.log("Users by Age Count:", formattedResult);
      return formattedResult;
    } catch (error) {
      console.error("Error fetching users by age count:", error.message);
      throw error;
    }
  }


  export async function getUsersBySexCount() {
    try {
      const result = await Seeker.aggregate([
        {
          $group: {
            _id: "$sex",
            count: { $sum: 1 },
          },
        },
      ]);
  
      const formattedResult = result.reduce((acc, sexData) => {
        acc[sexData._id] = sexData.count;
        return acc;
      }, {});
  
      console.log("Users by Sex Count:", formattedResult);
      return formattedResult;
    } catch (error) {
      console.error("Error fetching users by sex count:", error.message);
      throw error;
    }
  }












   export async function getUsersByEducationCount() {
    try {
      const result = await Seeker.aggregate([
        {
          $group: {
            _id: "$education",
            count: { $sum: 1 },
          },
        },
      ]);
  
      const formattedResult = result.reduce((acc, educationData) => {
        acc[educationData._id] = educationData.count;
        return acc;
      }, {});
  
      console.log("Users by Education Count:", formattedResult);
      return formattedResult;
    } catch (error) {
      console.error("Error fetching users by education count:", error.message);
      throw error;
    }
  }








  export async function getUsersByCourseCount() {
    try {
      const result = await Seeker.aggregate([
        {
          $group: {
            _id: "$course",
            count: { $sum: 1 },
          },
        },
      ]);
  
      const formattedResult = result.reduce((acc, courseData) => {
        acc[courseData._id] = courseData.count;
        return acc;
      }, {});
  
      console.log("Users by Course Count:", formattedResult);
      return formattedResult;
    } catch (error) {
      console.error("Error fetching users by course count:", error.message);
      throw error;
    }
  }
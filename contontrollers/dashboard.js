import Seeker from '../models/User.js'; // Adjust the path accordingly
import Jobs from '../models/jobs.js';

export const getUsersByCityWithTehsilCount = async (req, res) => {
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
    res.json(formattedResult);
  } catch (error) {
    console.error("Error fetching users by city with tehsil count:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getUsersByAgeCount = async (req, res) => {
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
    res.json(formattedResult);
  } catch (error) {
    console.error("Error fetching users by age count:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getUsersBySexCount = async (req, res) => {
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
    res.json(formattedResult);
  } catch (error) {
    console.error("Error fetching users by sex count:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getUsersByStateCount = async (req, res) => {
  try {
    const result = await Jobs.aggregate([
      {
        $group: {
          _id: "$state",
          count: { $sum: 1 },
        },
      },
    ]);

    const formattedResult = result.reduce((acc, stateData) => {
      acc[stateData._id] = stateData.count;
      return acc;
    }, {});

    console.log("Users by State Count:", formattedResult);
    res.json(formattedResult);
  } catch (error) {
    console.error("Error fetching users by state count:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getUsersByEducationCount = async (req, res) => {
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
    res.json(formattedResult);
  } catch (error) {
    console.error("Error fetching users by education count:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getUsersByCourseCount = async (req, res) => {
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
    res.json(formattedResult);
  } catch (error) {
    console.error("Error fetching users by course count:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


export const getUsersByDisabilityCount = async (req, res) => {
  try {
    const result = await Jobs.aggregate([
      {
        $group: {
          _id: "$ispwd",
          count: { $sum: 1 },
        },
      },
    ]);

    const formattedResult = result.reduce((acc, disabilityData) => {
      acc[disabilityData._id] = disabilityData.count;
      return acc;
    }, {});

    console.log("Users by Disability Count:", formattedResult);
    res.json(formattedResult);
  } catch (error) {
    console.error("Error fetching users by disability count:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
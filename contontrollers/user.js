import Seeker from '../models/User.js'; 


export const login = async (req, res) => {
    const { email, password } = req.body;
  console.log(req.body)
    try {
      // Find user by email and password
      const user = await Seeker.findOne({ email, password });
        console.log(user)
      if (!user) {
        // User not found
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      
  
      res.status(200).json({ message: 'Login successful'});
    } catch (error) {
      console.error('Error during login:', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
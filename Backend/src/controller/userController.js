import { registerUser as registerUserService, loginUser as loginUserService } from '../service/userService.js';


export async function loginUser(req, res) {
   try {
      // Parse the JSON string if necessary
      const requestBody = typeof req.body.body === 'string' ? JSON.parse(req.body.body) : req.body.body;
      const {token, user} = await loginUserService({
         email: requestBody.email,
         password: requestBody.password
      });

      res.cookie("token", token, {
         httpOnly: true,
         sameSite: 'strict',
         maxAge: 30 * 60 * 1000, // 30 minutes
      })
      return res.status(200).json({"message": "User signed in successfully"});
      
   } catch (error) {
      console.log(error);
      return res.status(500).json({ "error": error.message, "message": "Internal Server Error" });
   }
}

export async function registerUser(req, res) {
   try {
      // Parse the JSON string if necessary
      const requestBody = typeof req.body.body === 'string' ? JSON.parse(req.body.body) : req.body.body;

      const {token, user} = await registerUserService({
         username: requestBody.username,
         email: requestBody.email,
         password: requestBody.password
      });

      res.cookie("token", token, {
         httpOnly: true,
         sameSite: 'strict',
         maxAge: 30 * 60 * 1000, // 30 minutes
      })
      return res.status(201).json({"message" : "User Signed Up Successfully"});
      
   } catch (error) {
         console.error(error);
         return res.status(500).json({ "error": error.message, "message" : 'Internal Server Error' });
   }
}


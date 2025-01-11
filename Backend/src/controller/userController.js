import { registerUser as registerUserService, loginUser as loginUserService } from '../service/userService.js';


export async function loginUser(req, res) {
try {
   console.log(req.body, req.body.email, req.body.password);
   const {token, user} = await loginUserService({
       email: req.body.email,
       password: req.body.password
   });

   res.cookie("token", token, {
       httpOnly: true,
       sameSite: 'strict'
   })
   return res.status(200).json({token: token, message: "User signed in successfully"});
   
} catch (error) {
   console.log(error);
   return res.status(500).json({ "error": error.message, "message": "Internal Server Error" });
}
}

export async function registerUser(req, res) {
try {
   const userResponse = await registerUserService({
       username: req.body.username,
       email: req.body.email,
       password: req.body.password
   });
   return res.status(201).json({message: "User Signed Up Successfully"});
   
} catch (error) {
   console.error(error);
   return res.status(500).json({ error: 'Internal Server Error' });
}
}



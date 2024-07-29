//route is the API's end point
import express from 'express';

import {signupUser} from '../controller/user_controller.js';

const router = express.Router();

//signup is the api end point written in api url
//code ko structured rakhne ke liye callback function alag folder mai h (controller folder)

router.post('/signup',signupUser);

export default router;

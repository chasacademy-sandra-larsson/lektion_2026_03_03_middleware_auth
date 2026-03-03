import { Router } from 'express'
import { db } from "./../db"
import { users } from "./..db/schema"
import { eq } from "drizzle-orm"
import bcrypt from "brypt"
import jwt from "jsonwebtoken"


const router = Router();


// Signup route
router.post('/signup', async (req, res) => {




});




// Signin route
router.post('/signin', async (req, res) => {



});


export default router;
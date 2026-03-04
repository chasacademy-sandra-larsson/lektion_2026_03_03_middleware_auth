import { Router } from 'express'
import { db } from "./../db"
import { users } from "../db/schema"
import { eq } from "drizzle-orm"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const router = Router();

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET!;

// Signup route
router.post('/signup', async (req, res) => {

 try {
    // 1. Hämta email och password från body
    const { email, password } = req.body;

    // 2. Hasha lösenorden  med bcrypt.hash
     const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // 3. Spara det hashade lösenordet och email till db

    const  [user]  = await db
            .insert(users)
            .values({email: email, password: hashedPassword})
            .returning({id: users.id, email: users.email})

    // 4. Så länge email är unikt, signera en JWT

    // Skapar en token baserat på användarinformtionen som skapats
    const token = jwt.sign({userId: user.id}, JWT_SECRET, { expiresIn: '7d'});  
    
    // 5. Skicka tillbaka JWT (jwt.sign) till klienten (och användarinformation)
    
    res.status(201).json({token, user});

    } catch (error: unknown) {
        console.log(error);
    }

    

});




// Signin route
router.post('/signin', async (req, res) => {

    // 1. Hämta email och password från body
    // 2. Kolla att email finns i databasen 
    // 3. Om email finns använda bcrypt.compare för att jämföra db:s hashade lösenord mot det hashade lösenordet som använadre signar in med.
    // 4. Om 3. verifieras skicka en JWT (jwt.sign) till klienten

});


export default router;
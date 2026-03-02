import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001

// Middleware


// API-endpoints

// ┌────────┬──────────────┬──────────────────────┬──────────────────────┐
// │ Metod  │    Route     │         Auth         │     Beskrivning      │
// ├────────┼──────────────┼──────────────────────┼──────────────────────┤
// │ POST   │ /auth/signup │ —                    │ Registrera användare │
// ├────────┼──────────────┼──────────────────────┼──────────────────────┤
// │ POST   │ /auth/signin │ —                    │ Logga in, få JWT     │
// ├────────┼──────────────┼──────────────────────┼──────────────────────┤
// │ GET    │ /posts       │ —                    │ Se alla inlägg       │
// ├────────┼──────────────┼──────────────────────┼──────────────────────┤
// │ POST   │ /posts       │ Bearer token         │ Skapa inlägg         │
// ├────────┼──────────────┼──────────────────────┼──────────────────────┤
// │ PUT    │ /posts/:id   │ Bearer token (ägare) │ Redigera eget inlägg │
// ├────────┼──────────────┼──────────────────────┼──────────────────────┤
// │ DELETE │ /posts/:id   │ Bearer token (ägare) │ Ta bort eget inlägg  │
// └────────┴──────────────┴──────────────────────┴──────────────────────┘

// Routes


app.listen(PORT, () => {
  console.log(`Server körs på http://localhost:${PORT}`)
})

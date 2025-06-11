import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";


import authRoutes from "./routes/authRoutes"; 
import bookingRoutes from "./routes/bookingRoutes"; 

console.log("👀 Index.ts starting up...");

// Load env variables
dotenv.config();

// Init Express app
const app = express();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy : "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}));
app.use(cors({origin: "http://localhost:3000", credentials: true}));

// Routes
app.use("/api", authRoutes);
app.use("/api/bookings", bookingRoutes);


// Server
const port = Number(process.env.PORT) || 8000;
console.log("🚦 About to call app.listen...");
app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});

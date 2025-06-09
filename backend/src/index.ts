import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";  // to be created
import bookingRoutes from "./routes/bookingRoutes"; // to be created

// Load env variables
dotenv.config();

// Init Express app
const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:3000",  // Frontend origin
  credentials: true
}));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);

// Root
app.get("/", (_, res) => {
  res.send("VIP Concierge API is running...");
});

// Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

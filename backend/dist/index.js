"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes")); // to be created
const bookingRoutes_1 = __importDefault(require("./routes/bookingRoutes")); // to be created
console.log("👀 Index.ts starting up...");
// Load env variables
dotenv_1.default.config();
// Init Express app
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use((0, morgan_1.default)("common"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)({ origin: "http://localhost:3000", credentials: true }));
// Routes
app.use("/api", authRoutes_1.default);
app.use("/api/bookings", bookingRoutes_1.default);
// Server
const port = Number(process.env.PORT) || 8000;
console.log("🚦 About to call app.listen...");
app.listen(port, "0.0.0.0", () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});

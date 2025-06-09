"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserBookings = exports.createBooking = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const createBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { dropOff, pickup } = req.body;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId;
    try {
        const booking = yield prisma_1.default.booking.create({
            data: {
                userId,
                dropOff: new Date(dropOff),
                pickup: new Date(pickup),
            },
        });
        res.status(201).json(booking);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to create booking' });
    }
});
exports.createBooking = createBooking;
const getUserBookings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId;
    try {
        const bookings = yield prisma_1.default.booking.findMany({ where: { userId } });
        res.json(bookings);
    }
    catch (_b) {
        res.status(500).json({ error: 'Error fetching bookings' });
    }
});
exports.getUserBookings = getUserBookings;

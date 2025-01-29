"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("./routes/auth"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Connect to MongoDB
mongoose_1.default.connect('mongodb+srv://root:root@requin-assesment.8cj4o.mongodb.net/?retryWrites=true&w=majority&appName=requin-assesment')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));
// Use authentication routes
app.use('/auth', auth_1.default);
// Start the server
app.listen(3001, () => {
    console.log('Server running on port 3001');
});

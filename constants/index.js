require('dotenv').config();

const PORT_DEV = process.env.PORT_DEV || 3000;
const PROTOCOL = process.env.PROTOCOL_DEV || "http";

module.exports = { PORT_DEV, PROTOCOL }
module.exports = function cors(app) {
  const cors = require("cors");
  const options = {
    origin: [
      "https://rebirth-store.netlify.app",
      "http://localhost:5173",
      "http://localhost:3000"
    ],
    credentials: true,
    methods: "GET, PUT, POST, PATCH, DELETE, OPTIONS",
    allowedHeaders:
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  };
  app.use(cors(options));
};

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const csp = require('helmet-csp');

const { port } = require('./config');

// Create a Variable to conclude if Dev or Production Environment (True if in Production)
const { environment } = require('./config');
const isProduction = environment === 'production';

// Initialize Express App
const app = express();

// Connect Morgan middleware for logging information 
app.use(morgan('dev'));

// Add cookie-parser middleware to parse cookies
app.use(cookieParser());

// Add express.json middle ware for parsing JSON bodies (Content-Type: application/json)
app.use(express.json());

// Only Allow for CORS in development, because the React frontend will be served from a different server
// in development, but in production they will come from the same origin
if (!isProduction) app.use(cors());

// Add helmet middleware to mitigate XSS attacks
app.use(helmet.crossOriginResourcePolicy({
  policy: "cross-origin"
}));


// Add csurf middleware and configure it to use cookies. It will add a _csrf cookie that
// is HTTP only and a method on all request that will be set to another header to confirm
// the request came from this site
app.use(csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true
    }
  }));

  
// Import and Use the Routes
const routes = require('./routes');
app.use(routes);


try {
  app.listen(port, () => console.log(`Listening on port ${port}...`))
} catch(e) {
  console.log(`Server failed to start`);
  console.error(e);
}
//Install express server
const express = require('express');
const path = require('path');
const helmet = require('helmet')
const app = express();
const csp = require('helmet-csp')

// Serve only the static files form the dist directory
app.use(helmet())
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/index.html'));
});
app.use(csp({
    // Specify directives as normal.
    directives: {
      defaultSrc: ["'self'", 'default.com'],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ['style.com'],
      fontSrc: ["'self'", 'fonts.com'],
      imgSrc: ['img.com', 'data:'],
      sandbox: ['allow-forms', 'allow-scripts'],
      reportUri: '/report-violation',
      objectSrc: ["'none'"],
      upgradeInsecureRequests: true,
      workerSrc: false  // This is not set.
    }
}
));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
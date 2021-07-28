const express =require('express');
const path = require('path');
// const bodyParser = require('body-parser');
const logger = require('./middleware/logger');

app =express();
const PORT = process.env.PORT || 5000;


// init middleware
// app.use(logger);

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded())

// // parse application/json
// app.use(bodyParser.json())

// const jsonParser = bodyParser.json();
// app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

//Members api routes
app.use('/api/members', require('./routes/api/members'));
app.listen(PORT, ()=> {
    console.log(`server started on PORT ${PORT}`);
});

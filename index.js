const express =require('express');
const path = require('path');
const logger = require('./middleware/logger');

app =express();
const PORT = process.env.PORT || 5000;


// init middleware
// app.use(logger);

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

//Members api routes
app.use('/api/members', require('./routes/api/members'));
app.listen(PORT, ()=> {
    console.log(`server started on PORT ${PORT}`);
});

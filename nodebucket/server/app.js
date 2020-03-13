/**
 * Require statements
 */
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const Employee = require("./models/employee")




/**
 * App configurations
 */
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../dist/nodebucket')));
app.use('/', express.static(path.join(__dirname, '../dist/nodebucket')));

/**
 * Variables
 */
const port = 3000; // server port

// TODO: This line will need to be replaced with your actual database connection string
const conn = "mongodb+srv://Gabriel:Jairo500!@cluster0-djivq.gcp.mongodb.net/nodebucket?retryWrites=true";

/**
 * Database connection
 */
mongoose.connect(conn, {
  promiseLibrary: require('bluebird'),
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
  console.debug(`Connection to the database instance was successful`);
}).catch(err => {
  console.log(`MongoDB Error: ${err.message}`)
}); // end mongoose connection

/**
 * API(s)
 */
// app.get("/employees/:empId", function(req, res) {
//   const id = req.params.empId;
//   Employee.findById({id}, function(err, employees) {
//       if (err) {
//           console.log(err)
//           throw err;
//       } else {
//           console.log(employees);
//           res.render('/', {
//               title: 'EMS|Home',
//               employees: employees
//           })
//       }
//   });
// });
app.get('/employees', (req, res) => {
    Employee.find({}, (err, employees) =>{
      if(err) return res.status(500).send({message: 'Error: ${err}'})
      if(!employees) return res.status(404).send({message: 'The Employee Does not Exist'})

      res.status(200).send({ employees })
    })

  });

// app.get("/employees", function(req, res, next) {
//   Employee.find({}, function(err, employees) {
//     if (err) {
//       console.log(err);
//       return next(err);
//     } else {
//       console.log(employees);
//       res.json(employees);
//     }
//   });
// });


app.get('/employees/:empId', (req, res) => {
let empId = req.params.empId;
  Employee.findById(empId, (err, employee) =>{
    if(err) return res.status(500).send({message: 'Error: ${err}'})
    if(!employee) return res.status(404).send({message: 'The Employee Does not Exist'})

    res.status(200).send({ employee: employee })
  })

});

// app.get('/employees/:employeeId', function(req, res, next){
//   Employee.findOne({employeeId: req.params.employeeId}, function(err, employee){
//     if(err) {return next(err);}
//     if(!employee) {return next(404);}
//     res.render('/', {employee: employee})
//   })
// })


/**
 * Create and start server
 */
http.createServer(app).listen(port, function() {
  console.log(`Application started and listening on port: ${port}`)
}); // end http create server function

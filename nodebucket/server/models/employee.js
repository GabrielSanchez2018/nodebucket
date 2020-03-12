/*
Author: Gabriel Sanchez
Edited by:
Date: 3/10/2020
*/

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Employee Scheema


let EmployeeSchema = new Schema({
    employeeID: {type: String, required: true },
    firstName:{type: String, required:true},//chapter 8 p128
    lastName:{type:String, required:true},
    password: {type:String, unique: true},
    createdAt: {type: Date, default: Date.now},
    task: [
              {todo:String},
              {done:String}
          ]





});

// Exporting The Model
module.exports = mongoose.model('Employee', EmployeeSchema)

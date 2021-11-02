const express = require('express')
const app = express()
var cors = require('cors')
const { write } = require('xlsx')
 bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())




// Read xlsx file
XLSX = require('xlsx');
var workbook = XLSX.readFile('data.xlsx');
var worksheet = workbook.Sheets["Sheet1"];
 data=XLSX.utils.sheet_to_json(worksheet);

app.get('/TeamMembers', function (req, res) {
  res.send(data)
})
// app.get('/GetUser', function (req, res) {
//  i=0
//  while(req.query.email!=data[i].email && i<data.length)
//  i++
//  if(req.query.email==data[i].email )
//   res.send(data[i])
//   else{
//     res.send("User Not Found")
//   }
// })
app.post('/Team', function (req, res) {

  data.push(req.body)
    console.log(data)
  XLSX.utils.sheet_add_json(workbook.Sheets["Sheet1"],data)
   XLSX.writeFile(workbook,"data.xlsx")
  
   
})
// app.post('/Authenticate', function (req, res) {
//    i=0
//    while(req.body.email!=data[i].email && i<data.length)
//    i++
//    if(req.body.email!=data[i].email )
//    res.send("False")
//    else{
//      if(req.body.password==data[i].password)
//    res.send("True")
//      else res.send("False")
  
//    }
  
// }) 

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
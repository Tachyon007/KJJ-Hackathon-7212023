
const mysql = require('mysql');
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json({limit: '1mb'}));
app.use(express.urlencoded({limit: '1mb'}));

console.log("app starting");

var con = mysql.createConnection({
    host     : 'busycoder.com',
    user     : '',
    password : '',
    database : 'busycode_KJJ_Test' 
});
 
con.connect(function(err) {
  if (err) {
    throw err;
  }
    
  console.log("DB Connected!");
});




//get requests
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.get("/allProjects", (req, res) => {
  
  con.query("SELECT * FROM HackathonTable", (error, results, fields)=>{
    res.send(results);
  });

});



//post requests
app.post('/', (req, res) => {
    let data = req.body;
  
  
    let sql = `INSERT INTO HackathonTable (email, promptID, images, postNum)
    VALUES ('${data.email}', '${data.promptID}', '${data.images}', ${data.postNum})`
    
    
    con.query(sql, function (err, result) {
      if (err) throw err;
      
      console.log("1 record inserted");
    });
    
    console.log("Data Received");
    res.send('Data Received');
  
})



//liston on Glitch!!
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
 

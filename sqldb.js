const express=require('express')  //importing express library
//importing mssql module
const sql= require("mssql");

const app=express();    //create an instance of express aplication

//configure database connection
//config is the userdefined object that holds keys that are required by mssql module for connection
const config={
     
    user:'admin',
    password:'123',         //if there is window authentication then there is no need of user and password
    server:'DESKTOP-PK86BAT',           //beacuse the user has already signed in the windows
    database:'myDatabase',
   // pool:{
     //   max:10,
     //   min:0,
     //   idleTimeoutMillis:30000
    //},
    options:{      //option object (predefined and recognized by library) is the flexible way to customize the behavior of sql server connection.
                    //there are number of options avialable to use. 
       encrypt: true, // Use encryption
       trustServerCertificate: true, // Accept self-signed certificates
       trustedConnection:false,
       enableArithAbort:true,
       instancename:'SQLEXPRESS',
       //integratedSecurity: true, // Use Windows Authentication
            //it is used to indicate windows authentiction is used 
    },
    port:1433,
};

//defines an express route  for handling database queries
app.get('/api/products',(req,res)=>{

    //sql server connection and query logic here
    sql.connect(config).then(()=>{
        console.log('Database connected successfully');

        //simple query example
        const query='SELECT * FROM Products';
        return sql.query(query);
    }).then(result=>{
        res.json(result.recordset);
        
    }).catch(err=> {
        console.error("Error connected to sql server ",err);
        res.status(500).json({error:'Internal Server Error'});
    });

});
//start the express server 
const PORT=process.env.PORT ||5000 ;
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});


//sql.connect syntax   -> it has return promise
//sql.connect(config).then(() => { ... }).catch(err => { ... });
        // we will use under code when we are just connecting node to sql when there is no express
//sql.connect(config).then(()=>{
  //console.log("DataBase Connected Successfully!!");
//}).catch(err=>{
  // console.error("Error connected to Sql server",err);
   my name is waseem 
//});

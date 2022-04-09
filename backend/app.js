const express = require("express");

const cors = require("cors")

const bodyparser = require("body-parser")

const mongodb = require("mongodb").MongoClient;


const app = express();

app.use(cors());

app.use(bodyparser.json());

var db;

mongodb.connect("mongodb+srv://admin_1:admin_1@cluster0.5rji7.mongodb.net/EmployeeDataBase?retryWrites=true&w=majority", (error, result)=>{
    if(error){
        console.log("DataBase Not Connected");
        console.log(error);
    }
    else{
        db=result.db("EmployeeDataBase");
        console.log("DataBase Connected VETRI!!!!!!!!!");
    }
});

app.use((req, res, next)=>{  //common for all paths in a page.

    console.log("MIDDLEWARE 1");


    next();

});


app.use("/",(req, res, next)=>{  //common for a specified paths in a page.

    console.log("THIS IS HOME PAGE");


    next();

});

function VerifyUser(req,res,next){

    console.log("USER VERIFIED HERE .....")

    next();
}

// app.use(bdpars.json());

// var db;

// mngdb.connect("mongodb+srv://admin_1:admin_1@cluster0.5rji7.mongodb.net/userMng?retryWrites=true&w=majority", (error,result) => {
//     if(error){
//         console.log("DB Tholvii");
//     }
//     else{

//         db = result.db("freebird")
//         console.log("DB Vetriiii");
//     }
// })


app.get("/",VerifyUser, (req,res) => {
    console.log("home pageeeeh....!!!");
    res.send("<h1>WELOCME TO HOME PAGE OF THE WEBSITE </h1>");
})

app.get("/login", (req,res)=>{
    console.log("Login pageee!!!!");
    var data={a:"hi",b:"user"};
    res.json(data);
})


app.post("/add",(req, res)=>{
    req.body._id=new Date().getTime();
    console.log(req.body);
    db.collection("EmployeeDetails").insertOne(req.body,(error, data)=>{
        if(error){
            console.log("Can Not Able To Insert The Data in the DataBase");
            res.status(403).json("Error in inserting Doc")
        }
        else{
            console.log("Data Registered In The DataBase");
        }
    });
    // res.json("User Added Successfully");

});

app.post("/login",(req,res)=>{
    console.log(req.body);
    db.collection("EmployeeDetails").find(req.body,{projection: {_id:1, ufirstname:1,ulastname:1,udesignation:1}}).toArray((error,data)=>{
        if(error){
            console.log("Can Not Able To login");
            res.status(403).json("Error in Finding the Doc")
        }
        else{
            req.user=data;
            res.json(data)
        }
    });
    
});

app.get("/allusers",(req,res)=>{
    console.log(req.user);
    db.collection("EmployeeDetails").find(null,{projection:{upass:0,uleave:0,utleave:0}}).toArray((error,data)=>{
        if(error){
            console.log("Can Not Able To find The Data in the DataBase");
            res.status(403).json("Error in Finding the Doc")
        }
        else{
            res.json(data)
        }
    });
});

app.get("/singleusers/:USERID",(req,res)=>{
    console.log(req.params.USERID);
    db.collection("EmployeeDetails").find({_id:Number(req.params.USERID)}).toArray((error,data)=>{
        if(error){
            console.log("Can Not Able To find The Data in the DataBase");
            res.status(403).json("Error in Finding the Doc")
        }
        else{
            res.json(data)
        }
    });

})

app.put("/EDITsingleusers",(req,res)=>{
    console.log(req.body);
    var condition={_id:req.body._id};
    var newValues={$set:{ufirstname: req.body.ufirstname,
    ulastname: req.body.ulastname,
    umail: req.body.umail,
    uphone: req.body.uphone,
    ubranch: req.body.ubranch,
    udesignation: req.body.udesignation,
    usalary: req.body.usalary,
    udob: req.body.udob,
    uleave: req.body.uleave,
    utleave: req.body.utleave
    }}
    db.collection("EmployeeDetails").update(condition,newValues,(error,data)=>{
        if(error){
            console.log("Can Not Able To update The Data in the DataBase");
            res.status(403).json("Error in Updating the Doc")
        }
        else{
            res.json("User Data Updated Successfully.!!!!!!");
        }
    })

    
})
app.delete("/deleteusers/:USERID",(req,res)=>{
    console.log(req.params);
    db.collection("EmployeeDetails").deleteOne({_id:Number(req.params.USERID)},(error,data)=>{
        res.json("User Deleted Successfully");
    });
    
})
app.get("/searchUser/:searchtxt?",(req,res)=>{
    console.log(req.params.searchtxt);
    if(req.params.searchtxt!=undefined){
    var search=new RegExp(req.params.searchtxt,"i");
    var searchCondition={ufirstname:search};
    var searchCondition={umail:search};
    var searchCondition={uid:search};
    var searchCondition={udesignation:search};
    
    
    }
    else{
        var searchCondition=null;   
    }
    db.collection("EmployeeDetails").find(searchCondition).toArray((error,data)=>{
        res.json(data);
        
    });
});



module.exports = app;
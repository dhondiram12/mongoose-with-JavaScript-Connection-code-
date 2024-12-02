// MongoDB connection with javaScript 

const mongoose = require('mongoose');

//asyc function are used here .
main().then(()=>{
    console.log("Connection Successful......")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}


// here defined Schema name eith userSchema 
const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age   :Number,
    
});

// here Created a new model instance 

const User = mongoose.model("User",userSchema);




const user1 = new User({
    name : "dhondiram",
    email: "dhavredhondiarm@gmail.com",
    age : 21, 
});




user1
.save()
.then((res) => {
    console.log(res, "No Such error's available here ")
}).catch(err=>{
    console.log(err, "Something Going Worng There  ...........");
})



// student1.save();
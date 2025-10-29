const mongoose=require("mongoose")

const conn=async (req,res)=>{
   try {
     await mongoose.connect("mongodb+srv://shr3yansh__:Shr3y%400610@todo.b9jtccx.mongodb.net/?retryWrites=true&w=majority&appName=todo").then(()=>{
        console.log("mongodb connected")
    })
   } catch (error) {
    res.status(400).json({
        messsage:"not connected"
    })
   }
}
conn();
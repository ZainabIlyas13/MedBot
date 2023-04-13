const express=require('express');
const app=express();
app.get('/',(req,res)=>{
  res.send("rameen");
});
app.listen(3001,()=>{
  console.log("server is running at 3000");
})
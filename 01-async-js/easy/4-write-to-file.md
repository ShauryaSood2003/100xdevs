## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs=require("fs");
fs.readFile("a.txt","utf-8",(err,data)=>{
    let item=data;
    let add="\nyoyo shaurya nice to meet you";
    fs.writeFile("a.txt",item+add,(err)=>{
        if(err){
            console.log("cannot write");
        }else{
            console.log("added succesfully");
        }
    });
});
## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

const fs=require("fs");
fs.readFile("a.txt","utf-8",(err,data)=>{
    const item=data.split(" ");
    let ans="";
    item.forEach((i)=>{
        if(i!=''){
            ans=ans+i+" ";
        }
    });
    fs.writeFile("a.txt","Edited by me: "+ans,(err)=>{
        if(err){
            console.log("soory");
        }else{
            console.log("done");
        }
    })
})
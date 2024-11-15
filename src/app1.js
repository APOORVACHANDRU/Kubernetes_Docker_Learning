var fs= require('fs')

// fs.readFile('calc.js','utf8',function(err,data){
//     console.log(data);
// })

// fs.writeFile('calc1.js','console.log("done")',function(err,data){
//     console.log("file created");
// })

// fs.appendFile('calc1.js','console.log("done");',function(err,data){
//     console.log("file created");
// })

fs.unlink('calc1.js',function(err){
    console.log("file deleted");      // calc1.js deleted from folder 
})
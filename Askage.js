const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your test: ', (answer) => {
    
    
    var age= parseInt(answer);
    addyears(age,5);
    addyears(age,20);
    addyears(age,30);
    
    rl.close();
    
    
    
});

function addyears(age,increment){
    
    var test = age + increment;
    if (test < 15)
  console.log("After" + increment + " years: I don't have to think about my life yet.");
  else if ((test > 15) && (test < 30))
   console.log("After" + increment + " years: Need to finish studies and find a job.");
  else if ((test <= 30) && (test < 35))
   console.log("After" + increment + " years: I need to marry.");
  else if ((test >= 35) && (test < 40))
    console.log("After" + increment + " years: I will rear children.");
  else if ((test >= 40) && (test <= 59))
    console.log("After" + increment + " years: Prepare to retire.");
  else if(test >= 60)
    console.log("After" + increment + " years:    I will now retire.");
    
}


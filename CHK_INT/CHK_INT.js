function posint(a,b,c){
    if (a>0 && b>0 && c>0) 
    {
     /*return (a%10==b && b%10===c%10);*/  
     return a % 10 === b % 10 && b % 10 === c % 10 && a % 10 === c % 10; 
     
     //document.write(true);
     
    } 
    else
    {
      return false;
    }
  }  
  var a =+prompt('Enter 1st number');
  var b =+prompt("Enter 2nd number");
  var c =+prompt('Enter 3rd number');
  document.write(posint(a,b,c));
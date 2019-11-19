function add(a,b){
    return a+b;
}
//add(12,23);
function calculateGreater(){
       var num1 = parseInt(prompt("Enter your num1"));
       var num2 = parseInt(prompt("Enter your num2"));
       
       if(num1>num2){
           console.log("Num1 is greater");
       }else{
           console.log("Num2 is greater");
       }
    }
    
    calculateGreater();
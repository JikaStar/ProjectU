//javascript is object-based language. Everything is an object in JS.
//Javascript is template based not class based. Here we dont create class to get object. But we direct create objects.
//a js object is an entity having state and behavior
function Car(){
    this.color="toyota";
    this.engine="camry";
    this.brand="BMW";
    this.search="by.css('input')";
    this.getModel=function(){
        console.log("this is 2020 model");
    };
}
var a = new Car();
a.getModel();
console.log(a.engine);

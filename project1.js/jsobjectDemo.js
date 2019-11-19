//javascript is object-based language. Everything is an object in JS.
//Javascript is template based not class based. Here we dont create class to get object. But we direct create objects.
//a js object is an entity having state and behavior
function Car(){
    this.firstInput=element(by.model("first"));
    this.secondInput=element(by.model("second"));
    this.goButton=element(by.id("gobutton"));
    this.result=element(by.css("h2[class='ng-binding']"));
    this.color="toyota";
    this.engine="camry";
    this.brand="BMW";
    this.search="by.css('input')";
    this.getUrl=function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
    };
}
module.exports = new Car();
//a.getModel();
//console.log(a.engine);

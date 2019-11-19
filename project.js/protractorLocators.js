var obj=require("./jsobjectDemo.js");
var d=require("./jasmine-dataprovider.js");
var using=require("jasmine-data-provider");
describe('Protractor', function() {

    beforeEach(function() {
        obj.getUrl();
    });
    //data stores actual data
    //description stores sub object name
    //for every iteration one data set is picked
    using(d.DataDriven,function(data, description){
 
    it('should open angular  js website'+description, function() { //to see every test description on reports
             
       obj.firstInput.sendKeys(data.firstInput);
       //element(by.model("operator")).
       obj.secondInput.sendKeys(data.secondInput);
       obj.goButton.click();
       //css tagname[attribute='value']
       expect(obj.result.getText()).toBe(data.result);
       //Jasmine takes care of promise resolve
       obj.result.getText().then(function(text){
           console.log(text);
       });
    
    afterEach(function() {
        console.log("Test is complated");
    });
        
    
    });
        
});
});
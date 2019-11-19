describe('Chain Locators', function() {
  
    
    it('should open angular  js website', function() { 
        browser.get('http://juliemr.github.io/protractor-demo/');
        //repeater, chain locators, css identical tags
        element(by.model("first")).sendKeys("8");
       //element(by.model("operator")).
       element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
       element(by.model("second")).sendKeys("9");
       element(by.id("gobutton")).click();
       element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
                console.log(text);
       });
       
    });
});
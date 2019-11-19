describe('Protractor', function() {
     function addOperator(a,b){
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click();
     }
    
    it('should open angular  js website', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        
        addOperator(2,4);
        addOperator(3,4);
        addOperator(5,4);
        addOperator(9,4);
       
        element.all(by.repeater("result in memory")).count().then(function(text){
            console.log(text);
        });
        element.all(by.repeater("result in memory")).each(function(item){
            item.element(by.css("td:nth-child(3)")).getText().then(function(text){
                console.log(text);
       });
        });

    });
        
});
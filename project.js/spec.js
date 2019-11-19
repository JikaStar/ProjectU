describe('Protractor', function() {
  
    
    it('should open angular  js website', function() {
        browser.get('http://angularjs.org');
        
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(5000);
        console.log("Im the last one");
    });
        
});
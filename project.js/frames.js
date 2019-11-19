describe('Protractor alerts steps', function() {
  
    it('should open website', function() {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();

        browser.get("http://qaclickacademy.com/practice.php");
        browser.switchTo().frame("iframe-name");
        element(by.css("a[href*='sign_in']")).getText().then(function(text){
            console.log(text);
        });
    });
});
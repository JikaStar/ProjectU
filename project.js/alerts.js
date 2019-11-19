describe('Protractor alerts steps', function() {
  
  it('should open website', function() {
      browser.waitForAngularEnabled(false);
      browser.get("http://qaclickacademy.com/practice.php");
      element(by.id("confirmbtn")).click();
           browser.switchTo().alert().accept().then(function(){  //dismiss
               browser.sleep(3000);
           });


  });
      
});
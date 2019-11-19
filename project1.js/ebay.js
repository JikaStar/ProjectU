describe('automate ebay', function() {
  
  it('show open ebay.com', function() {
      browser.waitForAngularEnabled(false);
      browser.get("https://www.ebay.com/");
      element(by.id("gh-ac")).sendKeys("Book");
     // browser.sleep(3000);
     // element(by.id("gh-cat")).element(by.css("option:nth-child(5)")).click();
    //browser.sleep(3000);
     element(by.id("gh-btn")).click();
     browser.sleep(3000);
  });
      
});
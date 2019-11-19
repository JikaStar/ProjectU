describe('automate ebay', function() {
  
  it('show open ebay.com', function() {
      browser.waitForAngularEnabled(false);
      browser.get("https://www.ebay.com/");
      element(by.id("gh-ac")).sendKeys("Book");


  });
      
});
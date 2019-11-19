describe('Paypal task', function() {

    it('Open Google.com',function(){
     browser.waitForAngularEnabled(false);
     browser.get("https://www.google.com/");
     expect(element(by.id("hplogo")).isDisplayed()).toBe(true);
     //expect(element(by.name("btnK")).isDisplayed()).toBe(true);
     //browser.actions().mouseMove(element(by.name("btnK")).click()).perform();
    //  var googleSearch=element(by.xpath("(//input[@value='Google Search'])[2]"));
    //  browser.actions().mouseMove(googleSearch).perform();
    //  expect((googleSearch).isDisplayed()).toBe(true);
     //Assert.assertTrue(googleSearch.isDisplayed);
     //browser.sleep(3000);
     expect(element(by.xpath("(//input[@value='Google Search'])[2]")).isDisplayed()).toBe(true);
     expect(element(by.xpath("//input[@id='gbqfbb']")).isDisplayed()).toBe(true);
     browser.sleep(3000);

     
         
     });
    });
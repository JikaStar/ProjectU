var PaypalPage = require('./Paypal.page.js');
describe('Paypal task', function() {

    it('should navigate to Google.com and verify sequence steps ',function(){
     browser.waitForAngularEnabled(false);
     browser.get("https://www.google.com/");
     expect(PaypalPage.googleLogo.isDisplayed()).toBe(true);
     
     expect(PaypalPage.googleSearchBtn.isDisplayed()).toBe(true);
     expect(PaypalPage.googleLuckyBtn.isDisplayed()).toBe(true);
           
     expect(PaypalPage.googleSearchInput.sendKeys("Paypal"));
     PaypalPage.googleLuckyBtn.click();
     var actualUrl = '';
    var expectedUrl ="https://www.paypal.com/";//suppose to be https://www.paypal.com/us/home 
     browser.getCurrentUrl().then(function(actualUrl){
        expect(actualUrl).toBe(expectedUrl);
    });

    PaypalPage.sitemapLink.click();
    var actualUrl2 = '';
    var expectedUrl2 = "https://www.paypal.com/us/webapps/mpp/full-sitemap";
    browser.getCurrentUrl().then(function(actualUrl2){
    expect(actualUrl2).toBe(expectedUrl2);   
    });
    var resultTitles=PaypalPage.allLinksList;
    resultTitles.getText().then(function(links){
        console.log(links);
    });
});
});


    
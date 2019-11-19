var PaypalPage=function(){

    this.googleLogo=element(by.id("hplogo"));
    this.googleSearchBtn=element(by.xpath("(//input[@value='Google Search'])[2]"));
    this.googleLuckyBtn=element(by.xpath("//input[@id='gbqfbb']"));
    this.googleSearchInput=element(by.name("q"));
    this.sitemapLink=element(by.css("a[href*='sitemap']"));
    this.allLinksList=element.all(by.xpath("//a"));
    
    };
    module.exports=new PaypalPage();
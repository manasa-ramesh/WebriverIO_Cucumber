const WebDriver = require('webdriverIO');
const { Given, When, Then } = require('@cucumber/cucumber');
const { random} = require('../utils/randomData');
const assert = require('assert');
const randomData = require('../utils/randomData');

Given(/^I open the MyStore site$/, function () {
    browser.url("http://automationpractice.com/index.php");
    browser.maximizeWindow();
    console.log('Launching the browser');
  });

  Then(/^I expect that the signIn button does exist$/, function () {
    browser.$('//*[@id="header"]/div[2]/div/div/nav/div[1]/a').isExisting();
  });

  Given(/^The user clicks on signIn button$/, function () {
    browser.$('//*[@id="header"]/div[2]/div/div/nav/div[1]/a').click();
  });

  When(/^User enters the email address$/, function () {
    let ranEmail = randomData();
    console.log("random email",ranEmail);
    browser.$('#email_create').setValue(ranEmail);
    browser.takeScreenshot();
  });
 
  Then(/^The user click on CreateAccount button$/, function () {
    browser.$('#SubmitCreate').click();
  });

  Given(/^The user lands on Create Account page$/, function() {
    browser.takeScreenshot();
    const heading = browser.$('//*[@id="noSlide"]/h1');
    // const isDisplayed = browser.$('//*[@id="noSlide"]/h1').isDisplayed();
    console.log(heading);
    expect(heading).toHaveText('CREATE AN ACCOUNT');
  })


  //TODO : Create a common stp-def to set the input field by passing the field element as argument
  Then(/^The user entres the personal information$/, function () {
    //select Title
    const title = browser.$('//*[@id="account-creation_form"]/div[1]/div[1]');
    if(!title.isSelected){
      title.selectByAttribute("value", "1");
    }

    //Enter first name, last name
    browser.$('#customer_firstname').setValue("TestuserFirstname");
    browser.$('#customer_lastname').setValue("TestuserLastname");

    //set if email is empty
    const custEmail = browser.$('#email');
    if(custEmail.getValue.isEmpty){
      custEmail.setValue(randomData());
    }
    //Enter customer email
    // let random = 1;
    // random = 100 + (Math.random() * ((10000 - 100) + 1));
    // console.log("number", random);
    // let ranEmail = "test" + random + "@test.com";
    // console.log("random email",ranEmail);
    // const email = browser.$('#email');
    
    // browser.$('#email').setValue(ranEmail);
    // browser.pause(1000);
    // console.log("Create email", ranEmail);

    //Enter password
    browser.$('#passwd').setValue("TestPassword");

    //Enter DOB
    browser.$('#days').selectByIndex("3");
    browser.$('#months').selectByIndex("2");
    browser.$('#years').selectByAttribute("value", "2000");

    //Enter address
    browser.$('#firstname').setValue("TestuserFirstname");
    browser.$('#lastname').setValue("TestuserLastname");
    browser.$('#address1').setValue("TestAddress 18");
    browser.$('#city').setValue("New York");
    browser.$('#id_state').selectByVisibleText("New York");
    browser.$('#postcode').setValue('00992');

    //Enetr phone
    browser.$('#phone_mobile').setValue("07777888");
    browser.$('#alias').setValue("Test address");
  });

  Then(/^The user click on Register button$/, function () {
    browser.$('#submitAccount').click();
    browser.pause(1000);
    browser.takeScreenshot();
  });

  Given(/^The user selects the product and adds to cart$/, function(){
    var parentGUID = browser.getWindowHandle();
    console.log("Parent guid", parentGUID);
    console.log("Parent window", browser.getTitle());
    browser.$('//*[@id="block_top_menu"]/ul/li[2]/a').click();
    browser.pause(3000);
    const title = browser.getTitle();
    assert.strictEqual(title, 'Dresses - My Store')
 //   browser.$('#categories_block_left > div > ul > li:nth-child(1) > a').click();
  //   browser.pause(5000);
  // //const ele=$('//*[@id="center_column"]/ul/li[1]/div/div[1]/div/a[1]/img');
  // const ele = $('#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span');
  // ele.scrollIntoView(20,100);
  // ele.waitForExist({ timeout: 5000 });
  //  ele.waitForDisplayed({ timeout: 5000 });
  //  ele.waitForEnabled({ timeout: 5000 });

  //   ele.waitForClickable({timeout: 3000});
  //   ele.click();
    
  //  const isDisplayed = ele.isExisting();
  //  console.log("isDisplayed",isDisplayed);
  //  if(isDisplayed){
  //   ele.click();
  //  browser.pause(3000);c
  //  }
  //  browser.pause(10000);
  //  const cart = $('//*[@id="add_to_cart"]/button');
  //  cart.waitForExist({ timeout: 5000 });
  //  cart.waitForDisplayed({ timeout: 5000 });
  //  cart.waitForEnabled({ timeout: 5000 });

  //  cart.waitForClickable({timeout: 3000});
  // const cartExists = cart.isExisting();
  // if(cartExists){
  //    cart.click();

  //  }
  });



   
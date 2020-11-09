const { Browser } = require("selenium-webdriver");
const { runInThisContext } = require("vm");
const { async } = require("q");
let EC = protractor.ExpectedConditions;

var RyanairTest = function() {

  //Set trip type 
  var setTrip = element(by.xpath("(//icon[@classlist='icon-ie-16-10 icon-10'])[2]"));
  //Accept the cookie pop-up that blocks elements on browser initiation
  var XptCookie = element(by.xpath("//button[@data-ref='cookie.accept-all']"));
  // Input Destination 
  var DestInput = element(by.id('input-button__destination'));
  // Search by destination airport
  var place = element(by.xpath("//span[@data-ref='airport-item__name']"));
  // Select date to leave 
  var leaveDate = element(by.xpath("//div[@data-id='2020-11-20']"));
   // Select button that enables multiple people to be assigned to the trip
  var People = element(by.xpath("//div[@class='counter__button-wrapper--enabled']"));
  // Select the search button
  var search = element(by.xpath("//button[@data-ref='flight-search-widget__cta']"));
  // Select flight from offered choices
  var selectflight = element(by.xpath("//span[contains(@class,'price-value h2')]"));
  // Select fare type 
  var selectFare = element(by.xpath("//button[contains(@class,'fare-card__button fare-card__price')]")); 
  // Interact with login prompt
  var login = element(by.xpath("//span[@class='login-touchpoint__login-later h3']"));
  // Interact with title dropdown of the first passenger 
  var selectTitlebtn = element(by.xpath("//button[contains(@class,'dropdown__toggle b2')]"));
  // Select the title of the first passenger
  var selectTitletxt = element(by.xpath("//div[@class='dropdown-item__label b2']"));
  // set the first passengers name
  var set1stpsgname = element(by.id("formState.passengers.ADT-0.name"));
  // set the first passengers last name
  var set1stpsglname = element(by.id("formState.passengers.ADT-0.surname"));
  // Interact with title dropdown of the second passenger 
  var selectTitlebtn2 = element(by.xpath("(//button[@type='button'])[2]"));
  // select the title of the second passenger 
  var selectTitletxt2 = element(by.xpath("(//div[@class='dropdown-item__label b2'])[2]"));
  // set the second passengers name 
  var set2ndpsgname = element(by.id("formState.passengers.ADT-1.name"));
  // set the second passengers last name 
  var set2ndpsglname = element(by.id("formState.passengers.ADT-1.surname"));
  // click the next page 
  var nxtpage = element(by.xpath("//button[@class='continue-flow__button ry-button--gradient-yellow']"));
  // select seat (random seat allocator)
  var select1stseat = element(by.xpath("//button[contains(@class,'seats-v2-navigation__button h4')]"));
  // Select the next page 
  var seatnxtpage = element(by.xpath("//button[contains(@class,'random-allocation-info__actions__button b2')]"));
  // Select the baggage (first option)
  var selectBaggage = element(by.xpath("//label[@class='ry-radio-circle-button__label']"));
  // Continue from the baggage page 
  var continueBaggage = element(by.xpath("//button[@color='gradient-yellow']"));
  // Continue from the page selling aditional options & elements
  var continueoptions = element(by.xpath("//button[contains(@class,'ry-button--full ng-tns-c167-1')]"));
  // Interact with the checkout area
  var checkout = element(by.xpath("//div[@autoclose='outside']"));
  // Click the pay area of the basket 
  var bsktpay = element(by.xpath("//button[@class='ry-button--full ry-button--gradient-yellow']"));
  // Register 
  var rgster = element(by.xpath("(//button[@class='ry-button--anchor-blue ry-button--anchor'])[3]"));
      
  // Informs selenium to initiate a session and resolve DNS to grab URL. 
  this.get = async function() {
    await browser.get('https://www.ryanair.com/pl/pl');
  };

  // Function to click the accept button on cookies.
  this.AcceptCookie = async function(){
   await XptCookie.click();
  };

  this.setTrip = async function(){

    await setTrip.click();


   }

  
  // Inputs name of desintation into search box
  this.setName = async function(name) {
    await DestInput.sendKeys(name);
  };

  // [NEEDS REFACTOR] clicks on allocated area to assign airport - issue may occue depending on selenium onLoad speed.  
  this.selectPlace= async function() {
    await place.click();
  };

  // Assigns the date to leave for the trip by clicking within the  calendar
  this.setleaveDate = async function() {

    await leaveDate.click();

  };

  // Assigns the arriveDate by clicking within the calendar
  this.setarriveDate = async function(){

    await arriveDate.click();


  };

  // Uses the xpath to the + people function and adds passenger = 2. 
  this.setPeople = async function () {

  await People.click();
  
  };

  // searches for the flights based on date input
  this.getSearch = async function() {

    await search.click();


  };
  
  // Selects the outward journey flight from the avalible options
  this.getFlight = async function() {

    await selectflight.click();

   };


  // Selects the outward journey fare
   this.getFare = async function() {

 
    await selectFare.click();


   };


   // Skip the login screen
   this.setloginstatus = async function() {

    await login.click();


   }

   // Set the title of the passenger by clicking the dropdown box and selecting the text
   this.setTitle = async function(){

    await selectTitlebtn.click();
    
   }

   // Find the correct text and click to accept
   this.setTitletext = async function(){

     await selectTitletxt.click();


   }

   // Interact with the textbox and enter first passengers name 
   this.set1stPassengersName = async function(Firstname){

    
    await set1stpsgname.sendKeys(Firstname);

   }

   // Interact with the textbox and enter second passengers name
   this.set1stPassengersSurname = async function(Surname){

    await set1stpsglname.sendKeys(Surname);


   }

   // Interact with the second passengers title dropdown button
   this.clickTitlebtn2 = async function(){

    await selectTitlebtn2.click();

   }

   // Find the correct title and click to accept
   this.clickTitletxt2 = async function(){

    await selectTitletxt2.click();

   }

  // Set the second passengers name
   this.set2ndPassengersName = async function(Firstname2){

    await set2ndpsgname.sendKeys(Firstname2);


   }

   // Set the second passengers name 
   this.set2ndPassengersSurname = async function(Surname2){

    await set2ndpsglname.sendKeys(Surname2);


   }


   // Click the next page 
   this.nextpage = async function(){

    await nxtpage.click();

   }

   // Select the seat (random allocation)
   this.set1stseat = async function(){

    await select1stseat.click();

   }

   // Proceed to next page
   this.nextpage2 = async function(){

    await seatnxtpage.click();

   }

   // Select the baggage type by interacting with the radio buttons
   this.selectBaggage = async function(){

    await selectBaggage.click();


   }

   // Continue from baggage selection page
   this.continueBaggage = async function(){


    await continueBaggage.click();

   }

   // Continue through the extras page
   this.coninueoptions = async function() {


    await continueoptions.click();

   }

   // Select the checkout basket
   this.selectcheckout = async function() {

    await checkout.click();


   }

   // Select pay within the checkout basket
   this.paybasket = async function() {


    await bsktpay.click();

   }

   // Click on the registration button
   this.register = async function() {

    await rgster.click();


   }
   

  // Not async, returns the element
  // this.getGreeting = function() {
  //   return greeting;
    
  // };
};
module.exports = new RyanairTest();
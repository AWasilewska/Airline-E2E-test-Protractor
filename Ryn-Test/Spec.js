var angularHomepag = require('./RyanairTest');
const RyanairTest = require('./RyanairTest');
const { runInNewContext } = require('vm');
describe('Ryanair Test', function() {
  it('Facillitate a booking', async function() {
      
    await RyanairTest.get();
    
    await RyanairTest.AcceptCookie();

    await RyanairTest.setTrip();

    await RyanairTest.setName('Wlochy');

    await RyanairTest.selectPlace('Bolonia');

    //expect(await RyanairTest.selectPlace()).toEqual('Bolonia');

    await RyanairTest.setleaveDate();

    await RyanairTest.setPeople();

    await RyanairTest.getSearch();

    await RyanairTest.getFlight();

    await RyanairTest.getFare();

    await RyanairTest.setloginstatus();
   
    await RyanairTest.setTitle();

    await RyanairTest.setTitletext();

    await RyanairTest.set1stPassengersName('Robert');

  //  expect(await RyanairTest.set1stPassengersName()).toEqual('Robert');

    await RyanairTest.set1stPassengersSurname('Lewandowski');

    await RyanairTest.clickTitlebtn2();

    await RyanairTest.clickTitletxt2();

    await RyanairTest.set2ndPassengersName('Joanna');

    await RyanairTest.set2ndPassengersSurname('Jedrzejczyk');
    
    await RyanairTest.nextpage();

    await RyanairTest.set1stseat();

    await RyanairTest.nextpage2();

    await RyanairTest.selectBaggage();

    await RyanairTest.continueBaggage();

    await RyanairTest.coninueoptions();

    await RyanairTest.selectcheckout();

    await RyanairTest.paybasket();

    await RyanairTest.register();
    
  });
});

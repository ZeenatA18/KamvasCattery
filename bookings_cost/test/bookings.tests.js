describe("funtion should take in a booking requests to Kamva's Cattery",function(){

it(Should cost 'R135.00' when called with check_in_day: 'Monday',duration: 3,cat_name : 'Snowy', function(){

assert.equal('R135.00',bookingCost('Monday'))

})


})

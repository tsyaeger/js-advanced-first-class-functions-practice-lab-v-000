// Code your solution in this file!

const logDriverNames = function (drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  })
}

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function(driver) {
    if (driver.hometown == hometown) {
      console.log(driver.name)
    }
  })
}

const driversByRevenue = function (drivers, revenue) {
  
}


describe('driversByRevenue()', function () {
    it('uses the sort() method to return a new array of drivers ordered by revenue (lowest to highest)', function () {
      expect(driversByRevenue(drivers)[0].name).to.eql('Sally');

      expect(driversByRevenue(drivers)[drivers.length - 1].name).to.eql('Annette');
    });
  });





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

const driversByRevenue = function (drivers) {
  return [...drivers].sort(function (a, b) {
    return a.revenue - b.revenue;
  });
};

const driversByName = function (drivers) {
  return [...drivers].sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
};


const totalRevenue = function (drivers) {
	var total = 0
  return drivers.reduce(function(total, driver) {
    return total + driver.revenue;
  }, 0);
};


describe('totalRevenue()', function () {
    it('uses the reduce() method to sum the revenue of every driver and return the total', function () {
      expect(totalRevenue(drivers)).to.equal(18500);
    });
  });

  describe('averageRevenue()', function () {
    it('calculates the average revenue across all drivers', function () {
      expect(averageRevenue(drivers)).to.equal(3700);
    });
  });
});






// Code your solution in this file!

const logDriverNames = function (drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  })
}

const logDriversByHometown = function (drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.)
  })
}

describe('logDriversByHometown()', function () {
    let spy;

    beforeEach(function () {
      spy = sinon.spy(console, 'log');
    });

    afterEach(function () {
      spy.restore();
    });

    it('logs the name of each driver whose hometown matches the passed-in argument', function () {
      logDriversByHometown(drivers, 'Pittsburgh');

      expect(spy.calledWithExactly('Bobby')).to.be.true;

      expect(spy.calledWithExactly('Sammy')).to.be.true;

      expect(spy.calledWithExactly('Annette')).to.not.be.true;
    });
  });
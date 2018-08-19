// Code your solution in this file!

const logDriverNames = function (drivers) {
  drivers.forEach(function(driver)) {
    console.log(driver.name)
  }
}

describe('logDriverNames()', function () {
    let spy;

    beforeEach(function () {
      spy = sinon.spy(console, 'log');
    });

    afterEach(function () {
      spy.restore();
    });

    it('logs the name of each driver', function () {
      logDriverNames(drivers);

      expect(spy.calledWithExactly('Bobby')).to.be.true;

      expect(spy.calledWithExactly('Sally')).to.be.true;

      expect(spy.calledWithExactly('Sammy')).to.be.true;

      expect(spy.calledWithExactly('Annette')).to.be.true;

      expect(spy.calledWithExactly('Bobby')).to.be.true;
    });
  });

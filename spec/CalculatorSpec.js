describe("Profit calculator", function() {

  var Calculator = require('../Calculator');

  beforeEach(function() {
    calculator = new Calculator();
  });

  it("should take into account taxes", function() {
    var taxes = 20,
        amount = 100,
        comission = 0,
        tin = 0,
        result = calculator.calculate(amount, taxes, comission, tin);

    expect(result).toEqual(80);
  });

  it("should take into account comission", function() {
    var taxes = 20,
        amount = 100,
        comission = 10,
        tin = 0,
        result = calculator.calculate(amount, taxes, comission, tin);

    expect(result).toEqual(72);
  });

  it("should take into account the TIN", function() {
    var taxes = 20,
        amount = 100,
        comission = 10,
        tin = 5,
        result = calculator.calculate(amount, taxes, comission, tin);

    expect(result).toEqual(3.6);
  });

  describe("should have a function able to calculate the TAE", function() {

    it("when annual interest payment frequency", function() {
      var tin = 5,
          interestsPaymentFrequency = 1,
          result = calculator.calculateTae(tin, interestsPaymentFrequency);

      expect(result).toEqual(0.05);
    });

    it("when biannually interest payment frequency", function() {
      var tin = 5,
          interestsPaymentFrequency = 2,
          tae = calculator.calculateTae(tin, interestsPaymentFrequency);

      expect(tae).toEqual(0.050625);
    });
  });

});

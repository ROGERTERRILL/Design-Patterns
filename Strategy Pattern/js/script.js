// The following three are just different strategies

function Fedex() {
  this.calculate = (package) => {
    return 2.45;
  };
}

function UPS() {
  this.calculate = (package) => {
    return 1.56;
  };
}

function USPS() {
  this.calculate = (package) => {
    return 4.5;
  };
}

// 
function Shipping() {
  this.company = '';
  this.setStrategy = (company) => {
    this.company = company;
  };

  // Once strategy is set, run common method
  // this.company changes to either the ups, fedex or usps instance
  this.calculate = (package) => {
    return this.company.calculate(package);
  };
}

// Instantiate each strategy
const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();

/**
 * This package is just for demonstration, it doesn't do anything
 * since there is no logic to use it.
 * */
const package = {
  from: 'California',
  to: 'Colorado',
  weight: 20.76,
};

// Instantiate Shipping
const shipping = new Shipping();

// Test all three strategies
shipping.setStrategy(fedex);
console.log(`Fedex ${shipping.calculate(package)}`);

shipping.setStrategy(ups);
console.log(`UPS ${shipping.calculate(package)}`);

shipping.setStrategy(usps);
console.log(`USPS ${shipping.calculate(package)}`);

function shop (place, minimum, maximum, dpCustomer, perHour) {
this.place = place; 
this.minimum = minimum;
this.maximum = maximum; 
this.dpCustomer = dpCustomer;
this.perHour = perHour;

this.randomHourlyCustomers = function () {
 return Math.floor(Math.random() * ((this.maximum - this.minimum) + 1) + this.minimum);
 };

 this.getDonutsPerHour = function () {
   return Math.floor(this.randomHourlyCustomers() * this.dpCustomer);
   };

 this.getDonutsPerDay = function () {
  return Math.floor(this.getDonutsPerHour() * this.perHour);
  };

  this.getInfo = function () {
    console.log("The " + this.place + " location should make " + this.getDonutsPerHour() + " donuts per hour which is " + this.getDonutsPerDay() + " donuts per day.");
  };

  this.getInfo();

}

this.DonutMaster = function () {
  this.allLocations = [];

  this.addShop = function (place, minimum, maximum, dpCustomer, perHour) {
    this.allLocations.push(new donutShop(place, minimum, maximum, dpCustomer, totalHours));
    return this.allLocations;
  };

    this.generateReport = function () {
      for (var i=0; i<this.allLocations.length;i++) {
        this.allLocations[i].getInfo();
        console.log(generateReport)
    };
  };
}

var downtown = new shop ("Downtown", 8, 43, 4.5, 8);
var capitolHill = new shop ("Capitol Hill", 4, 37, 2, 8);
var southLakeUnion = new shop ("South Lake Union", 9, 23, 6.33, 8);
var wedgewood = new shop ("Wedgewood", 2, 28, 1.25, 8);
var ballard = new shop ("Ballard", 8, 58, 3.75, 8);
// Code your solution in this file!

const logDriverNames = function (drivers) {
  drivers.forEach(function (driver){
    console.log(`${driver.name}`);
  });
}

// ------------------------------------------------------------

const logDriversByHometown = function(drivers, location) {
  drivers.forEach(function (driver){
    if (driver.hometown === location) {
      console.log(`${driver.name}`)};
  });
}

// ------------------------------------------------------------

//Receives array of `driver` objects
// returns a new array of `driver` objects
//sorted by their `revenue` attribute from lowest to highest

const driversByRevenue = function(drivers) {
  newArray = drivers.slice()

  return newArray.sort(function (dA, dB) {
    return dA.revenue - dB.revenue;
  });
}
// ------------------------------------------------------------

const driversByName = function(drivers) {
  newArray = drivers.slice()
  return newArray.sort(function (dA, dB) {
    return dA.name.localeCompare(dB.name);
  });
};

// NOTES localeCompare enables a case-insensitive sort of an array.

// ------------------------------------------------------------
const totalRevenue = function(drivers) {
  return drivers.reduce(function (accumulator, currentDriver){
    return accumulator + currentDriver.revenue;
  }, 0);
};

// NOTES https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// ------------------------------------------------------------

const averageRevenue = function(drivers){
  return totalRevenue(drivers) / drivers.length
}

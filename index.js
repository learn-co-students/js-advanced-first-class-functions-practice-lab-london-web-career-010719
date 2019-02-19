// Code your solution in this file!


const logDriverNames = function (array) {
  array.forEach(driver => { console.log(driver.name) 
  });
};


const logDriversByHometown =  function (array, town) {
  array.forEach(driver => {
    if (driver.hometown === town) {
      console.log(driver.name);
    }
  });
};

const revenueSorter = function (driver1, driver2) {
  return driver1.revenue - driver2.revenue;
};


const driversByRevenue = function (drivers){
   const topEarners = [...drivers].sort(revenueSorter);
    return topEarners;
}; 


const nameCompare = function (driver1, driver2){
  return driver1.name.localeCompare(driver2.name)
};


const driversByName = function (drivers){
const newArray = [...drivers].sort(nameCompare)
return newArray
}; 

const reducer = (accumulator, currentValue) => accumulator + currentValue;


const totalRevenue = function(drivers){

  const revenueArray = drivers.map(driver => driver.revenue);
    const total = revenueArray.reduce(reducer);
      return total

};


const averageRevenue = function (drivers){
const total = totalRevenue(drivers);
  return total/drivers.length
}; 



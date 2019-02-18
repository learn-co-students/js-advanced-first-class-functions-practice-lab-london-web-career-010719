
function logDriverNames(drivers){
 drivers.forEach(function(x) {
  console.log(x.name);
});
}

function logDriversByHometown(drivers, place){
  const filt = drivers.filter(x => x.hometown == place)
  filt.forEach(function(x){
    console.log(x.name);
  });
}


function driversByRevenue(drivers){
 return drivers.slice().sort(function(a,b){
   return a.revenue - b.revenue
 })
}

function driversByName(drivers){
  return drivers.slice().sort(function (a, b) {
    return (a.name).localeCompare(b.name);
  });
}



const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};

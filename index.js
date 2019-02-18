// Code your solution in this file!

function logDriverNames(drivers){
  return drivers.forEach(
    function(driver,index,drivers){
      console.log(driver.name);
    }
  );
}

function logDriversByHometown(drivers,home){
  return drivers.forEach(
    function(driver,index,drivers){
      if (driver.hometown === home) {
        console.log(driver.name);
      }
    }
  );
}

function driversByRevenue(drivers){
  let newDrivers = drivers.slice();
  return newDrivers.sort(
    function (driverA,driverB){
      return driverA.revenue - driverB.revenue;
    }
  );
}

function driversByName(drivers){
  let newDrivers = drivers.slice();
  return newDrivers.sort(
    function (driverA,driverB){
      return driverA.name.localeCompare(driverB.name);
    }
  );
}

function totalRevenue(drivers){
  return drivers.reduce(
    function (agg,el,i,arr){
      return agg+el.revenue;
    }
  ,0);
}

function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length;
}

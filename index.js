function logDriverNames(drivers) {
    drivers.forEach(driver => { console.log(driver.name) })
}

function logDriversByHometown(drivers, hometown) {
    drivers.forEach(driver => {
       if (driver.hometown === hometown) {
           console.log(driver.name)
       }
    })
}

const revenueComparator = function (a, b) {
  return a.revenue - b.revenue
}

function driversByRevenue(drivers) {
    return [...drivers].sort(revenueComparator)
}

function driversByName(drivers) {
  return [...drivers].sort(function(a,b){
    return a.name.localeCompare(b.name)
  })
}

const reduceRevenue = function (agg, el) {
  return agg + el.revenue
}

function totalRevenue(drivers) {
  return drivers.reduce(reduceRevenue, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}

// Code your solution in this file!

function logDriverNames(driverObjects){
    driverObjects.forEach(driver => {
        console.log(driver.name)
    });
    
}

function logDriversByHometown(driverObjects, location) {
    driverObjects.forEach(driver => {
        if (driver.hometown === location)
            console.log(driver.name)
    })
}

function driversByRevenue(drivers) {
    let sortedDrivers = drivers.slice().sort((a, b) => {
        if ( a.revenue > b.revenue) return 1
        else if(b.revenue > a.revenue) return -1
        else return 0
    })
    return sortedDrivers
}

function driversByName(drivers) {
    return drivers.slice().sort(function (driverOne, driverTwo){
        return driverOne.name.localeCompare(driverTwo.name)
    })
}

function totalRevenue(drivers) {
    let revArray = []
    drivers.forEach(driver => {
        revArray.push(driver.revenue)
    })
    let totalRev = revArray.reduce((acc, cur) => acc + cur)
    return totalRev
}

function averageRevenue(drivers) {
    let revArray = []
    drivers.forEach(driver => {
        revArray.push(driver.revenue)
    })
    let totalRev = revArray.reduce((acc, cur) => acc + cur)
    let avgRev = totalRev / revArray.length
    return avgRev
}
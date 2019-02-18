const logDriverNames = function(arr) {
    arr.forEach(function(driver) {
        console.log(driver.name);
    })
}

const logDriversByHometown = function(arr, location) {
    const matchingDriver = arr.filter(function(driver) {
        return driver.hometown === location
    })
    matchingDriver.forEach(function(driver) {
        console.log(driver.name);
    })
}

const driversByRevenue = function(arr) {
    const newArr = [...arr];
    return newArr.sort(function(driver1, driver2) {
        return driver1.revenue - driver2.revenue;
    });
}

const driversByName = function (arr) {
    const newArr = [...arr];
    return newArr.sort(function(driver1, driver2) {
        return driver1.name.localeCompare(driver2.name);
    });
}

const totalRevenue = function(arr) {
    return arr.reduce(function (total, driver) {
        return total + driver.revenue;
    }, 0);
}

const averageRevenue = function(arr) {
    return totalRevenue(arr) / arr.length
}
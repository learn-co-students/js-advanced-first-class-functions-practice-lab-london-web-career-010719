// Code your solution in this file!

function logDriverNames(array){

  array.forEach(function(driver) {

    console.log(driver.name)

  });

}

function logDriversByHometown(array,location) {

    array.forEach(function(driver) {

        if (driver.hometown === location) {

            console.log(driver.name)
        }
    })

}



const driversByRevenue = function (array) {
  return array.slice().sort(function (driverOne, driverTwo) {

     return driverOne.revenue - driverTwo.revenue;

  })

}

const driversByName = function (array) {

  return array.slice().sort(function (driverOne, driverTwo){

  return driverOne['name'].localeCompare(driverTwo['name']);
})

}


const totalRevenue = function (array) {

  return array.reduce(function (total, driver){
      return driver.revenue + total

},0)


}


const averageRevenue = function (array) {


      return totalRevenue(array)/array.length



}

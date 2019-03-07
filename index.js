function produceDrivingRange(range) {
  return function (street1,street2) {
    const distance = parseInt(street2) - parseInt(street1)
    if (distance > range){
      return `${distance - range} blocks out of range`;
    } else {
      return `within range by ${range - distance}`;
    }
  }
}

function produceTipCalculator(percentage) {
  return function(fare) {
    return fare*percentage;
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor (name) {
      this.name = name;
      this.id = ++driverId;
    }
  }

}
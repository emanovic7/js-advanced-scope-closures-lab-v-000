

function produceDrivingRange(range){
  return function(blockStart, blockEnd){

    let start = parseInt(blockStart);
    let end = parseInt(blockEnd);
    let distanceTraveled = Math.abs(end - start);
    let difference = range - distanceTraveled;

    if( difference > 0){
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }

}


function produceTipCalculator(tip){

  return function(fare){
    return fare * tip;
  }
}


function createDriver(){
  let driverID = 0;

  return class{
    constructor(name){
      this.id = ++driverID
      this.name = name
    }
  }

}

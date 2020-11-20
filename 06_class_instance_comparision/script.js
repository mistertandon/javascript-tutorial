var Technology = function(technologyName, licenseName){

    this.frameworkName = technologyName;
    this.licenseName = licenseName;
    console.log(this);
}

Technology.prototype.forks = 0;
Technology.prototype.displayInfo = function(){

    console.log(this.frameworkName+' comes under '+ this.licenseName + ' license.');
}

var technology = function(technologyName, licenseName){

    return new Technology(technologyName, licenseName);
}

var myTechnology_a = '';
var myTechnology_b = '';
var myTechnology_c = '';
var myTechnology_ab = '';
var myTechnology_abi = '';
var myTechnology_bc = '';

myTechnology_a = technology('node', 'MIT');
myTechnology_b = technology('node', 'MIT');
myTechnology_abi = (myTechnology_a === myTechnology_b)?true:false;
console.log('Object myTechnology_a and myTechnology_b are identical equal : ' + myTechnology_abi);
myTechnology_ab = (myTechnology_a == myTechnology_b)?true:false;
console.log('Object myTechnology_a and myTechnology_b are equal : ' + myTechnology_ab);
myTechnology_c = myTechnology_b
myTechnology_bc = (myTechnology_b == myTechnology_c)?true:false;
console.log('Object myTechnology_c having reference to myTechnology_b, are they equal : ' + myTechnology_bc);







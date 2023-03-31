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

var myTechnology_i = '';
var myTechnology_ii = '';

myTechnology_i = technology('node', 'MIT');
console.log(myTechnology_i.displayInfo());

myTechnology_ii = technology('hapi', 'MIT');
console.log(myTechnology_ii.displayInfo());
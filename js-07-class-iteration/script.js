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

var myTechnology = '';

myTechnology = technology('node', 'MIT');
console.log(myTechnology.displayInfo());

// Iterating over myTechnology object
for(prop in myTechnology){
    console.log(prop+' : '+myTechnology[prop]);
}
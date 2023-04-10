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
var instanceValidation_a = '';
var instanceValidation_b = '';
myTechnology = new technology('node', 'MIT');

instanceValidation_a = myTechnology instanceof Technology;
instanceValidation_b = myTechnology instanceof Array;

console.log('myTechnology is instance of Technology class : '+instanceValidation_a);
console.log('myTechnology is instance of Technology Array : '+instanceValidation_b);

/**
 * Output
 *
 * myTechnology is instance of Technology class : true
 * script.js:28 myTechnology is instance of Technology Array : false
 */
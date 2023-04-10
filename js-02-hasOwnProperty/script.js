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

/**
 * Developing javascript code to determine property authenticity in context to
 * particular object.
 */
var frameworkNameProp = myTechnology.hasOwnProperty('frameworkName');
document.write('\'frameworkName\' property exists into myTechnology. :'+frameworkNameProp+'<br>');

var displayInfoProp = myTechnology.hasOwnProperty('displayInfo');
document.write('\'displayInfo\' property exists into Technology object : '+displayInfoProp+'.It is prototype chain property.<br>');

var anonymousPropExist = 'anonymous' in myTechnology;
document.write('\'anonymous\' property exists into Technology object : '+anonymousPropExist+'<br>');

var licenseNamePropExist = 'licenseName' in myTechnology;
document.write('\'licenseName\' property exists into Technology object : '+licenseNamePropExist+'<br>');


/**
 * Output
 * 
 * 'frameworkName' property exists into myTechnology. :true
 * 'displayInfo' property exists into Technology object : false. It is prototype chain property.
 * 'anonymous' property exists into Technology object : false
 * 'licenseName' property exists into Technology object : true Javascript OOP\'s concept - hasOwnProperty
 *
 */
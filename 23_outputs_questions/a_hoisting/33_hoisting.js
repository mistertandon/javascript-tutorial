var a = 2;
var b = 3;

var obj = {
    a: 1,
    b: 2,
    add: function () {
        console.log(this.a + this.b);
    }
}
//calling function add with respect to object obj
obj.add(); //3
var result = obj.add;
//GEC, var a and var b are defined on window object
result(); // NaN
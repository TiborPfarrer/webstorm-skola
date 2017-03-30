/**
 * Created by Ucenik on 30.3.2017..
 */
var setAge = function (newAge) {
    this.age = newAge;
};

    var susan = new Object();
    susan.age=25;
    susan.setAge =setAge();
    var bob= new Object();
    bob.age=30;
    bob.setAge=setAge();

    bob.setAge = setAge(35);
    susan.setAge = setAge(33);
    console.log(bob.age);
    console.log(susan.age);

    if (bob.age > susan.age)
        console.log("bob ima vise godina.");
    else if (susan.age > bob.age)
        console.log("susan ima vise godina");
    else
        console.log("imaju isto godina.");
//
// var rectangle = new Object();
//
// var calcArea = function (height1,width1){
//     var area = height1*width1;
//     console.log(area);
// };
// var calcPerimiter = function (height1,width1) {
//     var area1 = 2*(height1+width2);
//     console.log(area1)
// }
//
// rectangle.calcArea= calcArea;
// rectangle.calcArea(prompt(),prompt());














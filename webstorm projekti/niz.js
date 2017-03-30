/**
 * Created by Ucenik on 23.3.2017..
 */
document.getElementById("ispis");
/*var l = ["prvi", "drugi", "treci", "cetvrti", "peti", "sesti", "sedmi", "Java script"];
for (var i = 0; i!=l.length; i++) {
    if (l[i]=="Java script")
    {
        document.write(l[i]);
        document.write("<br>")
    }
}
document.write(l.length)*/

/*var l = ["prvi", "drugi", "treci", "cetvrti", "peti", "sesti", "sedmi", "Java script"];
function unos() {
    var broj;
    broj = document.getElementById("upis").value;
    l.push(broj);
    document.write(l);
}*/
function unos() {
    var bob = {
        age: 30
    };
    var susan = {
        age: 0
    };
    bob.age = document.getElementById("upis").value;
    susan.age = document.getElementById("upis1").value;
    console.log(bob.age);
    console.log(susan.age);
}

/**
 * Created by Ucenik on 30.3.2017..
 */
function f1(){
    var ja={
        ime:"Tibor",
        prezime:"Pfarrer",
        datumr:"20.04.2000",
        mjesto:"Zagreb",
        razred:"3.",
        skgod:"2016/2017"
    };
    /*for (var i=0;i!=2;i++)
    {
        console.log(ja[i]);
    }*/

    ja.ime=document.getElementById("unos").value;
    ja.prezime=document.getElementById("unos1").value;
    console.log(ja.ime);
    console.log(ja.prezime);

    var on={
        ime:"stejpo",
        dob:400000
    };
    var ona={
        ime:"karabundo",
        dob:800000000
    };
    console.log(on.ime);
    console.log(ona.dob);
}

tamgiac.addEventListener("click" , function(){
    let canh1 = +document.getElementById("canh1").value;
    let canh2 = +document.getElementById("canh2").value;
    let sTamGiac = canh1 * canh2 / 2 ;
    document.getElementById("dientich").innerHTML = "Hình tam giác có 2 cạnh góc vuông là : " + canh1 + " và " + canh2 + " có diện tích là : " + sTamGiac ;


})

chuyendoi.addEventListener("click" , function(){
    let doC = +document.getElementById("doC").value;
    let doF = (doC * 9 / 5 + 32);
    document.getElementById("hienthi").innerHTML = doC + " độ c chuyển sang độ F là : " + doF;


})

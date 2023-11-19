tinhS.addEventListener("click" , function(){
    let canhA = +document.getElementById("canhA").value;
    let s = Math.pow(canhA,2 );
    document.getElementById("ketQua").innerHTML = "Hình vuông có cạnh là : " + canhA + " có diện tích là : " + s ;


})

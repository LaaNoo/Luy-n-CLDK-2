chunhat.addEventListener("click" , function(){
    let canha = +document.getElementById("canha").value;
    let canhb = +document.getElementById("canhb").value;
    let dientich = canha * canhb ;
    document.getElementById("dientichS").innerHTML = "Hình chữ nhật có 2 cạnh là : " + canha + " và " + canhb + " có diện tích là : " + dientich ;


})

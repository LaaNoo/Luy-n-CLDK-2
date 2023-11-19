bac1.addEventListener("click" , function(){
    let ax = +document.getElementById("ax").value;
    let bx = +document.getElementById("bx").value;
    let nghiemx;
    if (ax == 0 && bx == 0){
        document.getElementById("ketquaBac1").innerHTML = " Phương trình bậc 1: " + ax +"x + " + bx + " = 0" + " có vô số nghiệm " ;
    } else if (ax != 0 ){
        nghiemx = ((-bx) / ax);
        document.getElementById("ketquaBac1").innerHTML = " Phương trình bậc 1: " + ax +"x + " + bx + " = 0" + " có 1 nghiệm duy nhất: x = -b /a : x =  " + nghiemx ;
    } else{
        document.getElementById("ketquaBac1").innerHTML = " Phương trình bậc 1: " + ax +"x + " + bx + " = 0" + " vô nghiệm " ;
    }



})

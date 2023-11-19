bac2.addEventListener("click" , function(){
    let aX = +document.getElementById("aX").value;
    let bX = +document.getElementById("bX").value;
    let cX = +document.getElementById("cX").value;
    let denta = (Math.pow(bX,2) - (4 * aX * cX));
    let nghiemX1;
    let nghiemX2;

    if (denta == 0){
        nghiemX1 = ((-bX) / (2*aX));
        document.getElementById("ketquaBac2").innerHTML = " Phương trình bậc 2: " + aX +"x2 + " + bX +"x + " + cX + " = 0" + " có 1 nghiệm là: " + nghiemX1;
    } else if (denta > 0 ){
        nghiemX1 = (-bX + Math.sqrt(denta)) / (2*aX);
        nghiemX2 = (-bX - Math.sqrt(denta)) / (2*aX);
        document.getElementById("ketquaBac2").innerHTML = " Phương trình bậc 2: " + aX +"x2 + " + bX +"x + " + cX + " = 0" + " có 2 nghiệm x1 và x2  là: " +nghiemX1 + " và " +nghiemX2;
    } else {
        document.getElementById("ketquaBac2").innerHTML = " Phương trình bậc 2: "  + aX +"x2 + " + bX +"x + " + cX + " = 0 vô nghiệm";
    }



})

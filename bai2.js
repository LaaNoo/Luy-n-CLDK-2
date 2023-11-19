chuyenFeet.addEventListener("click" , function(){
    let metM = +document.getElementById("met").value;
    let feet = (metM * 3.2808);
    document.getElementById("kq").innerHTML = metM + " mét chuyển sang Feet là : " + feet + " feet";


})

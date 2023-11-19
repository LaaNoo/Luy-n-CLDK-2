thue.addEventListener("click" , function(){
    let luong = +document.getElementById("luong").value;
    let thue , thucNhan;

    if (0 < luong && luong < 5000000 ) {
        thue = luong / 100 * 5 ;
        thucNhan = luong - thue;
        document.getElementById("manHinh").innerHTML = "Tiền thuế bạn phải đóng là: " +thue + " đồng. Lương thực nhận của bạn là: " +thucNhan;

    } else if (5000000 < luong && luong < 10000000 ) {
        thue = luong / 100 * 5 ;
        thucNhan = luong - thue;
        document.getElementById("manHinh").innerHTML = "Tiền thuế bạn phải đóng là: " +thue + " đồng. Lương thực nhận của bạn là: " +thucNhan;
    } else if (10000000 < luong && luong < 18000000 ) {
        thue = luong / 100 * 5 ;
        thucNhan = luong - thue;
        document.getElementById("manHinh").innerHTML = "Tiền thuế bạn phải đóng là: " +thue + " đồng. Lương thực nhận của bạn là: " +thucNhan;
    } else if (18000000 < luong && luong < 32000000 ) {
        thue = luong / 100 * 5 ;
        thucNhan = luong - thue;
        document.getElementById("manHinh").innerHTML = "Tiền thuế bạn phải đóng là: " +thue + " đồng. Lương thực nhận của bạn là: " +thucNhan;
    } else if (32000000 < luong && luong < 52000000 ) {
        thue = luong / 100 * 5 ;
        thucNhan = luong - thue;
        document.getElementById("manHinh").innerHTML = "Tiền thuế bạn phải đóng là: " +thue + " đồng. Lương thực nhận của bạn là: " +thucNhan;
    } else if (52000000 < luong && luong < 80000000 ) {
        thue = luong / 100 * 5 ;
        thucNhan = luong - thue;
        document.getElementById("manHinh").innerHTML = "Tiền thuế bạn phải đóng là: " +thue + " đồng. Lương thực nhận của bạn là: " +thucNhan;
    } else {
        thue = luong / 100 * 5 ;
        thucNhan = luong - thue;
        document.getElementById("manHinh").innerHTML = "Tiền thuế bạn phải đóng là: " +thue + " đồng. Lương thực nhận của bạn là: " +thucNhan;
    }

})


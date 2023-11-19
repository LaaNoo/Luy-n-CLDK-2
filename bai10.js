tienDien.addEventListener("click" , function(){
    let soDien = +document.getElementById("sodien").value;
    let tienDien;
                    
    if ( 0 < soDien && soDien <= 50){
        tienDien = soDien * 1678 ;
        document.getElementById("dien").innerHTML =  "Số điện của bạn là: " + soDien +". Bậc thang 1, Tiền điện của bạn là: " + tienDien + " đồng";
    }  else if ( 50 < soDien && soDien <= 100){
        tienDien = (50 * 1678) + ((soDien - 50) * 1734) ;
        document.getElementById("dien").innerHTML =  "Số điện của bạn là: " + soDien +". Bực thang 2, Tiền điện của bạn là: " + tienDien + " đồng";
    } else if ( 100 < soDien && soDien <= 200){
        tienDien = (50 * 1678) + (100 * 1734)+((soDien-100) * 2014) ;
        document.getElementById("dien").innerHTML =  "Số điện của bạn là: " + soDien +". Bực thang 3, Tiền điện của bạn là: " + tienDien + " đồng";
    } else if ( 200 < soDien && soDien <= 300){
        tienDien = (50 * 1678) + (100 * 1734)+(200 * 2014)+((soDien-200) * 2536 );
        document.getElementById("dien").innerHTML =  "Số điện của bạn là: " + soDien +". Bực thang 4, Tiền điện của bạn là: " + tienDien + " đồng";
    } else if ( 300 < soDien && soDien <= 400){
        tienDien = (50 * 1678) + (100 * 1734)+(200 * 2014)+((soDien-200) * 2536 ) + ((soDien -300) * 2834) ;
        document.getElementById("dien").innerHTML =  "Số điện của bạn là: " + soDien +". Bực thang 5, Tiền điện của bạn là: " + tienDien + " đồng";
    } else {
        tienDien = (50 * 1678) + (100 * 1734)+(200 * 2014)+((soDien-200) * 2536 ) + (300 * 2834) + ((soDien - 400) * 2927 );
        document.getElementById("dien").innerHTML =  "Số điện của bạn là: " + soDien +". Bực thang 6, Tiền điện của bạn là: " + tienDien + " đồng";
    }

})

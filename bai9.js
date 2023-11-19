kiemtra3.addEventListener("click" , function(){
    let tamgiac1 = +document.getElementById("tamgiac1").value;
    let tamgiac2 = +document.getElementById("tamgiac2").value;
    let tamgiac3 = +document.getElementById("tamgiac3").value;

    if (tamgiac1 > 0 && tamgiac2 > 0 && tamgiac3 > 0){
        let check1 = tamgiac1 +tamgiac2;
        if ( check1 > tamgiac3){
            let check2 = tamgiac2 + tamgiac3 ;
            if (check2 > tamgiac1){
                let check3 = tamgiac1 + tamgiac3;
                if ( check3 > tamgiac2){
                    document.getElementById("tamgiac3Canh").innerHTML = " 3 số thực " + tamgiac1 + ", " + tamgiac2 + " và " + tamgiac3 + " là cạnh của 1 tam giác" ;
                } else {
                    document.getElementById("tamgiac3Canh").innerHTML = " 3 số thực " + tamgiac1 + ", " + tamgiac2 + " và " + tamgiac3 + " không phải là cạnh của 1 tam giác" ;
    } 
            } else {
                document.getElementById("tamgiac3Canh").innerHTML = " 3 số thực " + tamgiac1 + ", " + tamgiac2 + " và " + tamgiac3 + " không phải là cạnh của 1 tam giác" ;
    } 
        } else {
                document.getElementById("tamgiac3Canh").innerHTML = " 3 số thực " + tamgiac1 + ", " + tamgiac2 + " và " + tamgiac3 + " không phải là cạnh của 1 tam giác" ;
    } 
    } else {
        document.getElementById("tamgiac3Canh").innerHTML = " 3 số thực " + tamgiac1 + ", " + tamgiac2 + " và " + tamgiac3 + " không phải là cạnh của 1 tam giác" ;
    } 



})
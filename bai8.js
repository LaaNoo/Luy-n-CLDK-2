ktTuoi.addEventListener("click" , function(){
    let tuoi = +document.getElementById("tuoi").value;
    
    if ( 0 < tuoi && tuoi < 120){
        
        document.getElementById("soTuoi").innerHTML =  tuoi + " tuổi" + " là số tuổi của người";
    } else {
        document.getElementById("soTuoi").innerHTML = tuoi + " tuổi" + " không phải là là số tuổi của người. ";
        
    }

})

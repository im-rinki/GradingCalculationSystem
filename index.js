function calculate(){
    const numeric = /^0|[1-9]\d*$/;
    let hindi = parseInt(document.getElementById("hindi").value);
    console.log(hindi);
    let eng = parseInt(document.getElementById("eng").value);
    console.log(eng);
    let buss= parseInt(document.getElementById("buss").value);
    console.log(buss);
    let acc = parseInt(document.getElementById("acc").value);
    console.log(acc);
    let eco = parseInt(document.getElementById("eco").value);
    console.log(eco);
    if (isNaN(hindi) || hindi === '' || isNaN(eng) || eng === '' || isNaN(buss) || buss === '' || isNaN(acc) || acc === '' || isNaN(eco) || eco === '') {
        alert("All fields are required");
    }
    
   else if(hindi>100 || eng>100 || buss>100 || acc>100 || eco>100){
        alert("value will not greater 100");
    }
    
    else{
        let obtain = hindi+ eng+ acc+eco+buss;
        document.getElementById("obtain").innerHTML=obtain;
        let per = obtain/500*100;
        document.getElementById("percentage").innerHTML=per;
        if( hindi>40 && eng>40 && buss>40 && acc>40 && eco>40){
            document.getElementById("remarks").innerHTML='<span style="color:green">Pass</span>'
        }
        else{
            document.getElementById("remarks").innerHTML='<span style="color:red">Fail</span>'
        }
        if(per>=80){
            document.getElementById("grade").textContent='A';
        
        }
        else if(per>=70){
            document.getElementById("grade").textContent='B';
        
        }
        else if(per>=50){
            document.getElementById("grade").textContent='C';
        
        }
        else if(per>=40){
            document.getElementById("grade").textContent='D';
        
        }
        else{
            document.getElementById("grade").textContent='F'; 
        }
    
}

}
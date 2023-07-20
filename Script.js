
function Calculate(){
    var height = document.getElementById("h-input").value;
    var weight = document.getElementById("w-input").value;

    var result = parseFloat(weight) /(parseFloat(height)/100)**2;

    if(!isNaN(result)){
        document.getElementById("bmi-output").innerHTML = result;
        if(result < 18.5){
            document.getElementById("bmi-status").innerHTML = "Kekurangan berat badan";
        }
        else if(result > 18.5){
            document.getElementById("bmi-status").innerHTML = "Normal(ideal)";
        }
        else if(result <24.9){
            document.getElementById("bmi-status").innerHTML = "Normal(ideal)";
        }
        else if(result > 25.0){
            document.getElementById("bmi-status").innerHTML = "Kelebihan berat badan";
        }
        else if(result < 29.9){
            document.getElementById("bmi-status").innerHTML = "Kelebihan berat badan";
        }
        else if(result > 30){
            document.getElementById("bmi-status").innerHTML = "Kelebihan berat badan";
        }
        else{
            document.getElementById("bmi-status").innerHTML = "Kelebihan berat badan(obesitas)";
        }
    }
}
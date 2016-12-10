function calc() {
    var text =document.getElementById("input").value;
    if (isNaN(text)) {
        alert("Please Type correct number");
    }
    else {
    var value =parseFloat(text);
    var dearness =parseFloat((value*40)/100);
    var houseRent =parseFloat ((value*20)/100);
    var some = value+dearness+houseRent;
    alert(some);
    document.getElementById("th1").innerHTML="Basic_Salary";
    document.getElementById("th2").innerHTML="Dearness_Allowance";
    document.getElementById("th3").innerHTML="Renr_Allowance";
    document.getElementById("th4").innerHTML="Gross_Salary";
    document.getElementById("td1").innerHTML=value;
    document.getElementById("td2").innerHTML=dearness;
    document.getElementById("td3").innerHTML=houseRent;
    document.getElementById("td4").innerHTML=some;
    }

}

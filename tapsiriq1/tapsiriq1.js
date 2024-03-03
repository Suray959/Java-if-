var name=prompt ("Adiniz:")
var lastname=prompt("Soyadiniz")
var age=prompt("Yasiniz:")
var ageInt=parseInt(age)
var ferq=18-ageInt

if ( age >= 18 ){ alert("Siz masin sure bilersiniz!");} 
else if (age<=17) {alert("Siz" + " "+ ferq + " il sonra"+"  " +"masin sure bilmersiniz")}

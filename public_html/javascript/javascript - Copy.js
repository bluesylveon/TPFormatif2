var form = document.getElementById("formulaire");
form.style.display = "none";
var btn =document.getElementById("boutton");
btn.addEventListener("click",afficheForm);

var formValid = document.getElementById("envoyer");
formValid.addEventListener("click",validation);

function validation(){
    var q1 = document.getElementById("q1");
    var q2 = document.getElementById("q2");
    var q3 = document.getElementById("q3");
    var q4 = document.getElementById("q4");
    var q5 = document.getElementById("q5");
    var reponse1 =  10;
    var reponse2 = /body/i;
    var reponse3 = /onclick/i;
    var reponse4 = /locale/i;
    var reponse5 = /===/;
    
    if (q1.validity.valueMissing || q2.validity.valueMissing ||q3.validity.valueMissing ||q4.validity.valueMissing ||q5.validity.valueMissing){
        event.preventDefault();
        var para = document.createElement("p");
        var text = document.createTextNode("Bla");
        para.appendChild(text);
        document.body.appendChild(para);
    }
    
    else {
        var txt1 = '';
        var txt2 = '';
        var txt3 = '';
        var txt4 = '';
        var txt5 = '';
        
        if(reponse1.test(q1.value)===false){
            event.preventDefault();
            txt1 = "Mauvaise réponse";
        }
        if(reponse2.test(q2.value)===false){
            event.preventDefault();
            txt2 = "Mauvaise réponse";
        }
        if(reponse3.test(q3.value)===false){
            event.preventDefault();
            txt3 = "Mauvaise réponse";
        }
        if(reponse4.test(q4.value)===false){
            event.preventDefault();
            txt4 = "Mauvaise réponse";
        }
        if(reponse5.test(q5.value)===false){
            event.preventDefault();
            txt5 = "Mauvaise réponse";
        }
        
        document.getElementById("q1Faux").innerHTML = txt1;
        document.getElementById("q2Faux").innerHTML = txt2;
        document.getElementById("q3Faux").innerHTML = txt3;
        document.getElementById("q4Faux").innerHTML = txt4;
        document.getElementById("q5Faux").innerHTML = txt5;
    }
}









function afficheForm(){
    btn.style.display = "none";
    form.style.display = "block";
    document.getElementById("commencer").style.display = "none"; 
}
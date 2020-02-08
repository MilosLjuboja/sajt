
window.onload=function(){
    //DINAMICKA NAVIGACIJA
    var nizMeni=["Početna","Projekti","O nama","Kontakt","Autor"];
    var linkoviMeni=["#","#projekti","#onama","#kontakt","#autor"];
    var meni="";
    meni+="<ul id='lista'>"
    for(var i=0;i<nizMeni.length;i++){
        meni+=`<li class="tekstMeni"><a href=${linkoviMeni[i]}>${nizMeni[i]}</a></li>`
    }
    meni+="</ul>"
    document.getElementById("nav").innerHTML=meni;
    //
    var nizMeni=["Početna","Projekti","O nama","Kontakt","Autor"];
    var linkoviMeni=["#","#projekti","#onama","#kontakt","#autor"];
    var meni="";
    meni+="<ul id='listaHamburger' class='nevidljiv'>"
    for(var i=0;i<nizMeni.length;i++){
        meni+=`<li class="tekstMeni"><a href=${linkoviMeni[i]}>${nizMeni[i]}</a></li>`
    }
    meni+="</ul>"
    document.getElementById("hamburgerPodMeni").innerHTML+=meni;
    //KRAJ NAVIGACIJE
    //SLAJDER, POCINJE OD 34 LINIJE A ZAVRSAVA SE U 49
    slajder()
    //POZIVANJE PROVERE FORME
    for(var i=0;i<greska.length;i++){
        greska[i].style.display="none";
        }
    var dugme=document.getElementById("posalji");
    dugme.addEventListener("click",provera);
    //UBACIVANJE DIVOVA U #kontaktBlok
    var kontaktBlok=document.getElementById('kontaktBlok')
    var nizIkonica=["fas fa-map-pin","fas fa-phone","fas fa-envelope"]
    var nizH3=["Adresa","Telefon","Email"]
    var nizP=["Zdravka Čelara 16,Beograd","0612345678","pera@ict.edu.rs"]
    var div=""
    for (var item=0;item<nizIkonica.length;item++) {
        div+=`<div class="row pb-3 col-8">
                <div class="col-lg-1 col-6 kontaktIkone">
                    <i class="${nizIkonica[item]}"></i>
                </div>
                <div class="col-lg-11 kontaktNaslovi">
                    <h3>${nizH3[item]}</h3>
                </div>
            </div>
            <p class="pb-4">${nizP[item]}</p>`
    }
    kontaktBlok.innerHTML+=div
}
//PROMENLJIVA ZA ISPIS GRESKE U FORMI
var greska=document.getElementsByClassName("greskaIspis");

$(document).ready(function(){
    $('#hamburger').click(function(){
        $('#hamburgerPodMeni').find('ul').stop(true,true).slideToggle('fast');
    });
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $('#strelicaGore').fadeIn(function(){
                $(this).css('display','block');
            })
        }else{
            $('#strelicaGore').fadeOut(function(){
                $(this).css('display','none');
            })
        }

    });
})
//SLAJDER
var slikaSlajder=document.getElementById('slikaSlajder')
var slike=["img/slika4nova.png","img/slika5.jpg","img/slika7nova.png"]
var index=0;
function slajder(){
   slikaSlajder.src=slike[index]
    if(index<slike.length-1){
        index++ 
    }
    else{
        index=0
    }
    setTimeout("slajder()",2000)    
}
//SLAJDER KRAJ

//SLIKE PROJEKATA
var projektiSlike=document.getElementById("projektiSlike")
var nizSlika=["img/slikaProjekti4.jpg","img/slikaProjekti2.jpg","img/slikaProjekti6.jpg"]
var nizNaslova=["Amsterdam","Miami","Melbourne"]
var blokovi=""
for(var i=0;i<=nizSlika.length-1;i++){
blokovi+=`<div class="projekti col-lg-4 col-7 pr-2"><img src="${nizSlika[i]}" alt="${nizNaslova[i]}" /><h2>${nizNaslova[i]}</h2></div>`
}
projektiSlike.innerHTML=blokovi
//

//PROVERA FORME
function provera(){
    var a=proveraImena();
    var b=proveraPrezimena();
    var c=proveraMejla();
    if(a && b && c )alert("Uspešno ste popunili formu :D");
}
//PROVERA IMENA
function proveraImena(){
    var ime=document.getElementById("ime");
    var imeVrednost=ime.value;
    var regIme=/^[A-Z][a-z]{1,19}$/
    if(regIme.test(imeVrednost)){
         greska[0].style.display="none";
         return true;
    }
    else{
        greska[0].style.display="block";
    }
}
//PROVERA PREZIMENA
function proveraPrezimena(){
    var prezime=document.getElementById("prezime");
    var prezimeVrednost=prezime.value;
    var regPrezime=/^([A-Z][a-z]{1,19})(\s[A-Z][a-z]{1,29})*$/
    if(regPrezime.test(prezimeVrednost)){
        greska[1].style.display="none";
        return true;
    }
    else{
        greska[1].style.display="block";
    }
}
//PROVERA MEJLA
function proveraMejla(){
    var mejl=document.getElementById("mejl");
    var mejlVrednost=mejl.value;
    var regMejl=/^[\w\d\$\!\-]+@[\w]{2,5}\.[\w]{2,4}$/
    if(regMejl.test(mejlVrednost)){
        greska[2].style.display="none";
        return true;
    }
    else{
        greska[2].style.display="block";
    }
}
//PROVERA PORUKE

 

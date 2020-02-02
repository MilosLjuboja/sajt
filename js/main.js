
window.onload=function(){
    //DINAMICKA NAVIGACIJA
    var nizMeni=["Početna","Projekti","O nama","Kontakt","Autor"];
    var linkoviMeni=["#","#projekti","#","#","#","#"];
    var meni="";
    meni+="<ul id='lista'>"
    for(var i=0;i<nizMeni.length;i++){
        meni+=`<li class="tekstMeni"><a href=${linkoviMeni[i]}>${nizMeni[i]}</a></li>`
    }
    meni+="</ul>"
    document.getElementById("nav").innerHTML=meni;
    //
    var nizMeni=["Početna","Projekti","O nama","Kontakt","Autor"];
    var linkoviMeni=["#","#projekti","#","#","#"];
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
}

$(document).ready(function(){
    $('#hamburger').click(function(){
        $('#hamburgerPodMeni').find('ul').stop(true,true).slideToggle('fast');

    });
})
//SLAJDER
var slikaSlajder=document.getElementById('slikaSlajder')
var slike=["img/slika1.jpg","img/slika2.jpg","img/slika3.jpg"]
var index=0;
function slajder(){
   slikaSlajder.src=slike[index]
    if(index<slike.length-1){
        index++ 
        
    }
    else{
        index=0
        
    }
    setTimeout("slajder()",3000)
}
var divProjekti=document.getElementById('projekti')
var tekst="<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
divProjekti.innerHTML+=tekst
//SLAJDER KRAJ
//SLIKE PROJEKATA
var projektiSlike=document.getElementById("projektiSlike")
var nizSlika=["img/slikaProjekti5.jpg","img/slikaProjekti5.jpg","img/slikaProjekti5.jpg"]
var nizNaslova=["Los Angeles","New York","Los Angeles"]
var blokovi=""
for(var i=0;i<=nizSlika.length-1;i++){
blokovi+=`<div class="projekti col-lg-4"><img src="${nizSlika[i]}" alt="${nizNaslova[i]}" /><h2>${nizNaslova[i]}</h2></div>`
}
projektiSlike.innerHTML=blokovi


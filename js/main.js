
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
}

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
blokovi+=`<div class="projekti col-lg-4 col-7"><img src="${nizSlika[i]}" alt="${nizNaslova[i]}" /><h2>${nizNaslova[i]}</h2></div>`
}
projektiSlike.innerHTML=blokovi
//
//UBACIVANJE SADRZAJA
var sredinaNaslov=document.getElementById('sredinaNaslov');
var h1="<h1>Dobrodošli na sajt kompanije KPS</h1>"
sredinaNaslov.innerHTML=h1

var divProjekti=document.getElementById('projekti')
var h2="<h2>Projekti</h2>"
projekti.innerHTML=h2;
var tekst="<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
divProjekti.innerHTML+=tekst

var okvirSlike=document.getElementsByClassName('okvirSlike')[1]
var slikaOkvir=`<img src="img/slikaOnama.jpg" alt="O nama"/>`
okvirSlike.innerHTML=slikaOkvir;

var onamaTekst=document.getElementById('onamaTekst');
var h2OnamaTekst="<h2>O nama</h2>"
var pOnama="<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>"
onamaTekst.innerHTML=h2OnamaTekst+pOnama

var mapa=document.getElementById('mapa')
var tagMape=`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.340448317075!2d20.481691315750936!3d44.81462848457049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7a9609031735%3A0x4b2dd3d867d041a!2z0JfQtNGA0LDQstC60LAg0KfQtdC70LDRgNCwIDE2LCDQkdC10L7Qs9GA0LDQtA!5e0!3m2!1ssr!2srs!4v1580677048542!5m2!1ssr!2srs" frameborder="0" style="border:0;" allowfullscreen=""></iframe>`
mapa.innerHTML=tagMape



 

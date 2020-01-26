
window.onload=function(){
    //DINAMICKI MENI
    var nizMeni=["Početna","Projekti","O nama","Lokacija","Kontakt","Autor"];
    var linkoviMeni=["#","#projekti","#","#","#","#"];
    var meni="";
    meni+="<ul id='lista'>"
    for(var i=0;i<nizMeni.length;i++){
        meni+=`<li class="tekstMeni"><a href=${linkoviMeni[i]}>${nizMeni[i]}</a></li>`
    }
    meni+="</ul>"
    document.getElementById("nav").innerHTML=meni;
    
    var nizMeni=["Početna","Projekti","O nama","Lokacija","Kontakt","Autor"];
    var linkoviMeni=["#","#projekti","#","#","#"];
    var meni="";
    meni+="<ul id='listaHamburger' class='nevidljiv'>"
    for(var i=0;i<nizMeni.length;i++){
        meni+=`<li class="tekstMeni"><a href=${linkoviMeni[i]}>${nizMeni[i]}</a></li>`
    }
    meni+="</ul>"
    document.getElementById("hamburgerPodMeni").innerHTML+=meni;
    //KRAJ MENIJA
    //SLAJDER
    
    var slikaSlajder=document.getElementById('slikaSlajder');
    var src=["img/slika2.jpg","img/slika3.jpg"]
    var index=0;

    function slajder(){
        slikaSlajder.setAttribute("src",src[index]);
        index++;
        if(index>=src.length){index=0}
    }
    setInterval("sladjer()",2000);
    
}
$(document).ready(function(){
    $('#hamburger').click(function(){
        $('#hamburgerPodMeni').find('ul').slideToggle('fast');
    });
})
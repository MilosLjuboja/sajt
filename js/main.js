
window.onload=function(){
    //DINAMICKI MENI
    var nizMeni=["Početna","Usluge","O nama","Lokacija","Kontakt"];
    var linkoviMeni=["#","#","#","#","#"];
    var meni="";
    meni+="<ul id='lista'>"
    for(var i=0;i<nizMeni.length;i++){
        meni+=`<li class="tekstMeni"><a href=${linkoviMeni[i]}>${nizMeni[i]}</a></li>`
    }
    meni+="</ul>"
    document.getElementById("nav").innerHTML=meni;
    
    var nizMeni=["Početna","Usluge","O nama","Lokacija","Kontakt"];
    var linkoviMeni=["#","#","#","#","#"];
    var meni="";
    meni+="<ul id='listaHamburger' class='nevidljiv'>"
    for(var i=0;i<nizMeni.length;i++){
        meni+=`<li class="tekstMeni"><a href=${linkoviMeni[i]}>${nizMeni[i]}</a></li>`
    }
    meni+="</ul>"
    document.getElementById("hamburgerPodMeni").innerHTML+=meni;
    //KRAJ MENIJA
    //SLAJDER
    
    

}
$(document).ready(function(){
    $('#hamburger').click(function(){
        $('#hamburgerPodMeni').find('ul').slideToggle('fast');
    });
})
var dynamicspan=document.getElementById('box1_dynamic_content');
var dynamicspancontent1=['C','o','l','l','e','c','t','i','o','n','s'];
var dynamicspancontent2=['S','t','o','c','k','s'];
var dynamicspancontent3=["p","r","e","s","e","n","t","a","t","i","o","n","s"];
var i=0;
var s="";
dynamic1();
function dynamic1(){
    if(i>=dynamicspancontent1.length){
        i=0;
    }
    s+=dynamicspancontent1[i];
    dynamicspan.innerHTML=s;
    i++;
    if(i<dynamicspancontent1.length){
        setTimeout(dynamic1,100);
    }
    if(i>=dynamicspancontent1.length){
        s="";
        i=0;
        setTimeout(dynamic2,3000);
    }
    
}
function dynamic2(){
    if(i>dynamicspancontent1.length){
        i=0;
    }
    s+=dynamicspancontent2[i];
    dynamicspan.innerHTML=s;
    i++;
    if(i<dynamicspancontent2.length){
        setTimeout(dynamic2,100);
    }
    if(i>=dynamicspancontent2.length){
        s="";
        i=0;
        setTimeout(dynamic3,3000);
    }
}
function dynamic3(){
    setTimeout(dynamic1,1000);
} 
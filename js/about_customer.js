var auth=0;
window.onload=about__slide;
function about__slide(){
    var author1=document.getElementById('author_1');
    var author2=document.getElementById('author_2');
    var author3=document.getElementById('author_3');
    var author4=document.getElementById('author_4');
    auth++;
    if(auth>=5){
        auth=1;
    }
    if(auth==1){
        author1.style.display='block';
        author1.style.animationName='push_author_center';
        author4.style.animationName='push_author_left';
    }
    else if(auth==2){
        author2.style.display='block';
        author2.style.animationName='push_author_center';
        author1.style.animationName='push_author_left';
    }
    else if(auth==3){
        author3.style.display='block';
        author3.style.animationName='push_author_center';
        author2.style.animationName='push_author_left';
    }
    else if(auth==4){
        author4.style.display='block';
        author4.style.animationName='push_author_center';
        author3.style.animationName='push_author_left';
    }
    setTimeout(about__slide,3000);
}
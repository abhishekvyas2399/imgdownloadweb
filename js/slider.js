var images=['images/colorball.jpg','images/camera.jpg','images/bluehall.jpg','images/car/ferrari2.jpg','images/leaf.jpg'];
var imgcount=0;
setTimeout(slide,3000);
function slide(){
    let container=document.getElementById('box1_right');
    imgcount++;
    if(imgcount>=images.length){
        imgcount=0;
    }
    let img=document.createElement('img');
    img.src=images[imgcount];
    img.setAttribute('id','slide_img');
    container.appendChild(img);
    if(container.children.length>6){
        container.removeChild(container.children[4]);
    }
    setTimeout(slide,4000);
}
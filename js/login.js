var inputbox=document.querySelectorAll('.inputtext');
document.querySelector('input[type="button"]').addEventListener('click',function(){
    inputbox[0].setAttribute('placeholder','User Email');
    inputbox[1].setAttribute('placeholder','User Password');
    document.getElementById('Password').style.display='none';
    document.getElementById('Email').style.display='none';
});
document.querySelector('#sign_').addEventListener('click',function(){
    inputbox[0].setAttribute('placeholder','User Email');
    inputbox[1].setAttribute('placeholder','User Password');
    document.getElementById('Password').style.display='none';
    document.getElementById('Email').style.display='none';
});

inputbox[0].addEventListener('click',function(){
    inputbox[0].setAttribute('placeholder','');
    document.getElementById('Email').style.display='block';
    inputbox[1].setAttribute('placeholder','User Password');
    document.getElementById('Password').style.display='none';

});

inputbox[1].addEventListener('click',function(){
    inputbox[1].setAttribute('placeholder','');
    document.getElementById('Password').style.display='block';
    inputbox[0].setAttribute('placeholder','User Email');
    document.getElementById('Email').style.display='none';
});
let list = document.querySelectorAll('.list');

function selectLink(){
    list.forEach((item) => item.classList.remove('selected'));
    this.classList.add('selected');
}
list.forEach((item) => 
item.addEventListener('click', selectLink));

function openImg(){
    document.querySelector('.popup-img').style.display = 'block';
}

function closeImg(){
    document.querySelector('.popup-img').style.display = 'none';
}
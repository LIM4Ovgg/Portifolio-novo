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

function openMenu(){
    document.querySelector('.sidebar').classList.add('open');
    document.querySelector('.mobile-menu').classList.add('close');
}

function closeMenu(){
    document.querySelector('.sidebar').classList.remove('open');
    document.querySelector('.mobile-menu').classList.remove('close');
}


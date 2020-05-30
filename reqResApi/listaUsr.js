let btnListUsr = document.querySelector('.btn-list');
let lista = document.querySelector('ul');

btnListUsr.addEventListener('click', () => {

    fetch('https://reqres.in/api/users?page=2')
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        createLista(response.data);
    })
}); 

function createLista(dataArr){
    dataArr.forEach(data => {
        let listItem = document.createElement('li');
        listItem.innerHTML = 
            '<div class="img-wrapper"><img src="' + data.avatar + '" /></div>' + 
            '<div><span> Nome: ' + data.first_name + ' ' + data.last_name +'</span>' + 
            '<span> Email: ' + data.email + '</span></div>';
    
        lista.appendChild(listItem);
    });
}
let inputName = document.querySelector('#nome');
let inputJob = document.querySelector('#job');
let form = document.querySelector('#form');
let cadastro = document.querySelector('#cadastro');

console.log(inputName, inputJob, form);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let dados = {
        name: inputName.value,
        job: inputJob.value
    };
    
    fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify(dados)
    })
    .then(function(response){
       return (response.status === 201) ? response.json() : false;
    })
    .then(function(response){   
        if (response){
            alert('Cadastrado com sucesso');
        } else{
            alert('Erro!')
        }
    })
});

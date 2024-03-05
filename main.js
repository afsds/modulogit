document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar'); 
    const repositorioElement = document.querySelector('#repositores');
    const seguidoresElement = document.querySelector('#Seguidores');
    const seguindoElement = document.querySelector('#Seguindo');
    const linkElement = document.querySelector('#link');


    fetch('https://api.github.com/users/afsds')
    .then(function(res) {
    return res.json();
    })
    .then(function(json) {
    nameElement.innerText = json.name;
    usernameElement.innerText = json.login;
    avatarElement.src = json.avatar_url;
    seguindoElement.innerText = json.seguindo;
    seguidoresElement.innerText = json.seguidores; 
    repositorioElement.innerText = json.public_repos;
    linkElement.href = json.html_url;
    })
    })
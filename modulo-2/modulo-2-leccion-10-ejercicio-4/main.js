'use strict';

const button = document.querySelector('.btn');
button.addEventListener('click', getOrg);

function getOrg() {
  const org = document.querySelector('.org').value;

  fetch(`https://api.github.com/orgs/${org}`)
    .then((response) => response.json())
    .then((orgData) => {
      const orgUrl = orgData.repos_url;
      return fetch(orgUrl);
    })
    .then((response) => response.json())
    .then((repoData) => {
      const reposList = document.querySelector('.repos');
      // creamos una variable vacía en la que añadiremos los nombres de los repos
      let listContent = '';
      // Creamos un loop en el que, por cada item que haya en el repoData (que es todo el listado de repositorios de la organización) vamos a acceder a la propiedad de name de cada item, que es el nombre del repositorio
      for (const repo of repoData) {
        const repoName = `<li> ${repo.name}</li>`;
        // lo añadimos a listContent, llenamos de contenido
        listContent += repoName;
      }
      // finalmente, añadimos el listcontent al elemento ul (repoList)
      reposList.innerHTML = listContent;
    });
}

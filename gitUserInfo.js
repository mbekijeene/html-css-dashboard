// github-api.js

function fetchUserInfo() {
    const username = document.querySelector('#username').value;
    const apiUrl = `https://api.github.com/users/${username}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const userHtml = `
          <h2>${data.login}</h2>
          <img src="${data.avatar_url}" alt="User Avatar" width="100">
          <p>Name: ${data.name || 'N/A'}</p>
          <p>Location: ${data.location || 'N/A'}</p>
          <p>Public Repositories: ${data.public_repos}</p>
          <p>followers: ${data.followers}</p>
          <p>following: ${data.following}</p>
          
        `;
  
        const userInfoDiv = document.querySelector('#userInfo');
        userInfoDiv.innerHTML = userHtml;
      })
      .catch(error => {
        console.error('Error:', error);
        const userInfoDiv = document.querySelector('#userInfo');
        userInfoDiv.textContent = 'An error occurred while fetching user information.';
      });
  }
  
  export { fetchUserInfo };
  




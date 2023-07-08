   function fetchData(username) {
    fetch('https://api.github.com/users/${username}')
    .then(res => {
        if (!res.ok) {
            throw Error("ERROR");
        }
        return response.json();
      })
      .then (data => {
        console.log(data);
        const html = data
        .map(user => {
            return `
            <div class="user">
            <p>img src="${user.avatar}" alt="${user.first_name}" </p>
            <p>Name: ${user.first_name}</p>
            <p>Public Repositories: ${data.public_repos}</p>
            <p>followers: ${data.followers}</p>
          <p>following: ${data.following}</p>
            </div>`
        }) 
        })
        .join('');
        console.log(html);
        document
        .querySelector('#app')
        .insertAdjacentHTML("afterbegin",html);
    }
      console.log(error);
    




function postData() {
    fetch("https://api.github.com/users/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: "mbekijeene",
        repositories: "8",
        followers: "0",
        following: "1"
      })
    })
      .then(response => {
        if (!response.ok) {
          throw Error("ERROR");
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
       
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  fetchData('githubusername');
  postData();
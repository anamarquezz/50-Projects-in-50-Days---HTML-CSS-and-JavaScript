const APIURL = 'https://api.github.com/users/';
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')
getUser('anamarquezz')

async function getUser(username) {
    try {

        const {
            data
        } = await axios(APIURL + username)

        createUserCard(data)
        getRepos(username)

    } catch (err) {
        if (err.response.status === 404) {
            createErrorCard('No Profile with this User')

        }
    }

    async function getRepos(username) {
        try {

            const {
                data
            } = await axios(APIURL + username +'/repos?sort=created')
            
            addReposToCard(data)
  
        } catch (err) {
            if (err.response.status === 404) {
                createErrorCard('Problem fetching repos')

            }
        }
    }

    function createErrorCard(message) {
        const cardHTML = `
        <div class="card">
            <h1>${message}</h1>
        </div>
        `
        main.innerHTML = cardHTML

    }

    function createUserCard(user) {
        const cardHTML = `
        <div class="card">
        <div>
            <img src="${user.avatar_url}" alt="${user.login}" class="avatar">
        </div>
        <div class="user-info">
            <h2>${user.login}</h2>
            <p>${user.bio}</p>
            <ul>
                <li>${user.followers}<strong>Followers</strong></li>
                <li>${user.following}<strong>Following</strong></li>
                <li>${user.public_repos}<strong>Repos</strong></li>
            </ul>

            <div id="repos">
               
            </div>
        </div>
        <div>
        </div>
    </div>
        `
        main.innerHTML = cardHTML;
    }
}

function addReposToCard(repos){
    const reposEl = document.getElementById('repos')

    repos
    .slice(0,7)
    .forEach(repo => {
        const repoEl = document.createElement('a')
        repoEl.classList.add('repo')
        repoEl.href = repo.html_url
        repoEl.target = '_blank'
        repoEl.innerText = repo.name
        reposEl.appendChild(repoEl)
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = search.value;
    if (user) {
        getUser(user);
        search.value = ''
    }
});
  import { useState, useEffect } from 'react';

function MyRepositories() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch('https://api.github.com/users/DanielDarwiche/repos');
      const data = await response.json();
      setRepos(data);
    }
    fetchRepos();
  }, []);
let i=1;
  return (
    <div>
      <h1>My repositories:</h1>
      <p>'Index) Date reponame Link Description StarGazer'</p>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}><strong> {i++})</strong> {repo.created_at} 
          {repo.name} <a href={repo.html_url}>Länk</a><br/>
          {repo.description == null ? "" : <><strong>Description:</strong><br/></>}
  {repo.description == null ? "" : repo.description}<br/>
          StarGazer: {repo.id % 2 === 0 ? repo.stargazers_count + 3 : repo.stargazers_count + 6}
          <br/><br/>
          </li> 
        ))}
      </ul>
    </div>
  );
}
export default MyRepositories;
  
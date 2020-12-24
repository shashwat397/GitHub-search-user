import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Profile from './Components/Profile'
import Repos from './Components/Repos.jsx';
const UserDetials = ({ match }) => {
  const [user, setUser] = useState({});
  const [reops, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/users/${match.params.username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
      )
      .then(res => {
        setUser(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/users/${match.params.username}/repos?per_page=10&sort=asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
      )
      .then(res => {
        setRepos(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, []);

  return (
    <div className='container mt-5'>
      <Profile user={user} />
      <h3 className='page-heading mb-3 mt-3'>Latest Repos</h3>
      {reops.map(repo => (
        <Repos key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default UserDetials;

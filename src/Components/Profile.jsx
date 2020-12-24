import React from 'react'

const Profile = ({user}) => {
    return (
      <div className='card card-body mb-3'>
        <div className='row'>
          <div className='col-md-3'>
            <img
              src={user.avatar_url}
              className='img-fluid mb-2'
              alt={user.login}
            />
            <a
              href={user.html_url}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary btn-block mt-2'
            >
              View Profile
            </a>
          </div>
          <div className='col-md-9'>
            <span className='badge badge-primary mr-1'>
              Public Reops: {user.public_repos}
            </span>
            <span className='badge badge-success mr-1'>
              Public Gists: {user.public_gists}
            </span>
            <span className='badge badge-dark mr-1'>
              Public Followers: {user.followers}
            </span>
            <span className='badge badge-info'>
              Public Following: {user.following}
            </span>
            <br />
            <div className='list-group'>
              <div className='list-group-item'>Company: {user.company}</div>
              <div className='list-group-item'>Website/blog: {user.blog}</div>
              <div className='list-group-item'>Location: {user.location}</div>
              <div className='list-group-item'>
                Member Since: {user.created_at}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Profile

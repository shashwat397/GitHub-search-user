import React from 'react'

const Repos = ({repo}) => {
    return (
      <div>
        <div className='card card-body mb-2'>
          <div className='row'>
            <div className='col-md-6'>
              <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
                {repo.name}
              </a>
            </div>
            <div className='col-md-6'>
              <span className='badge badge-primary mr-1'>
                Stars: {repo.stargazers_count}
              </span>
              <span className='badge badge-success mr-1'>
                Watchers: {repo.watchers_count}
              </span>
              <span className='badge badge-danger '>
                Fork: {repo.forks_count}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Repos

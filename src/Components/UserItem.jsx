import React from 'react'
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    Button
} from 'reactstrap'

const UserItem = ({user}) => {
    return (
      <div className='col-md-3 mb-3'>
        <Card>
          <CardImg top width='100%' src={user.avatar_url} alt={user.login} />
          <CardBody>
                    <CardTitle>{ user.login }</CardTitle>
                    
                    <a href={ `users/${user.login}` }  rel='noopener noreferrer'>
                        <Button>More</Button>
                    </a>
          </CardBody>
        </Card>
      </div>
    );
}

export default UserItem

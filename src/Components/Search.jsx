import React, { useState } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
  Form,
  FormGroup
} from 'reactstrap';

const Search = ({ searchUsers }) => {
  const [query, setQuery] = useState('');
  const search = e => {
    setQuery(e.target.value);
  };
  return (
    <Form
      className='mt-5 mb-5'
      onSubmit={e => {
        e.preventDefault();
        searchUsers(query);
      }}
    >
      <FormGroup>
        <InputGroup>
          <Input
            placeholder='Github User Name ...'
            onChange={search}
            value={query}
          />
          <InputGroupAddon addonType='append'>
            <Button type='submit' color='danger'>
              Search
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default Search;

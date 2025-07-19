import React, { useState } from 'react';
import API from '../api/api';

const AddUserForm = ({ onUserAdded }) => {
  const [name, setName] = useState('');
  

  const handleAdd = async () => {
    if (!name) return;
    const res = await API.post('/users', { name });

    onUserAdded(res.data);
    setName('');
  };

  return (
    <div>
      <input
        placeholder="Enter name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Add User</button>
    </div>
  );
};

export default AddUserForm;

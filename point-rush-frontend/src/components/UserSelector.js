import React from 'react';

const UserSelector = ({ users, selectedUser, setSelectedUser }) => (
  <div>
    <label>Select User: </label>
    <select value={selectedUser} onChange={e => setSelectedUser(e.target.value)}>
      <option value="">-- Select --</option>
      {users.map(user => (
        <option key={user._id} value={user._id}>{user.name}</option>
      ))}
    </select>
  </div>
);

export default UserSelector;

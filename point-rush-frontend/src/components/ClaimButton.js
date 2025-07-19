import React, { useState } from 'react';
import API from '../api/api';

const ClaimButton = ({ selectedUser, onClaimed }) => {
  const [message, setMessage] = useState('');

  const handleClaim = async () => {
    if (!selectedUser) return;
    const res = await API.post(`/claim/${selectedUser}`);
    setMessage(`User earned ${res.data.points} points!`);
    onClaimed();
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div>
      <button onClick={handleClaim}>Claim Points</button>
      <p>{message}</p>
    </div>
  );
};

export default ClaimButton;

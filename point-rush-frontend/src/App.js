import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserSelector from './components/UserSelector';
import AddUserForm from './components/AddUserForm';
import ClaimButton from './components/ClaimButton';
import Leaderboard from './components/LeaderBoard';
import './App.css';



function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:8080/users');
    setUsers(res.data);
  };

  const fetchLeaderboard = async () => {
    const res = await axios.get('http://localhost:8080/leaderboard');
    setLeaderboard(res.data);
  };

  useEffect(() => {
    fetchUsers();
    fetchLeaderboard();
  }, []);

  const refresh = () => {
    fetchUsers();
    fetchLeaderboard();
  };

  return (
    <div className="App">
      <h1>🏆 PointRush</h1>
      <UserSelector users={users} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      <ClaimButton selectedUser={selectedUser} onClaimed={refresh} />
      <AddUserForm onUserAdded={refresh} />
      <Leaderboard leaderboard={leaderboard} />
    </div>
  );
}

export default App;

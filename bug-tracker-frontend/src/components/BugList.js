import React, { useEffect, useState } from 'react';

const BugList = () => {
  const [bugs, setBugs] = useState([]);

  const fetchBugs = async () => {
    const res = await fetch('http://localhost:3000/bugs');
    const data = await res.json();
    setBugs(data);
  };

  const deleteBug = async (id) => {
    const res = await fetch(`http://localhost:3000/bugs/${id}`, { method: 'DELETE' });
    if (res.ok) {
      alert('Bug deleted');
      fetchBugs(); // refresh
    } else {
      alert('Failed to delete bug');
    }
  };

  useEffect(() => {
    fetchBugs();
  }, []);

  return (
    <div className="bug-list">
      <h2>All Bugs</h2>
      {bugs.length === 0 ? (
        <p>No bugs reported yet.</p>
      ) : (
        bugs.map(bug => (
          <div key={bug.id} className="bug-card">
            <h3>{bug.title}</h3>
            <p>{bug.description}</p>
            <p><strong>Severity:</strong> {bug.severity}</p>
            <p><strong>Status:</strong> {bug.status}</p>
            <p><small>Last Updated: {new Date(bug.updated_at).toLocaleString()}</small></p>
            <button onClick={() => deleteBug(bug.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default BugList;

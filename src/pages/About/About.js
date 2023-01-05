import React, { useEffect, useState } from "react";

const About = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    const userResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const userData = await userResponse.json();
    setLoading(false);
    setUsers(userData);
  };

  return (
    <div>
      <h3>Fetching Random User Data Asynchronusly</h3>
      <div className="listContainer">
        {loading && !users && <p>Loading data(fetching).....</p>}
        {!loading &&
          users &&
          users.map((item) => <div key={item.id}>{item.name}</div>)}
      </div>
    </div>
  );
};

export default About;

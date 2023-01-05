import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../actions/usersActions";

const Contact = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

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

export default Contact;

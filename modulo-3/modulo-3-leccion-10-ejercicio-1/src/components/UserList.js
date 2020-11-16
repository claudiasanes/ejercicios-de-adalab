import React from 'react';
import User from './User';

const UserList = (props) => {
  const userElements = props.users.map((user) => {
    // ponemos lo de user={user} para que se reciba el objeto entero en ve de ir metiendo las props que queremos
    return <User key={user.id} user={user} />;
  });

  return (
    <section>
      <ul className="cards">{userElements}</ul>
    </section>
  );
};

export default UserList;

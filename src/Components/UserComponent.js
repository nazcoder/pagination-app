const UserComponent = ({ users }) => {
  return (
    <>
      {users.length > 0 ? (
        <ul>
          {users.map((item) => (
            <li key={item.id}>
              First Name - {item.first_name}, Email - {item.email} {item.id}
            </li>
          ))}
        </ul>
      ) : (
        <p> No user found</p>
      )}
    </>
  );
};

export default UserComponent;

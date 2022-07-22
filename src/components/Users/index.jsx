export default ({ users, onFetchUser }) => {
  return (
    <>
      {users?.map((user, index) => (
        <a
          key={index}
          onClick={() => onFetchUser(user.user_id)}
          style={{
            display: "flex",
            flexDirection: "row",
            cursor: "pointer",
            marginBottom: 20,
          }}
        >
          <p
            style={{
              marginRight: 20,
            }}
          >
            {user?.firstname}
          </p>
          <p> {user?.email}</p>
        </a>
      ))}
    </>
  );
};

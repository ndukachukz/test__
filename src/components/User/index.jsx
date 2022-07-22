export default ({ user }) => {
  <>
    <div>
      <p>Pictures: </p>
      {user.Related_Pictures.map((picture, index) => (
        <img
          key={index}
          style={{
            height: 120,
            width: 120,
          }}
          src={picture.related_pictures}
          alt=""
          srcset=""
        />
      ))}
    </div>
    <div>
      <p>Picture Count: {user.Related_Pictures.length}</p>
    </div>

    <div>
      Profile:
      {user.User_Details.map((_user, index) => (
        <div key={index}>
          <p className="userItem">
            <span className="profileItemLabel">First Name: </span>
            {_user?.firstname}
          </p>
          <p className="userItem">
            <span className="profileItemLabel">Last Name: </span>
            {_user?.lastname}
          </p>
          <p className="userItem">
            <span className="profileItemLabel">Email: </span>
            {_user?.email}
          </p>
          <p className="userItem">
            <span className="profileItemLabel">Job Area: </span>
            {_user?.job_area}
          </p>
          <p className="userItem">
            <span className="profileItemLabel">Job Title: </span>
            {_user?.job_title}
          </p>
        </div>
      ))}
    </div>

    <div>
      <h3>Vehicles: </h3>
      {user.Vehicles_Details.map((vehicle, index) => (
        <div key={index}>
          <p className="userItem">
            <span className="profileItemLabel">Fuel Type: </span>
            {vehicle.fuel_type}
          </p>
          <p className="userItem">
            <span className="profileItemLabel">Vehicle Make: </span>
            {vehicle.vehicle_make}
          </p>
          <p className="userItem">
            <span className="profileItemLabel">Vehicle Vin: </span>
            {vehicle.vehicle_vin}
          </p>
        </div>
      ))}
    </div>
  </>;
  return;
};

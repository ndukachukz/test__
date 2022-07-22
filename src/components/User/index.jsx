import { useCallback, useEffect, useRef, useState } from "react";
import updateUser from "../../services/updateUser";

export default ({ user, onUpdateUser }) => {
  const phoneRef = useRef();

  const [phone, setPhone] = useState();

  useEffect(() => {
    console.log(phoneRef.current.value);
    console.log(phone);
  }, [phone]);

  return (
    <>
      <div className="detailsContainer">
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
      <div className="detailsContainer">
        <p>Picture Count: {user.Related_Pictures.length}</p>
      </div>

      <div className="detailsContainer">
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
            <p className="userItem">
              <span className="profileItemLabel">Phone Number: </span>
              <input
                ref={phoneRef}
                type="text"
                defaultValue={_user?.phone_no}
                onChange={(e) => setPhone(e.target.value)}
              />
              <button
                onClick={() => onUpdateUser(_user.user_id, { phone_no: phone })}
              >
                update user
              </button>
            </p>
          </div>
        ))}
      </div>

      <div className="detailsContainer">
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
    </>
  );
};

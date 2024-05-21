import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
export const Signup = () => {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("signup-data")) || [];
    setAllUsers(data);
  }, []);

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const goToLogin =() =>{
    navigate('/login')
  }


  const handleChanges = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, email } = userData;
    if (!username || !password || !email) {
      alert("Please enter data");
      return;
    }

    let newArr = [...allUsers, userData];
    setAllUsers(newArr);

    localStorage.setItem("signup-data", JSON.stringify(newArr));
    goToLogin();
  };
  return (
    <div>
      <h1> Signup </h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChanges}
          name="username"
          type="text"
          placeholder="Usernmae"
        />
        <br />
        <input
          onChange={handleChanges}
          name="email"
          type="text"
          placeholder="Email"
        />
        <br />
        <input
          onChange={handleChanges}
          name="password"
          type="text"
          placeholder="passsword"
        />
        <br />
        <input type="submit" value="Signup" />
      </form>
    </div>
  );
};

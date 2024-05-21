import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
export const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("signup-data")) || [];
    setAllUsers(data);
  }, []);

  const handleChanges = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const goToHome =() =>{
    navigate("/home")
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginData;

    const user = allUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      goToHome();
    } else {
      alert("Incorrect email or password");
    }
  };

  return (
    <>
      <h1> Login </h1>
      <form onSubmit={handleSubmit}>
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
          placeholder="Password"
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </>
  );
};

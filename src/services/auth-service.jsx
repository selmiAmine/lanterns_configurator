import axios from "axios";

const AuthService = {
  signup: function (email, password) {
    return axios.post("http://localhost:3000/api/auth/signup", {
      email,
      password,
    });
  },
  login: function (email, password) {
    return axios.post("http://localhost:3000/api/auth/login", {
      email,
      password,
    });
  },
  authGuard: function () {
    const token = localStorage.getItem("token") || "";
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    return axios.get("http://localhost:3000/api/auth/authGuard", config);
  },
};

export default AuthService;

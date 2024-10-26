import { setCookie } from "../../helpers/cookie";
import { login } from "../../services/usersServices";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/login";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const response = await login(email, password);
    if(response.length > 0) {
      setCookie("id", response[0].id);
      setCookie("fullName", response[0].fullName);
      setCookie("email", response[0].email);
      setCookie("token", response[0].token);
      dispatch(checkLogin(true));
      navigate("/");
    } else {
      alert("Sai tài khoản hoặc mật khẩu");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <input type="email" placeholder="Nhập email"/>
        </div>
        <div>
          <input type="password" placeholder="Nhập mật khẩu"/>
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
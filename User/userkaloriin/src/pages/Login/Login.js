import React ,{ useState }from "react";
import { useNavigate,  } from "react-router-dom";
import { useAuth } from '../../components/auth.js';
import './Login.css';

function Postingan(){

  const [user, setUser]=useState('');
  const [password, setPassword]=useState('');
  const auth = useAuth();
  const navigate = useNavigate();
  //const location = useLocation();
  //const from = location.state?.pathname || "/";


  const handleLogin = () =>{
    auth.login(user)
    if(user==="user"){
      navigate('/user/beranda')
    console.log(user)
    }else{
      navigate('/admin/beranda')
    }
    console.log(password)
   
  }

  return(
    <div className="content-login">
      <div className="login">
        <img className="" src={require("../../assets/logoKaloriin.png")} alt="the-plus"></img>
          <div className="the-form">
            <label className="the-label">
              Email 
            </label>
            <input className="the-input" type="text" name="email" 
            placeholder="Email"
            onChange={e=>setUser(e.target.value)} value={user} />
          </div>
          <div className="the-form">
            <label className="the-label">
              Password 
            </label>
            <input className="the-input" type="password" name="password"  placeholder="Password" onChange={e=>setPassword(e.target.value)} value={password} />
          </div>
          <div className="the-button-login">
            <button className="btn-login" onClick={handleLogin}>LOGIN</button>
          </div>
      </div>
    </div>
  );
}

export default Postingan;
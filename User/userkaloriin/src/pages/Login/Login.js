import React ,{ useState }from "react";
import { useNavigate,  } from "react-router-dom";
import { useAuth } from '../../components/auth.js';
import './Login.css';

function Postingan(){

  const [user, setUser]=useState('');
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
  }
  return(
    <div className="content">
      <div className="login">
        <p>login</p>
          <div>
            <label>
              Username : <input type="text" name="username" onChange={e=>setUser(e.target.value)} value={user} />
            </label>
            <button onClick={handleLogin}>LOGIN</button>
          </div>
      </div>
    </div>
  );
}

export default Postingan;
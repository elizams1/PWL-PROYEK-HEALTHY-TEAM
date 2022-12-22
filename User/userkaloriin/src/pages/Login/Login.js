import React, {useState, useEffect} from "react";
import { useNavigate,  } from "react-router-dom";
import { useAuth } from '../../components/auth.js';
import './Login.css';
import axios from 'axios';

function Postingan(){

  const [user, setUser]=useState('');
  const [password, setPassword]=useState('');
  const [PenggunaData,setPenggunaData] =useState([]);
  const [userSearch, setUserearch] = useState(PenggunaData);
  const auth = useAuth();
  const navigate = useNavigate();
  //const location = useLocation();
  //const from = location.state?.pathname || "/";

   useEffect(()=> {
    axios
      .get("http://localhost:3306/user")
      .then(function (user){
          setPenggunaData(user.data.data);
          console.log(user.data.data)
      })
      .catch(function(error){
        console.log(error);
      });
    },[]
  );

  const handleLogin = () =>{
    auth.login(user)
    
    const query = user;
    var theUser = [...PenggunaData]

    theUser = theUser.filter((item) => {
      return item.email.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setUserearch(theUser);

    for(let i=0; i<userSearch.length;i++){
      if(userSearch[i].role==='user'){
        navigate('/user/beranda')
      }
      else if(userSearch[i].role==='admin'){
        navigate('/admin/beranda')
      }
    }
    console.log(user)
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
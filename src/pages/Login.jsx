import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import LoginForm from '../components/LoginForm.jsx'  

// Summary //
// React component responsible for handling user login
// Prevents default form submission
// Sends a login request to a server-side endpoint using axios
// Displays an alert based on the success or failure of the login attempt

function LoginPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const id = useSelector((redux) => redux.id)

  const handleLogin = async (e, formData) => {          // Login handling function. Takes in 2 parameters, 'e' & 'formData'
    e.preventDefault()                                  // Prevents default form submission behavior ensuring form is not submitted traditional way

    let res = await axios.post('/api/auth', formData)   // Sends POST request to /api/auth endpoint

    if(res.data) {                                      // Checks reponse from server. If 'res.data' is truthy, assumes login successful
      dispatch({ type: 'login', payload: { name: res.data.name, id:res.data.id }})
      alert('Login success!')

      console.log(res.data);
      navigate(`/account/${res.data.id}`)


    } else {
      alert('Login failed!')
    }
  }

  console.log(`current id is ${id}`);

  return (                                           
    <>
      <h1>Log In</h1>
      <LoginForm onLogin={handleLogin} />
      <Link to='/'> Cancel  </Link>
    </>
  );
}

export default LoginPage
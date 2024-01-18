// import axios from 'axios';
// import { useDispatch } from 'react-redux';


// function LogoutButton() {
  
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     // send axios request to logout endpoint
//     // if successful, clear the redux store
//     // redirect to landing page
  
//     let res = await axios.post('/api/logout')
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   }

  
//   if(res.data) {
//     dispatch({type: 'logout'})
//     alert('Logout Successful')
//   } else {
//     alert('Logout Failed')
//   }



  
//   return (
//         <button type="submit">Log Out</button>
//     );
//   }

// export default LogoutButton
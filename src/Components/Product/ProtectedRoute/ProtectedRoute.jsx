// import React, {useContext, useEffect} from 'react'
// import { useNavigate } from 'react-router-dom'
// import { DataContext } from '../../DataProvider/DataProvider'


// const ProtectedRoute = ({children, msg, redirect}) => {

// const navigate = useNavigate()
// const [{user}, dispatch] = userContext(DataContext)

// useEffect(()=>{
// if(!user){
// navigate("/auth", {state:{msg, redirect}})
// }
// },[user])

//   return (
//     <div>ProtectedRoute</div>
//   )
// }

// export default ProtectedRoute


import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../DataProvider/DataProvider';

const ProtectedRoute = ({ children, msg, redirect }) => {
  const navigate = useNavigate();
  const [{ user }] = useContext(DataContext); // corrected useContext usage

  useEffect(() => {
    if (!user) {
      navigate("/auth", { state: { msg, redirect } });
    }
  }, [user, navigate, msg, redirect]);

  // Render children if user exists; otherwise, return null.
  if (!user) return null;
  return <>{children}</>;
};

export default ProtectedRoute;

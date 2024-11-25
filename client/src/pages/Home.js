import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { logout, setUser } from '../redux/userSlice'

const Home = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log('redux user', user );
  const URL = `${process.env.REACT_APP_BACKEND_URL}/api/user-detail`
  const fetchUserDeatail = async()=>{
    try {
      const response = await axios({
        url : URL,
        withCredentials : true
      })
      dispatch(setUser(response?.data?.data))
      if(response?.data?.logout){
        dispatch(logout);
        navigate('/email')
      }
    console.log("current user Details",response)
  } catch (error) {
      console.log("error",error)
  }
}
useEffect(()=>{
  fetchUserDeatail()
},[])
  return (
    <div>Home
      
      <secttion>
        <Outlet />
        </secttion> 
        </div>
  )
}

export default Home 
import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Login,Register} from './Components'
import Profile from './pages/Profile'
import UserProfile from './pages/UserProfile/UserProfile'
import NotFound from './pages/NotFound/NotFound'
import Home from './pages/Home/Home'
import NewPost from './pages/NewPost/NewPost'
import SinglePost from './Components/SinglePost/SinglePost'
import Loader from './Components/Loader/Loader'



function App() {

  const user = [
    {
      
      name : 'Jorge',
      birthdate : '1990-12-12',
      email: 'jorge@gmail.com',
      profileImage:null,
    },
  ];
  const post = [
    {
      title : 'test',
      date: '2023-12-12',
      content : 'post de prueba',
      author:'me'
    }
  ]

  return (
    <Router>
      <Routes>
          <Route path='/profile' element={ <Profile/> }  />
          <Route path='/profile/:userName' element={ <UserProfile/> }  />
          <Route path='/login' element={ <Login/> }  />
          <Route path='/register' element={ <Register/> }  />
          <Route path='/newpost' element={ <NewPost/> }  />
          <Route path='/posts/:postId' element={ <SinglePost/> }  />
          <Route path='/user' element={ <UserProfile/> }  />
          <Route path='/loader' element={<Loader/>}/>
          <Route path='/home' element={ <Home/> }  />
          {/* 
          
          <Route path='/post/:id' element={ <Home/> }  /> */}
          <Route path="*" element={<NotFound />} />
      </Routes>
      
      
    </Router>
  )
}

export default App

import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Login,Register} from './Components'
import Profile from './pages/profile'
import NotFound from './pages/NotFound/NotFound'
import UserProfile from './pages/UserProfile/UserProfile'
import Home from './pages/Home/Home'
import NewPost from './pages/NewPost/NewPost'
import SinglePost from './Components/SinglePost/SinglePost'



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
          <Route path='/login' element={ <Login/> }  />
          <Route path='/register' element={ <Register/> }  />
          <Route path='/newpost' element={ <NewPost/> }  />
          <Route path='/post' element={ <SinglePost
              post = {post[0]}
          /> }  />
          <Route path='/user' element={ <UserProfile 
              user = {user[0]}
          /> }  />
          <Route path='/home' element={ <Home/> }  />
          {/* 
          
          <Route path='/post/:id' element={ <Home/> }  /> */}
          <Route path="*" element={<NotFound />} />
      </Routes>
      
      
    </Router>
  )
}

export default App

import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Agents from './pages/agents/Agents';
import Teachings from './pages/teachings/Teachings';
import Contact from './pages/contact/Contact';
import ViewAgent from './pages/agents/ViewAgent';
import Account from './pages/account/Account';
import { useEffect, useState} from 'react';
import { collection, onSnapshot} from "firebase/firestore";
import { useAuth } from '../src/hooks/useAuth'
import Thanks from './pages/success/Success';
import Success from './pages/success/Success';
import Messages from './pages/account/message/Messages';
import Main from './pages/account/main/Main';
import Ticket from './pages/account/Ticket';
import Viza from './pages/account/Viza';
import Application from './pages/account/application/Application';
import Payments from './pages/account/payments/Payments';
import Layout from './pages/home/Layout';
import Users from './pages/account/users/Users';
import Blogs from './pages/blogs/Blogs';
import Pilgrims from './pages/account/pilgrim/Pilgrims';
import Team from './pages/account/agent/Team';

import Reports from './pages/account/reports/Reports';
import ChatRoom from './pages/account/message/ChatRoom'
import ChatContacts from './pages/account/message/ChatContacts';
import MainMenu from './components/menu/MainMenu';
import ViewBlog from './pages/blogs/ViewBlog';
import CreateAgent from './pages/create/CreateAgent';
import Help from './pages/help/Help';
import Terms from './pages/terms/Terms';
import Privacy from './pages/privacy/Privacy';





function App() {

  const { user, db, messaging } = useAuth()
  const [isTokenFound, setTokenFound] = useState(false);


  const RequireAuth = ({children}) => {
    return user ? (children) : <Navigate to="/"/>
  }

  
 

  // useEffect(() => {
  //   const msg = messaging();
  //   msg.requestPermission().then(() => {
  //     return msg.getToken();
  //   }).then((data) =>{
  //     console.warn('token', data)
  //   })
  // },[])


  return (
    <div className='app'>
   
      <BrowserRouter>    
        <Routes>
            <Route path='/' element={<Layout />}/>
            {/* <Route path='/register' element={
              <Register />}/> */}
            {/* <Route path='login' element={
              <Login />}/> */}
            <Route path='about' element={<About />}/>
            <Route path='services' element={<Services />}/>
            <Route path='agents' element={<Agents />}/>
            <Route path='privacy' element={<Privacy />}/>
            <Route path='terms' element={<Terms />}/>
            <Route path='agents/:id' element={<ViewAgent />}/>
            <Route path='teachings' element={<Teachings />}/>   
            <Route path='createAgent' element={
              <RequireAuth>
                <CreateAgent />
              </RequireAuth>
              
              }/>      
            <Route path='contact' element={<Contact />}/>
            <Route path='help' element={<Help />}/>
            <Route path='blogs' element={<Blogs />}/>
            <Route path='blogs/:id' element={<ViewBlog />}/>
            <Route path='success' element={<Success />}/>
            <Route path='account' element={
              <RequireAuth>
                <Account />
              </RequireAuth>}>
              <Route path='main' element={<Main/>}></Route>
              <Route path='messages' element={<Messages/>}></Route>
              <Route path='messages/:id' element={<ChatRoom/>}></Route>
              <Route path='ticket' element={<Ticket/>}></Route>
              <Route path='visa' element={<Viza/>}></Route>
              <Route path='application' element={<Application/>}></Route>
              <Route path='payments' element={<Payments/>}></Route>
              <Route path='users' element={<Users/>}></Route>
              <Route path='pilgrims' element={<Pilgrims/>}></Route>
              <Route path='agents' element={<Team/>}></Route>
              <Route path='blogs' element={<Blogs/>}></Route>
              <Route path='reports' element={<Reports/>}></Route>
              <Route path='contacts' element={<ChatContacts/>}></Route>
            </Route>
            {/* <Route path='messages' element={
              <RequireAuth>
                <Messages                  
                />
            </RequireAuth>}/> */}
         </Routes>
    </BrowserRouter>

</div>
  );
}

export default App;

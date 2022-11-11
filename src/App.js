import React from "react";
import SignUp from "./components/configures/Signup";
import SignIn from "./components/configures/SignIn";
import Layout from "./components/Layout";
import News from "./components/sections/News";
import Plays from "./components/sections/Plays";
import Contacts from "./components/sections/Contacts";
import Discussions from "./components/sections/Discussions";
import Users from "./components/sections/Users";
import { Route, Routes } from "react-router-dom";



//css connections
import './css/sign.css';
import './css/layout.css';
import './css/news.css';
import './css/plays.css';
import './css/contacts.css';
import './css/discussions.css';
import './css/user.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/config/signin" element={<SignIn/>}/>
        <Route path="/config/signup" element={<SignUp/>}/>
        <Route path="/" element={<Layout/>}>
          <Route path="users/:nick" element={<Users/>}/>
          <Route path="news" element={<News/>}/>
          <Route path="plays" element={<Plays/>}/>
          <Route path="contacts" element={<Contacts/>}/>
          <Route path="discussions" element={<Discussions/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

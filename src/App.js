import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Profile from './Profile';
import data from './data';
import Profiles from './Profiles';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Header />
     <Routes>
<Route path="/main" element={<Main data={data.PostPage} />} />
<Route path="/profail" element={<Profiles data={data.ProfilePage}/>} />
     </Routes>
    </div>
    </BrowserRouter>
  );

}

export default App;

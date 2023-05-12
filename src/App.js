import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './component/Nav';
import Footer from './component/Footer';
import Content from './pages/Content';
import Register from './pages/Register';
import Task from './pages/Task';
import AboutUs from './pages/About';
import ContactUs from './pages/ContactUs';



function App() {
  return (

    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/TaskPage" element={<Task />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavbarComponent from "./components/NavbarComponent";
import PostDetails from "./components/PostDetails";
import Contact from "./components/Contact";
import AboutPage from "./components/AboutPage";
import FooterComponent from "./components/FooterComponent";
import SidebarComponent from "./components/SidebarComponent";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import ProfileComponent from "./components/ProfileComponent";
import NewPost from "./components/NewPost";
import EditPost from "./components/EditPost";
import Categories from "./components/Categories";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Container>
        <Row>
          <Header />
          <Col md={9} className="ps-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts/:id" element={<PostDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/profile" element={<ProfileComponent />} />
              <Route path="/newpost" element={<NewPost />} />
              <Route path="/editpost/:id" element={<EditPost />} />
              <Route path="/categories/:id" element={<Categories />} />
            </Routes>
          </Col>
          <Col md={3} className="pe-0">
            <SidebarComponent />
          </Col>
        </Row>
      </Container>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;

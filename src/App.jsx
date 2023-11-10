import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Layout from "./components/layout/Layout";
import Info1 from "./components/Info1";
import Info2 from "./components/Info2";
import Product from "./pages/Products";
import Detail from "./pages/Detail";
import AboutDetail from "./pages/AboutDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route element={<Layout/>}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/:detail" element={<AboutDetail/>} />

              <Route path="/blog" element={<Blog />}>
                <Route path="info1" element={<Info1/>}>
                  <Route path="detail" element={<h1>Info1 Detail</h1>}/>
                </Route>
                <Route path="info2" element={<Info2/>}/>
              </Route>
              <Route path="/products"  element={<Product/>}/>  
              <Route path="/products/:id" element={<Detail/>}/> 
              <Route path="*" element={<h1>404 not found</h1>} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// Outled
// nested route
// detail route
// useParams

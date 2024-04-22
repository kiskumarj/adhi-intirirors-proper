import { useState } from "react"
import Home from "./Page/Home";
import Sofa from "./product/Sofa";
import Login from "./Page/Login"
import Productdetail from "./product/Productdetail";
import Homefurniture from "./product/Homefurniture";
import Office from "./product/Office";
import Educational from "./product/Educational";
import Outdoor from "./product/Outdoor";
import Hotel from "./product/Hotel";
import Metaltables from "./product/Metaltables";
import About from "./Page/About";
import Premiumsofa from "./Premium/Premiumsofa";
import Premiumbed from "./Premium/Premiumbed";
import Tv from "./Premium/Tv";
import Student from "./Premium/Student";
import Premiumchair from "./Premium/Premiumchair";
import Table from "./Premium/Table";
import Workstation from "./Premium/Workstation";
import Storeageunit from "./Premium/Storeageunit";
import Orderform from "./product/Orderform";
import Createproduct from "./admin/Createproduct";
import Createcaregory from "./admin/Createcaregory";
import Imageupload from "./admin/Imageupload";
import Admin from "./admin/Admin";
import Products from "./admin/Products";
import Asked from "./admin/Asked";
import Orders from "./admin/Orders";
import Booked from "./admin/Booked";
import Sginup from "./Page/Sginup";
import PrivateRoute from "./utls/PrivateRoute";
import Error from "./utls/Error";
import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Error />} />
          <Route path="/sofa" element={<Sofa />} />
          <Route path="/homefurniture" element={<Homefurniture />} />
          <Route path="/office" element={<Office />} />
          <Route path="/educational" element={<Educational />} />
          <Route path="/outdoor" element={<Outdoor />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/metaltable" element={<Metaltables />} />
          <Route path="/about" element={<About />} />
          <Route path="/most-selling/sofa" element={<Premiumsofa />} />
          <Route path="/most-selling/bed" element={<Premiumbed />} />
          <Route path="/most-selling/tv" element={<Tv />} />
          <Route path="/most-selling/student" element={<Student />} />
          <Route path="/most-selling/prechair" element={<Premiumchair />} />
          <Route path="/most-selling/mst" element={<Table />} />
          <Route path="/most-selling/workstation" element={<Workstation />} />
          <Route path="/most-selling/storeage" element={<Storeageunit />} />
          <Route path="/product/:productId" element={<Productdetail />} />
          <Route path="/inquiry-form" element={<Orderform />} />
          <Route element={<PrivateRoute></PrivateRoute>}>
          <Route path="/admin" element={<Admin></Admin>}></Route>
          <Route path="/createproduct" element={<Createproduct></Createproduct>}></Route>
          <Route path="/createcategory" element={<Createcaregory></Createcaregory>}></Route>
          <Route path="/uploadimg" element={<Imageupload></Imageupload>}></Route>
          <Route path="/prodlist" element={<Products></Products>}></Route>
          <Route path="/asked" element={<Asked></Asked>}></Route>
          <Route path="/orders" element={<Orders></Orders>}></Route>
          <Route path="/booked" element={<Booked></Booked>}></Route>
          <Route path="/signup" element={<Sginup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

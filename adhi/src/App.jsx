import React from "react";
import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import Signup from "./Page/Sginup";
import Home from './Page/Home';
import Login from './Page/Login';
import Createproduct from "./admin/Createproduct";
import Createcaregory from "./admin/Createcaregory";
import Imageupload from "./admin/Imageupload";
import Admin from "./admin/Admin";
import Products from "./admin/Products";
import Asked from "./admin/Asked";
import Orders from "./admin/Orders";
import Booked from "./admin/Booked";
import Sofa from "./Product/Sofa";
import Hotel from "./Product/Hotel";
import Homefurniture from "./Product/Homefurniture";
import Educational from "./Product/Educational";
import Office from "./Product/Office";
import Outdoor from "./Product/Outdoor";
import Metaltables from "./Product/Metaltables";
import About from "./Page/About";
import Premiumsofa from "./premium/Premiumsofa";
import Premiumbed from "./premium/Premiumbed";
import Tv from "./premium/Tv";
import Student from "./premium/Student";
import Premiumchair from "./premium/Premiumchair";
import Table from "./premium/Table";
import Workstation from "./premium/Workstation";
import Storeageunit from "./premium/Storeageunit";
import Bookmodel from "./Product/Bookmodel";
import Productdetail from "./Product/Productdetail";
import Orderform from "./Product/Orderform";
import PrivateRoute from "./utls/PrivateRoute";
import Error from "./utls/Error";

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Error />} />
          <Route element={<PrivateRoute></PrivateRoute>}>
            <Route path="/admin" element={<Admin></Admin>}></Route>
            <Route path="/createproduct" element={<Createproduct></Createproduct>}></Route>
            <Route path="/createcategory" element={<Createcaregory></Createcaregory>}></Route>
            <Route path="/uploadimg" element={<Imageupload></Imageupload>}></Route>
            <Route path="/prodlist" element={<Products></Products>}></Route>
            <Route path="/asked" element={<Asked></Asked>}></Route>
            <Route path="/orders" element={<Orders></Orders>}></Route>
            <Route path="/booked" element={<Booked></Booked>}></Route>
            <Route path="/signup" element={<Signup />} />
          </Route>

          <Route path="/sofa" element={<Sofa />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/educational" element={<Educational />} />
          <Route path="/homefurniture" element={<Homefurniture />} />
          <Route path="/outdoor" element={<Outdoor />} />
          <Route path="/office" element={<Office />} />
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
          <Route path="/book-interior" element={<Bookmodel />} />
          <Route path="/product/:productId" element={<Productdetail />} />
          <Route path="/inquiry-form" element={<Orderform />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

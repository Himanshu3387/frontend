import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Admin from "./pages/admin/admin";
import Course from "./pages/admin/courses";

import CloseAccRequest from "./pages/admin/closeAccRequest";
import Teacher from "./pages/teacher/teacher";
import Student from "./pages/student/student";
import User from "./pages/admin/user";
import AddUser from "./pages/admin/addNewUser";
import AddCourses from "./pages/admin/addCourses";

import AddSchedule from "./pages/admin/addNewSchedule";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShowAllCourses from "./pages/admin/showAllCourses";
import AddTut from "./pages/admin/addtutorial";
import ShowAllUsers from "./pages/user/showAllUsers";
import AboutUs from "./pages/aboutus";
import ContactUs from "./pages/contactus";
import Home from "./pages/home";
import UpcomingCourses from "./pages/upcomingCourses";
import Signup from "./pages/user/signup";
// import ErrorPage from "./pages/user/errorPage";
import Schedule from './pages/admin/schedule'
import Tutorial from './pages/admin/tutorial'
import AddQuiz from './pages/teacher/addQuiz'
import Quize from './pages/teacher/quize'

import QuizList from './pages/teacher/listOfQuizes'
// import Next from "./pages/user/next";
import Signin from "./pages/user/signin";
import ForgotPassword from "./pages/user/forgotpassword";
import ResetPassword from "./pages/user/resetpassword";
// import Search from "./pages/search";
// import Service from "./pages/admin/services";
// import AddService from "./pages/admin/addservice";
import StudentList from './pages/teacher/listAllStudents'
import UserList from "./pages/admin/listOfUsers";
import ScheduleList from "./pages/admin/listOfSchedule";
// import Cart from "./pages/user/cart";
// import UpdateService from "./pages/admin/updateservice";
import UpdateUser from "./pages/user/updateUser";
// import AvailableService from './pages/admin/service/availableservice';
// import UploadImage from './pages/admin/uploadimage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/courses" element={<Course />} />

        <Route path="/closeAccRequest" element={<CloseAccRequest />} />
        <Route path="/users" element={<User />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/" element={<Home />} />
        <Route path="/upcomingCourses" element={<UpcomingCourses />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/errorPage" element={<ErrorPage />} /> */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/showAllCourses" element={<ShowAllCourses />} />
        <Route path="/addNewUser" element={<AddUser />} />
        <Route path="/addCourses" element={<AddCourses />} />

        <Route path="/listOfUsers" element={<UserList />} />

        <Route path="/listOfSchedules" element={<ScheduleList />} />
        <Route path="/updateUser/:id" element={<UpdateUser />} />
        <Route path="/showAllUsers" element={<ShowAllUsers />} />
        <Route path="/addNewSchedule" element={<AddSchedule />} />
        <Route path="/addTutorial" element={<AddTut />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/student" element={<Student />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path='/addQuiz' element={<AddQuiz />} />
        <Route path='/quize' element={<Quize />} />

        <Route path='/listAllStudents' element={<StudentList />} />
        <Route path='/listOfQuizes' element={<QuizList />} />
        {/* <Route path="/next" element={<Next />} />
        
        <Route path="/search" element={<Search />} />
        <Route path="/services" element={<Service />} />
        <Route path="add-services" element={<AddService />} />
        <Route path="/services-list" element={<ServiceList />} />
        <Route path="/updateservice/:id" element={<UpdateService  />} />
        <Route path="/updateemp/:id" element={<UpdateEmployee/>}/>
        <Route path="//availble-services" element={<AvailableService/>}/>
        <Route path="/uploadimage/:id" element={<UploadImage/>}/>
        <Route path="/cart" element={<Cart />} />   */}
      </Routes>
      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </BrowserRouter>
  );
}
export default App;

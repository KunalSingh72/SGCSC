
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/HomePage';
import MainLayout from "./layout/MainLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Courses from "./pages/Courses";
import Student from "./pages/Student";
import EnrollmentVerification from "./components/studentPage/EnrollmentVerification";
import ResultVerification from "./components/studentPage/ResultVerification";
import CertificateVerification from "./components/studentPage/CertificateVerification";
import AdmitCard from "./components/studentPage/AdmitCard";
import StudentLogin from "./components/studentPage/StudentLogin";
import Franchise from "./pages/Franchise";
import FranchiseRegister from "./components/franchisePage/FranchiseRegister";
import FranchiseDetails from "./components/franchisePage/FranchiseDetails";
import FranchiseVerification from "./components/franchisePage/FranchiseVerification";
import CenterLogin from "./components/franchisePage/CenterLogin";
import CenterList from "./components/franchisePage/CenterList";



function App() {

  return (
    <QueryClientProvider client={new QueryClient()}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="student" element={<Student />} />
          <Route path="/student/enrollment-verification" element={<EnrollmentVerification />} />
          <Route path="/student/result-verification" element={<ResultVerification />} />
          <Route path="/student/certificate-verification" element={<CertificateVerification />} />
          <Route path="/student/admit-card" element={<AdmitCard />} />
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/franchise/register" element={<FranchiseRegister />} />
          <Route path="/franchise/details" element={<FranchiseDetails />} />
          <Route path="/franchise/verification" element={<FranchiseVerification />} />
          <Route path="/franchise/centers" element={<CenterList />} />
          <Route path="/franchise/login" element={<CenterLogin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />

        </Route>  
      </Routes>
    </QueryClientProvider>
  )
}

export default App;

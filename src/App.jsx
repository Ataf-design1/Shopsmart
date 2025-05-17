import { Toaster } from 'react-hot-toast'; 
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AppRoutes from "./routers/AppRoutes";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
      <Toaster /> 
    </>
  );
}

export default App;

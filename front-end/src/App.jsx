import Navbar from './components/Navbar';
import PersonalData from './components/PersonalData';
import AcademicCredentials from './components/AcademicCredentials';
import AcademicWork from './components/AcademicWork';
import ProfessionalSummary from './components/ProfessionalSummary';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <PersonalData />
      <AcademicCredentials />
      <AcademicWork />
      <ProfessionalSummary />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;

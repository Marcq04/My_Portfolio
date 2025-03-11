import { Element } from 'react-scroll';

const PersonalData = () => {
  return (
    <Element name="personal" className="min-h-screen p-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Personal Data</h2>
      <p>Bio, Resume, Cover Letter, and Career Philosophy go here.</p>
    </Element>
  );
};

export default PersonalData;

import Header from '../../components/Header/headerComponent';
import ContactForm from './contactForm';
import ListContact from './listContact';
import ListPartners from '../../components/Partner/listPartners';

const Contact = () => (
  <div className="mb-10">
    <Header title="contact" />
    <div className="mt-6 sm:mt-12">
      <ListContact />
    </div>
    <div className="mt-28 flex justify-center">
      <ContactForm />
    </div>
    <div className="bg-secondary-300 py-16 mt mt-20">
      <div className="flex justify-center">
        <div className="w-full 2xl:w-1440">
          <ListPartners />
        </div>
      </div>
    </div>
  </div>
);
export default Contact;

import React from 'react';
import SectionTitle from '../components/SectionTitle';
import contactImage from '../assets/contact.svg';
import { contactDetails } from '../constants';
import ContactDetailsCard from '../components/ContactDetailsCard';

const Contact = () => {
  return (
    <section className="px-4 py-16 lg:py-20" id="contact">
      <SectionTitle title="Contact Me" />
      <div className="container mt-10 flex flex-col gap-10 rounded-2xl border-2 border-white/10 bg-white/5 p-10 md:flex-row">
        <div className=" flex flex-1 items-center justify-center">
          <img src={contactImage} alt="Contact Image" className="h-40" />
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <h1 className="font-serif text-3xl font-bold text-white/70 ">
            Reach Out to Me
          </h1>
          <p className="text-white/60">
            Have any questions or want to collaborate? Feel free to get in touch
            through the options below. I'll respond promptly.
          </p>
          <div className="flex flex-col gap-4">
            {contactDetails.map((contact) => (
              <div>
                <ContactDetailsCard contact={contact} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

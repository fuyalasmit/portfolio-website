import React from 'react';

const ContactDetailsCard = ({ contact }) => {
  return (
    <div className='flex items-center gap-3 relative z-10'>
      <span>{contact.icon}</span>
      {contact.link ? (
        <a href={contact.link} target='_blank' className='text-blue-500 hover:underline' >{contact.value}</a>
      ) : (
        <span className='text-white/70' >{contact.value}</span>
      )}
    </div>
  );
};

export default ContactDetailsCard;

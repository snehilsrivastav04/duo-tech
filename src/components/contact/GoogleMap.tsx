import React from 'react';

const GoogleMap: React.FC = () => {
  return (
    <div className="w-full h-96 rounded-xl overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24266.045622279442!2d77.33250109053174!3d28.597726474017268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef3e209a9c5d%3A0xf67b922c1eb2c241!2sCrystaa%20Tower!5e1!3m2!1sen!2sin!4v1754249825736!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="DuoTech Office Location"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
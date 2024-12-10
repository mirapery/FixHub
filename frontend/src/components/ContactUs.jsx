const ContactUs = () => {
  const openMail = () => {
    // Luo mailto-linkki
    window.location.href = "mailto:support@example.com";
  };

  return (
    <div className="flex justify-center">
      <p className="text-xl text-fh_beige mx-3">Contact Us: </p>
      <button onClick={openMail} className="pl-2.5 pr-2 bg-fh_dgreen">
        <i className="text-xl fa-regular fa-envelope text-fh_beige"></i>
      </button>
    </div>
  );
};

export default ContactUs;
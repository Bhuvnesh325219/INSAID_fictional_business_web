import React from "react";

const Contact = () => {
return (
	
	<div className="contact_class">
	  <div>Call us <a href="tel:8529159176">+91-8824915920</a></div>
	  <div>Mail us <a href="mailto:bhuvnesh325219@gmail.com">bhuvnesh325219@gmail.com</a></div>
	  <div className="query_box">Send your query to us</div>
	  <div>
      <input type="text" id="fname" name="fname"></input>
	  </div>
	  <button>Send</button>
	</div>
	
);
};

export default Contact;
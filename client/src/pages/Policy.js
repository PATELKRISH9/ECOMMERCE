import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <br>
          </br>
          <br></br><img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "95%" }}
          />
        </div>
        <div className="col-md-4">
          <p>At  Ecommer app, protecting your privacy is our top priority. We collect only the necessary information to process your orders and improve our services, including your name, email, address, and payment details.
          </p>
          <p>We ensure the highest level of security for your data by using advanced encryption technologies and secure servers. Your personal information will never be shared with third parties without your explicit consent, except as required by law.</p>
          <p>Our website uses cookies to enhance your browsing experience and provide personalized recommendations. You can manage cookie preferences in your browser settings.
          </p>
        </div>
      </div>
      <br>
      </br>
      <br>
      </br>

      
    </Layout>
  );
};

export default Policy;

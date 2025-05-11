import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to Ecommer app, your trusted destination for a seamless online shopping experience. We are passionate about connecting people with quality products, ensuring convenience and satisfaction every step of the way.

Our mission is to provide an innovative e-commerce platform where users can explore a diverse range of products, enjoy secure transactions, and experience exceptional customer service. From easy browsing to fast deliveries, we strive to make online shopping a joy for every user.

Driven by technology, we leverage modern tools and frameworks to create a user-friendly, secure, and efficient platform. At Ecommer app, your satisfaction is our priority, and we are committed to building a community of happy customers and successful businesses.
      <br></br>   CONTACT NO-9979056209 </p>
        </div>
      </div>
      <br>
      </br>
      <br>
      </br>
    </Layout>
  );
};

export default About;

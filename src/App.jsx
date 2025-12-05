import React from "react";
import Cards from "./components/cards";
import CounterCard from "./components/CounterCard";
import NotesUI from "./components/NotesApp";

const App = () => {
  return (
    <div className="parent">
      <>
        <NotesUI />
        {/* <CounterCard /> */}
        {/* <Cards
          img={
            "https://play-lh.googleusercontent.com/5ZOQbuxacVOWK6AM4Env-adyEWRUCJt0VrUl9bWKW4Z4qLSjJUBuMP8-dALMy9oWu530"
          }
          cnam="Airbnb"
          skill="UI/UX Designer"
          tag1="Contract"
          tag2="Remote"
          price="$100/hr"
          location="Dehli, India"
        />
        <Cards
          img={
            "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg"
          }
          cnam="Apple"
          skill="Graphics Designer"
          tag1="Full-Time"
          tag2="Flexible Schedual"
          price="85-120k"
          location="Mumbai, India"
        />
        <Cards
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSTWlnJCnn2ljYqv2t4XY9bM5U4pnohvXZRw&s"
          }
          cnam="Microsoft"
          skill="Senior UI/UX Designer"
          tag1="Full-Time"
          tag2="10+ years Experience"
          price="100k"
          location="Islamabad, Pakistan"
        />
        <Cards
          img={
            "https://media.licdn.com/dms/image/v2/C4E0BAQGNOHmQfWuJlA/company-logo_200_200/company-logo_200_200/0/1630604723396/technovasystemsinc_logo?e=2147483647&v=beta&t=fnyMr5ozm1VyCVzcb36aWhWNDJ3mV635n_TwladVA8A"
          }
          cnam="TechNova Systems"
          skill="Frontend React Developer"
          tag1="Full-Time"
          tag2="3+ years Experience"
          price="85k"
          location="Karachi, Pakistan"
        />
        <Cards
          img={
            "https://images.unsplash.com/photo-1521791136064-7986c2920216"
          }
          cnam="PixelWare Studios"
          skill="UI/UX Product Designer"
          tag1="Remote"
          tag2="Contract"
          price="$60/hr"
          location="Dubai, UAE"
        />
        <Cards
          img={
            "https://www.freeiconspng.com/uploads/amazon-icon-6.png"
          }
          cnam="Amazon"
          skill="Cloud DevOps Engineer"
          tag1="Hybrid"
          tag2="5+ years Experience"
          price="$120k"
          location="Lahore, Pakistan"
        />
        <Cards
          img={
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
          }
          cnam="BlueShield Cybersecurity"
          skill="Cybersecurity Analyst"
          tag1="Full-Time"
          tag2="Entry Level"
          price="$70k"
          location="Toronto, Canada"
        />
        <Cards
          img={
            "https://media.licdn.com/dms/image/v2/D4D0BAQEYFN2RmF6W5w/company-logo_200_200/company-logo_200_200/0/1729016410449/quantumsoft_ai_logo?e=2147483647&v=beta&t=TDc7qfHC5ZEZSRDhPiZZBWtJzZTps7Wa19hKIdju7k0"
          }
          cnam="QuantumSoft AI"
          skill="Machine Learning Engineer"
          tag1="Remote"
          tag2="4+ years Experience"
          price="$140k"
          location="San Francisco, USA"
        /> */}
      </>
    </div>
  );
};

export default App;

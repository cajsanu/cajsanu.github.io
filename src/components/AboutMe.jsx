import { useNavigate } from "react-router";

export const AboutMe = () => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };
  return (
    <>
      <div className="about">
      <h2>About me</h2>
        <p>
          I am currently on a self-study journey to become a full-stack software
          engineer. What started as a harmless hobby has transformed into a
          growing interest and passion for software development.
        </p>
        <p>
          As of now, I am most confident in JavaScript and Python. I have
          completed various projects using technologies such as React, Node.js,
          Express, GraphQL, and MongoDB. On the frontend, I have implemented
          complex state management using technologies like Redux and ReactQuery.
          Additionally, I have recently ventured into end-to-end testing using
          Cypress.
        </p>
        <p>
          I'm very interested in all things code and eager to learn more and get
          some work experience. I think I've finally found the right career path
          for me.
        </p>
        <p>
          I'm curious by nature and interested in most things, which has led to
          quite an array of work experience. My employers have described me as
          diligent, punctual and industrious and I tend to get along with most
          people. I'm always up for new experiences and adventures and I will
          work hard and put in the hours to achieve what I set my mind to.
        </p>
      </div>
      <button onClick={handleClose}>Close</button>
    </>
  );
};

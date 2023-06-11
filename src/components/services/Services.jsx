import React from "react";
import "./services.css";
import { BsCheckLg } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className="services__list-icon" size={36} />
              <p>
                <strong>User Interface (UI) Development:</strong> Building user interfaces using ReactJS and related libraries/frameworks to create interactive and responsive web applications.
              </p>
            </li>
            <li>
              <BsCheckLg className="services__list-icon" size={36} />
              <p>
                <strong>API Integration:</strong> Connecting frontend applications to backend APIs, fetching and manipulating data, and handling asynchronous operations using libraries like Axios or the built-in Fetch API.
              </p>
            </li>
            <li>
              <BsCheckLg className="services__list-icon" size={36} />
              <p>
                <strong>Responsive Web Design:</strong> Ensuring that the frontend application is optimized for various devices and screen sizes by employing responsive design techniques and media queries.
              </p>
            </li>
            <li>
              <BsCheckLg className="services__list-icon" size={36} />
              <p>
                <strong>Debugging and Troubleshooting:</strong> Diagnosing and resolving frontend-related issues, bugs, and compatibility problems by utilizing debugging tools and techniques.
              </p>
            </li>
            <li>
              <BsCheckLg className="services__list-icon" size={36} />
              <p>
                <strong>Continuous Learning and Adaptation:</strong>  Staying updated with the latest trends and best practices in frontend development, constantly learning new technologies, and adapting to evolving industry standards.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg size={36} className=" services__list-icon" />
              <p>
                <strong>Wireframing:</strong> Building low-fidelity visual
                representations of the user interface, outlining the layout,
                structure, and basic functionality of a digital product.
              </p>
            </li>
            <li>
              <BsCheckLg size={36} className=" services__list-icon" />
              <p>
                <strong>Prototyping:</strong> Developing interactive, clickable
                prototypes to demonstrate the flow, interactions, and user
                experience of a product before development.
              </p>
            </li>
            <li>
              <BsCheckLg size={36} className=" services__list-icon" />
              <p>
                <strong>Responsive Design: </strong> Adapting designs to ensure
                a consistent and optimized user experience across different
                devices and screen sizes.
              </p>
            </li>
            <li>
              <BsCheckLg size={36} className=" services__list-icon" />
              <p>
                <strong>Visual Design: </strong> Creating visually appealing and
                cohesive designs that align with the brand identity while
                ensuring a delightful user experience.
              </p>
            </li>
            <li>
              <BsCheckLg size={36} className=" services__list-icon" />
              <p>
                <strong>Interative Design:</strong> Engaging in an iterative
                design process, continuously refining and improving the design
                based on user feedback and testing results.
              </p>
            </li>
          </ul>
        </article>

        {/* <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className="services__list-icon" />
              <p>Lorem, Ipsum dolor sit amet consectotur elit.</p>
            </li>
            <li>
              <BsCheckLg className="services__list-icon" />
              <p>Lorem, Ipsum dolor sit amet consectotur elit.</p>
            </li>
            <li>
              <BsCheckLg className="services__list-icon" />
              <p>Lorem, Ipsum dolor sit amet consectotur elit.</p>
            </li>
            <li>
              <BsCheckLg className="services__list-icon" />
              <p>Lorem, Ipsum dolor sit amet consectotur elit.</p>
            </li>
          </ul>
        </article> */}
      </div>
    </section>
  );
};

export default Services;

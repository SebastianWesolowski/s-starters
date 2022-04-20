import React from "react";

import DevelopStyles from "styles/DevelopStyles";
import Wrapper from "components/Forms/FormSignIn/Wrapper";
const App: React.FC = () => {
  if (process.env.NODE_ENV === "production") {
    return <Wrapper />;
  }

  return (
    <section className="bg-bg-3 pt-10 pt-md-0">
      <DevelopStyles />
      <div className="container">
        <div className="row justify-content-between flex-md-row-reverse">
          <div className="py-10 col-xl-6 col-lg-7 col-md-8 col-sm-11">
            <h2 className="mb-4" data-aos="fade-down" data-aos-delay="0">
              Welcome to your account on the minisymposium application form
            </h2>
            <div className="mb-4" data-aos="fade-down" data-aos-delay="150">
              <p>
                The 5th Polish Congress of Mechanics (PCM) continues the
                tradition of scientific meetings on Mechanics, initiated around
                15 years ago during the 1st PCM in Warsaw.{" "}
              </p>
              <p>
                The Congress presents the current state of the art research in
                all disciplines of Classical and Quantum Mechanics, Solid and
                Fluid Mechanics, Computational Mechanics, Applied Mathematics
                and Physics, as well as Structural Mechanics and Engineering.
              </p>
              <p>
                The 25th International Conference on Computer Methods in
                Mechanics (CMM) continues the 49-years old series of conferences
                dedicated to the numerical methods and their applications in
                mechanics-based problems. The scientific meetings, organized
                biannually since 1973, provide a forum for the presentation and
                discussion of new ideas surrounding the theoretical background
                and practical applications of Computational Mechanics.
              </p>
            </div>
          </div>
          <div className="py-10 col-xl-5 col-lg-6 col-md-7 col-sm-10">
            <h1 className="mb-4" data-aos="fade-down" data-aos-delay="0">
              Minisymposium form
            </h1>
            <p className="mb-4" data-aos="fade-down" data-aos-delay="150">
              Please fill in the form if you want to propose a conference topic
              (fields marked * are required):
            </p>
            <Wrapper />
            <p>
              If case of any changes after registration form submission please
              contact with organizers by{" "}
              <a href="mailto:contact@pcm-cmm.com">contact@pcm-cmm.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;

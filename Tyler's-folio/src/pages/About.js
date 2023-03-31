import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
import Button from "../components/Button";
// import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Dhanushwaran AJ</span>
              </p>
              <h2 className="about__heading">A Web developer</h2>
              <div className="about__info">
                <PText>
                  abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz
                  abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz
                  abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz
                  abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz
                  abcdefghijklmnopqrstuvwxyz
                  <br /> <br />
                  abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz
                  abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz
                  abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz
                  abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz
                  abcdefghijklmnopqrstuvwxyz
                  <br />
                  <br />
                  abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz
                  abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz
                  abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz
                  abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz
                  abcdefghijklmnopqrstuvwxyz place.
                </PText>
              </div>
              <Button btnText="Download Resume" btnLink="#" />
            </div>
            <div className="right">
              <img src="" alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={["Kamala Subramaniam Matriculation Higher"]}
              />
              <AboutInfoItem
                title="High School"
                items={["Vidyaa Vikas International School"]}
              />
              <AboutInfoItem
                title="collage"
                items={["Sri Shakthi Institute of Engineering and Technology"]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={["HTML", "CSS", "JavaScript", "REACT"]}
              />
              <AboutInfoItem
                title="BackEnd"
                items={["Node", "Express", "MongoDB"]}
              />
              <AboutInfoItem title="Design" items={["Figma"]} />
            </div>
            {/* <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2010-2012"
                items={['junior developer at web Cifar']}
              />
              <AboutInfoItem
                title="2012-2016"
                items={['Front end developer at web Cifar ']}
              />
              <AboutInfoItem
                title="2016-"
                items={['Freelance web Developer']}
              />
            </div> */}
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

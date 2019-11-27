import React from 'react';
import styled from 'styled-components';

export default function TechStack() {
  return (
    <section id="techstack">
      <div className="wrap">
        <article>
          <h2>Tech stack</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
          <StyledTechStack>
            <li>
              <img
                src={require('../assets/img/wordpress.png')}
                alt="Wordpress"
              />
            </li>
            <li>
              <img src={require('../assets/img/html.png')} alt="HTML5" />
            </li>
            <li>
              <img src={require('../assets/img/css.png')} alt="CSS3" />
            </li>
            <li>
              <img src={require('../assets/img/sass.png')} alt="SCSS" />
            </li>
            <li>
              <img
                src={require('../assets/img/javascript.png')}
                alt="Javascript"
              />
            </li>
            <li>
              <img src={require('../assets/img/react.png')} alt="React" />
            </li>
            <li>
              <img src={require('../assets/img/git.png')} alt="Git" />
            </li>
            <li>
              <img src={require('../assets/img/github.png')} alt="Github" />
            </li>
            <li>
              <img
                src={require('../assets/img/react-native.png')}
                alt="React Native"
              />
            </li>
            <li>
              <img src={require('../assets/img/php.png')} alt="PHP" />
            </li>
            <li>
              <img src={require('../assets/img/bash.png')} alt="Bash" />
            </li>
            <li>
              <img
                src={require('../assets/img/styled-components.png')}
                alt="styled components"
              />
            </li>
            <li>
              <img src={require('../assets/img/latex.png')} alt="LaTex" />
            </li>
            <li>
              <img
                src={require('../assets/img/photoshop.png')}
                alt="Photoshop"
              />
            </li>
            <li>
              <img
                src={require('../assets/img/lightroom.png')}
                alt="Lightroom"
              />
            </li>
          </StyledTechStack>
        </article>
        <hr />
      </div>
    </section>
  );
}

const StyledTechStack = styled.ul`
  display: flex;
  flex: 0 0 50%;
  padding: 20px 20px;
  flex-flow: row wrap;
  align-items: center;
  margin-top: 35px;
  padding: 0;

  li {
    list-style-type: none;
    flex: 0 0 50%;
    padding: 30px 25px;
    box-sizing: border-box;
    text-align: center;

    @media screen and (min-width: 480px) {
      flex: 0 0 33.3333%;
      padding: 25px 30px;
    }

    @media screen and (min-width: 768px) {
      flex: 0 0 25%;
      padding: 25px 35px;
    }

    @media screen and (min-width: 900px) {
      flex: 0 0 20%;
      padding: 30px 45px;
    }

    img {
      max-width: 100%;
      max-height: 75px;
      // filter: grayscale(100%);
      // transition: all 0.2s ease;

      // &:hover {
      //  filter: grayscale(0%);
      // }
    }
  }
`;

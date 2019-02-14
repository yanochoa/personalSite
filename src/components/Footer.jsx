import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  margin: 6rem 0 1rem 0;
  padding: 1rem ${props => props.theme.spacer.horizontal};
  text-align: center;
  color: ${props => props.theme.colors.grey};
  a {
    text-decoration: none;
    color: ${props => props.theme.brand.primary};
  }
`;

const Footer = () => (
  <Wrapper data-testid="footer">
    Developed by Yan Ochoa using React.js and Gatsby, hosted on Netlify.{" "}
    <a href="https://github.com/yanochoa/personalSite">Project Github</a>, Feel
    free to take what you'd like.
  </Wrapper>
);

export default Footer;

import styled from 'styled-components';

import imghomes from '../Agents/assets/home.jpg';

export const Weapons = styled.section`
  /* background-color: #ff4655; */
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-image: url(${imghomes});
  background-position: center;

  .Weapons {
    width: 20%;
    height: 10%;
    background-color: #1b252d;
    margin: 20px 20px;
  }

  a {
    text-decoration: none;
    color: white;
  }

  p {
    font-size: 1.5rem;
    text-align: center;
    color: white;
    margin-top: 30px;
  }
`;

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
  overflow-x: hidden;

  .Weapons {
    width: 20%;
    height: 10%;
    background-color: #1b252d;
    margin: 20px 20px;
    background-color: #ff4655;
    border-radius: 5%;
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
  @media (max-width: 700px) {
    .Weapons {
      height: 5%;
    }
    p {
      font-size: 1rem;
      margin-top: 10px;
    }
  }
`;

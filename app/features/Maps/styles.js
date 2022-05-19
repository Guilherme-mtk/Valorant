import styled from 'styled-components';

import imghomes from '../Agents/assets/home.jpg';

export const Maps = styled.section`
  /* background-color: #ff4655; */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-image: url(${imghomes});
  background-position: center;
  overflow-x: hidden;

  a {
    text-decoration: none;
    color: white;
  }

  .Mapas {
    height: 10%;
    margin: 20px 30px;
    justify-content: center;
  }

  img {
    max-width: 100%;
  }

  p {
    margin-bottom: 20px;
    font-size: 1.5rem;
    text-align: center;
    color: white;
    background-color: #ff4655;
  }
  @media (max-width: 700px) {
  }
`;

import styled from 'styled-components';
import imghome from '../Agents/assets/agents.jpg';
import imghomes from '../Agents/assets/home.jpg';

export const Maps = styled.section`
  /* background-color: #ff4655; */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-image: url(${imghomes});
  background-position: center;

  a {
    text-decoration: none;
    color: white;
  }

  .Mapas {
    /* background-color: #1b252d; */
    border-radius: 8%;
    margin: 20px 20px;
    justify-content: center;
    background-image: url(${imghome});
  }

  img {
    max-width: 100%;
  }

  p {
    margin-bottom: 20px;
    font-size: 1.5rem;
    text-align: center;
    color: white;
  }
`;
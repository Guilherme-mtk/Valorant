import styled from 'styled-components';
import imghome from './assets/agents.jpg';
import imghomes from './assets/home.jpg';

export const Container = styled.section`
  /* background-color: #ff4655; */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-image: url(${imghomes});
  background-position: center;

  .menu {
    width: 100%;
    display: flex;
    background-color: #1b252d;
    height: 60px;
    align-items: center;
    margin-bottom: 40px;
  }

  ul {
    display: flex;
    margin: 60px;
  }

  li {
    align-items: center;
    font-size: 1.5rem;
    margin: 20px;
  }

  a {
    text-decoration: none;
    color: white;
  }

  a:hover {
    color: #ff4655;
    height: 60px;
  }

  .Champions {
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

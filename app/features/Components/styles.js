import styled from 'styled-components';

export const Header = styled.div`
  .menu {
    width: 100vw;
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

  img {
    max-width: 100%;
  }

  p {
    margin-bottom: 20px;
    font-size: 1.5rem;
    text-align: center;
    color: white;
  }
  @media (max-width: 700px) {
    .menu {
      width: 500px;
    }
    li {
      font-size: 1.2rem;
    }
  }
`;

import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import styled from 'styled-components';

import Nav from './Nav';

interface IProps {
  theme: {
    red: string;
    black: string;
    lightgrey: string;
  };
}

if (typeof window !== 'undefined') {
  NProgress.configure({ showSpinner: false });

  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  Router.events.on('routeChangeError', () => {
    NProgress.done();
  });
}

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: ${(props: IProps) => props.theme.red};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 81.25rem) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid ${(props: IProps) => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 81.25rem) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${(props: IProps) => props.theme.lightgrey};
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>Sick Fits</a>
        </Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </StyledHeader>
);

export default Header;

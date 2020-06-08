import Nav from './Nav';

const Header = () => {
  return (
    <>
      <div className="bar">
        <a href="">Sick Fits</a>
        <Nav />
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <div>Cart</div>
    </>
  );
};

export default Header;

import Link from 'next/link';

const Nav = () => {
  return (
    <>
      <Link href="/sell">
        <a>Sell!</a>
      </Link>
      <Link href="/">
        <a>Home!</a>
      </Link>
    </>
  );
};

export default Nav;

import Header from './Header';
import Meta from './Meta';

interface Props {
  children: {};
}

export const Page = (props: Props) => {
  return (
    <>
      <Meta />
      <Header />
      {props.children}
    </>
  );
};

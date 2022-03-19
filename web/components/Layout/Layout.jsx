import { Head, Header } from "components";

export function Layout(props) {
  return (
    <>
      <Head />
      <Header />
      <div>
        <aside></aside>
        <main>{props.children}</main>
      </div>
    </>
  );
}

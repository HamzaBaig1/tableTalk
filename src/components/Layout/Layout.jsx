import Nav from "../Nav";
import Footer from "../Footer";

function Layout({ children }) {
  return (
    <div className="content font-mont">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;

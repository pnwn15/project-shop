import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({children}) {
  return (
    <div className="layout">
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

import Footer from "./Footer";
import Header from "./Header";
import SynerdeaHead from "./SynerdeaHead";

const Layout = ({ children }) => {
  return (
    <main>
      <SynerdeaHead />
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;

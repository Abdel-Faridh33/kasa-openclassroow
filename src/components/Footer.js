import "../styles/components/footer.scss";
import logo from "../assets/LOGO_white.svg"

function Footer() {
  return (
    <footer>
      <div className="logo">
        <img src={logo} />
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;

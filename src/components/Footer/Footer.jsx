import "./Footer.css";

const Footer = () => {
  let dateObj = new Date();
  let getYear = dateObj.getFullYear();
  return <footer>&#169; {getYear} #VANLIFE</footer>;
};

export default Footer;

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">

      <h2>FACEHEX</h2>

      <div className="footerLinks">

        <Link to="/privacy">
          Privacy Policy
        </Link>

        <Link to="/terms">
          Terms & Conditions
        </Link>

        <Link to="/legal-disclaimer">
          Disclaimer
        </Link>

      </div>

      <p>
        support@facehex.qzz.io
      </p>

      <p>
        © 2026 FaceHex
      </p>

    </footer>
  );
}
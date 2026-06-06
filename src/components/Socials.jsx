import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter
} from "react-icons/fa";

export default function Socials() {
  return (
    <section className="socialSection">

      <span>
        FOLLOW FACEHEX
      </span>

      <h2>
        Join Our Community
      </h2>

      <div className="socialGrid">

        <a
          href="https://x.com/FaceHexOfficial"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>

        <a
          href="https://www.facebook.com/FaceHexOfficial"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>

        <a
          href="https://www.instagram.com/facehexofficial"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.youtube.com/@FaceHexOfficial"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube />
        </a>

      </div>

    </section>
  );
}
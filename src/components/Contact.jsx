import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-alien mb-4">Contact</h2>
      <div className="space-y-2">
        <p>Email: gregudogu@gmail.com</p>
        <p>Phone: 07067444368</p>
        <div className="flex space-x-4">
          <a
            href="http://www.github.com/bootspace"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-alien text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/chijioke-udogu-baba0bb8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-alien text-2xl" />
          </a>
          <a
            href="https://twitter.com/_lazy_eye"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-alien text-2xl" />
          </a>

          <a
            href="https://web.facebook.com/profile.php?id=61574813981391"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-alien text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
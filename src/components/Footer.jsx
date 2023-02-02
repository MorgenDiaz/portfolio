import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faGithub,
  faGoodreads,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="flex justify-center p-12 text-gray-100 bg-gray-800">
      <div className="container flex-col items-center justify-center">
        <a rel="noreferrer" href="#top" class="back-to-top">
          <FontAwesomeIcon
            className="my-1 text-2xl transition-all duration-200 ease-in hover:-translate-y-0.5"
            icon={faAngleUp}
          />
        </a>
        <div className="flex justify-center pt-6 pb-6 text-center gap-x-10">
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/morgendiaz/"
            target="_blank"
          >
            <FontAwesomeIcon
              className="my-1 text-3xl transition-all duration-200 ease-in hover:-translate-y-0.5"
              icon={faLinkedinIn}
            />
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/MorgenDiaz"
            target="_blank"
          >
            <FontAwesomeIcon
              className="my-1 text-3xl transition-all duration-200 ease-in hover:-translate-y-0.5"
              icon={faGithub}
            />
          </a>
          <a
            rel="noreferrer"
            href="https://www.goodreads.com/user/show/98054938-morgen-diaz"
            target="_blank"
          >
            <FontAwesomeIcon
              className="my-1 text-3xl transition-all duration-200 ease-in hover:-translate-y-0.5"
              icon={faGoodreads}
            />
          </a>
        </div>
        <hr />
        <div className="flex justify-center pt-12">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.codewars.com/users/mdiaz93"
          >
            <img
              src="https://www.codewars.com/users/mdiaz93/badges/large"
              alt="codewars badge large"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

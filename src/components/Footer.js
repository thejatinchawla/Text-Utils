import React from "react";

export default function Footer(props) {
  return (
    <div>
      <footer>
        <p
          className="copy"
          id="rights"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          &copy; 2022 All Rights Reserved by <span>Jatin Chawla</span>
        </p>
        <div className="social-links mt-5 ">
          <a
            href="https://www.instagram.com/thejatinkhatri/"
            target={"_blank"}
            style={{ color: props.mode === "dark" ? "#2f9ee5" : "black" }}
            className="fa fa-instagram instagram m-1"
          >
            &nbsp;
          </a>
          <a
            href="https://www.linkedin.com/in/jatin-chawla-2a167720a"
            target={"_blank"}
            style={{ color: props.mode === "dark" ? "#2f9ee5" : "black" }}
            className="fa fa-linkedin linkedin m-1"
          >
            &nbsp;
          </a>
          <a
            href="https://github.com/thejatinchawla"
            target={"_blank"}
            style={{ color: props.mode === "dark" ? "#2f9ee5" : "black" }}
            className="fa fa-github github m-1"
          >
            &nbsp;
          </a>
          <a
            href="#//"
            target={"_blank"}
            style={{ color: props.mode === "dark" ? "#2f9ee5" : "black" }}
            className="fa fa-twitter twitter m-1"
          >
            &nbsp;
          </a>
        </div>
      </footer>
    </div>
  );
}

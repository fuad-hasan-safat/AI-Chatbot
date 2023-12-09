import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <p style={{ color:"yellow", fontSize: "30px", textAlign: "center", padding: "20px" }}>
          "I imagine a world in which AI is going to make us work more productively, live longer, and have cleaner energy."
          <span>
            <Link
              style={{ color: "white" }}
              className="nav-link"
              to={"https://www.youtube.com/@fuad-hasan-safat"}
            >
              — Fei-Fei Li.
            </Link>
          </span>
          💘
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral  justify-around text-neutral-content">
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <a
          target="_blank"
          href="https://www.facebook.com/mehedifb1/"
          className="link link-hover"
        >
          Facebook
        </a>
        <a
          target="_blank"
          href="https://github.com/abcmehedi5"
          className="link link-hover"
        >
          Github
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/mehedilinkdin/"
          className="link link-hover"
        >
          Linkdin
        </a>
      </div>
    </footer>
  );
};

export default Footer;

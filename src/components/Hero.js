import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <h1>
          We Build <span className="highlight">Amazing Web Apps</span>
        </h1>
        <p>
          Empowering businesses with innovative digital solutions that drive
          growth and success.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">View Our Work</button>
        </div>
        <div className="hero-stats">
          <div><strong>25+</strong> Projects</div>
          <div><strong>10+</strong> Clients</div>
          <div><strong>5+</strong> Team Members</div>
        </div>
      </div>

      <div className="hero-right">
        <img src="/hero.jpg" alt="Developer at work" />
      </div>
    </section>
  );
}

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Lindsey</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Data Scientist</span>
          </h1>
          <p className="hero--section--description">
            Avid learner and data analyst. I am passionate about using Python, Artificial Intelligence, and Machine Learning to uncover data-driven stories and solve business problems.
            <br />
            <br /> With a background in full-stack (MERN) development, I not only analyze data but also build the useful, interactive applications that bring those insights to life. My work is focused on creating real-world value, from predicting customer churn to analyzing market sentiment. Check out my latest data science projects below and reach out!
          </p>
          <br />
        </div>
        <a href="./img/lindsey_resume_2025.pdf" target="_blank">
          <button className="btn btn-primary">View my Resume</button>
        </a>
        <a href="./img/AIML.pdf" target="_blank">
          <button className="btn btn-primary">View my Post Graduate Certificate in Artifical Intelligence and Machine Learning</button>
        </a>
        <a href="./img/bootcamp_certificate.pdf" target="_blank">
          <button className="btn btn-primary">View my Coding Bootcamp Certificate</button>
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/profile_pic.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}

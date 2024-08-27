export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Lindsey</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Developer and</span>
            {""}
            <br />
            Data Scientist
          </h1>
          <p className="hero--section--description">
            Avid learner and creator. I am fascinated by data and the stories we can uncover using Artificial Intelligence and Machine Learning. I also love creating useful, interactive, and
            visually appealing applications for individuals and companies.
            <br />
            <br /> I'm trained in the MERN stack and Python formally and have experience
            with HTML5, CSS3, JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB,
            MySQL, and more. Check out my latest work below and reach out!
          </p>
          <br />
        </div>
        <a href="https://drive.google.com/file/d/1xIpzGT9VQuGLzovvTL3ua5TZeBppps1L/view?usp=sharing" target="_blank">
          <button className="btn btn-primary">View my Resume</button>
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

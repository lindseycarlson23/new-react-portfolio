export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Lindsey</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Full Stack</span>
            {""}
            <br />
            Developer
          </h1>
          <p className="hero--section--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Provident sapiente iusto excepturi.
          </p>
        </div>
        <button className="btn btn-primary">Get in Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/profile_pic.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}

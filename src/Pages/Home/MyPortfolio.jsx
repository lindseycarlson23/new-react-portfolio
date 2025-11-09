import data from "../../data/index.json";
// 1. Remove <Link> from here, we don't need it.

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
          {/*
           * CHANGE 1: Use an <a> tag for external links.
           */}
          <a
            href="https://github.com/lindseycarlson23"
            className="remove--underline"
            target="_blank"
            rel="noopener noreferrer" // Good for security
          >
            <button className="btn btn-github">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 33 33"
                fill="none"
              >
                {/* ... svg path ... */}
              </svg>
              Visit My GitHub
            </button>
          </a>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          /*
           * CHANGE 2: Remove the outer <Link> wrapper from the card.
           * The <div> is now the top-level element.
           */
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>

              <p className="text-sm portfolio--link">
                <a
                  href={item.githublink}
                  className="remove--underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View in GitHub
                </a>
              </p>
                
                {item.deployedlink && (
                  <p className="text-sm portfolio--link">
                    <a
                      href={item.deployedlink}
                      className="remove--underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    View Live Site
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 20 19"
                      fill="none"
                    >
                      <path
                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                        stroke="currentColor"
                        stroke-width="2.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </p>
                )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
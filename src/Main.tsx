import HoverCard from "./HoverCard";

const Main = () => {
  return (
    <div className="main">
      <div className="html">{"<html>"}</div>
      <div className="html" style={{ marginLeft: "16px" }}>{`<body>`}</div>

      {/* sections */}
      <div className="section">
        <div className="html">{"<h1>"}</div>
        <h4 className="text-header">Hi There, Hello, I am</h4>
        <div className="html">{"</h1>"}</div>
        <div className="html">{"<h2>"}</div>
        <h2 className="text-title">Isaac Higgins.</h2>
        <h2 className="text-dark-title">An aspiring full-stack developer</h2>
        <div className="html">{"</h2>"}</div>

        <p>
        <div className="html">{"<p>"}</div>
        I’m a Full-Stack Developer located around Boston. I have a serious passion for building web-applications and creating intuitive, dynamic user experiences.{" "}
        </p>
        <div className="html">{"</p>"}</div>

      <div>View my resume</div>

      </div>

      <div className="section">
        <div className="section-heading">
          <span>01.</span>
          <h3>A little About Me</h3>
        </div>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>
      </div>

      <div className="section">
        <div className="section-heading">
          <span>02.</span>
          <h3>Some things I made </h3>
        </div>

        <div className="project">
          <HoverCard></HoverCard>
          <div className="content">
            <h5>Featured Project</h5>
            <h4>Halcyon Theme</h4>
            <p>
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, and npm.
            </p>
            <ul>
              <li>react</li>
              <li>react</li>
              <li>react</li>
              <li>react</li>
            </ul>
          </div>
        </div>

        <div className="project">
          <div className="content" style={{ textAlign: "left" }}>
            <h5>Featured Project</h5>
            <h4>Halcyon Theme</h4>
            <p>
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, and npm.
            </p>
            <ul style={{ flexDirection: "row" }}>
              <li>react</li>
              <li>react</li>
              <li>react</li>
              <li>react</li>
            </ul>
          </div>
          <HoverCard></HoverCard>
        </div>
      </div>
      <div className="html">{"</body>"}</div>
      <div className="html">{"</html>"}</div>
    </div>
  );
};

export default Main;

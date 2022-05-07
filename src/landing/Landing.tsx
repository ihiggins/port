import Button from "@mui/material/Button/Button";
import "./Styles.scss";

const Landing = () => {
  return (
    <div className="content">
      <div className="section">
        <h4 className="text-header">Hi There, Hello, I am</h4>
        <h2 className="text-title">Isaac Higgins.</h2>
        <h2 className="text-dark-title">An aspiring full-stack developer.</h2>
        <p className='spacer'>
          I’m a Full-Stack Developer located around Boston. I have a serious
          passion for building web-applications and creating intuitive, dynamic
          user experiences.
        </p>
        <Button variant="outlined" className="button-over">View My Resume</Button>

      </div>
    </div>
  );
};

export default Landing;

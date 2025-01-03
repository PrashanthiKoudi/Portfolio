import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>ETL Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>JavaScript</h5>
                </div>

              </Carousel>
              <div className="skill-box">
    <h3 style={{ marginBottom: "10px", textAlign: "center" }}>What Else I Bring</h3>
    <p style={{ textAlign: "left", lineHeight: "1.6", fontSize: "14px", margin: "0" }}>
        <strong>Development and IDEs:</strong> Java, Angular, Spring Boot, C/C++, HTML5, CSS3, Bootstrap, jQuery, PHP, GitHub, Git, Solidity, Anaconda, Machine Learning, Blockchain, Mainframe, Android Studio, Visual Studio Code, Eclipse, PyCharm<br />
        <strong>Database Management:</strong> PostgreSQL, SQL, MySQL, Datastage, MongoDB, IBM DB2, Cloud Pak for Data, ETL Pipelines, Power BI<br />
        <strong>Project Management:</strong> Agile methodologies, task prioritization, and time management
    </p>
</div>


            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

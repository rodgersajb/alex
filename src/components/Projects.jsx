import bookDoodle from '../assets/book-doodle.jpg'
import wave from '../assets/prim-wave-svg.png'

import ProjectCards from './ProjectCards';


const Projects = () => {


    return (
      <section className="projects">
        <header>
          <div className="header-grid">
            <div className="header-content">
              <div className="headings-container">
                <h2 className="highlighter-accent">Projects</h2>
                <h5 className='highlighter-accent'>My journey so far</h5>
              </div>
              <img src={wave} alt="light blue wave" />
              
            </div>
            <div className="header-image">
              <img
                src={bookDoodle}
                alt="This is Alex, the developer of this portfolio!"
              />
            </div>
          </div>
        </header>
        <ProjectCards />
      </section>
    );
}

export default Projects;
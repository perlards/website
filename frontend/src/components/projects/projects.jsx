import './project.css'
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';


function Projects({ name, description, github, imageSrcs = [] }) {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const slides = imageSrcs.map(src => ({ src }));

    return (
        <div className="project">
            <div className="project-content">
            <div className="project-text">

            <h4>{name}</h4>
            <p>{description}</p>
            <p style={{ marginTop: '8px' }}>Check out my projects!</p>  {/* NEW line here */}
            </div>
            <div className="project-image">
            {slides.length > 0 && (

            <img
            width="250"
            src={slides[0].src}
            alt={`Screenshot of ${name}`}
            className="website-ss"
            style={{ cursor: 'pointer' }}
            onClick={() => setIsOpen(true)}
        />
            )}
        {github ? (
        <a 
                target="_blank" rel="noreferrer" href={github}>
                <button className="github">
                <img
                className="github-inline"
                width="20"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub Button"
            />
                    GitHub
                </button>
            </a>
        ): (
            <div className="coming-soon-placeholder">
            <button className="github disabled" disabled >

                <img
                    className="github-inline"
                    width="20"
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="GitHub Button"
                />
                Coming Soon
            </button>
            </div>
        )}

        </div>
        
        {isOpen && ( /*conditional*/
            <Lightbox
                open={isOpen}
                close={() => setIsOpen(false)}
                slides={slides}
                index={photoIndex}
                onIndexChange={setPhotoIndex}
            /* current imag, next/prev, close*/
            
            
            /*works like an array moving from index 0 and adding one to scroll through the images and uses % to loop back*/ 
            /* lightbox before switiching to yet-another-react-lightbox)
                mainSrc={imageSrcs[photoIndex]}
                nextSrc={imageSrcs[(photoIndex + 1) % imageSrcs.length]}
                prevSrc={imageSrcs[(photoIndex + imageSrcs.length - 1) % imageSrcs.length]}
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() =>
                    setPhotoIndex((photoIndex + imageSrcs.length - 1) % imageSrcs.length)
                }
                onMoveNextRequest={() =>
                    setPhotoIndex((photoIndex + 1) % imageSrcs.length)
            } */ 

        />
        )}
    </div>
    </div>
    );
}

export default Projects;
import React from 'react';
import AboutLeftImg from '../../../assets/images/about-left-image.png';
import serviceIMG1 from "../../../assets/images/service-icon-01.png";
import serviceIMG2 from "../../../assets/images/service-icon-02.png";
import serviceIMG3 from "../../../assets/images/service-icon-03.png";
 
import './About.css'
const About = () => {
    return (
        <div>
           <section className='mt-5'>
            <div className='row m-0 container-fluid'>
                {/* About Left  */}
                <div className='about-left col-11 col-xl-5 col-lg-5 col-md-10 '>
                    <img src={AboutLeftImg} alt="" />
                </div>
                {/* about left end  */}
            
                {/* About Right  */}
                <div className="about-right col-11 col-xl-6 col-lg-5  col-md-10">
              
                  <div className=' '>
                  <h2 className='my-5'>Grow Your Website With Our<br/> <span className='color-1'> SEO Tools</span> & <span className='color-2'>Project</span><br/>  Management</h2>
                    <p className='mb-5'>You can browse free HTML templates on Too CSS website. Visit the website and explore latest website templates for your projects.</p>


                  </div>
                    <div className="row">
            <div className="col-lg-3 col-sm-10 col-12  col-md-5 about-service">
        
              <img src={serviceIMG1} alt="" />
              <h1 className='py-2'>320</h1>
                <p className='about-p'> SEO Projects</p>
              <hr />
              <p>
                Lorem ipsum dolor<br/> sit amet, <br/> consectetur  
              </p>
            </div>

            <div className="col-lg-3 col-sm-10 col-12 col-md-5  about-service ">
           
              <img src={serviceIMG2} alt="" />
              <h1 className='py-2'>620</h1>
              <p className='about-p'>Websites </p>

              <hr />
              <p>
                Lorem ipsum dolor<br/> sit amet, <br/> consectetur  
              </p>
            </div>

            <div className="col-lg-3 col-sm-10  col-12  col-md-5  about-service">
              
              <img src={serviceIMG3} alt="" />
              <h1 className='py-2'>120</h1>
             <p className='about-p'>Satisfied Clients</p>
              <hr />
              <p>
                Lorem ipsum dolor<br/> sit amet, <br/> consectetur  
              </p>
            </div>
          </div>

                </div>  
            </div>
           </section>

          
        </div>
    );
};

export default About;
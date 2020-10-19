import React from "react";

import Thumb01 from "./../../static/assets/img/portfolio/01-thumbnail.jpg";
import Full01 from "./../../static/assets/img/portfolio/01-full.jpg";
import Thumb02 from "./../../static/assets/img/portfolio/02-thumbnail.jpg";
import Full02 from "./../../static/assets/img/portfolio/02-full.jpg";
import Thumb03 from "./../../static/assets/img/portfolio/03-thumbnail.jpg";
import Full03 from "./../../static/assets/img/portfolio/03-full.jpg";
import Thumb04 from "./../../static/assets/img/portfolio/04-thumbnail.jpg";
import Full04 from "./../../static/assets/img/portfolio/04-full.jpg";
import Thumb05 from "./../../static/assets/img/portfolio/05-thumbnail.jpg";
import Full05 from "./../../static/assets/img/portfolio/05-full.jpg";
import Thumb06 from "./../../static/assets/img/portfolio/06-thumbnail.jpg";
import Full06 from "./../../static/assets/img/portfolio/06-full.jpg";

const Portfolio = () => {
    return (
        <section class="page-section bg-light" id="portfolio">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Portfolio</h2>
                    <h3 class="section-subheading text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                    </h3>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="portfolio-item">
                            <a
                                class="portfolio-link"
                                data-toggle="modal"
                                href="#portfolioModal1"
                            >
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content">
                                        <i class="fas fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img class="img-fluid" src={Thumb01} alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">
                                    Threads
                                </div>
                                <div class="portfolio-caption-subheading text-muted">
                                    Illustration
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="portfolio-item">
                            <a
                                class="portfolio-link"
                                data-toggle="modal"
                                href="#portfolioModal2"
                            >
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content">
                                        <i class="fas fa-plus fa-3x"></i>
                                    </div>
                                </div>
                              
                                    <img class="img-fluid" src={Thumb02} alt="" />
                                   
                                
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">
                                    Explore
                                </div>
                                <div class="portfolio-caption-subheading text-muted">
                                    Graphic Design
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="portfolio-item">
                            <a
                                class="portfolio-link"
                                data-toggle="modal"
                                href="#portfolioModal3"
                            >
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content">
                                        <i class="fas fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                
                                    <img class="img-fluid" src={Thumb03} alt="" />
                              
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">
                                    Finish
                                </div>
                                <div class="portfolio-caption-subheading text-muted">
                                    Identity
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                        <div class="portfolio-item">
                            <a
                                class="portfolio-link"
                                data-toggle="modal"
                                href="#portfolioModal4"
                            >
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content">
                                        <i class="fas fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img class="img-fluid" src={Thumb04} alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">
                                    Lines
                                </div>
                                <div class="portfolio-caption-subheading text-muted">
                                    Branding
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                        <div class="portfolio-item">
                            <a
                                class="portfolio-link"
                                data-toggle="modal"
                                href="#portfolioModal5"
                            >
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content">
                                        <i class="fas fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img class="img-fluid" src={Thumb05} alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">
                                    Southwest
                                </div>
                                <div class="portfolio-caption-subheading text-muted">
                                    Website Design
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="portfolio-item">
                            <a
                                class="portfolio-link"
                                data-toggle="modal"
                                href="#portfolioModal6"
                            >
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content">
                                        <i class="fas fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img class="img-fluid" src={Thumb06} alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">
                                    Window
                                </div>
                                <div class="portfolio-caption-subheading text-muted">
                                    Photography
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// <div class="portfolio-modal modal fade" id="portfolioModal" tabindex="-1" role="dialog" aria-hidden="true">
// <div class="modal-dialog">
    // <div class="modal-content">
        // <div class="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
        // <div class="container">
            // <div class="row justify-content-center">
                // <div class="col-lg-8">
                    // <div class="modal-body">
                      
                        // <h2 class="text-uppercase">Project Name</h2>
                        // <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        // <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/01-full.jpg" alt="" />
                        // <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                        // <ul class="list-inline">
                            // <li>Date: January 2020</li>
                            // <li>Client: Threads</li>
                            // <li>Category: Illustration</li>
                        // </ul>
                        // <button class="btn btn-primary" data-dismiss="modal" type="button"><i class="fas fa-times mr-1"></i>Close Project</button>
                    // </div>
                // </div>
            // </div>
        // </div>
    // </div>
// </div>
// </div>



export default Portfolio;

import React from 'react'
import { Helmet } from 'react-helmet'

export const Feature = () => {
  return (
    <div>
      <Helmet>
        {/* <!-- Google Web Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Roboto:wght@500;700;900&display=swap"
          rel="stylesheet"
        />

        {/* <!-- Icon Font Stylesheet --> */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />

        {/* <!-- Libraries Stylesheet --> */}
        <link href="lib/animate/animate.min.css" rel="stylesheet" />
        <link
          href="lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
        <link
          href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
          rel="stylesheet"
        />

        {/* <!-- Customized Bootstrap Stylesheet --> */}
        <link href="css/bootstrap.min.css" rel="stylesheet" />

        {/* <!-- Template Stylesheet --> */}
        <link href="css/style.css" rel="stylesheet" />
        {/* <!-- JavaScript Libraries --> */}
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/counterup/counterup.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/tempusdominus/js/moment.min.js"></script>
    <script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
    <script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>

    {/* <!-- Template Javascript --> */}
    <script src="js/main.js"></script>
      </Helmet>
      <div className="container-fluid bg-primary overflow-hidden my-5 px-lg-0">
    <div className="container feature px-lg-0">
        <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="p-lg-5 ps-lg-0">
                    <p className="d-inline-block border rounded-pill text-light py-1 px-4">Features</p>
                    <h1 className="text-white mb-4">Why Choose Us</h1>
                    <p className="text-white mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                    <div className="row g-4">
                        <div className="col-6">
                            <div className="d-flex align-items-center">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{"width":" 55px", "height": "55px"}}>
                                    <i className="fa fa-user-md text-primary"></i>
                                </div>
                                <div className="ms-4">
                                    <p className="text-white mb-2">Experience</p>
                                    <h5 className="text-white mb-0">Doctors</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{"width": "55px", "height": "55px"}}>
                                    <i className="fa fa-check text-primary"></i>
                                </div>
                                <div className="ms-4">
                                    <p className="text-white mb-2">Quality</p>
                                    <h5 className="text-white mb-0">Services</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{"width": "55px"," height":"55px"}}>
                                    <i className="fa fa-comment-medical text-primary"></i>
                                </div>
                                <div className="ms-4">
                                    <p className="text-white mb-2">Positive</p>
                                    <h5 className="text-white mb-0">Consultation</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{"width": "55px"," height":"55px"}}>
                                    <i className="fa fa-headphones text-primary"></i>
                                </div>
                                <div className="ms-4">
                                    <p className="text-white mb-2">24 Hours</p>
                                    <h5 className="text-white mb-0">Support</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style={{"min-height": "400px"}}>
                <div className="position-relative h-100">
                    <img className="position-absolute img-fluid w-100 h-100" src="img/feature.jpg" style={{"object-fit": "cover;"}} alt=""/>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

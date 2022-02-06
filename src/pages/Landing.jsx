import React from "react";
import "../css/Landing.css";
import backgroundVideo from "../assets/video/Pexels Videos 2014792.mp4";
import church from "../assets/images/church-svgrepo-com.svg";
import videoCall from "../assets/images/video-call-svgrepo-com.svg";
import charity from "../assets/images/charity-svgrepo-com.svg";
import praise from "../assets/images/praise1.jpg";
import { Fade, Flip, Slide } from "react-reveal";

function Landing() {
	return (
		<div className="landingContainer">
			<div className="landingHeader">
				{/* <video autoPlay loop muted id="video">
					<source src={backgroundVideo} type="video/mp4" />
				</video> */}
				<div id="heroImg"></div>
				<div id="overlay">OVERLAY</div>
				<section className="landingContent">
					<Fade top>
						<h1>Embrace Christian Church</h1>
						<h2>Let's all grow together in Christ</h2>
						<h4>
							Welcome to ECC where our home is your home! Click on the buttons
							below to find out more about our great community.
						</h4>
					</Fade>
					<div className="landingButton">
						<Fade left>
							<button className="btn btn--home">Join Our Home</button>
						</Fade>
						<Fade right>
							<button className="btn btn-giving">Giving</button>
						</Fade>
					</div>
				</section>
			</div>
			<section className="introSection">
				<h1>Video Section</h1>
			</section>
			<section className="landingSection">
				<h2 className="benefitsTitle">Why join ECC?</h2>
				<div className="benefitsCards">
					<Flip top>
						<div className="card landing--card">
							<img
								className="benefitsImg filter-green"
								src={church}
								alt="church image"
							/>
							<h3>Great Community</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
								numquam tenetur, quos, reiciendis iste exercitationem qui nulla
								ipsam beatae commodi labore mollitia doloribus? Aliquid
								voluptatem dolorum earum odio ipsa modi.
							</p>
						</div>
						<div className="card landing--card">
							<img
								className="benefitsImg filter-blue"
								src={videoCall}
								alt="video call"
							/>
							<h3>Worship from home</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
								numquam tenetur, quos, reiciendis iste exercitationem qui nulla
								ipsam beatae commodi labore mollitia doloribus? Aliquid
								voluptatem dolorum earum odio ipsa modi.
							</p>
						</div>
						<div className="card landing--card">
							<img
								className="benefitsImg filter-pink"
								src={charity}
								alt="charity"
							/>
							<h3>Tithes benefit charities</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
								numquam tenetur, quos, reiciendis iste exercitationem qui nulla
								ipsam beatae commodi labore mollitia doloribus? Aliquid
								voluptatem dolorum earum odio ipsa modi.
							</p>
						</div>
					</Flip>
				</div>
				<Fade top>
					<button className="btn btn--home">Join Our Home</button>
				</Fade>
			</section>
		</div>
	);
}

export default Landing;

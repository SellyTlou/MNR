import React from "react";
import "./main.css";

function Index() {
	return (
		<>
			<section className="index-page">
				<div className="header-section">
					<div className="overlay"></div>

					<img className="header-image" src="/images/index-hero.png" alt="Malindile Logo" />

					<div className="container header-content">
						<div className="col-md-8">
							<h1 className="header-title">Malindile National Roofing</h1>
							<p className="header-description">
								Professional roofing, cladding, carpentry, and structural installation solutions built for quality, durability, and lasting performance. We deliver reliable workmanship for commercial and residential projects, from new installations to renovations and upgrades.
							</p>
							<a href="/services" className="btn btn-primary">Request a Quote</a>
						</div>
						<div className="col-md-4">
							<img className="header-image" src="/images/index-sub.png" alt="Malindile Logo" />
						</div>
					</div>
				</div>

				<div className="container our-services">
					<h2 className="service-title">Our <span>Services</span></h2>
					<p className="service-description">
						We deliver quality workmanship on every project.<br/>
						We manage the full process so you get a seamless, durable, and<br/>
						professional finish.					</p>

						<div className="row service-cards">
							<div className="col-md-4">
								<div className="service-card">
									<img src="/images/roofing.png" alt="Roofing Service" />
									<h3>Roofing</h3>
									<p>We provide professional roofing services for residential and commercial properties, ensuring durable and long-lasting results.</p>
									<a href="/services/roofing" className="btn btn-secondary">Learn More</a>
								</div>
							</div>
							<div className="col-md-4">
								<div className="service-card">
									<img src="/images/cladding.png" alt="Cladding Service" />
									<h3>Cladding</h3>
									<p>Our cladding services enhance the aesthetic appeal and protection of your property, using high-quality materials and expert installation.</p>
									<a href="/services/cladding" className="btn btn-secondary">Learn More</a>
								</div>
							</div>
							<div className="col-md-4">
								<div className="service-card">
									<img src="/images/carpentry.png" alt="Carpentry Service" />
									<h3>Carpentry</h3>
									<p>We offer skilled carpentry services, crafting and installing custom woodwork that meets your design and functional needs.</p>
									<a href="/services/carpentry" className="btn btn-secondary">Learn More</a>
								</div>
							</div>
						</div>
				</div>
			</section>
	
			
		</>
	);
}

export default Index;

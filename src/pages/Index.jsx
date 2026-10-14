
import React, { useRef } from "react";
import "./main.css";

function Index() {
	const servicesSliderRef = useRef(null);

	const services = [
		{
			title: "Roofing",
			image: "/images/roofing.jpg",
			description:
				"Professional roofing installations, repairs, and upgrades designed to protect your property and provide lasting durability.",
		},
		{
			title: "Cladding",
			image: "/images/cladding.jpg",
			description:
				"Quality cladding solutions that enhance building appearance, weather protection, and long-term performance.",
		},
		{
			title: "Carpentry",
			image: "/images/carpentry.jpg",
			description:
				"Reliable carpentry services delivered with precision, quality materials, and attention to detail.",
		},
		{
			title: "Structural Installations",
			image: "/images/structural.jpg",
			description:
				"Dependable structural installation solutions focused on strength, precision, and professional workmanship.",
		},
		{
			title: "Renovations",
			image: "/images/renovations.jpg",
			description:
				"Improve your property with practical renovation solutions tailored to your needs and project requirements.",
		},
		{
			title: "Maintenance & Repairs",
			image: "/images/maintenance.jpg",
			description:
				"Keep your property in excellent condition with reliable maintenance and repair services.",
		},
	];

	const slideServices = (direction) => {
		const slider = servicesSliderRef.current;
		if (!slider) return;

		const card = slider.querySelector(".card");
		if (!card) return;

		const gap = parseFloat(getComputedStyle(slider).gap) || 0;

		slider.scrollBy({
			left: direction * (card.offsetWidth + gap),
			behavior: "smooth",
		});
	};

	return (
		<section className="index-page">
			{/* HERO SECTION */}
			<div className="header-section">
				<div className="overlay"></div>

				<img
					className="header-image"
					src="/images/index-hero.png"
					alt="Malindile National Roofing"
				/>

				<div className="container header-content">
					<div className="col-md-8">
						<h1 className="header-title">
							Malindile National Roofing
						</h1>

						<p className="header-description">
							Professional roofing, cladding, carpentry, and structural
							installation solutions built for quality, durability,
							and lasting performance. We deliver reliable workmanship
							for commercial and residential projects, from new
							installations to renovations and upgrades.
						</p>

						<a href="/contact" className="btn btn-primary">
							Request a Quote
						</a>
					</div>

					<div className="col-md-4">
						<img
							className="header-image"
							src="/images/index-sub.png"
							alt="Malindile construction work"
						/>
					</div>
				</div>
			</div>

			{/* SERVICES SECTION */}
			<section className="services-section">
				<div className="container">
					<div className="services-section-heading">
						<div className="services-section-intro">
							<span className="services-section-eyebrow">
								WHAT WE DO
							</span>

							<h2 className="services-section-title">
								Our <span>Services</span>
							</h2>

							<p className="services-section-description">
								From roofing to structural installations, we deliver
								dependable construction solutions backed by quality
								workmanship, attention to detail, and a commitment to
								lasting results.
							</p>
						</div>

						<div className="services-section-controls">
							<button
								type="button"
								className="services-section-arrow"
								onClick={() => slideServices(-1)}
								aria-label="Previous services"
							>
								&#8592;
							</button>

							<button
								type="button"
								className="services-section-arrow"
								onClick={() => slideServices(1)}
								aria-label="Next services"
							>
								&#8594;
							</button>
						</div>
					</div>

					<div
						className="services-section-slider"
						ref={servicesSliderRef}
					>
						{services.map((service, index) => (
							<article className="card" key={service.title}>
								<div className="services-section-image-wrapper">
									<img
										src={service.image}
										alt={service.title}
										className="services-section-image"
										loading="lazy"
									/>

									<span className="services-section-number">
										{String(index + 1).padStart(2, "0")}
									</span>
								</div>

								<div className="services-section-card-content">
									<h3>{service.title}</h3>

									<p>{service.description}</p>

									<a
										href="/services"
										className="services-section-link"
									>
										Learn More <span>&#8594;</span>
									</a>
								</div>
							</article>
						))}
					</div>

					<div className="services-section-bottom">
						<span>
							QUALITY WORKMANSHIP. LASTING RESULTS.
						</span>

						<a
							href="/contact"
							className="services-section-cta"
						>
							Request a Quote <span>&#8594;</span>
						</a>
					</div>
				</div>
			</section>


			{/* PROJECTS SECTION */}
			<section className="projects-section">
				<div className="container">
					<div className="projects-section-heading">
						<div>
							<span className="projects-section-eyebrow">
								OUR PORTFOLIO
							</span>

							<h2 className="projects-section-title">
								Our <span>Projects</span>
							</h2>

							<p className="projects-section-description">
								Explore our work and see how we bring quality,
								precision, and reliable workmanship to every project.
							</p>
						</div>
					</div>

					<div
						id="projectsCarousel"
						className="carousel slide projects-section-carousel"
						data-bs-ride="false"
					>
						<div className="carousel-inner">

							{/* PROJECT 1 */}
							<div className="carousel-item active">
								<div className="projects-section-slide">
									<img
										src="/images/project-1.jpg"
										className="projects-section-image"
										alt="Roofing installation project"
									/>

									<div className="projects-section-overlay">
										<span className="projects-section-category">
											ROOFING
										</span>

										<h3>Quality Roofing Installations</h3>

										<p>
											Durable roofing solutions designed to provide
											dependable protection and a professional finish.
										</p>

										<a href="/projects" className="projects-section-link">
											View Our Projects <span>&#8594;</span>
										</a>
									</div>

									<span className="projects-section-count">01 / 03</span>
								</div>
							</div>

							{/* PROJECT 2 */}
							<div className="carousel-item">
								<div className="projects-section-slide">
									<img
										src="/images/project-2.jpg"
										className="projects-section-image"
										alt="Commercial building cladding project"
									/>

									<div className="projects-section-overlay">
										<span className="projects-section-category">
											CLADDING
										</span>

										<h3>Modern Building Finishes</h3>

										<p>
											Professional cladding solutions that enhance
											building appearance, durability, and weather protection.
										</p>

										<a href="/projects" className="projects-section-link">
											View Our Projects <span>&#8594;</span>
										</a>
									</div>

									<span className="projects-section-count">02 / 03</span>
								</div>
							</div>

							{/* PROJECT 3 */}
							<div className="carousel-item">
								<div className="projects-section-slide">
									<img
										src="/images/project-3.jpg"
										className="projects-section-image"
										alt="Structural construction project"
									/>

									<div className="projects-section-overlay">
										<span className="projects-section-category">
											STRUCTURAL WORK
										</span>

										<h3>Strength in Every Structure</h3>

										<p>
											Reliable structural installation work delivered
											with attention to detail and quality workmanship.
										</p>

										<a href="/projects" className="projects-section-link">
											View Our Projects <span>&#8594;</span>
										</a>
									</div>

									<span className="projects-section-count">03 / 03</span>
								</div>
							</div>

						</div>

						{/* CAROUSEL CONTROLS */}
						<div className="projects-section-controls">
							<div className="projects-section-indicators">
								<button
									type="button"
									data-bs-target="#projectsCarousel"
									data-bs-slide-to="0"
									className="active"
									aria-current="true"
									aria-label="Project 1"
								/>

								<button
									type="button"
									data-bs-target="#projectsCarousel"
									data-bs-slide-to="1"
									aria-label="Project 2"
								/>

								<button
									type="button"
									data-bs-target="#projectsCarousel"
									data-bs-slide-to="2"
									aria-label="Project 3"
								/>
							</div>

							<div className="projects-section-arrows">
								<button
									type="button"
									data-bs-target="#projectsCarousel"
									data-bs-slide="prev"
									aria-label="Previous project"
								>
									&#8592;
								</button>

								<button
									type="button"
									data-bs-target="#projectsCarousel"
									data-bs-slide="next"
									aria-label="Next project"
								>
									&#8594;
								</button>
							</div>
						</div>
					</div>

					<div className="projects-section-footer">
						<p>
							Every project reflects our commitment to quality and lasting results.
						</p>

						<a href="/projects" className="projects-section-all">
							Explore All Projects <span>&#8594;</span>
						</a>
					</div>
				</div>
			</section>

		</section>
	);
}

export default Index;

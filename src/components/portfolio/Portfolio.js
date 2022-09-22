import './style.css';

import image1 from '../../assets/images/Portfolio/portfolio-img1.jpg';
import image2 from '../../assets/images/Portfolio/portfolio-img2.jpg';
import image3 from '../../assets/images/Portfolio/portfolio-img3.jpg';
import image4 from '../../assets/images/Portfolio/portfolio-img4.jpg';
import image5 from '../../assets/images/Portfolio/portfolio-img5.jpg';
import image6 from '../../assets/images/Portfolio/portfolio-img6.jpg';
import image7 from '../../assets/images/Portfolio/portfolio-img7.jpg';
import image8 from '../../assets/images/Portfolio/portfolio-img8.jpg';

const Portfolio = () => {
	return (
		<section className="portfolio">
			<h2 className="portfolio-title">
				<span>My</span> Portfolio
			</h2>
			<ul className="portfolio-list">
				<li className="portfolio-item active">All</li>
				<li className="portfolio-item">HTML</li>
				<li className="portfolio-item">Photoshop</li>
				<li className="portfolio-item">Wordpress</li>
				<li className="portfolio-item">Mobile</li>
			</ul>

			<div className="box">
				<div>
					<img src={image1} alt="" />
					<p className="overlay">
						<span>Show Image</span>
					</p>
				</div>

				<div>
					<img src={image2} alt="" />
					<p className="overlay">
						<span>Show Image</span>
					</p>
				</div>

				<div>
					<img src={image3} alt="" />
					<p className="overlay">
						<span>Show Image</span>
					</p>
				</div>

				<div>
					<img src={image4} alt="" />
					<p className="overlay">
						<span>Show Image</span>
					</p>
				</div>

				<div>
					<img src={image5} alt="" />
					<p className="overlay">
						<span>Show Image</span>
					</p>
				</div>

				<div>
					<img src={image6} alt="" />
					<p className="overlay">
						<span>Show Image</span>
					</p>
				</div>

				<div>
					<img src={image7} alt="" />
					<p className="overlay">
						<span>Show Image</span>
					</p>
				</div>

				<div>
					<img src={image8} alt="" />
					<p className="overlay">
						<span>Show Image</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;

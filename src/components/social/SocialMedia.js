import './style.css';
import { FaFacebook, FaPinterest, FaTwitter } from 'react-icons/fa';

const SocialMedia = () => {
	return (
		<section className="social-media">
			<div className="social face">
				<FaFacebook className="icon fa-lg" />
				<p>
					<span className="info1">Follow Me on</span>
					<span className="info2">Social Facebook</span>
				</p>
			</div>

			<div className="social twitter">
				<FaTwitter className="icon fa-lg" />
				<p>
					<span className="info1">Tweet Me on</span>
					<span className="info2">Social twitter</span>
				</p>
			</div>

			<div className="social pin">
				<FaPinterest className="icon fa-lg" />
				<p>
					<span className="info1">Pin Me on</span>
					<span className="info2">Social Pinterest</span>
				</p>
			</div>
		</section>
	);
};

export default SocialMedia;

import './style.css';
const Contact = () => {
	return (
		<section className="drop">
			<div className="container">
				<h2 className="drop-title">
					<span>Drop </span>Me A line
				</h2>
				<form action="">
					<div className="form-input">
						<input type="text" placeholder="Your Name" />
						<input type="email" placeholder="Your Email" />
					</div>
					<input type="text" className="sub" placeholder="Your Subject" />
					<textarea cols="30" rows="10" placeholder="Your Message"></textarea>
					<input type="submit" value="Send Message" />
				</form>
			</div>
		</section>
	);
};

export default Contact;

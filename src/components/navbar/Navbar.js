import { Link } from 'react-router-dom'
import './style.css'


const Navbar = () => {
  return (
		<nav className="navbar">
			<div className="container">
				<div className="logo">
					<h2 className="logo-text">Ultra Profile</h2>
				</div>

				<input type="checkbox" id="nav" />
				<label htmlFor="nav"></label>

				<ul className="ul-list">
					<li className="list-item">
						<Link to="/">Home</Link>
					</li>
					<li className="list-item">
						<Link to="/">Work</Link>
					</li>
					<li className="list-item">
						<Link to="/">Portfolio</Link>
					</li>
					<li className="list-item">
						<Link to="/">Resume</Link>
					</li>
					<li className="list-item">
						<Link to="/">About</Link>
					</li>
					<li className="list-item">
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar
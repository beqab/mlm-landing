import React from 'react';

const Footer = () => {
	return (
		<footer className="footer page-footer font-small special-color-dark pt-4">
			<div className="container">
				<div className="row text-left">
					<div className="col-sm-4 col-12">
						<div className="wrapper">
							<h5>Contact</h5>
							Street name: Wolczanska no.125 <br />
							City: Lodz, <br />
							Postal code 90-521, <br />
							Post office Lodz,<br />
							Country: Poland
						</div>
					</div>
					<div className="col-sm-4 col-12">
						<div className="wrapper">
							<h5>lecal</h5>
							<a href="">Terms & Conditions</a> <br />
							<a href="">Privacy Police</a> <br />
							<a href="">Risc disclaimer</a> <br />
						</div>
					</div>
					<div className="col-sm-4 col-12">
						<div className="wrapper">
							<h5>Useful Information</h5>
							<a href="">Hostiong plans</a> <br />
							<a href="">Become a affiliate</a> <br />
							<a href="">Become a ambassador </a> <br />
							<a href="">FAQ</a> <br />
							<ul className="list-unstyled list-inline ">
								<li className="list-inline-item mt-0">
									<a
										href="https://t.me/crowdgrowing"
										target="_blank"
										className="btn-floating btn-tw mx-1 waves-effect waves-light"
									>
										<i class="fab fa-telegram" />
									</a>
								</li>
								<li className="list-inline-item mt-0">
									<a
										href="https://www.youtube.com/channel/UCFXf8dvgTlnrfE23eTblBkQ?"
										target="_blank"
										className="btn-floating btn-gplus  waves-effect waves-light"
									>
										<i class="fab fa-youtube" />
									</a>
								</li>
								<li className="list-inline-item mt-0">
									<a
										href="https://www.facebook.com/groups/340100750743245"
										target="_blank"
										className="btn-floating btn-fb  waves-effect waves-light"
									>
										<i className="fab fa-facebook-f"> </i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			{/* <a href="">
         <img height="50" src={LogoWight} />
     </a>
  */}

			<div className="footer-copyright text-center py-3">
				© 2020 Copyright:
				<a href="https://crowdgrowing.com/"> crowdgrowing.com </a>
			</div>
		</footer>
	);
};

export default Footer;

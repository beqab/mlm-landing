import React from 'react';

import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="footer page-footer font-small special-color-dark pt-5 pb-4">
			<div className="container">
				<div className="row text-left">
					<div className="col-sm-4 col-12">
						<div className="wrapper">
							<h5>Contact</h5>
							Wolczanska no.125 <br />
							Lodz, <br />
							90-521, <br />
							Poland
						</div>
					</div>
					<div className="col-sm-4 col-12">
						<div className="wrapper">
							<h5>Legal</h5>
							<a href="/terms">Terms & Conditions</a> <br />
							<a href="/police">Privacy Policy</a> <br />
							<a href="/risk">Risk Disclaimer</a> <br />
						</div>
					</div>
					<div className="col-sm-4 col-12">
						<div className="wrapper">
							<h5>Useful Information</h5>
							<a href="#">Hosting Plans</a> <br />
							<a href="#">Become an Affiliate</a> <br />
							<a href="#">Become an Ambassador </a> <br />
							<a href="#">FAQs</a> <br />
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
				<a href="https://crowd-growing.com/"> crowd-growing.com </a>
			</div>
		</footer>
	);
};

export default Footer;

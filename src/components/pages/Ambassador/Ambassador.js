import React from 'react';
import AmbassadorImg from '../../../imgs/ambasador.svg';

const Ambassador = () => {
	return (
		<div className="pageContainer Ambassador">
			<h3>Become an Ambassador</h3>
			<div className="container ">
				<div className="row">
					<div className="col-12 text-center">
						<img src={AmbassadorImg} />
					</div>
					<div className="col-12 mt-4">
						Crowd Growing gives its partners the opportunity to become a Brand Ambassador, which means they
						work even closer with the company. Brand Ambassadors are respected leaders who have been in the
						MLM industry for many years and share Crowd Growing's vision. Brand Ambassadors are ambassadors
						for specific countries or even regions and ensure that their sales teams operate at a high
						ethical and professional level. <br /> Brand Ambassadors are also in close contact with the
						company to plan and manage professional events for Crowd Growing and receive support and
						exclusive benefits to create exceptional events.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Ambassador;

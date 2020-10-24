import React from 'react';
import Affiliate1 from '../../../imgs/affiliate1.svg';
import Affiliate2 from '../../../imgs/affiliate2.svg';
import Affiliate3 from '../../../imgs/affiliate3.svg';

const Affiliate = () => {
	return (
		<div className="pageContainer Affiliate">
			<h3>Become an Affiliate</h3>
			<div className="container ">
				<div className="row">
					<div className="col-sm-6 img  ">
						<img src={Affiliate1} />
					</div>
					<div className="col-sm-6 text">
						<div>
							Crowd Growing offers its users a whole new range of benefits that have never before been
							available in this form in the cannabis market. Every member of Crowd Growing can become an
							affiliate member. Become our affiliate member today and take advantage of the unlimited
							possibilities that Crowd Growing has to offer.
						</div>
					</div>
					<div className="col-sm-6 img d-block d-sm-none ">
						<img src={Affiliate2} />
					</div>
					<div className="col-sm-6  text  ">
						<div>
							Build your affiliate network by recommending the Crowd Growing platform to potential users.{' '}
							<br />
							The bigger your affiliate network - the more bonuses and rewards you can achieve.
						</div>
					</div>
					<div className="col-sm-6 img d-none d-sm-block ">
						<img src={Affiliate2} />
					</div>
					<div className="col-sm-6 img  ">
						<img src={Affiliate3} />
					</div>
					<div className="col-sm-6 text">
						<div>
							The bonuses of the affiliate program are distributed from the resources the platform
							generates through its operations in the cannabis market.
							<br />
							All our platform users are part of the Crowd Growing community.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Affiliate;

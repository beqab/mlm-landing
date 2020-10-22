import React from 'react';
import Road from '../../../imgs/road.svg';

const roadMap = () => {
	return (
		<div>
			<div className="roadContainer container">
				<img className="roadImg" src={Road} />
				<div className="roadBall ball1">
					<div className="roadCard">
						Q4 Idea of the Crowd Growing strategy
						<div className="line" />
					</div>
					2017
				</div>

				<div className="roadBall ball2">
					<div className="roadCard">
						<span> Q1 </span> – <span> Q3 </span> Research and contact with the first strategic partners{' '}
						<br />
						<span> Q4 </span> Start of practical tests of the strategy
						<div className="line" />
					</div>
					2018
				</div>
				<div className="roadBall ball3">
					<div className="roadCard">
						<span>Q3</span> Implementation of new key working steps to finalize the strategy <br />
						<span>Q4</span> Development of business scaling strategies and first idea of Crowd Growing
						ecosystem
						<div className="line" />
					</div>
					2019
				</div>
				<div className="roadBall ball4">
					<div className="roadCard">
						<span>Q1</span> First full growing Cycle done <br />
						<span>Q1</span> – <span>Q3</span> Development of the Crowd Growing Platform and legal setup{' '}
						<br />
						<span>Q4</span> Launch of the Beta version of the Crowd Growing ecosystem <br />
						<span>Q4</span> Introduction of Career Program for founder members
						<div className="line" />
					</div>
					2020
				</div>
				<div className="roadBall ball5">
					<div className="roadCard">
						<span>Q1</span> Official Launch of Crowd Growing ecosystem <br />
						<span>Q2</span> Global promotion campaign <br />
						<span>Q3</span> First global convention <br />
						<div className="line" />
					</div>
					2021
				</div>
				<div className="roadBall ball6">
					<div className="roadCard">
						<span>Q1</span> Start of development of Crowd Growing Token <br />
						<span>Q4</span> Release of decentralized Cannabis platform
						<div className="line" />
					</div>
					2022
				</div>
				<div className="roadBall ball7 text-center">
					<div className="roadCard">
						to be announced
						<div className="line" />
					</div>
					2023
				</div>
				<div className="roadBall ball8 text-center">
					<div className="roadCard">
						to be announced
						<div className="line" />
					</div>
					2024
				</div>
				<div className="roadBall ball9 text-center">
					<div className="roadCard">
						to be announced
						<div className="line" />
					</div>
					2025
				</div>
			</div>
		</div>
	);
};

export default roadMap;

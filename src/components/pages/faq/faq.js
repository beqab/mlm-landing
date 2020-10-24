import React from 'react';
import classnames from 'classnames';

const faqArray = [
	{
		question: 'What could be your first question?',
		answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis assumenda ad
        deleniti optio dolorum fugiat nobis consequuntur deserunt aut.`
	},
	{
		question: 'What could be your first question?',
		answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis assumenda ad
        deleniti optio dolorum fugiat nobis consequuntur deserunt aut.`
	},
	{
		question: 'What could be your first question?',
		answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis assumenda ad
        deleniti optio dolorum fugiat nobis consequuntur deserunt aut.`
	},
	{
		question: 'What could be your first question?',
		answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis assumenda ad
        deleniti optio dolorum fugiat nobis consequuntur deserunt aut.`
	},
	{
		question: 'What could be your first question?',
		answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis assumenda ad
        deleniti optio dolorum fugiat nobis consequuntur deserunt aut.`
	},
	{
		question: 'What could be your first question?',
		answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis assumenda ad
        deleniti optio dolorum fugiat nobis consequuntur deserunt aut.`
	},
	{
		question: 'What could be your first question?',
		answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis assumenda ad
        deleniti optio dolorum fugiat nobis consequuntur deserunt aut.`
	}
];

const Faq = () => {
	const [ activeElement, setActiveElement ] = React.useState(null);
	return (
		<div className="pageContainer faq">
			<h3>FAQ</h3>
			<div className="container ">
				<div class="col-12">
					{faqArray.map((el, i) => {
						return (
							<div class="mb-3">
								<div class="d-flex align-items-start bg-light p-4">
									<div class="mr-3 text-white rounded-circle" />
									<div class="w-100">
										<div
											onClick={() => setActiveElement(i)}
											class="d-flex align-items-center justify-content-between"
										>
											<a href="#" class="text-dark">
												<h6 class="mb-0"> {el.question} </h6>
											</a>
											<a href="#" class="text-dark" />
										</div>
										<p
											className={classnames('text-secondary hiddenText mt-3', {
												active: i === activeElement
											})}
										>
											{el.answer}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Faq;

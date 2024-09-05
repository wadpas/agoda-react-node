import React from 'react'
import styled from 'styled-components'

const Contact = () => {
	return (
		<Wrapper>
			<div className="section-center">
				<h3>
					Join our newsletter
					<div className="underline"></div>
				</h3>
				<p>Any content you add or any change that you make to a site will be publicly and permanently available.</p>
				<form className="contact-form">
					<input
						type="email"
						className="form-input"
						placeholder="enter your email"
					/>
					<button
						type="submit"
						className="submit-btn">
						subscribe
					</button>
				</form>
			</div>
		</Wrapper>
	)
}
const Wrapper = styled.section`
	padding: 5rem 0;
	h3 {
		text-transform: none;
	}
	p {
		line-height: 2;
		max-width: 45em;
		color: var(--clr-grey-5);
	}
	.contact-form {
		margin-top: 1rem;
		width: 90vw;
		max-width: 500px;
		display: grid;
		grid-template-columns: 1fr auto;
	}

	.form-input,
	.submit-btn {
		font-size: 1rem;
		padding: 0.5rem 1rem;
		border: 1px solid var(--clr-grey-7);
	}
	.form-input {
		border-right: none;
		color: var(--clr-grey-3);
		border-top-left-radius: var(--radius);
		border-bottom-left-radius: var(--radius);
	}
	.submit-btn {
		border-top-right-radius: var(--radius);
		border-bottom-right-radius: var(--radius);
	}
	.form-input::placeholder {
		color: var(--clr-black);
		text-transform: capitalize;
	}
	.submit-btn {
		text-transform: capitalize;
		letter-spacing: var(--spacing);
		cursor: pointer;
		transition: var(--transition);
		color: var(--clr-black);
		background-color: var(--clr-primary);
	}
	.submit-btn:hover {
		color: var(--clr-white);
	}
	@media (min-width: 992px) {
		.content {
			display: grid;
			grid-template-columns: 1fr 1fr;
			align-items: center;
			gap: 8rem;
			margin-top: 2rem;
		}
		p {
			margin-bottom: 0;
		}
	}
	@media (min-width: 1280px) {
		padding: 15rem 0;
	}
`

export default Contact

import React, { useReducer, useState } from "react";
import "../css/Contact.css";
import Fade from "react-reveal/Fade";

function Contact() {
	// useReducer
	const formReducer = (state, event) => {
		return {
			...state,
			[event.name]: event.value,
		};
	};

	// function to handle submit
	const [formData, setFormData] = useReducer(formReducer, {});
	const [submitting, setSubmitting] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitting(true);

		setTimeout(() => {
			setSubmitting(false);
		}, 3000);
	};

	// function to handle change
	const handleChange = (event) => {
		setFormData({
			name: event.target.name,
			value: event.target.value,
		});
	};

	return (
		<div className="contactContainer">
			<div className="innerContainer">
				<Fade left>
					<div className="contactPicFrame">
						<div className="contactPic"></div>
					</div>
				</Fade>
				<Fade right>
					<div className="contactCard">
						<div className="wrapper">
							<h2>Contact Us Today!</h2>
							<h3>"Feeding God's Word To All People"</h3>
							{submitting && (
								<div>
									You are submitting the following:
									<ul>
										{Object.entries(formData).map(([name, value]) => (
											<li key={name}>
												<strong>{name}</strong>: {value.toString()}
											</li>
										))}
									</ul>
								</div>
							)}
							<form onSubmit={handleSubmit}>
								{/* <fieldset> */}
								<label>
									<p>Name</p>
									<input
										id="contactName"
										name="name"
										placeholder=" Name"
										onChange={handleChange}
									/>
								</label>
								<label>
									<p>Email</p>
									<input
										id="contactEmail"
										name="email"
										placeholder=" example@email.com"
										onChange={handleChange}
									/>
								</label>
								<label>
									<p>Message</p>
									<textarea
										id="contactMessage"
										name="message"
										placeholder=" Type message here..."
										onChange={handleChange}
									/>
								</label>
								{/* </fieldset> */}
								<br />
								<button className="btn btn--form" type="submit">
									Submit
								</button>
							</form>
						</div>
					</div>
				</Fade>
			</div>
		</div>
	);
}

export default Contact;

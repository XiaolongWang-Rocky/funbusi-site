function ContactUs() {
    return (
    <section className="row funbusi_section" id="contact_us">
		<div className="col-md-12">
			<h1 className="text-center funbusi_subtitle wow fadeInUp animated" data-wow-duration="2s" data-wow-delay="0.5s">
				Contact Us
			</h1>
			<div className="row">
				<div className="col-md-12">
					<form className="funbusi_contact" action="https://formsubmit.co/60cb4eac66d0c985c3d9544ab92b9672" method="POST">
						<input type="hidden" name="_next" value="https://www.funbusi.com.au/thanks" />
						<input type="hidden" name="_subject" value="New customer query" />
						<div className="mb-3 wow flipInX animated" data-wow-delay="0.3s">
							<label htmlFor="fullName" className="form-label">Full Name<span style={{color: "red"}}>*</span></label>
							<input type="text" className="form-control" name="name" placeholder="Please input your full name" required />
						</div>
						<div className="mb-3 wow flipInX animated" data-wow-delay="0.6s">
							<label htmlFor="email" className="form-label">Email address<span style={{color: "red"}}>*</span></label>
							<input type="email" name="email" className="form-control" id="" placeholder="Please input your email" required />
						</div>
						<div className="mb-3 wow flipInX animated" data-wow-delay="0.9s">
							<label htmlFor="phoneNumber" className="form-label">Phone Number</label>
							<input type="tel" className="form-control" name="phone" placeholder="Please input your phone number" />
						</div>
						<div className="mb-3 wow flipInX animated" data-wow-delay="1.2s">
							<label htmlFor="messages" className="form-label">Messages<span style={{color: "red"}}>*</span></label>
							<textarea className="form-control" name="message" rows="5" placeholder="Tell us how can we help?" required></textarea>
						</div>
						<button type="submit" className="btn submit_btn wow fadeIn animated" data-wow-delay="1.5s">Send</button>
					</form>
				</div>
			</div>
		</div>
	</section>
    )
}

export default ContactUs;
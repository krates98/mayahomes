import React, { useState } from "react";

function CallToAction() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation and submit form data
    // You can implement your own logic here to validate the form fields and handle form submission

    // Reset form fields after submission
    setName("");
    setEmail("");
    setMobile("");

    // Show submission message
    setSubmitted(true);

    // Reset submission message after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="call-to-action">
      <div className="call-to-action-content">
        <h2 className="call-to-action-heading">Queries</h2>
        <div className="call-to-action-info">
          <div className="call-to-action-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus risus nec vestibulum consequat. Nullam cursus lacus et orci
              feugiat facilisis. Nulla eget dapibus tellus. Integer sodales,
              nunc sit amet auctor rutrum, elit ligula vulputate turpis, ut
              vulputate est tellus eu nibh.
            </p>
            <p>
              Sed tincidunt dolor nec ligula luctus maximus. Suspendisse vitae
              sem eu mi dictum facilisis. Nullam eu arcu a lectus ultrices
              blandit sed id sapien. Vivamus eget massa lectus. Etiam faucibus
              sed urna ac consectetur.
            </p>
          </div>
          <div className="call-to-action-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
            {submitted && (
              <div className="submission-message">
                We have received your information. We will contact you within
                24-48 business hours.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;

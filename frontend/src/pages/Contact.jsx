function Contact() {
  return (
    <div className="container mt-4">

      <div className="card shadow p-4">

        <h2 className="text-center mb-4">
          Contact Us
        </h2>

        <form>

          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
            />
          </div>

          <div className="mb-3">
            <label>Phone</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Phone"
            />
          </div>

          <div className="mb-3">
            <label>Subject</label>
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
            />
          </div>

          <div className="mb-3">
            <label>Message</label>
            <textarea
              className="form-control"
              rows="5"
              placeholder="Write your message"
            ></textarea>
          </div>

          <button className="btn btn-primary w-100">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;
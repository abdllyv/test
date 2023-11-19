import Group from "../../assets/img/media.png";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="form-area">
          <div className="row">
            <div className="banner">
              <img src={Group} alt="team" />
            </div>
            <form className="contact-form">
              <h2 className="form-caption">Get A Free Quote Here</h2>
              <div className="form-group">
                <label htmlFor="">Name*</label>
                <input type="text" placeholder="Full Name" />
              </div>
              <div className="form-group">
                <label htmlFor="">Name*</label>
                <input type="text" placeholder="Full Name" />
              </div>
              <div className="form-group">
                <label htmlFor="">Name*</label>
                <input type="text" placeholder="Full Name" />
              </div>
              <div className="form-group">
                <label htmlFor="">Name*</label>
                <input type="text" placeholder="Full Name" />
              </div>
              <button className="btn">Book Appointment</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

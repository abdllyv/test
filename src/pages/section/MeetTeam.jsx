/* -------------------------------- Component ------------------------------- */
import Caption from "../../components/Caption";

/* -------------------------------- Database -------------------------------- */
import personalDb from "../../db/personalDb";

const MeetTeam = () => {
  return (
    <section className="meet-team">
      <div className="container">
        <Caption
          title={"Meet Our Team"}
          text={` Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics`}
        />
        <div className="body">
          {personalDb.map((personal) => (
            <div className="personal-card" key={personal.id}>
              <div className="top">
                <div className="profil-img">
                  <img src={personal.profilImg} alt={personal.name} />
                </div>
              </div>
              <div className="bottom">
                <h6 className="job">C{personal.job}</h6>
                <h5 className="name">{personal.name}</h5>
                <p className="text">{personal.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTeam;

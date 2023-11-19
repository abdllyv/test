import worldImg from "../../assets/img/world.png";
import Caption from "../../components/Caption";

const World = () => {
  return (
    <section className="world">
      <div className="container">
        <div className="row">
          <Caption
            title={"We Have Branches All Over The World"}
            text={
              "The gradual accumulation of information about atomic and small-scale behaviour during the first quarter of the 20th century, which gave some indications about how small things do behave, produced an increasing confusion which was Heisenberg, and Born."
            }
          />
          <div className="word-img">
            <img src={worldImg} alt="World" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default World;

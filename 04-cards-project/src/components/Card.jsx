import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <div className="topNav">
          <img src={props.img} alt="" />
          <button>
            Save <Bookmark size={14} />
          </button>
        </div>

        <div className="center">
          <h4>
            {props.company} <span>{props.datePosted}</span>
          </h4>
          <h3>{props.role}</h3>
          <div className="tag">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{props.pay}</h3>
          <p>{props.location}</p>
        </div>
        <div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

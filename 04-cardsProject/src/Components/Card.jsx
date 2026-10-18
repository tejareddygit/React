import { Bookmark } from "lucide-react";
import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <div className="top">
          <img src="{props.logo}" />
          <button>
            save
            <Bookmark />
          </button>
        </div>
        <div className="center">
          <h3>
            {props.company} <span>{props.posted}</span>
          </h3>
          <h2>{props.title}</h2>
          <div>
            <h4>{props.jobType}</h4>
            <h4>{props.level}</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h2>
              {props.salary}
              <span>{props.location}</span>
            </h2>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

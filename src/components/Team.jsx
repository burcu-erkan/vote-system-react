import React from "react";

const Team = (props) => {
  return (
    <div className="wrapper">
      <img src={props.src} alt="" />
      <h3>{props.name}</h3>
      <button onClick={() => props.func(props.name)} id="vote">
        Vote
      </button>
      <div class="vote">Vote count:{props.voteCount}</div>
    </div>
  );
};

export default Team;

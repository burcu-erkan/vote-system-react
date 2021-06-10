import "./styles.css";
import React from "react";
import Team from "./components/Team";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      teams: [
        {
          name: "Manchester",
          src:
            "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png",
          voteCount: 0
        },
        {
          name: "Barceleno",
          src:
            "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
          voteCount: 0
        },
        {
          name: "Juventis",
          src:
            "https://thumbor.forbes.com/thumbor/fit-in/0x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fi.forbesimg.com%2Fmedia%2Flists%2Fteams%2Fjuventus_416x416.jpg",
          voteCount: 0
        }
      ]
    };
  }

  getCount = (name) => {
    const newTeams = this.state.teams.map((team) => {
      if (team.name === name) {
        team.voteCount++;
      }
      return team;
    });
    this.setState({ teams: newTeams });
  };
  render() {
    const content = this.state.teams.map((team) => {
      return (
        <Team
          src={team.src}
          name={team.name}
          voteCount={team.voteCount}
          func={this.getCount}
        />
      );
    });
    return <div className="container">{content}</div>;
  }
}

export default App;

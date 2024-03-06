import React from 'react';
import './App.css';
import teamData from './CollegeBasketballTeams.json'

interface TeamInfo {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

const teams: TeamInfo[] = teamData.teams as TeamInfo[];

function Welcome() {
  return (
    <div className="team">
      <h1>NCAA Men's Basketball Teams</h1>
      <p>Prepare for March Madness with this list of all NCAA teams!</p>
      <br/>
    </div>
  );
}

  class Team extends React.Component<TeamInfo>
  {
    render()
    {
      let oneTeam : TeamInfo = this.props;
      return (
        <div className="team">
          <h2>{oneTeam.school}</h2>
          <p>{oneTeam.name}</p>
          <p>{oneTeam.city}, {oneTeam.state}</p>
          <br/>
        </div>
      );
    }
  }
function TeamList() {
  return (
    <>
      {teams.map((team) => (
        <Team key={team.name} {...team} />
        ))}
    </>
  );
}

function App() {

  return (
    <>
      <Welcome />
      <TeamList />
    </>
  )
}

export default App;

import React from "react";
import './SeasonDisplay.css';

//object
const seasonConfig = {
  Summer: {
    text: "Let's go to the beach!",
    displayIcon: "sun"
  },
  Winter: {
    text: "Buur, it's chilly.",
    displayIcon: "snowflake"
  }
};

//helper component
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter"; // yes, return first string
  } else {
    return lat > 0 ? "Winter" : "Summer"; // no, return second string
  }
};

//functional component
const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  //de-structure out the data returned by the object seasonConfig
  const { text, displayIcon } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${displayIcon} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${displayIcon} icon`} />
    </div>
  );
};

export default SeasonDisplay;

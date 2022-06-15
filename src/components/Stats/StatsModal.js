import React, { useContext, useState } from "react";
import { AppContext } from "../../Context/appContext";
import './stats.css';
import { PieChart } from 'react-minimal-pie-chart';

const StatsModal = ({mode, modeHandler}) => {

  const {
    stats,
    gameOver,
  } = useContext(AppContext);

  const [isOpen, setOpen] = useState(gameOver);

  const labels = ['1', '2', '3', '4', '5', '6'];

  const statData = stats.guesses.map((val, i) => {
    return {title: labels[i], value: val, color: stats.lastGuess == i+1 ? "#528d4e" : '#3a393c'};
  });
  //   var data = [];
  //   stats.guesses.forEach((val, index) => {
  //     if (val > 0) {
  //       data.push({title: labels[index], value: val, color:'#3a393c'})
  //     }
  //   })
  //   console.log(data);
  //   return data;
  // }

  if (isOpen) {
    return (
      <div className="bg">
        <div className="stats">
          <div className="statsTitle">
            Statistics
          </div>
          <div className="statsRow">
            <div className="statItems">
              <h2 className="statItemValue">{stats.played}</h2>
              <h4 className="statItemName">Played</h4>
            </div>
            <div className="statItems">
              <h2 className="statItemValue">{stats.winPer}</h2>
              <h4 className="statItemName">Win %</h4>
            </div>
            <div className="statItems">
              <h2 className="statItemValue">{stats.curStreak}</h2>
              <h4 className="statItemName">Current Streak</h4>
            </div>
            <div className="statItems">
              <h2 className="statItemValue">{stats.maxStreak}</h2>
              <h4 className="statItemName">Max Streak</h4>
            </div>
          </div>
          <div className="statsTitle">
            Guess Distribution
          </div>
          <div className="visuals">
            <div className="chart">
              <PieChart
                style={{
                  fontFamily:
                    '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
                  fontSize: '10px',
                }}
                segmentsShift={1}
                segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                data={statData}
                lineWidth={60}
                label={({ dataEntry, dataIndex }) => dataEntry.percentage > 0 ? labels[dataIndex] : ""}
                radius={PieChart.defaultProps.radius - 6}
                labelPosition={100 - 60 / 2}
                labelStyle={{
                  fill: '#fff',
                  opacity: 0.75,
                  pointerEvents: 'none',
                }}
              />
            </div>
            <div>
              <div className="guessRow">
                <h1># Guesses</h1>
                <h1>Frequency</h1>
              </div>
              <div className="guessRow">
                <h1>1: </h1>
                <h1>{stats.guesses[0]}</h1>
              </div>
              <div className="guessRow">
                <h1>2: </h1>
                <h1>{stats.guesses[1]}</h1>
              </div>
              <div className="guessRow">
                <h1>3: </h1>
                <h1>{stats.guesses[2]}</h1>
              </div>
              <div className="guessRow">
                <h1>4: </h1>
                <h1>{stats.guesses[3]}</h1>
              </div>
              <div className="guessRow">
                <h1>5: </h1>
                <h1>{stats.guesses[4]}</h1>
              </div>
              <div className="guessRow">
                <h1>6: </h1>
                <h1>{stats.guesses[5]}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StatsModal;

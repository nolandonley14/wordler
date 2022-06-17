import React, { useContext, useState, useRef, useEffect } from "react";
import { AppContext } from "../../Context/appContext";
import './stats.css';
import { PieChart } from 'react-minimal-pie-chart';
import ReactTooltip from 'react-tooltip';
import {
BG,
StatsTitle,
StatsItems,
StatsRow,
Stats,
StatItemName,
StatItemValue,
Visuals,
GuessView,
GuessRow,
GuessTop,
GuessBottom,
Chart
} from './styledComps';

const StatsModal = () => {

  const {
    stats,
    gameOver,
    showStats,
    setShowStats
  } = useContext(AppContext);

  const [isOpen, setOpen] = useState(gameOver);
  const [showChart, setShowChart] = useState(true);
  const [hovered, setHovered] = useState(0);

  const labels = ['1', '2', '3', '4', '5', '6'];

  const getToolTipContent = (data) => {
    return `${data.val}`;
  }

  const statData = stats.guesses.map((val, i) => {
    return {title: labels[i], value: val, color: stats.lastGuess == i+1 ? "#528d4e" : '#3a393c'};
  });

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowStats(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  if (showStats) {
    return (
      <BG>
        <Stats ref={wrapperRef}>
          <StatsTitle>
            Statistics
          </StatsTitle>
          <StatsRow>
            <StatsItems>
              <StatItemValue>{stats.played}</StatItemValue>
              <StatItemName>Played</StatItemName>
            </StatsItems>
            <StatsItems>
              <StatItemValue>{((stats.wins / stats.played)*100).toFixed(0)}</StatItemValue>
              <StatItemName>Win %</StatItemName>
            </StatsItems>
            <StatsItems>
              <StatItemValue>{stats.curStreak}</StatItemValue>
              <StatItemName>Current Streak</StatItemName>
            </StatsItems>
            <StatsItems>
              <StatItemValue>{stats.maxStreak}</StatItemValue>
              <StatItemName>Max Streak</StatItemName>
            </StatsItems>
          </StatsRow>
          <StatsTitle>
            Guess Distribution
          </StatsTitle>
          <Visuals onClick={() => setShowChart(!showChart)}>
            {showChart ? (
              <Chart data-tip="" data-for="chart">
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
                  onMouseOver={(_, index) => {
                    setHovered(index);
                  }}
                  onMouseOut={() => {
                    setHovered(null);
                  }}
                />
                <ReactTooltip
                  id="chart"
                  getContent={() => hovered ? statData[hovered].value : null}
                />
            </Chart>
            ) : (
              <GuessView>
                <GuessRow>
                  <GuessTop>1</GuessTop>
                  <GuessBottom>{stats.guesses[0]}</GuessBottom>
                </GuessRow>
                <GuessRow>
                  <GuessTop>2</GuessTop>
                  <GuessBottom>{stats.guesses[1]}</GuessBottom>
                </GuessRow>
                <GuessRow>
                  <GuessTop>3</GuessTop>
                  <GuessBottom>{stats.guesses[2]}</GuessBottom>
                </GuessRow>
                <GuessRow>
                  <GuessTop>4</GuessTop>
                  <GuessBottom>{stats.guesses[3]}</GuessBottom>
                </GuessRow>
                <GuessRow>
                  <GuessTop>5</GuessTop>
                  <GuessBottom>{stats.guesses[4]}</GuessBottom>
                </GuessRow>
                <GuessRow>
                  <GuessTop>6</GuessTop>
                  <GuessBottom>{stats.guesses[5]}</GuessBottom>
                </GuessRow>

              </GuessView>
            )}
          </Visuals>
        </Stats>
      </BG>
    );
  }
}

export default StatsModal;

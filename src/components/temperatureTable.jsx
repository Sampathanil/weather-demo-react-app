import React from 'react';

const TemperatureTable = (props) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
    margin: '10px',
    justifyContent: "center",
    width: '180px'
  };

  const rowStyle = {
    display: 'flex',
    border: '1px solid black',
    justifyContent: 'center'
  };

  const headerStyle = {
    display: 'flex',
    border: '1px solid black',
    padding: '8px',
    justifyContent: 'center',
    backgroundColor: 'orange',
    whiteSpace: 'nowrap'
  };

  const headerStyle2 = {
    display: 'flex',
    padding: '8px',
    border: '1px solid black',
    justifyContent: 'center'
  };

  const cellStyle = {
    flex: 1,
    textAlign:'center',
    borderLeft: "1px solid black",
    padding: "6px"
  };

  const cellStyle2 = {
    flex: 1,
    textAlign:'center',
    padding: "6px"
  };




  return (
    <div>
      <div style={containerStyle}>
        <div style={headerStyle}>Date: {props.date}</div>
        <div style={headerStyle2}>Temperature</div>
        <div style={rowStyle}>
          <div style={cellStyle2}>Min</div>
          <div style={cellStyle}>Max</div>
        </div>
        <div style={rowStyle}>
          <div style={cellStyle2}>{props.min}</div>
          <div style={cellStyle}>{props.max}</div>
        </div>
        <div style={rowStyle}>
          <div style={cellStyle2}>Pressure</div>
          <div style={cellStyle}>{props.pressure}</div>
        </div>
        <div style={rowStyle}>
          <div style={cellStyle2}>Humidity</div>
          <div style={cellStyle}>{props.humidity}</div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureTable;

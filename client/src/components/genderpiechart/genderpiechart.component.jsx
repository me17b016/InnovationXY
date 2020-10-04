import React, { useState, useEffect } from 'react'

import { PieChart, Pie, Sector, Cell } from 'recharts';


const COLORS = ['#FF6633', '#FFB399', '#FF33FF', '#6666FF', '#00B3E6', 
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#FFFF99'];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" fontSize="11" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


const PieChartGender = props => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const arr = props.data;
    let frequency = Array(3).fill(0);
    let temData = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].sex == 'Male') frequency[0]++;
      if (arr[i].sex == 'Female') frequency[1]++;
      if (arr[i].sex == 'Other') frequency[2]++;
    }
    for (let i = 0; i < 3; i++) {
      if (frequency[i] > 0) {
        if (i == 0) temData.push({name: "Male", value: frequency[i]});
        if (i == 1) temData.push({name: "Female", value: frequency[i]});
        if (i == 2) temData.push({name: "Others", value: frequency[i]});
      }
    }
    setData(temData)
  }, [props])
  return (
    <div style={{marginBottom:20}}>
      <center><div style={{fontSize: 18,fontFamily: "'Playfair Display', serif", fontWeight:"bold"}}>Gender Factor</div></center>
      <div style={{display:"flex", flexDirection:"row", marginLeft:20, marginTop:20}}>
        <div style={{flex : 1}}>
          <PieChart width={250} height={250}>
            <Pie 
              isAnimationActive={false} 
              data={data}
              cx={120}
              cy={120}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
            {
              data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
            </Pie>
          </PieChart>
        </div>
        <div style={{flex : 1, marginTop:30}}>
            {
              data.map((entry, index) => (<div style={{ fontSize: 13,fontFamily: "'Playfair Display', serif"}}>
                  <span style={{height: 5, width: 10, padding: 10,color:COLORS[index % COLORS.length]}}>&#9688;</span>{entry.name}</div>))
            }
        </div>
      </div>
    </div>
  )
}

export default PieChartGender;
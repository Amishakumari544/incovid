import React from "react";
import { Line,Bar } from "react-chartjs-2";
import axios from "axios";
import moment from "moment";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const LineChart = () => {
  // const url = "https://api.covid19india.org/data.json";
  const url = "https://covid19.mathdro.id/api/countries/india";
  const [covidData, setcovidData] = React.useState();

  React.useEffect(() => {
    async function getCovidData() {
      let res = await axios.get(url);
      console.log(res.data);
      setcovidData(res.data);
    }
    getCovidData();
  }, []);
  
const {confirmed,recovered,deaths}=covidData
// console.log(covidData.confirmed.value)
  return (
    <div className="linechat">
     <Bar
            data={{  
                labels: ['Infected', 'Recovered', 'Deaths'],  
                datasets:[{  
                    label:'People',  
                    backgroundColor:['rgba(0, 0, 255, 0.5)','rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)' ],  
                    data:[confirmed.value, recovered.value, deaths.value]  
                }]  
            }}  
            options={{  
                legend:{display:false},  
                title: {display:true, text:`current state in India}`}  
            }}  
           />     
    </div>
  );
};

export default LineChart;

// export default LineChart;

import React from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import moment from "moment";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const LineChart = () => {
  const url = "https://api.covid19india.org/data.json";
  const [covidData, setcovidData] = React.useState();

  React.useEffect(() => {
    async function getCovidData() {
      let res = await axios.get(url);
      setcovidData(res.data.cases_time_series);
    }
    getCovidData();
  }, []);

  var confirmed = [];
  var death = [];
  var recover = [];
  var date = [];

  if (covidData) {
    console.log(
      covidData?.map((data) => {
        if (data.dateymd.split("-", 1) == "2021") {
          date.push(data.dateymd);
          confirmed.push(data.dailyconfirmed);
          death.push(data.dailydeceased);
          recover.push(data.dailyrecovered);
        }
      })
    );
  }

  return (
    <div className="linechat">    
      <Grid className="">
        <Button
          style={{ backgroundColor: "#4A148C" }}
          className=""
          variant="contained"
          color="primary"
          href="https://www.mohfw.gov.in/"
        >
          mohfw
        </Button>
        <Button
          style={{ backgroundColor: "#004D40" }}
          className=""
          variant="contained"
          color="primary"
          href="https://www.mygov.in/covid-19"
        >
          mygov
        </Button>
        <Button
          style={{ backgroundColor: "#900C3F" }}
          className=""
          variant="contained"
          color="primary"
          href="https://twitter.com/who?lang=en"
        >
          WHO
        </Button>
        <Button
          style={{ backgroundColor: "#581845" }}
          className=""
          variant="contained"
          color="primary"
          href="https://twitter.com/PIB_India"
        >
          PIB:IN
        </Button>
      </Grid>
      <Line
        data={{
          labels: date,
          datasets: [
            {
              data: confirmed,
              label: "Infected",
              borderColor: "#3333ff",
              fill: true,
            },
            {
              data: recover,
              label: "Recovered",
              borderColor: "rgb(0,192,0)",
              backgroundColor: "rgba(0, 255, 0, 0.5)",
              fill: true,
            },
            {
              data: death,
              label: "Deaths",
              borderColor: "rgb(192,0,0)",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              fill: true,
            },
          ],
        }}
        options={{
          scales: {
            xAxes: [{ gridLines: { display: false } }],
            yAxes: [{ gridLines: { display: false } }],
          },
        }}
      />
    </div>
  );
};

export default LineChart;

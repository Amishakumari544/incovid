// import React from "react";
// import { Line,Bar } from "react-chartjs-2";
// import axios from "axios";

// const BarChart = () => {
//     const url = "https://covid19.mathdro.id/api/countries/india";
//     const [covidData, setcovidData] = React.useState();
    
//     React.useEffect(() => {
//         async function getCovidData() {
//             let res = await axios.get(url);
//             //   console.log(res.data);
//             setcovidData(res.data);
//         }
//         getCovidData();
//     }, []);
    

//     const {confirmed,recovered,deaths}=covidData

// return (
//     <div className="linechat">
//   if(covidData)?
//      <Bar
//             data={{  
//                 labels: ['Infected', 'Recovered', 'Deaths'],  
//                 datasets:[{  
//                     label:'People',  
//                     backgroundColor:['rgba(0, 0, 255, 0.5)','rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)' ],  
//                     data:[confirmed.value, recovered.value, deaths.value]  
//                 }]  
//             }}  
//             options={{  
//                 legend:{display:false},  
//                 title: {display:true, text:`current state in India}`}  
//             }}  
//             />   : "no data"  
//     </div>
//   );
// };

// export default BarChart;
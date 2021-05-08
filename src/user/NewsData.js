import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import moment from "moment";
import news_img from "./../assets/news_img.png"
import "./news.css";
const styleNewsContainer = {
  fontSize: 17,
  margin:10,
  color: "#000",
  textAlign: "center",
  paddingTop: "50px",
 
}
const NewsData = ({ data }) => {
  const [news, setnews] = React.useState();
  var d=new Date()
  var new_startDate= new Date(d);
  var date= moment(new_startDate).format('YYYY-MM-DD');
  React.useEffect(() => {
    async function getIndiaCases() {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=Covid&from=${date}&to=${date}&sortBy=popularity&apiKey=99fbf2d1abb243ed83b68b981b75b059`
      );
      // const res=await axios.get("https://api.covid19india.org/data.json")
      console.log(res);
      setnews(res.data.articles);
    }
    getIndiaCases();
  }, []);
  return (
    <div className="container" style={styleNewsContainer}>
      <h2 className="text-uppercase font-weight-bold text-center">Latest Covid News</h2>
        <p className="title_covid text-center">Only in Incovid</p>
      
      <div className="row">
      
      {news?.slice(0,5).map((data,index) => {
        return (
          <div key={index} className="col-md-6 card border-0 shadow mt-4">
            <div className="lead_stories">
            <div className="row articles">
            <div className="col-md-3">
            <img src={data.urlToImage} alt="img" className="new_img" />
            </div>
            <div className="col-md-7 mt-2">
            <a href={data.url}>
            <h4 className="font-weight-bold">{data.title}
            </h4>
             </a>
            </div>
            </div>
            </div>
            {/* <p className="justify">{data.description}</p> */}
          
          </div>
       
        );
        
      })}
<div  className="col-md-5 card border-0 shadow mt-4">
          <img src={news_img} alt="news"  className="news_img"/>
        </div>
    </div>
    </div>
  );
};

export default NewsData;
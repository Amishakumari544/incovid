import React from 'react'
import UserCard from '../common/UserCard'
import Header from './Header'
import content_img from "./../assets/content_img.png";
import "./content.css";
import NewsData from './NewsData';
import LineChart from '../common/LineChart';
import BarChart from '../common/BarChart';
function Content() {
    return (
        <div className="container user_content">
         <div className="row">
            <div className="col-lg-7">
                <UserCard />
            </div>
            <div className="col-lg-4">
                <img src={content_img} className="content_img" alt="content" />
            </div>
         </div>
        <LineChart />
       
        </div>
    )
}

export default Content

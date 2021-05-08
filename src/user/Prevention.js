import React from 'react'
import handwash from "./../assets/handwash.png"
import pet_img from "./../assets/pet_img.png"
import child_img from "./../assets/child_img.png"
import senior_img from "./../assets/senior_img.png"
import adult_img from "./../assets/adult_img.png"
import "./prevention.css";
function Prevention() {
    return (
        <div className="">
            <h1 className="text-center prevention_title">What Should We Do</h1>
        <div className="container">
           <div className="row mt-4">
                <div className="col-lg-5">
                <h2>Guidelines according to WHO</h2> 
                <h5>What to do if you feel unwell</h5>
              <ul className="">
                  <li>Know the full range of symptoms of COVID-19</li>
                  <li>Stay home and self-isolate even if you have minor symptoms such as cough, headache, mild fever, until you recover</li>
                  <li>If you have a fever, cough and difficulty breathing, seek medical attention immediately. Call by telephone first, if you can and follow the directions of your local health authority.</li>
                  <li>Keep up to date on the latest information from trusted sources, such as WHO or your local and national health authorities. </li>
              </ul>
                </div>
                <div className="col-lg-7">
               <img src={handwash} alt="" className="prevention_img" />
                </div>
                </div>
                </div>
        </div>
    )
}

export default Prevention

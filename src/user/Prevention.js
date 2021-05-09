import React from "react";
import handwash from "./../assets/handwash.png";
import { Link } from "react-router-dom";
import covid_meal_img from "./../assets/covid_meal_img.jfif";
// import pet_img from "./../assets/pet_img.png"
// import child_img from "./../assets/child_img.png"
// import senior_img from "./../assets/senior_img.png"
import adult_img from "./../assets/adult_img.png";
import "./prevention.css";
function Prevention() {
  return (
    <div className="">
      <h1 className="text-center prevention_title">What Should We Do</h1>
      <div className="container">
        <div className="row mt-4">
          <div className="col-lg-5">
            <h2 className="font-weight-bold">Guidelines according to WHO</h2>
            <h5>What to do if you feel unwell</h5>
            <ul className="">
              <li>Know the full range of symptoms of COVID-19</li>
              <li>
                Stay home and self-isolate even if you have minor symptoms such
                as cough, headache, mild fever, until you recover
              </li>
              <li>
                If you have a fever, cough and difficulty breathing, seek
                medical attention immediately. Call by telephone first, if you
                can and follow the directions of your local health authority.
              </li>
              <li>
                Keep up to date on the latest information from trusted sources,
                such as WHO or your local and national health authorities.{" "}
              </li>
            </ul>
            <Link
              to={{ pathname: "https://www.cowin.gov.in/" }}
              target="_blank"
              type="button"
              className="btn btn-success text-white"
            >
              Register for vaccine here
            </Link>
          </div>
          <div className="col-lg-7">
            <img src={handwash} alt="" className="prevention_img" />
          </div>
        </div>
      </div>
      {/* <div className="row"> */}

      <h4 className="font-weight-bold">
        From soaked almonds to khichdi: Govt suggests diet plan for those
        recovering from Covid-19
      </h4 >

      <div className="col-md-6 card shadow mt-4 ml-5">
        <div className="">
          <div className="row ">
            <div className="col-md-6 ">
              <img src={covid_meal_img} alt="" className="covid_meal_img m-3" />
            </div>
            <div className="col-md-6 mt-2">
              <p className="font-weight-bold">
                The five-step sample meal plan is as follows:{" "}
              </p>
              <ul className="mb-3">
                <li>
                  1. Start the day by consuming soaked almonds and raisins.
                  Almonds are a rich source of protein and raisins provide a
                  good amount of iron.
                </li>
              </ul>
              <li>
                2. For breakfast, ragi dosa or a bowl of porridge is the best
                option.
              </li>
              <li>
                3. Jaggery and ghee recommended during or post lunch or have
                this nutritious combination along with roti.
              </li>
              <li>4. For dinner, have a simple khichdi as it includes all the essential nutrients, is light on the gut, and helps with good sleep.

</li>
              <li>5. It is important to stay hydrated. Apart from water, you must include homemade lime juice and buttermilk in your daily routine.</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prevention;

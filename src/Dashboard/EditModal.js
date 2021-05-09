// import React,{useState} from "react";
// import ReactDOM from "react-dom";
// import axios from "axios";
// import Modal from "react-modal";
// import { useForm } from "react-hook-form";
// // import "./popup.css";
// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// // Modal.setAppElement('#yourAppElement')

// function Popup({card}) {
//   const {
//     register,
//     handleSubmit,
//     defaultValue,
//     Card,
//     watch,
//     formState: { errors },
//   } = useForm();
 
//   var subtitle;
//   const [modalIsOpen, setIsOpen] = React.useState(false);
//   function openModal() {
//     setIsOpen(true);
//   }
//   const [data, setData] = useState(card)
       
//     console.log(card);
//   const onSubmit = (data) => {
 
//     axios
//       .put(`http://covidline.musocial.in:8050/hospital`, data)
//       .then((res) => console.log(res))
//       .catch((error) => {
//         console.log(error);
//       });
//      console.log(data)
//   };
//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = "#000000";
//     subtitle.style.fontweight = "bold";
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }

//   return (
//     <div className="container">
     
//      <button className="mr-auto btn" onClick={openModal}>
//         Edit Data
//       </button>
//       <Modal
//         isOpen={modalIsOpen}
//         onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal"
//       >
//         <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Edit Your Data here</h2>
//          <div className=" mt-4">
//             <div className="row">
//               <div className="col-md-11 col-sm-12 mt-5 popup_div_left ">
//                   <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
//                 <div className="row">
//                  {/* <div className="col-lg-2 col-sm-2">
//                           <label className="">Total Beds</label> */}
//                           {/* <input
//                             type="number"
//                             defaultValue={card.t_bed}
//                             name="t_bed"
//                             {...register("t_bed", {
//                               required: true,
//                               minLength: 1,
//                             })}
//                           />
//                           {errors.t_bed && (
//                             <small className="text-danger">
//                               This field is required
//                             </small>
//                           )}
//                         </div> */}
//                         {/* <div className="col-lg-2 col-sm-2"> */}
//                           {/* <label className="">Total ICU Bed</label>
//                           <input
//                             type="number"
//                             defaultValue={card.t_icu}
//                             name="t_icu"
//                             {...register("t_icu", {
//                               required: true,
//                               minLength: 1,
//                             })}
//                           />
//                           {errors.t_icu && (
//                             <small className="text-danger">
//                               This field is required
//                             </small>
//                           )}
//                         </div>
                    
//                     */}
                       
//                         </div>
//                         <div className="row mt-2">
//                         {/* <div className="col-lg-3 col-sm-2"> */}
//                           {/* <label className="">Total Oxygen</label>
//                           <input
//                             type="number"
//                              defaultValue={card.t_oxy}
//                             name="t_oxy"
//                             {...register("t_oxy", {
//                               required: true,
//                               minLength: 1,
//                             })}
//                           />
//                           {errors.t_oxy && (
//                             <small className="text-danger">
//                               This field is required
//                             </small>
//                           )}
//                         </div> */}
//                         <div className="col-lg-2 col-sm-2">
//                           <label className="">Oxygen Capacity</label>
//                           <input
//                              defaultValue={card.oxy_time}
//                             type="number"
//                             name="oxy_time"
//                             {...register("oxy_time", {
//                               required: true,
//                               minLength: 1,
//                               maxLength: 10,
//                             })}
//                           />
//                           {errors.oxy_time && (
//                             <small className="text-danger">
//                               This field is required
//                             </small>
//                           )}
//                         </div>
//                         <div className="col-lg-2 col-sm-3">
//                         <label className="">Available Bed</label>
//                         <input
//                            defaultValue={card.a_bed}
//                           type="number"
//                           name="a_bed"
//                           {...register("a_bed", { required: true })}
//                         />
//                         {errors.a_bed && (
//                           <small className="text-danger">
//                             This field is required
//                           </small>
//                         )}
//                       </div>
//                   </div>
//                   <div className="row mt-2">
//                       <div className="col-lg-2 col-sm-2">
//                         <label className="">Available ICU Bed</label>
//                         <input
//                            defaultValue={card.a_icu}
//                           type="number"
//                           name="a_icu"
                   
//                           {...register("a_icu", { required: true })}
//                         />
//                         {errors.a_icu && (
//                           <small className="text-danger">
//                             This field is required
//                           </small>
//                         )}
//                  </div>
//                    <div className="col-lg-2 col-sm-2">
//                         <label className="">Available Oxygen</label>
//                         <input
//                            defaultValue={card.a_oxy}
//                           type="number"
//                           name="a_oxy"
//                           {...register("a_oxy", { required: true })}
//                         />
//                         {errors.a_oxy && (
//                           <small className="text-danger">
//                             This field is required
//                           </small>
//                         )}
//                       </div>
//                       <div className="col-lg-3 col-sm-2">
//                         <label className=""> Available Covid Hospital</label>
//                         <input
//                           name="a_covid"
//                           defaultValue={card.a_covid}
                         
//                           {...register("a_covid", { required: true })}
//                         />
                       
//                         {errors.a_covid && (
//                           <small className="text-danger">
//                             This field is required
//                           </small>
//                         )}
//                       </div>
//                       </div>
//                       <div className="row mt-2">
//                       <div className="col-lg-3 col-sm-2">
//                         <label className="">Covid Hospital or Not?</label>
//                         <input
//                           name="isCovid"
//                           defaultValue={card.isCovid}
                          
//                           {...register("isCovid", { required: true })}
//                         />
//                        {/* {isCovid==1 ? "yes" : "no"
                       
//                        } */}
//                         {errors.isCovid && (
//                           <small className="text-danger">
//                             This field is required
//                           </small>
//                         )}
//                       </div>
//                       </div>

//                         {/* errors will return when field validation fails  */}
//                         <div className="col-6 mt-5">
//                           <button className="btn form_submit_left">
//                             Submit
//                           </button>
//                           <button className="ml-3 btn" onClick={closeModal}>
//                             close
//                             <span aria-hidden="true">&times;</span>
//                           </button>
//                         </div>
                 
//                  </form>
//                 </div>
//               </div>
//             </div>
      
//       </Modal>
//     </div>
//   );
// }

// export default Popup;

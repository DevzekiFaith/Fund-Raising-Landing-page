import React from "react";
import "./Main1.css";
import image1 from "../../assets/icon-bookmark.svg";

const Mian1 = () => {
  return (
    <div>
      <div className="cc-container  Main1Body">
        <div className="Main1BodyContent">
          <h1>Mastercraft Bamboo Monitor Riser</h1>
          <h6>
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </h6>
          <div className="MainBodyButton">
            <button className="Bt1">Back this project</button>
            <input
              className="BookMark"
              type="text"
              placeholder="Bookmark"
              id=""
            />
            <button className="Bt2">
              <img src={image1} alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className="cc-container  Main1Body1" style={{width:"34.5rem", height:"9rem"}}>
        <div className="Main1BodyContent1" style={{display:"flex", marginLeft:"2rem"}}>
          <div className="Content2"   style={{ display: "flex", gap: "1rem" }}>
            <div>
              <h1>$89,914</h1>
              <p>of $100,000 backed</p>
            </div>
            <span>
              <hr />
            </span>
          </div>
          <div className="Content3"   style={{display:"flex", gap:"1rem", marginLeft:"1.8rem"}}>
            <div>
              <h1>5,007 </h1>
              <p>total backers</p>
            </div>
            <span>
              <hr />
            </span>
          </div>

          <div className="Content4"   style={{display:"flex", gap:"1rem", marginLeft:"1.8rem"}}>
            <div>
              <h1>56</h1>
              <p>days left</p>
            </div>
           </div>
        </div>
        <div>
          <input style={{width:"22rem", marginLeft:"4rem", marginTop:"1rem"}} type="text" name="" id="" />
          
          </div>
          <button></button>
          
      </div>
    </div>
  );
};

export default Mian1;

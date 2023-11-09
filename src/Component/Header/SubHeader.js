import React from 'react';
import UserImg from "../../Assests/g.png"

function SubHeader() {
  return (
    <div className="container text-center mt-4 ">
      <img src={UserImg} style={{ height:"120px"}} alt="Gift" className="img-fluid mb-2" />
      <h1 className='font-fam dark-bold'>Tell us about your gift recipient</h1>
    </div>
  );
}

export default SubHeader;

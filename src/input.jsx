import React from 'react';
const Input =({name,label,value,onChange})=>{
  return(  
  <div className="form-group">
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input name={name} value={value} onChange={onChange} autoFocus id={name} type="text" className="form-control"/>
    </div>
    </div>
    );
}
export default Input;
import React from "react";

export enum Size {
    sm = "btn-sm", lg = "btn-lg"  
}
export const Info = (children: any, size: Size, style: string) => {
    return(<button className={`btn btn-info ${size} ${style}`}>{children}</button>)
}
export const Success = (children: string, size: Size) => {
  return <button className={`btn btn-success ${size}`}>{children}</button>;
};
export const Warning = (children: string, size: Size) => {
  return <button className={`btn btn-warning ${size}`}>{children}</button>;
};
   
    


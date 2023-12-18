import React from "react";
export default function ListObject()
{
    const college=[{id:220,stuName:"Surya ",age:18},
    {id:244,stuName:"Sankar ",age:18},
    {id:246,stuName:"Tharun (Lovely)",age:18},]
    const display=college.map((col)=><li >{col.id} {col.stuName} {col.age}</li>)
    return(
        <div>
        <h2>List Of Toppers</h2>
        {display}
        </div>
    )
}
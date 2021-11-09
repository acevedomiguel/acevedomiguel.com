import React, { useEffect, useState } from 'react'
import { ResumeData } from '../../types/resumedata';
import getData from '../../lib/getdata';

const Resume = () => {
    const [ data, setData ] = useState();

    useEffect(()=>{ 
        getData(setData)
    } ,[])

    if (!data) {
        return <div />
    }
    
    const cv:ResumeData = data;

    return (
        <>
            <div>Resume {cv.basics.name}</div>
            <div>{cv.basics.summary}</div>
            <img alt="profile picture" src={cv.basics.image} />
        </>
    )
}
  
export default Resume



import React, { useEffect, useState } from 'react'
import { ResumeData } from '../types/resumedata';

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

const getData = (setData) => {
    fetch('/resume.json',{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        setData(myJson)
    });
}

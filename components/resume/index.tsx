import React, { useEffect, useState } from 'react'
import { ResumeData } from '../../types/resumedata';
import getData from '../../lib/getdata';
import nextConfig from '../../next.config';
import Work from './work';
import Certifications from './certifications';
import Language from './language';
import Skills from './skills';

const Resume = () => {
    const [ data, setData ] = useState();

    useEffect(()=>{ 
        getData(setData)
    } ,[])

    if (!data) {
        return <div />
    }
    
    const cv:ResumeData = data;
    console.log(cv)

    return (<>
        <div className="lg:grid grid-cols-8">
            <div className="hidden lg:inline col-span-2 resume-bg">
                <div>
                    <img className="mx-auto rounded-full mt-16 mb-16" alt="profile picture" src={cv.basics.image} />
                </div>
            </div>
            <div className="col-span-6">
                <div className="p-6 pt-16">
                    <div className="text-3xl lg:text-6xl uppercase resume-color-2 antialiased font-bold">{cv.basics.name}</div>
                    <div className="lg:text-2xl uppercase mt-1 resume-color-4 antialiased font-semibold">{cv.basics.label}</div>
                    <div className="mt-6 resume-color-5">{cv.basics.summary}</div>
                </div>
            </div>
        </div>
        <div className="lg:grid grid-cols-8 ">
            <div className="col-span-2 resume-bg text-gray-300">
                <div className="text-center">
                    <a className="text-gray-100 bg-yellow-600 rounded-full py-4 px-8" href={nextConfig.resumePath}>Download CV</a>
                </div>

                
                <div className="ml-6 mr-6">
                    <Skills skills={cv.skills} />
                </div>

                <div className="ml-6 mr-6">
                    <Language languages={cv.languages} />
                </div>

            </div>
            <div className="col-span-6">
                <div className="p-6 pt-0">
                    <Work work={cv.work} />
                    <Certifications certifications={cv.certifications} />
                </div>
            </div>
        </div>
    </>)
}
  
export default Resume



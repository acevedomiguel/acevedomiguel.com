import React, { useEffect, useState } from 'react'
import { ResumeData } from '../../types/resumedata';
import getData from '../../lib/getdata';
import nextConfig from '../../next.config';

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
            <div className="grid grid-cols-8">
                <div className="col-span-2 resume-bg">
                    <div>
                        <img className="mx-auto rounded-full mt-16 mb-16" alt="profile picture" src={cv.basics.image} />
                    </div>
                </div>
                <div className="col-span-6">
                    <div className="p-6 pt-16">
                        <div className="text-6xl uppercase resume-color-2 antialiased font-bold">{cv.basics.name}</div>
                        <div className="text-2xl uppercase mt-1 resume-color-4 antialiased font-semibold">{cv.basics.label}</div>
                        <div className="mt-6 resume-color-5">{cv.basics.summary}</div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-8 ">
                <div className="col-span-2 resume-bg text-gray-300">
                    <div className="text-center">
                        <a className="text-gray-100 bg-yellow-600 rounded-full py-4 px-8" href={nextConfig.resumePath}>Download CV</a>
                    </div>

                    
                    <div className="ml-6 mr-6">
                        <h2 className="uppercase mt-8 mb-2 font-bold">Skills</h2>
                        {cv.skills.map((skill, index) => {
                            return (<div key={'skill-'+index} className="mb-3">
                                <div className="uppercase font-semibold">{skill.name}</div>
                                <ul className="ml-4 list-disc list-inside">
                                    {skill.keywords.map((keyword, index) => {
                                        return (<li key={"keyword-"+index}>{keyword}</li>)
                                    })}
                                </ul>
                            </div>)
                        })}
                    </div>

                    <div className="ml-6 mr-6">
                        <h2 className="uppercase mt-8 mb-2 font-bold">Language</h2>
                        {cv.languages.map((language, index) => {
                            return (<div key={'lang-'+index} className="mb-3">
                                <div className="ml-4">{language.language}: {language.fluency}</div>
                            </div>)
                        })}
                    </div>

                </div>
                <div className="col-span-6">
                    <div className="p-6 pt-0">
                        <h2 className="text-2xl uppercase pb-3 resume-color-4">Work Experience</h2>
                        <div>
                            {cv.work.map((work, index) => {
                                return (<div key={'work-'+index} className="mb-6 resume-color-5">
                                    <div className="text-sm text-gray-400">{work.startDate} - {work.endDate}</div>
                                    <div className="font-semibold text-lg">{work.position}</div>
                                    <div className="pb-2">{work.name} ({work.location})</div>
                                    <ul className="list-disc list-inside">
                                        {work.highlights.map((highlight, index) => {
                                            return (<li key={"highlight-"+index}>{highlight}</li>)
                                        })}
                                    </ul>
                                </div>)
                            })}
                        </div>
                        <h2 className="text-3xl pt-4 pb-3 resume-color-4">Certifications</h2>
                        <div>
                            {cv.certifications.map((certification, index) => {
                                return (<div key={'cert-'+index} className="mb-3">
                                    <div className="font-semibold text-lg">{certification.courses.join(", ")}</div>
                                    <div>{certification.institution}</div>
                                    <div>issued {certification.endDate}</div>
                                    <div className="text-sm text-gray-400"><a href={certification.url}>see credential</a></div>
                                </div>)
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div>
                
            </div>
        </>
    )
}
  
export default Resume



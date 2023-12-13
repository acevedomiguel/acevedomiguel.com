import React, { useEffect, useState } from 'react'
import { ResumeData } from '../../types/resumedata'
import getData from '../../lib/getdata'
import Work from './work'
import Language from './language'
import Skills from './skills'
import { onThisClick } from '../ga'
import { FaEnvelope, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import { CgWebsite } from 'react-icons/cg';
import { BsPhone } from 'react-icons/bs';
import Link from 'next/link';

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
        <div className='rounded-lg overflow-hidden md:my-4 pb-4 my-0'>
            <div className='flex bg-slate-600 text-white font-light'>
                
                <Link href="/" passHref>
                    <img className="rounded-none w-48 h-auto cursor-pointer hidden md:block" alt="profile picture" src={cv.basics.image} />
                </Link>
                
                <div className='p-8'>
                    <h1 className="text-3xl lg:text-5xl antialiased font-medium">{cv.basics.name}</h1>
                    <h2 className="lg:text-xl mt-1 mb-2 antialiased">{cv.basics.label}</h2>
                    <p>{cv.basics.summary}</p>
                </div>
            </div>
            <div className='bg-slate-700 text-white flex px-8 py-2 text-sm'>
                <div className='flex-1'>
                    <div className='py-2'><FaEnvelope className='react-icons' /> me@acevedomiguel.com</div>
                    <div className='py-2'><ImLocation className='react-icons' /> Hong Kong</div>
                    <div className='py-2'>
                        <Link href="https://www.linkedin.com/in/acevedomiguel/" passHref onClick={onThisClick}>

                                <FaLinkedin className='react-icons'/> linkedin.com/in/acevedomiguel

                        </Link>
                    </div>
                </div>
                <div className='flex-1'>
                    <div className='py-2'><BsPhone className='react-icons' /> (852) 6435-6936</div>
                    <div className='py-2'>
                        <Link href="https://www.acevedomiguel.com/" passHref onClick={onThisClick}>
                            
                                <CgWebsite className='react-icons' /> acevedomiguel.com
                            
                        </Link>
                    </div>
                    <div className='py-2'>
                        <Link href="https://www.twitter.com/faultydev" passHref onClick={onThisClick}>
                            
                                <FaTwitter className='react-icons' /> @faultydev
                            
                        </Link>
                    </div>
                </div>
            </div>
            <div className='border-x border-gray-100'>
                <Skills skills={cv.skills} />
                <Work work={cv.work} />
                <Language languages={cv.languages} />
            </div>
            <div className='border-x border-gray-100 border-b rounded-lg pb-6'>
                
            </div>
        </div>
    </>)

    // return (<>
    //     <div className="lg:grid grid-cols-8">
    //         <div className="hidden lg:inline col-span-2">
    //             <div>
    //                 <img className="mx-auto rounded-full mt-16 mb-16" alt="profile picture" src={cv.basics.image} />
    //             </div>
    //         </div>
    //         <div className="col-span-6">
    //             <div className="p-6 pt-16">
    //                 <div className="text-3xl lg:text-6xl uppercase resume-color-2 antialiased font-bold">{cv.basics.name}</div>
    //                 <div className="lg:text-2xl uppercase mt-1 resume-color-4 antialiased font-semibold">{cv.basics.label}</div>
    //                 <div className="mt-6 resume-color-5"></div>
    //             </div>
    //         </div>
    //     </div>
    //     <div className="lg:grid grid-cols-8 ">
    //         <div className="col-span-2">
    //             <div className="text-center">
    //                 <a className="text-gray-100 bg-yellow-600 rounded-full py-4 px-8" onClick={eventOnClick("resume_download", { url: nextConfig.resumePath })} href={nextConfig.resumePath}>Download CV</a>
    //             </div>

                
    //             <div className="ml-6 mr-6">
    //                 
    //             </div>

    //             <div className="ml-6 mr-6">
    //                 
    //             </div>

    //         </div>
    //         <div className="col-span-6">
    //             <div className="p-6 pt-0">
    //                 
    //                 
    //             </div>
    //         </div>
    //     </div>
    // </>)
}
  
export default Resume



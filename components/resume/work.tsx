export const Work = ({ work }) => {
    return (<>
        <h2 className="text-2xl uppercase pb-3 resume-color-4">Work Experience</h2>
        
            
 
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {work.map((work, index) => {
                return (
                    <li key={'work-'+index} className="mb-10 ml-6">            
                        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"></path></svg>
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{work.position}</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{work.startDate} - {work.endDate}</time>
                        {work.highlights.map((highlight, index) => {
                            return (<p key={"highlight-"+index} className="mb-0 text-sm font-normal text-gray-500 dark:text-gray-400">{highlight}</p>)
                        })}
                        <div className="flex space-x-2">
                            {work.stack.map((stack, index) => {
                                <div key={"stack-"+index} className="text-xs px-3 bg-gray-200 text-gray-600 rounded-full pt-1 pb-1 mt-2">Badge</div>
                            })}
                        </div>
                    </li>
                
                
                // <li  className="mb-10 ml-4">
                //     <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                //         <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{work.startDate} - {work.endDate}</time>
                //         <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-0">{work.position}</h3>
                //         <small className="mt-0 pt-0">{work.name} ({work.location})</small>

                

                //     </li>
                // <div className="mb-6 resume-color-5">
                //     <div className="text-sm text-gray-400"></div>
                //     <div className="font-semibold text-lg"></div>
                //     <div className="pb-2"></div>
                //     <ul className="list-disc list-inside">
                //         
                //     </ul>
                // </div>
                )
            })}
            </ol>
    </>)
}

export default Work;

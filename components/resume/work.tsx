import { HiOutlineBriefcase } from 'react-icons/hi';

export const Work = ({ work }) => {
    return (<div className="px-6 pt-6">
        <h2 className="text-xl font-bold pb-3 underline">Professional Experience</h2>
        <ol className="relative border-l border-gray-200 dark:border-gray-700 mx-6">
            {work.map((work, index) => {
                return (
                    <li key={'work-'+index} className="mb-10 ml-6">            
                        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 text-blue-700">
                            <HiOutlineBriefcase className='react-icons w-3' />
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{work.position}</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{work.startDate} - {work.endDate}</time>
                        {work.highlights.map((highlight, index) => {
                            return (<p key={"highlight-"+index} className="mb-0 text-sm font-normal text-gray-500 dark:text-gray-400">{highlight}</p>)
                        })}
                        {/* <div className="flex space-x-2">
                            {work.stack && work.stack.map((stack, index) => {
                                <div key={"stack-"+index} className="text-xs px-3 bg-gray-200 text-gray-600 rounded-full pt-1 pb-1 mt-2">Badge</div>
                            })}
                        </div> */}
                    </li>
                )
            })}
            </ol>
    </div>)
}

export default Work;

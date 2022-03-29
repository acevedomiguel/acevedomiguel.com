import dateFormat from 'dateformat';
import { SiBuymeacoffee } from 'react-icons/si';

export const Certifications = ({ certifications }) => {
    return(<>
        <h2 className="text-3xl pt-4 pb-3 resume-color-4">Certifications</h2>
        <div>
            
        </div>
        <div className="grid grid-cols-2 gap-4">
            {certifications.map((certification, index) => {
                const date = new Date(certification.endDate);
                return (
                    <div key={'cert-'+index} className="w-sm py-4 px-8 bg-white shadow rounded-lg mt-2">
                        {/* <div className="flex justify-center md:justify-end -mt-16"> */}
                            {/* <img className="w-20 h-20 object-cover rounded-full border-2 border-gray-300" src="/aws.jpg" /> */}
                        {/* </div> */}
                        <div>
                            <h2 className="text-gray-800 text-lg font-semibold">{certification.courses.join(", ")}</h2>
                            <time className="block my-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{dateFormat(date, "mmmm yyyy")}</time>
                            <p className="mt-2 text-gray-600"></p>
                        </div>
                    </div>
                // <div key={'cert-'+index} className="mb-3">
                //     <div className="font-semibold text-lg"></div>
                //     <div>{certification.institution}</div>
                //     <div>issued </div>
                //     <div className="text-sm text-gray-400"><a href={certification.url}>see credential</a></div>
                // </div>
                )
            })}
        </div>
    </>)
}

export default Certifications;

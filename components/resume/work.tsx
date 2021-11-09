export const Work = ({ work }) => {
    return (<>
        <h2 className="text-2xl uppercase pb-3 resume-color-4">Work Experience</h2>
        <div>
            {work.map((work, index) => {
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
    </>)
}

export default Work;

export const Certifications = ({ certifications }) => {
    return(<>
        <h2 className="text-3xl pt-4 pb-3 resume-color-4">Certifications</h2>
        <div>
            {certifications.map((certification, index) => {
                return (<div key={'cert-'+index} className="mb-3">
                    <div className="font-semibold text-lg">{certification.courses.join(", ")}</div>
                    <div>{certification.institution}</div>
                    <div>issued {certification.endDate}</div>
                    <div className="text-sm text-gray-400"><a href={certification.url}>see credential</a></div>
                </div>)
            })}
        </div>
    </>)
}

export default Certifications;

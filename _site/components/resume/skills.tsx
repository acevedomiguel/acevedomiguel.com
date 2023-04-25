export const Skills = ({ skills }) => {
    return (<div className="px-6 pt-6">
        <h2 className="text-xl font-bold pb-3 underline">Areas of Expertise</h2>
        {skills.map((skill, index) => {
            return (<div key={'skill-'+index} className="mb-3">
                <div className="text-sm font-semibold mb-1">{skill.name}</div>
                <div className="mx-2">
                {skill.keywords.map((keyword, index) => {
                    return (<span key={"keyword-"+index} className="ml-4 mb-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-md bg-gray-100 text-gray-700 border">{keyword}</span>)
                })}</div>
            </div>)
        })}
    </div>);
}

export default Skills;

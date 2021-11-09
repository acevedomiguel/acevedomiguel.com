export const Skills = ({ skills }) => {
    return (<>
        <h2 className="uppercase mt-8 mb-2 font-bold">Skills</h2>
        {skills.map((skill, index) => {
            return (<div key={'skill-'+index} className="mb-3">
                <div className="uppercase font-semibold">{skill.name}</div>
                <ul className="ml-4 list-disc list-inside">
                    {skill.keywords.map((keyword, index) => {
                        return (<li key={"keyword-"+index}>{keyword}</li>)
                    })}
                </ul>
            </div>)
        })}
    </>);
}

export default Skills;

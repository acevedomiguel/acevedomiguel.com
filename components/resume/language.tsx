export const Language = ({ languages }) => {
    return(<>
        <h2 className="uppercase mt-8 mb-2 font-bold">Language</h2>
        {languages.map((language, index) => {
            return (<div key={'lang-'+index} className="mb-3">
                <div className="ml-4">{language.language}: {language.fluency}</div>
            </div>)
        })}
    </>)
}

export default Language;

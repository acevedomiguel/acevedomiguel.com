export const Language = ({ languages }) => {
    return(<div className="px-6 pt-6">
        <h2 className="text-xl font-bold pb-3 underline">Languages</h2>
        <div className="grid grid-cols-3 gap-4">
            {languages.map((language, index) => {
                return (<div key={'cert-'+index} className="w-sm bg-white shadow rounded-lg mt-2 overflow-hidden">
                {/* <div className="flex justify-center md:justify-end -mt-16"> */}
                    {/* <img className="w-20 h-20 object-cover rounded-full border-2 border-gray-300" src="/aws.jpg" /> */}
                {/* </div> */}
                <div className="flex">
                    <div className="object-none object-center w-20 h-20 overflow-hidden">
                        <img src={language.icon} />
                    </div>
                    <div className="px-4 py-2">
                        <h2 className="text-gray-800 text-lg font-semibold">{language.language}</h2>
                        <p className="mt-2 text-gray-600">{language.fluency}</p>
                    </div>
                </div>
            </div>)
            })}
        </div>

    </div>)
}

export default Language;

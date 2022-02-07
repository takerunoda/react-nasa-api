import React from 'react'

const DataSource = () => {
    const urlNasaAPI = "https://api.nasa.gov/"
    return (
                <div>
                    <p className="text-gray-600 mt-2 sm:mt-5 text-center pr-16 sm:pr-16">
                        [&nbsp;Source:&nbsp; 
                        <a className={"text-indigo-600"} href={urlNasaAPI}>NASA</a>&nbsp;]
                    </p>
                </div>
    )
}

export default DataSource
import React from 'react'
import Contributor from './Contributor';

const ProjectContributor = ({ className, contributeField, contributorIds }) => {
    
    return (
        <>
            <div className={`${className} m-1`} >
                <h1 className="font-bold text-2xl" >{contributeField}</h1>
                <h1 className='font-bold text-sm text-gray-400 mb-5' >Contributors : </h1>
                <div className="flex flex-wrap" >
                    {
                        contributorIds.map((contributorId, index) => {
                            return (<div key={index} className='w-40 ml-1 mr-1 mb-5 flex flex-wrap justify-center items-center md:w-44' >
                                <Contributor contributorId={contributorId} />
                            </div>)
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default ProjectContributor
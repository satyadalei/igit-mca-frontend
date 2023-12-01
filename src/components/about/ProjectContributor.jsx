import React from 'react'
import Contributor from './Contributor';
import TechDetailsWithContributor from './TechDetailsWithContributor';

const ProjectContributor = ({ className, contributeField, contributorIds }) => {

    const testerUserId = "655f583df6ec28a385eafcc8"; // Rakesh Kumar Sarangi Batch : 41
    // const allContributorIds = [...contributorIds, testerUserId];
    return (
        <>
            <div className={`${className} m-1`} >
                <h1 className="font-bold text-2xl" >{contributeField}</h1>
                <h1 className='font-bold text-sm text-gray-400 mb-5' >Contributors : </h1>
                <div className="flex flex-wrap" >
                    {/* <div className='w-full flex flex-wrap justify-center items-center md:w-44 mr-5' >
                    <Contributor contributorId={testerUserId} />
                </div> */}
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
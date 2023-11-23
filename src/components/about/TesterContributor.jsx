import React from 'react'
import Contributor from './Contributor';


const TesterContributor = ({className}) => {

    const testerUserId = "655f583df6ec28a385eafcc8" ; // Rakesh Kumar Sarangi Batch : 41

  return (
    <div className={className} >
        <h1 className="font-bold text-2xl" >Testing </h1>
        <h1 className='font-bold text-sm text-gray-400 mb-5' >Contributors : </h1>
        <div className="flex flex-wrap" >
            <div className='w-full flex justify-center items-center md:w-44 mr-5' >
                <Contributor contributorId={testerUserId} />
            </div>
        </div>
    </div>
);
}

export default TesterContributor
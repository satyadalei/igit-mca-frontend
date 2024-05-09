"use client"
import React from 'react'
import ProjectContributor from './ProjectContributor'


const AboutUs = () => {
    const frontend_backend_contributor = [
        "655669bc41a72f015539174d", // Satyanarayan
        "6561901f7f0670bfa985526a", // Dibyajyoti
        "656ac9a20469aa5099578de8",  // Soumyaranjan
    ];
    const tester = [
        // "655f583df6ec28a385eafcc8", // Rakesh
        "655f92db96ddd3aab98d4df6", // Debashish
        "657089ed80af680e5e00e679", // M Tanuja
    ];

    return (
        <div className='p-3 pl-5' >
            {/* ---- About Us --- */}
            <div className='mb-5' >
                <h1 className='text-sky-500 text-3xl underline font-bold mb-5 mt-3 after:min-w-fit after:bg-red-500' >About us</h1>
                <p className='' >
                    We are the MCA students of of <a className='text-sky-600 underline underline-offset-4' href={"https://igitsarang.ac.in/"} target='_blank' > IGIT Sarang</a> having potential to build & conquer tomorrows problem. Thanks to our Department Of <span className='text-sky-500' > Computer Science Engineering And Application</span> for teaching & supporting MCA branch. Our branch has a strength of around 150-160. We are continuously working on our skills to evolve as the best students of IGIT.
                </p>
                <h1 className='underline text-sky-500 text-lg font-semibold mb-2 mt-3' >Our Main Goal</h1>
                <ul className='pl-5' >
                    <li className='list-decimal mt-1 mb-1' >Keeping all MCA students under one hood including our Alumni. So that we can  organize <span className='text-sky-500' >Alumni meet</span> every year. This will allow us to be in touch with them & possibly could learn & grow.
                    </li>
                    <li className='list-decimal mt-1 mb-1' >Continuously putting efforts to make ourselves better in the field.</li>
                    <li className='list-decimal mt-1 mb-1' >Maintaining the reputations of MCA branch in the whole department.</li>
                </ul>
            </div>
            
            <div className='mb-3' >
                <h1 className='text-sky-500 text-3xl underline font-bold mb-3 mt-3 after:min-w-fit after:bg-red-500' >Our Contributors</h1>
                <p>Thanks to our students who has been continuously putting their efforts & time to make this website possible.</p>
                <div className='flex flex-wrap' >

                    {/* --- Frontend & backend ---- */}
                    <ProjectContributor contributeField={"Frontend & Backend"} contributorIds={frontend_backend_contributor} className={"lg:mr-10 mt-5 mb-5 border-l-2 border-sky-400 pl-1 md:pl-5"} />

                    {/* ---- Tester ---- */}
                    <ProjectContributor contributeField={"Testing"} contributorIds={tester} className={"lg:mr-10 mt-5 mb-5 border-l-2 border-sky-400 pl-1 md:pl-5"} />

                </div>
            </div>
        </div>
    )
}

export default AboutUs
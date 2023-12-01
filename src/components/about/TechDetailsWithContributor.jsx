import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link"
import Contributor from '@/components/about/Contributor';

const TechDetailsWithContributor = ({className,skillHeading, contriButor, techStacks, skillIconsLink, githubRepo}) => {

    return (
        <div className={`mt-3 mb-3 mr-2 ${className}`} >
            <h1 className='font-bold text-2xl' >{skillHeading}</h1>
            <h1 className='font-bold text-sm text-gray-400' >Contributors : </h1>
            <div className='flex flex-wrap lg:justify-center' >
                {/* --- contributor --- */}
                <div className='w-full flex justify-center items-center md:w-44' >
                    <Contributor  />
                </div>
                {/* ----Tech details --- */}
                {/* <div className='w-full md:w-fit md:pl-3 flex flex-col items-center' >
                    <h1 className='text-blue-700 text-lg' >Tech stacks</h1>
                    <div className='flex flex-col items-center' >
                        <p className='font-bold mt-2 text-center' >{techStacks}</p>
                        <a href="https://skillicons.dev">
                            <img src={skillIconsLink} />
                        </a>
                    </div>
                    <div className='flex' >

                        <Link target='_blank' href={githubRepo} className="flex w-fit text-white mt-4 p-2 md:p-3 rounded item-center border bg-sky-500 m-1"><GitHubIcon /> Github repo </Link>

                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default TechDetailsWithContributor
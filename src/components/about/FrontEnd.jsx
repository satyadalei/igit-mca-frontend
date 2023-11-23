import React from 'react'
import TechDetailsWithContributor from './TechDetailsWithContributor'

const FrontEnd = ({className}) => {


  return (
    <TechDetailsWithContributor 
    className={className}
     skillHeading="Frontend"
     techStacks={"Javascript, Next.js, Tailwind CSS, Firebase"}
     githubRepo={"https://github.com/mca41/igit-mca-frontend"}
     skillIconsLink={"https://skillicons.dev/icons?i=js,nextjs,firebase,tailwind"}
    />
  )
}

export default FrontEnd
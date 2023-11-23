"use client"
import React from 'react'
import TechDetailsWithContributor from './TechDetailsWithContributor';


const Backend = ({className}) => {
    return (
        <TechDetailsWithContributor 
          className={className}
          skillHeading={"Backend"}
          techStacks={"Git, Node.js, Express.js, Firebase, MongoDB"}
          githubRepo={"https://github.com/mca41/igit-mca-backend"}
          skillIconsLink={"https://skillicons.dev/icons?i=git,nodejs,express,firebase,mongodb"}
        />
    )
}

export default Backend
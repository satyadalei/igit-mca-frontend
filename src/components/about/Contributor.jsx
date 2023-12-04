"use client";
import UserAvatar from "@/components/header/UserAvatar";
import React, { useEffect, useState } from "react";
import SkeletonCoordinators from "@/components/landingPage/mainCoordinators/SkeletonCoordinators";
import Link from "next/link";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from "@mui/icons-material/GitHub"

const Contributor = ({ contributorId, className }) => {
  // call API & return user Data
  if (!contributorId) {
    contributorId = "655669bc41a72f015539174d";
  }
  
  const [contributor, setContributor] = useState(null);
  const { name } = contributor != null && contributor !== "" && contributor.userDetails;
  const {linkedInLink, githubLink} = contributor != null && contributor !== "" && contributor.userDetails.socialLinks;
  const baseApi = process.env.NEXT_PUBLIC_BASE_URL;
  const url = `${baseApi}/api/user/fetchUserById?userId=${contributorId}`;

  const fetchUserById = async () => {
    try {
      const fetchUser = await fetch(url, {
        method: "GET",
      });
      const response = await fetchUser.json();
      if (response.success) {
        setContributor(response.data.user);
        return;
      }
      setContributor("");
    } catch (error) {
      console.log("Some error occurred while fetching user by ID", error);
    }
  };

  useEffect(() => {
    fetchUserById();
  }, []);

  return (
    <div className={`${className} flex flex-col items-center`}>
      {contributor === null ? (
        <SkeletonCoordinators middleBarClass="!w-[50%]" className="w-[50%]" />
      ) : contributor === "" ? (
        <>
          <UserAvatar className="w-24 h-24" />
        </>
      ) : (
        <>
          <UserAvatar
            profileUrl={contributor.profilePic.url}
            className="!w-24 !h-24"
          />
          <p className="text-center mb-2 sm:lg" >{name}</p>
          <div>
            <Link
              href={linkedInLink}
              className="cursor-pointer text-blue-500 mr-1"
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Contributor;

import { TextField } from "@mui/material";
import React, { useState } from "react";
import GeneralButton from "../common/GeneralButton";
import CommonModalBox from './CommonModalBox';

const EditSocialLinks = ({ socialLinks }) => {
  const { githubLink, linkedInLink } = socialLinks;
  const [links, setLinks] = useState({
    githubLink: githubLink,
    linkedInLink: linkedInLink,
  });

  const handleLinkChange = (e) => {
    console.log();
    setLinks((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <CommonModalBox >
      <TextField
        className="pt-1 pb-1"
        fullWidth
        name="githubLink"
        value={links.githubLink}
        onChange={handleLinkChange}
        autoComplete="off"
        // id="filled-error-helper-text"
        label="Github Profile link"
        variant="filled"
        placeholder="ex: https://github.com/..."
      />

      {/* --- Linked In ---- */}
      <TextField
        className="pt-1 pb-1"
        fullWidth
        name="linkedInLink"
        value={links.linkedInLink}
        onChange={handleLinkChange}
        autoComplete="off"
        // id="filled-error-helper-text"
        label="LinkedIn Profile link"
        variant="filled"
        placeholder="ex: https://www.linkedin.com/in/..."
      />

      <div className="mt-5 h-10 flex justify-center items-center ">
        {githubLink === links.githubLink &&
        linkedInLink === links.linkedInLink ? (
          <GeneralButton
          disabled={true}
          className="!bg-green-200 hover:!bg-green-200 cursor-not-allowed p-2"
          buttonText={"Save changes"}
          />
        ) : (
          <GeneralButton
          className="!bg-green-500 hover:!bg-green-600 p-2"
          buttonText={"Save changes"}
          />
        )}
      </div>
    </CommonModalBox>
  );
};

export default EditSocialLinks;

"use client";
import React, { useContext, useState } from "react";
import BasicModalBackground from "../modal/BasicModalBackground";
import CommonModalBox from "../modal/CommonModalBox";
import { Close } from "@mui/icons-material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import GeneralButton from "../common/GeneralButton";
import loadingAndAlertContext from "@/context/loadingAndAlert/loadingAndAlertContext";
import activeUserAndLoginStatus from "@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext";
import CloudIcon from '@mui/icons-material/Cloud';

import { app } from "../../../firebase/firebase";
import {
  getStorage,
  ref,
  deleteObject,
} from "firebase/storage";
import moment from "moment-timezone";

const PostLargerView = ({ currentImageIndex, allPosts, closeImagePreview, setImages }) => {
  // --- API URL ---
  const baseApi = process.env.NEXT_PUBLIC_BASE_URL;
  // ------ context API -----
  const { startLoading, createAlert, stopLoading } = useContext(
    loadingAndAlertContext
  );
  const { fetchActiveUser } = useContext(activeUserAndLoginStatus);

  // ----- local storage -----
  const token = localStorage.getItem("token");

  // ------ firebase ----------
  const storage = getStorage(app);

  const [activeImageIndex, setActiveImageIndex] = useState(currentImageIndex);
  const { docGivenName, url, title, description } =
    allPosts[activeImageIndex].postDetails;
  const {createdAt} = allPosts[activeImageIndex];
  const { activeUser } = useContext(activeUserAndLoginStatus);

  const handlePrevNext = (indexValue) => {
    if (indexValue > allPosts.length - 1 || indexValue < 0) {
      return;
    }
    setActiveImageIndex(indexValue);
  };
  const getYear = new Date(allPosts[activeImageIndex].createdAt).getFullYear();
  const deletePosts = async (postId) => {
    try {
      startLoading();
      const url = `${baseApi}/api/post/deletePost?postId=${postId}&postYear=${getYear}&givenName=${docGivenName}`;
      const removePost = await fetch(url, {
        method: "DELETE",
        headers: {
          token: token,
        },
      });
      const response = await removePost.json();
      stopLoading();
      if (response.success) {
        createAlert("success", response.message.split("#")[0]);
        // --- reorder posts
        setImages((prev) => {
          const resultingPosts = prev.filter((item) => {
            if (item._id !== postId) {
              return item
            }
          })
          return resultingPosts;
        })
        closeImagePreview();
        return;
      }
      fetchActiveUser();
      closeImagePreview();
      createAlert("error", response.message.split("#")[0]);
    } catch (error) {
      stopLoading();
      console.log("There is some error in deleting post: ", error);
      createAlert("error", "Some error updating profile");
    }
  };

  return (
    <BasicModalBackground>
      <Close
        className="absolute bg-red-500 text-white rounded-full right-3 top-3 cursor-pointer"
        onClick={closeImagePreview}
      />
      <CommonModalBox className="bg-white border border-sky-500 h-64 md:h-[80%] w-[90%] md:pt-12 md:w-[60%] relative pl-3 pr-3 pb-10 rounded-lg overflow-y-scroll">
        <Close
          className="absolute bg-red-500 text-white rounded-full right-3 top-3 cursor-pointer"
          onClick={closeImagePreview}
        />

        <div className="w-full min-h-46 md:h-full text-black relative">
          {/* Left */}
          {activeImageIndex > 0 && (
            <div className="absolute top-20 left-0 bg-black w-10 h-10 flex items-center justify-center">
              <ArrowBackIosIcon
                className={`text-3xl text-white`}
                onClick={() => {
                  handlePrevNext(activeImageIndex - 1);
                }}
              />
            </div>
          )}

          {/* Right */}
          {activeImageIndex < allPosts.length - 1 && (
            <div className="absolute top-20 right-0 bg-black w-10 h-10 flex items-center justify-center">
              <ArrowForwardIosIcon
                className={`text-3xl text-white`}
                onClick={() => {
                  handlePrevNext(activeImageIndex + 1);
                }}
              />
            </div>
          )}

          {url ? (
            <img
              srcSet={url}
              src={url}
              alt={title}
              loading="lazy"
              className="h-auto"
            />
          ) : (
            "Loading"
          )}
          <h3 className="text-md font-semibold mt-2 mb-1">{title}</h3>
          <p className="text-gray-300 mb-3" >
            <CloudIcon /> {moment(createdAt).format("LLLL")}
          </p>
          <div className="mb-2" >
            {description === ""
              ? <p className="text-gray-300 mb-3" >There is no description to the post. </p>
              : description}
          </div>
          {activeUser.isSpecialUser === "admin" && (
            <GeneralButton
              buttonText="Delete Post"
              onClick={() => {
                deletePosts(allPosts[activeImageIndex]._id);
              }}
              className="!bg-red-500 mb-5 p-2 "
            />
          )}
        </div>
      </CommonModalBox>
    </BasicModalBackground>
  );
};

export default PostLargerView;

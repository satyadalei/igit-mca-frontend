"use client";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import useWindowSize from "../WindoSizeHook";
import { useState, useContext } from "react";
import CreateAGalleryPost from "./CreateAGalleryPost";
import { useEffect } from "react";
import BatchSkeleton from "@/app/batch/BatchSkeleton";
import PostLargerView from "./PostLargerView";
import activeUserAndLoginStatus from "@/context/activeUserAndLoginStatus/activeUserAndLoginStatusContext";
import moment from "moment-timezone";
import CloudIcon from '@mui/icons-material/Cloud';



export default function Gallery() {

  // context api
  const {activeUser} = useContext(activeUserAndLoginStatus);
  const {isSpecialUser} = activeUser != null && activeUser ;

  // Base API URL
  const baseApi = process.env.NEXT_PUBLIC_BASE_URL;

  const { width, height } = useWindowSize();
  const detectColumns = () => {
    if (width < 400) {
      return 2;
    }
    if (width < 900) {
      return 3;
    }
    return 4;
  };
  const [images, setImages] = useState(null);
  const [imagePreview, setImagePreview] = useState({
    preview: false, // default false
    imageIndex: null, // will be changed when clicked
  }); // to see larger image preview

  const handleImagePreview = (imageIndex) => {
    setImagePreview({
      preview: true,
      imageIndex,
    });
  };

  const closeImagePreview = () => {
    setImagePreview({
      preview: false,
      imageIndex: null,
    });
  };

  // fetch posts & then populate gallery section
  const fetchAllGalleryImages = async () => {
    try {
      // ----- local storage -----
      const token = localStorage.getItem("token");
      const url = `${baseApi}/api/post/fetchPosts?postType=gallery`;
      const fetchPosts = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      });
      const response = await fetchPosts.json();
      if (response.success) {
        setImages(response.data.posts);
        return;
      }

      setImages([]);
    } catch (error) {
      console.log("Some error in fetching gallery images ", error);
    }
  };

  useEffect(() => {
    fetchAllGalleryImages();
  }, []);

  return (
    <div className="p-1 pb-5">
      {imagePreview.preview && (
        <PostLargerView
          currentImageIndex={imagePreview.imageIndex}
          closeImagePreview={closeImagePreview}
          allPosts={images}
          setImages={setImages}
        />
      )}
      <h1 className="mt-3 text-3xl font-bold">Community Gallery</h1>
      {(isSpecialUser === "admin" || isSpecialUser === "batchAdmin") && <CreateAGalleryPost className="fixed" setImages={setImages} />}
      <ImageList cols={detectColumns()}>
        {images === null
          ? Array.from({ length: 12 }, (_, index) => (
              <div key={index}>
                <BatchSkeleton />
              </div>
            ))
          : images.map((image, index) => {
              const { authorId, postId, createdAt } = image;
              const { title, url, description } = image.postDetails;
              return (
                <ImageListItem
                  className={`!h-48 md:!h-64 cursor-pointer`}
                  key={index}
                  onClick={() => {
                    handleImagePreview(index);
                  }}
                >
                  <img
                    srcSet={`${url}?w=248&fit=crop&auto=format&dpr=2 2x`} //
                    src={`${url}`} //?w=248&fit=crop&auto=format
                    alt={title}
                    loading="lazy"
                    className="inline-block !h-full"
                  />
                  <ImageListItemBar
                    title={<p className="text-sm" >{title}</p>}
                    // subtitle={<p>Uploaded at : {moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>}
                    subtitle={<p><CloudIcon className="text-sm" />  {moment(createdAt).format('llll')}</p>}
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${title}`}
                        onClick={() => {
                          handleImagePreview(index);
                        }}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              );
            })}
        {images != null && images.length === 0 && (
          <p>No images has been added gallery</p>
        )}
      </ImageList>
    </div>
  );
}

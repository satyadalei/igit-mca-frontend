"use client";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import useWindowSize from "../WindoSizeHook";
import { useState } from "react";
import CreateAGalleryPost from "./CreateAGalleryPost";
import { useEffect } from "react";
import BatchSkeleton from "@/app/batch/BatchSkeleton";

export default function Gallery() {
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
      <h1 className="mt-3 text-3xl font-bold">Community Gallery</h1>
      <CreateAGalleryPost className="fixed" setImages={setImages} />
      <ImageList cols={detectColumns()}>
        {/* <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem> */}
        { images === null
          ? Array.from({ length: 12 }, (_, index) => (
              <div key={index}>
                <BatchSkeleton />
              </div>
            ))
          : images.map((image, index) => {
              const { authorId, postId } = image;
              const { title, url, description } = image.postDetails;
              return (
                <ImageListItem 
                className={`!h-48 md:!h-64 border-2 border-red-500`} 
                key={index}
                >
                  <img
                    srcSet={`${url}?w=248&fit=crop&auto=format&dpr=2 2x`} //
                    src={`${url}`} //?w=248&fit=crop&auto=format
                    alt={title}
                    loading="lazy"
                    className="inline-block !h-full"
                  />
                  <ImageListItemBar
                    title={title}
                    subtitle={authorId}
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${title}`}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              );
            })}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    cols: 2,
  },
];

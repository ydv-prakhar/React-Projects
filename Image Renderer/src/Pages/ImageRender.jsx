import { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const ImageRender = () => {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const initialize = async () => {
      await fetchImages();
    };
    initialize(page);
  }, []);

  const fetchImages = async (pageNumber) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://api.pexels.com/v1/search/?query=dogs&page=${pageNumber}`,
      headers: {
        Authorization: import.meta.env.VITE_API_KEY,
      },
    };

    try {
      const response = await axios.request(config);
      if (response.status == 200) {
        const photos = response.data.photos.map((photo) => {
          return photo.src.landscape;
        });
        setImages((prevImages) => [...prevImages, ...photos]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (e) {
      console.log(e);
      return [];
    }
  };

  return (
    <InfiniteScroll
      dataLength={images?.length}
      next={()=>fetchImages(page)}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      {images?.map((i, index) => (
        <div key={index}>
          <img src={i} alt="" />
        </div>
      ))}
    </InfiniteScroll>
  );
};
export default ImageRender;

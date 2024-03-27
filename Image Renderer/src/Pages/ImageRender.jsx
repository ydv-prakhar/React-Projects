import { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const ImageRender = () => {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);


  useEffect(() => {
    const fetchImages = async () => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `https://api.pexels.com/v1/search/?query=cats&page=${page}`,
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
        }
      } catch (e) {
        console.log(e);
        return [];
      }
    };

      fetchImages();

    return () => {};
  }, [page]);

  return (
    <InfiniteScroll
      dataLength={images?.length}
      next={() => {
        setPage((prevPage) => prevPage + 1);
      }}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <div className="">
        {images?.map((i, index) => (
          <div className="flex justify-center my-5" key={index}>
            <img src={i} alt="" />
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};
export default ImageRender;

import React, { useEffect, useState } from "react";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";

const Sidebar = () => {
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "plate/plates/");

  useEffect(() => {
    listAll(imageListRef)
      .then(async (response) => {
        const promises = response.items.map(async (item) => {
          const url = await getDownloadURL(item);
          const metadata = await getMetadata(item);
          return { url, name: metadata.name }; // Store both URL and name
        });

        const imagesWithNames = await Promise.all(promises);
        setImageList(imagesWithNames);
      })
      .catch((error) => {
        console.error("Error fetching image list:", error);
      });
  }, []);

  return (
    <div className="flex flex-col gap-1 w-2/3">
      <div className="flex items-center mt-5 mb-3">
        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#0F172A] text-white flex-shrink-0">
          <span class="material-symbols-outlined">image_search</span>
        </div>
        <h2 className="text-gray-900 text-lg title-font font-medium">
          Number&nbsp;Recognition
        </h2>
      </div>
      {imageList.map((image) => {
        return (
          <div key={image.url}>
            <img src={image.url} alt="number_plate" />
            <p>{image.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;

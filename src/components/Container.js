import React, { useEffect, useState } from "react";
import Images from "./Images";
import Unsplash from "../API/Unsplash";

const Container = () => {
  //useState Hook to store the fetched data
  const [data, setData] = useState([]);
  //making an API call to fetch images from unsplash
  const apiCall = async () => {
    const response = await Unsplash.get("/photos/random", {
      params: {
        orientation: "landscape",
        count: 30,
      },
    });

    //setting the state with the response data
    setData((prev) => [...prev, ...response.data]);
  };

  //rendering for the intial page load and when ever the flag changes
  useEffect(() => {
    //calling the async function
    apiCall();
  }, []);

  return (
    <div className="ui center aligned container" style={{ marginTop: "100px" }}>
      {/* passing the fetched data as a prop to images component */}
      <Images data={data} fetchMoreData={apiCall} />
    </div>
  );
};

export default Container;

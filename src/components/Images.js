import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";

const Images = (props) => {
  // mapping the array data and returning the image jsx
  const renderImage = props.data.map((image, index) => {
    const uid = new Date().getTime().toString();
    return (
      <div className="card" key={`${image.id}${uid}${index}`}>
        <div className="image">
          <img src={image.urls.regular} alt={image.alt_description} />
        </div>
      </div>
    );
  });
  return (
    //wrap the component inside the InfiniteScroll component with custom props
    <InfiniteScroll
      dataLength={props.data.length}
      next={() => {
        props.fetchMoreData();
      }}
      hasMore={true}
      className="ui three stackable cards"
      loader={<Loading />}
    >
      {renderImage}
    </InfiniteScroll>
  );
};

export default Images;

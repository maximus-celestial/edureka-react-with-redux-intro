import React from "react";

function DisplayItems(props) {
  const renderList = ({ datalist }) => {
    console.log("datalist : ", datalist);
    if (datalist) {
      return datalist.map((data) => {
        return (
          <div key={data.id}>
            {data.name}
            <br />
            <img src={data.img} alt={data.name} />
          </div>
        );
      });
    } else return <></>;
  };

  return <div>{renderList(props)}</div>;
}

export default DisplayItems;

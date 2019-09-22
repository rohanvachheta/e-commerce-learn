import React from "react";
import "./collaction-preview.scss";
import CollectionItem from "../collaction-item/collaction-item.component";
const PreviewCollaction = ({ title, items }) => {
  // const handleNextFourItemLoad = e => {
  //   console.log(items);
  // };
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>

      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...props }, index) => {
            return (
              <React.Fragment key={id}>
                <CollectionItem key={id} {...props} />
                {/* {index === 3 && (
                  <div className="btn-next">
                    <button onClick={handleNextFourItemLoad}>next</button>
                  </div>
                )} */}
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default PreviewCollaction;

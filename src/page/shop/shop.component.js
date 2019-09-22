import React, { useState } from "react";
import shopData from "./shopData";
import PreviewCollaction from "../../components/preview-collaction/preview-collaction.component";

const ShopPage = props => {
  const [collaction] = useState(shopData);

  return (
    <div className="shop-page">
      {collaction.map(({ id, ...otherCollactionprops }) => {
        return <PreviewCollaction key={id} {...otherCollactionprops} />;
      })}
    </div>
  );
};

export default ShopPage;

import React from "react";

import "./homePage.style.scss";
import Directory from "../../components/directory/directory.component";

const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

const Memoised = React.memo(HomePage);

export default Memoised;

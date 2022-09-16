import "../Styles/Subscribe.scss";

import React from "react";

function Subscribe() {
  return (
    <div className="Subscribe_container">
      <div>
        <h3>Subscribe our newsletter to be notified when it’ll be live.</h3>
      </div>

      <div>
        <form>
          <input type="text" placeholder="Email address" />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;

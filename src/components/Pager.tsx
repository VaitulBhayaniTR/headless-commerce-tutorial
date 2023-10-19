import { Pager as PagerController } from "@coveo/headless";
import React, { useEffect, useState } from "react";

interface PagerProps {
  controller: PagerController;
}

const Pager: React.FC<PagerProps> = ({ controller }) => {
  const [state, setState] = useState(controller.state);

  useEffect(() => setState(controller.state), [controller.state]);

  return (
    <div className="pager">
      {state.currentPages.map((no) => (
        <button
          key={no}
          className="pager-number"
          disabled={controller.isCurrentPage(no)}
          onClick={() => controller.selectPage(no)}
        >
          {no}
        </button>
      ))}
    </div>
  );
};

export default Pager;

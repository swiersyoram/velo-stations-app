import React from "react";

type Props = {
  children: React.ReactNode;
};

function Menudrawer({ children }: Props) {
  return (
    <div className="h-full p-5 sm:w-96 overflow-y-scroll sm:overflow-hidden border-t-[3px] border-black sm:border-0  ">
      {children}
    </div>
  );
}

export default Menudrawer;

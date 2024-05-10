import React from "react";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;

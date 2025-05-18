import Content from "@/Content";
import Sidebar from "@/Sidebar";
import { isMobileDevice } from "@/service";

const Layout = () => {
  const isMobile = isMobileDevice();
  return (
    <div className="grid h-screen grid-cols-12">
      {!isMobile && (
        <div className="h-screen flex-shrink-0 col-span-1">
          <Sidebar />
        </div>
      )}
      <div
        className={`${
          isMobile ? "col-span-12" : "col-span-11"
        } flex-1 h-screen overflow-y-auto min-h-0`}
      >
        <Content />
      </div>
    </div>
  );
};

export default Layout;

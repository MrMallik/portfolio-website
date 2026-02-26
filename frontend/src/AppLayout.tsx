import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import Footer from "@/Footer";

const AppLayout = () => {
    return (
        <div className="min-h-screen">
            <div className="mx-auto w-full max-w-5xl bg-background border-x border-border shadow-sm min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default AppLayout;

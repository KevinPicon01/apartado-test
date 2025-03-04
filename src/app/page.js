"use client"
import PreHeader from "./components/preHeader";
import TheHeader from "./components/header";
import HomeContent from "./components/homeContent";
import About from "./components/about";
import ContactUs from "./components/contactUs";
import TheFooter from "./components/footer";
import Catalogue from "@/app/components/catalogue";
import Members from "@/app/components/members";
import LoadingIndicator from "@/app/components/infoView";
import { useWebData } from "@/app/hooks/useWebData";

const WebsPage = () => {
    const { webData, loading } = useWebData();

    if (loading) return <LoadingIndicator message="Cargando datos..." />;
    if (!webData) return <div>Error cargando datos.</div>;

    return (
        <div>
            <PreHeader webData={webData} />
            <TheHeader webData={webData} />
            <HomeContent webData={webData} />
            <About webData={webData} />
            <Catalogue webData={webData} />
            <Members webData={webData} />
            <ContactUs webData={webData} />
            <TheFooter webData={webData} />
        </div>
    );
};

export default WebsPage;

import { useEffect, useState } from "react";
import styles from "./App.module.css";
import SiteHeader from "./components/siteHeader";
import SiteFooter from "./components/siteFooter";
import BackToTop from "./components/backToTop";
import PetCareScheduler from "./components/petCareScheduler";

const App = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const onScroll = () => setShowBackToTop(window.scrollY > 50);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className={styles["app-shell"]} id="top">
            <SiteHeader
                title="Good Paws"
                mark="P"
                navItems={[["Care schedule", "#workspace"], ["Add a reminder", "#add"]]}
                repoUrl="https://github.com/a2rp/pet-care-scheduler"
            />
            <main className={styles.pageContent}>
                <PetCareScheduler />
            </main>
            <SiteFooter repoUrl="https://github.com/a2rp/pet-care-scheduler" />
            <BackToTop visible={showBackToTop} />
        </div>
    );
};

export default App;
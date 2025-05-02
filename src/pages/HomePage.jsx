import HomeCards from "../components/HomeCards";
import Hero from '../components/Hero';
import Spinner from "../components/Spinner";
import { useState } from "react";

const HomePage = () => {
    const [loading, setLoading] = useState(true)

    return (
        <>
            <>
                <Hero />
                <HomeCards />
            </>
        </>
    )
}

export default HomePage;
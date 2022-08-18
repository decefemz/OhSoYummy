import Hero from '../components/layouts/Hero';
import FeaturedWork from '../components/layouts/FeaturedWorks';
import Navbar from '../components/layouts/Navbar'
import OurStory from '../components/layouts/OurStory';
import Footer from '../components/layouts/Footer';
export default function Home() {
    return <><Navbar /><Hero /><FeaturedWork /><OurStory /><Footer /></>;
}
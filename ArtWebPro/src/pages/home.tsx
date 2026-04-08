import Card from '../components/cards'

const Home = () =>
    <div className="content">
        <p className="hero-label">Full-Stack Developer</p>
        <h1 className="hero-title">Building things <br /> for the web.</h1>
        <p className="hero-sub">Crafting performant, accessible, and beautifully designed digital experiences — from backend architecture to pixel-perfect UIs.</p>
        <div className="cards">
            <Card num="12+" label="Projects" />
            <Card num="5yr" label="Experience" />
            <Card num="3" label="Open source libs" />
        </div>
    </div>;
export default Home;

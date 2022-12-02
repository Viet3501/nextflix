import Content from "~/components/Contents/Content";
import Intro from "~/components/Intro/Intro";
import Navbar from "~/components/Navbar/Navbar";
import Menu from "~/Menu/Menu";

function Home() {
    return (
        <div>
            <Navbar />
            <Intro />
            <Content />
            <Menu />
        </div>
    );
}

export default Home;

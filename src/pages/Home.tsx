import Card from "../components/Card";
import "./../styles/css/pages/Home.css";
import AddLinksCard from "../components/AddLinksCard";
import Header from "../components/Header";
function Home() {
  return (
    <div className="home">
      <div className="home__grid">
        <Header />
        <Card className="home__article-l">Test</Card>
        <AddLinksCard />
      </div>
    </div>
  );
}

export default Home;

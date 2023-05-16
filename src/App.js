import "./App.css";
import CardList from "./components/CardList";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LoginForm from "./components/LoginForm";
import Work from "./components/Work";

function App() {
  return (
    <>
      <div className="body-bg">
        <Header />
        <HeroSection />
        <LoginForm />
        <Work />
        <CardList />
      </div>
    </>
  );
}

export default App;

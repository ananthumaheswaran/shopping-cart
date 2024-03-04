import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="home-image-container">
        <img
          src="src\assets\images\medium-shot-young-woman-with-smartphone.jpg"
          alt="clothes image"
          className="home-image"
        />
      </div>
    </>
  );
};

export default HomePage;

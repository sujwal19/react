import Button from "./components/button/Button";
import Header from "./components/header/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Button />
      <img
        className="wallpaper"
        src="https://static0.polygonimages.com/wordpress/wp-content/uploads/chorus/uploads/chorus_asset/file/23369819/18464299.jpg?w=1600&h=900&fit=crop"
        alt=""
      />
    </div>
  );
};

export default App;

import Header from "../components/Header";
import Recipes from "../components/Recipes";
import RecipeDetails from "./RecipeDetails";

function Home() {
  return (
    <main>
      <Header
        title={
          <p>
            Taste the World with <br />
            FlavorVerse!
          </p>
        }
        type={"hola"}
      />

      <section id="recipes" className="md:max-w-[1440px] mx-auto px-4 md:px-20">
        <Recipes />
      </section>
    </main>
  );
}

export default Home;

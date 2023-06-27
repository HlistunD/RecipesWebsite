
import "./App.css";
import Articles from "./Articles";
import FindRecipe from "./FindRecipe";
import Top from "./Top";

export default function App() {
   return (
      <div className="App">
         <Top />
         <Articles />
         <FindRecipe />
      </div>
   )
}
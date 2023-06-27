
import "./App.css";
import Articles from "./Articles";
import FindRecipe from "./FindRecipe";
import { StickyNote } from "./StickyNote";
import Top from "./Top";

export default function App() {
   return (
      <div className="App">
         <Top />
         <div className="componentsDirect">
            <Articles />
            <StickyNote />
         </div>
         <FindRecipe />
      </div>
   )
}
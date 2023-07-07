import Issue from "./Components/Navbar/Issue";
import GitHubIssues from "./Components/Pagination/GitHubIssues";
import "./App.css"
import Footer from "./Components/Footer/Footer";
import Filter from "./Components/Pagination/Filter";

export default function App() {
  return (
    <h1 className=" bg-[#0d1117] scroll-smooth">
      <Issue/>
      <Filter/>
      <GitHubIssues/>
      <Footer/>
    </h1>
  )
}
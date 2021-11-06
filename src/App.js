import "./index.css";
import { useState, useEffect } from "react";
import LinkForm from "./components/LinkForm";
import LinkList from "./components/LinkList";
import LinkSearch from "./components/LinkSearch";

function App() {
  const [links, setLinks] = useState([]);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    addLink();
  }, []);

  useEffect(() => {
    let links = JSON.parse(localStorage.getItem("link"));
    if (links) {
      let searchResult = links.filter(
        (link) =>
          link.name.toLowerCase().includes(search.toLowerCase()) ||
          link.url.toLowerCase().includes(search.toLowerCase()) ||
          link.tag.toString().toLowerCase().includes(search.toLowerCase())
      );
      setResult(searchResult);
    }
  }, [search]);

  const addLink = () => {
    let existingLinks = JSON.parse(localStorage.getItem("link"));
    setLinks(existingLinks);
  };

  const handleSearch = (val) => {
    setSearch(val);
  };

  return (
    <>
      <div className="bg-grad row">
        <div className="d-flex align-items-center justify-content-center heading">
          <h1 className="text-center text-white">SAVE LINK</h1>
        </div>

        <div className="d-flex align-items-center justify-content-center">
          <div className="col-10">
            <LinkForm addLink={addLink} />
            <LinkSearch handleSearch={handleSearch} />
          </div>
        </div>
      </div>
      <div>
        <LinkList search={search} links={links} result={result} />
      </div>
    </>
  );
}

export default App;

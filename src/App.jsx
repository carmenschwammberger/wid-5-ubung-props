import { useState } from "react";
import logo from "./geoharvester.png";
import data from "./data/tableData"; // Data is Array mit Objekten als Elementen
import "./App.css";
import Footer from "./Footer.jsx";
import Table from "./Table.jsx";
import Header from "./Header.jsx";

function App() {
  const [suchbegriff, setSuchbegriff] = useState("");
  const [serviceTypAuswahl, setServiceTypAuswahl] = useState("");
  const [kantonAuswahl, setKantonAuswahl] = useState("");
  console.log("Suchbegriff:", suchbegriff);
  console.log("ServiceTyp:", serviceTypAuswahl);
  console.log("Kanton:", kantonAuswahl);

  // Erzeugt eine Liste aller im Datensatz vorkommenden Kantone für das Auswahlmenü
  const kantone = [...new Set(data.map((item) => item.Kanton))];

  return (
    <div className="App">
      <Header suchbegriff={suchbegriff} setSuchbegriff={setSuchbegriff} serviceTypAuswahl={serviceTypAuswahl} setServiceTypAuswahl={setServiceTypAuswahl} kantonAuswahl={kantonAuswahl} setKantonAuswahl={setKantonAuswahl} kantone={kantone}/>
      {/* Tabelle Start */}
      <Table suchbegriff={suchbegriff} serviceTypAuswahl={serviceTypAuswahl} kantonAuswahl={kantonAuswahl} />
      {/* Tabelle Ende */}
      {/* Footer Start */}
      <Footer setSuchbegriff={setSuchbegriff} setServiceTypAuswahl={setServiceTypAuswahl} setKantonAuswahl={setKantonAuswahl} />
      {/* Footer Ende */}
    </div>
  );
}

export default App;

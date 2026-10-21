export default function Footer({setSuchbegriff, setServiceTypAuswahl, setKantonAuswahl}) {
    return <div>
        <footer>
        <button id="ResetButton" onClick={() => {
            setSuchbegriff("");
            setServiceTypAuswahl("");
            setKantonAuswahl("");
            console.log("Aufgabe 3.1")}}>
          Reset
        </button>
      </footer>
    </div>
}
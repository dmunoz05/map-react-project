import React, { useRef, useEffect, useContext } from "react";
import ReactDOM from "react";
import Map from "@arcgis/core/Map";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import MapView from "@arcgis/core/views/MapView";
import ZoomWidget from "./ZoomWidget";
import "./App.css";

function App() {

  const mapDiv = useRef(null);

  useEffect(() => {

    if (mapDiv.current) {

      const layer = new FeatureLayer({
        portalItem: {
          id: "b234a118ab6b4c91908a1cf677941702",
        },
        outFields: ["NAME", "STATE_NAME", "VACANT", "HSE_UNITS"],
        title: "U.S. Countries",
        opacity: 0.8,
      });

      const view = new MapView({
        container: "root",
        map: new Map({
          basemap: "topo-vector",
          layers: [layer],
        }),
        center: [-100.33, 33.69],
        zoom: 6,
        ui: {
          components: ["attribution"],
          node: ["top-left"]
        },
      });

      const node = document.createElement("div");
     
      view.ui.add(node, "top-left");   

      // ReactDOM.Render(<ZoomWidget view={view} />, node)

    }

  }, []);

  return (
    <div className="mapDiv" ref={mapDiv}>
      <ZoomWidget/>
    </div>
  )

}

export default App;
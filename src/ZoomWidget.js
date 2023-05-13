import React, { useContext } from "react";
import './zoom.css'

import * as watchUtils from "@arcgis/core/core/watchUtils";
import ZoomVH from "@arcgis/core/widgets/Zoom/ZoomViewModel";


function ZoomWidget(props) {
    const state = {
        vm: new ZoomVH(),
        maxZoomed: false,
        minZoomed: false
    };

    const onViewLoaded = (view) => {
        state.vm.view = view;
        watchUtils.init(view, "zoom", onViewLoaded);
    }

    const zoomIn = () => {
        if (!state.maxZoomed) {
            state.vm.zoomIn();
        }
    };


    const zoomOut = () => {
        if (!this.state.minZoomed) {
            this.state.vm.zoomOut();
        }
    }

    const  componentDidMount= () => {
        props.view.when(onViewLoaded);
    }

    return (
        <>
            <div className="zoom-btns">
                <div className="button circle raised disable" onClick={zoomIn}>
                    <div className="center">
                        <i className="material-icons">+</i>
                    </div>
                </div>

                <div className="button circle raised disable" onClick={zoomOut}>
                    <div className="center">
                        <i className="material-icons">-</i>
                    </div>
                </div>
            </div>

        </>

    )

}

export default ZoomWidget;
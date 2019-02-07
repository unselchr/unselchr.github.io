import React from "react";

import CanvasJSReact from "./../../CanvasJS/canvasjs.react.js";
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


class SteamChart extends React.Component {	
    render() {
        let data = [];
        const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2", //"light1", "dark1", "dark2"
            title: {
                text: "Steam Activity"
            },
            data: [{
                type: "column", //change type to bar, line, area, pie, etc
                //indexLabel: "{y}", //Shows y value on all Data Points
                indexLabelFontColor: "#5A5757",
                indexLabelPlacement: "outside",
                dataPoints: data,
                // dataPoints: [
                //     { x: 10, y: 71 },
                //     { x: 20, y: 55 },
                //     { x: 30, y: 50 },
                //     { x: 40, y: 65 },
                //     { x: 50, y: 71 },
                //     { x: 60, y: 68 },
                //     { x: 70, y: 38 },
                //     { x: 80, y: 92, indexLabel: "Highest" },
                //     { x: 90, y: 54 },
                //     { x: 100, y: 60 },
                //     { x: 110, y: 21 },
                //     { x: 120, y: 49 },
                //     { x: 130, y: 36 }
                // ]
            }]
        };
		
        return (
            <div>
                <CanvasJSChart options = {options} 
                    /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}

class SpotifyChart extends React.Component {	
    render() {
        let data = [];
        const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2", //"light1", "dark1", "dark2"
            title: {
                text: "Spotify Activity"
            },
            data: [{
                type: "column", //change type to bar, line, area, pie, etc
                //indexLabel: "{y}", //Shows y value on all Data Points
                indexLabelFontColor: "#5A5757",
                indexLabelPlacement: "outside",
                dataPoints: data,
                // dataPoints: [
                //     { x: 10, y: 71 },
                //     { x: 20, y: 55 },
                //     { x: 30, y: 50 },
                //     { x: 40, y: 65 },
                //     { x: 50, y: 71 },
                //     { x: 60, y: 68 },
                //     { x: 70, y: 38 },
                //     { x: 80, y: 92, indexLabel: "Highest" },
                //     { x: 90, y: 54 },
                //     { x: 100, y: 60 },
                //     { x: 110, y: 21 },
                //     { x: 120, y: 49 },
                //     { x: 130, y: 36 }
                // ]
            }]
        };
		
        return (
            <div>
                <CanvasJSChart options = {options} 
                    /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}
 
export {
    SteamChart, 
    SpotifyChart,
};                              
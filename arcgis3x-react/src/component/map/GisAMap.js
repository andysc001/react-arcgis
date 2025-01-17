import React, { Component } from 'react'
import esriLoader from 'esri-loader'

export default class GisAMap extends Component{
    componentDidMount(){
        this.initMap()
    }
    initMap(){
        const mapURL = {
            url : "http://localhost/arcgis_js_api/library/3.22/3.22/dojo/dojo.js"
        }
        esriLoader.loadModules([
          "esri/map", 
          "esri/SpatialReference", 
          "esri/layers/gaodeLayer",
          "esri/geometry/Extent",
          "dojo/domReady!"
        ], mapURL).then(([Map, SpatialReference, gaodeLayer, Extent])=>{
              let  extent = new Extent(95.56, 36.28, 125.65, 45.33, new SpatialReference({ wkid: 4326 }))
              //定义地图
              let map = new Map('mapDiv', {
                  logo: false,
                  slider: false,
                  showLabels: true,
                  extent: extent,
                  zoom: 4
              })
              let tiledLayer = new gaodeLayer({
                layertype: "road"
              })
              map.addLayer(tiledLayer);
        })
    }
    render(){
        let style = {
            width: '100%',
            height: '100%'
        }
        return(
            <div id="GisAMap" className="mapContent">
                <div id="mapDiv" style = {style}></div>
            </div>
        )
    }
}
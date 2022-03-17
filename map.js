
var map = L.map('map').setView([53.408371, -2.991573  ], 15);
  // OSM Baselayer
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2FyeXNwcml0Y2giLCJhIjoiY2wwbDRodGVjMDc5ZDNkcWwybHUwYjB5eSJ9.HbmG8-ium2F2nK8NFCFPsA', {
    attribution: 'Liverpool',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);


//   L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
  var liverpool = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -2.9752349853515625,
                53.41955860486593, 0.2
              ],
              [
                -2.9367828369140625,
                53.39684155458476, 05
              ],
              [
                -2.9875946044921875,
                53.39929803679939, 0.5
              ],
              [
                -2.9985809326171875,
                53.41014580378423, 0.3
              ],
    
              [
                -2.9742050170898438,
                53.41833096634864, 0.4
              ]
            ]
          }
        }
      ]
    }
    
    
    
    
    L.geoJSON(liverpool).addTo(map);
    
















// var liverpool = {
//   "fillColor": "#CC9933", 
//   "color": "#000000",
//   "weight": 2, 
//   "fillOpacity": 0.2
//   };


//   var pointStyle = {
//     radius: 2,
//     fillColor: "#000000",
//     color: "#000000",
//     weight: 1,
//     fillOpacity: 1
//     };

//     var points = new L.GeoJSON.AJAX('points.geojson', {pointToLayer: function (feature, latlng) {
//       return L.circleMarker(latlng, pointStyle);
//     }}).addTo(map);
  


















// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);
// 

// var heat_points = [
// 	[50.5, 30.5, 0.2, 0.2], // lat, lng, intensity
// 	[50.6, 30.4, 0.5, 0.2], [53.408371,-2.991573, 0.1], [40.663792, -86.245010, 0.2]


// var myStyle = {
//   color: "#000",
//   fillColor: "#ff7800",
//   weight: 10,
//   opacity: 0.65
// };


// L.geoJSON(liverpool, {
//   style: myStyle
// }).addTo(map);
// console.log(myStyle)


// !function(){"use strict";function t(i){return this instanceof t?(this._canvas=i="string"==typeof i?document.getElementById(i):i,this._ctx=i.getContext("2d"),this._width=i.width,this._height=i.height,this._max=1,void this.clear()):new t(i)}t.prototype={defaultRadius:25,defaultGradient:{.4:"blue",.6:"cyan",.7:"lime",.8:"yellow",1:"red"},data:function(t,i){return this._data=t,this},max:function(t){return this._max=t,this},add:function(t){return this._data.push(t),this},clear:function(){return this._data=[],this},radius:function(t,i){i=i||15;var a=this._circle=document.createElement("canvas"),s=a.getContext("2d"),e=this._r=t+i;return a.width=a.height=2*e,s.shadowOffsetX=s.shadowOffsetY=200,s.shadowBlur=i,s.shadowColor="black",s.beginPath(),s.arc(e-200,e-200,t,0,2*Math.PI,!0),s.closePath(),s.fill(),this},gradient:function(t){var i=document.createElement("canvas"),a=i.getContext("2d"),s=a.createLinearGradient(0,0,0,256);i.width=1,i.height=256;for(var e in t)s.addColorStop(e,t[e]);return a.fillStyle=s,a.fillRect(0,0,1,256),this._grad=a.getImageData(0,0,1,256).data,this},draw:function(t){this._circle||this.radius(this.defaultRadius),this._grad||this.gradient(this.defaultGradient);var i=this._ctx;i.clearRect(0,0,this._width,this._height);for(var a,s=0,e=this._data.length;e>s;s++)a=this._data[s],i.globalAlpha=Math.max(a[2]/this._max,t||.05),i.drawImage(this._circle,a[0]-this._r,a[1]-this._r);var n=i.getImageData(0,0,this._width,this._height);return this._colorize(n.data,this._grad),i.putImageData(n,0,0),this},_colorize:function(t,i){for(var a,s=3,e=t.length;e>s;s+=4)a=4*t[s],a&&(t[s-3]=i[a],t[s-2]=i[a+1],t[s-1]=i[a+2])}},window.simpleheat=t}(),/*

// */



// var heat = L.heatLayer(heatpoints, {
//   max: 1.0,
//   radius : 25, // default value
//   blur : 15, // default value
//   gradient : { 0.4: 'blue', 0.1: 'lime', 0.5: 'red'} // Values can be set for a scale of 0-1
// }).addTo(map);

// console.log(heat)
// console.log('heat is:',heat)
// console.log(liverpool)

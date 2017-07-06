
function initMap() {
  // Set map on Chicago
  var map = new google.maps.Map(document.querySelector('#map'),{
    center: { lat: 41.83771, lng: -87.85090 },
    zoom: 11
  });

  var redPolygon = new google.maps.Polygon({
    paths:[
            { lat: 41.78500, lng: -87.75133 },
            { lat: 41.77681, lng: -87.87836 },
            { lat: 41.80138, lng: -87.92780 },
            { lat: 41.77988, lng: -87.95527 },
            { lat: 41.83208, lng: -87.95801 },
            { lat: 41.83208, lng: -87.94154 },
            { lat: 41.81673, lng: -87.88866 },
            { lat: 41.81417, lng: -87.78773 },
            { lat: 41.87607, lng: -87.77056 },
            { lat: 41.78500, lng: -87.75133 }
          ],
      strokeColor: '#ff0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#ff0000',
      fillOpacity: 0.35,
  });
  redPolygon.setMap(map);

  var blackPolygon = new google.maps.Polygon({
    paths:[
            { lat: 41.842311, lng: -87.680511 },
            { lat: 41.852541, lng: -87.621460 },
            { lat: 41.706610, lng: -87.622833 },
            { lat: 41.706610, lng: -88.002548 },
            { lat: 41.746069, lng: -87.968903 },
            { lat: 41.726599, lng: -87.916718 },
            { lat: 41.741971, lng: -87.677078 }
          ],
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#000000',
      fillOpacity: 0.35,
  });
  blackPolygon.setMap(map);

  // this is a visibility flag. don't change it manually
  google.maps.Polygon.prototype._visible = true;

  // this will save opacity values and set them to 0, and rebound the polygon to the map
  google.maps.Polygon.prototype.hide = function(){
      if (this._visible) {
          this._visible = false;
          this._strokeOpacity = this.strokeOpacity;
          this._fillOpacity = this.fillOpacity;
          this.strokeOpacity = 0;
          this.fillOpacity = 0;
          this.setMap(this.map);
      }
  }
  // this will restore opacity values. and rebound the polygon to the map
  google.maps.Polygon.prototype.show = function() {
      if (!this._visible) {
          this._visible = true;
          this.strokeOpacity = this._strokeOpacity;
          this.fillOpacity = this._fillOpacity;
          this.setMap(this.map);
      }
  }

  blackPolygon.hide();
}

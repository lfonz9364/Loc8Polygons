$(document).ready()

var redPolygon,
    greenPolygon,
    bluePolygon,
    yellowPolygon,
    coralPolygon,
    blackPolygon,
    purplePolygon;

// Class of polygon
var polygon = {
    // create polygon with default setting
    createPolygon: function(points, color) {
      return (new google.maps.Polygon({
        paths: points,
        strokeColor: color,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: color,
        fillOpacity: 0.35,
        editable: true,
        dragable: true
      }));
    },

    // initialize Polygon
    initialize: function() {
        var map,
            polygons = [];

            // Create temporary bounding box for marker approximation inside polygon
            google.maps.Polygon.prototype.getBoundingBox = function() {
              var bounds = new google.maps.LatLngBounds();

              this.getPath().forEach(function(element,index){
                bounds.extend(element)
              });

              return(bounds);
            };

            // Formula to find polygon centroid
            google.maps.Polygon.prototype.getApproximateCentroid = function() {
               var boundsHeight = 0,
                   boundsWidth = 0,
                   centroid,
                   heightIncrease = 0,
                   maxLoops,
                   maxSteps = 10,
                   topLeft,
                   polygonBounds = this.getBoundingBox(),
                   testPoint,
                   widthIncrease = 0;

                centroid = polygonBounds.getCenter();

                // Check if centroid inside polygon area
                if (google.maps.geometry.poly.containsLocation(centroid, this)) {
                    return centroid;
                } else {
                    maxLoops = maxSteps / 2;

                    // Calculate polygon height from TopLeft to BottomRight
                    topLeft = new google.maps.LatLng(polygonBounds.getNorthEast().lat(), polygonBounds.getSouthWest().lng());

                    // Find bounding box height and width to estimate the increase
                    // TopLeft to BottomLeft distance
                    boundsHeight = google.maps.geometry.spherical.computeDistanceBetween(topLeft, polygonBounds.getSouthWest());
                    heightIncrease = boundsHeight / maxSteps;

                    // TopLeft to TopRight distance
                    boundsWidth = google.maps.geometry.spherical.computeDistanceBetween(topLeft, polygonBounds.getNorthEast());
                    widthIncrease = boundsWidth / maxSteps;

                    // Examine a new centroid within polygon at North, East, South, West of current centroid
                    for (var i = 1; i <= maxLoops; i++) {
                        // North Side
                        testPoint = google.maps.geometry.spherical.computeOffset(centroid, (heightIncrease * i), 0);
                        if (google.maps.geometry.poly.containsLocation(testPoint, this)) {
                            break;
                        }

                        // East Side
                        testPoint = google.maps.geometry.spherical.computeOffset(centroid, (widthIncrease * i), 90);
                        if (google.maps.geometry.poly.containsLocation(testPoint, this)) {
                          break;
                        }

                        // South Side
                        testPoint = google.maps.geometry.spherical.computeOffset(centroid, (heightIncrease * i), 180);
                        if (google.maps.geometry.poly.containsLocation(testPoint, this)) {
                            break;
                        }

                        // West side
                        testPoint = google.maps.geometry.spherical.computeOffset(centroid, (heightIncrease * i), 270);
                        if (google.maps.geometry.poly.containsLocation(testPoint, this)) {
                            break;
                        }
                    }

                  return(testPoint);
                }
            };

            // Set map on Chicago
            map = new google.maps.Map(document.querySelector('#map'),{
              center: { lat: 41.83771, lng: -87.85090 },
              zoom: 11
            });

            // Default Polygons
            redPolygon = this.createPolygon([
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
                  'rgb(255,0,0)'
              );

            greenPolygon = this.createPolygon([
                    { lat: 41.739921, lng: -88.047180 },
                    { lat: 41.801887, lng: -88.074646 },
                    { lat: 41.804958, lng: -88.099365 }
                  ],
                  'rgb(0,255,0)'
              );

            bluePolygon = this.createPolygon([
                    { lat: 41.961899, lng: -88.119965 },
                    { lat: 41.940962, lng: -87.990189 },
                    { lat: 41.884244, lng: -88.022461 },
                    { lat: 41.878620, lng: -88.060226 },
                    { lat: 41.934833, lng: -88.095932 }
                  ],
                  'rgb(0,0,255)'
              );

            yellowPolygon = this.createPolygon([
                    { lat: 41.902644, lng: -87.948303 },
                    { lat: 41.952198, lng: -87.920837 },
                    { lat: 41.933811, lng: -87.878265 },
                    { lat: 41.963942, lng: -87.829514 },
                    { lat: 41.975173, lng: -87.785568 },
                    { lat: 41.900600, lng: -87.837067 },
                    { lat: 41.945559, lng: -87.726517 },
                    { lat: 41.877598, lng: -87.629700 }
                  ],
                  'rgb(255,255,0)'
              );

            coralPolygon = this.createPolygon([
                    { lat: 41.769119, lng: -88.196182 },
                    { lat: 41.716349, lng: -88.193436 },
                    { lat: 41.762973, lng: -88.117218 }
                  ],
                  'rgb(255,127,80)'
              );

            blackPolygon = this.createPolygon([
                    { lat: 41.842311, lng: -87.680511 },
                    { lat: 41.852541, lng: -87.621460 },
                    { lat: 41.706610, lng: -87.622833 },
                    { lat: 41.706610, lng: -88.002548 },
                    { lat: 41.746069, lng: -87.968903 },
                    { lat: 41.726599, lng: -87.916718 },
                    { lat: 41.741971, lng: -87.677078 }
                  ],
                  'rgb(0,0,0)'
              );

            purplePolygon = this.createPolygon([
                    { lat: 41.877086, lng: -88.143311 },
                    { lat: 41.884244, lng: -88.092499 },
                    { lat: 41.836172, lng: -88.088379 },
                    { lat: 41.839753, lng: -88.137817 }
                  ],
                  'rgb(128,0,128)'
              );

            polygons.push(redPolygon, greenPolygon, bluePolygon, yellowPolygon, coralPolygon, blackPolygon, purplePolygon);

            // Draw polygons with marker at approximate centroid
            polygons.forEach(function(poly) {
                poly.setMap(map);
                new google.maps.Marker({
                  position: poly.getApproximateCentroid(),
                  map: map
                });
            });
    },
    // Change opacity values to 0 and rebound polygon
    hide: function(){
      if (this._visible) {
        this._visible = false;
        this._strokeOpacity = this.strokeOpacity;
        this._fillOpacity = this.fillOpacity;
        this.strokeOpacity = 0;
        this.fillOpacity = 0;
        this.setMap(this.map);
      }
    },
    // Reset polygon opacity to Default
    show: function() {
      if(!this._visible) {
        this._visible = true;
        this.strokeOpacity = this._strokeOpacity;
        this.fillOpacity = this.fillOpacity;
        this.setMap(this.map);
      }
    }
};

# Map with Polygons App

## Descriptions
#### Technology Used
* Javascript
* CSS3
* HTML5
* Google Map
* Atom text editor

#### Approach
The Map with Polygons App is designed to minimised repeating tasks. First, the app have a createPolygon function to eliminate repeating tasks of creating polygon utilising Google map polygon class. Second, the calculation of each polygon centroid is based on testing points in four wind directions (North, East, South and West) of the boundary box centre point that automated during app initialize process. Third, the polygons and marker drawing also automated altogether with checking checkboxes state to ensure only checked polygons get drawn. I believe the elimination of repeating activities using functions would make the code runnable, testable, reusable and extendable.    

## Assumptions Made
* Repeating tasks should be minimised.
* The Earth is a sphere in shape.
* Using Spherical Geometry Concept to calculate distance at every heading.
* Each search step is only 10% of the Boundary Box height or width.
* Testing for polygon approximate centre point performed 5 times on each direction.
* The polygon centroid must be inside the polygon area.

## Instructions to Run Map with Polygons App
1. Open "index.html" in the internet browser (eg.: Google Chrome)
2. Wait until Map and all polygons displayed.
3. Uncheck all polygons that wanted to be hidden.
4. Check all polygons that wanted to be shown.

## Developed by Alfons Caroles
Mobile: 0421 766 515 <br/>
E-Mail: alfons.caroles@gmail.com

      function  initBingMap()  {  
  
            var  map  =  new  Microsoft.Maps.Map(document.getElementById('map'),  {      
                        center:  new  Microsoft.Maps.Location(51.505,  -0.09),    
                        zoom:11,  
            }  );  
  
            var  options  =  {    
                  uriConstructor:  "https://tiles.aqicn.org/tiles/usepa-aqi//{zoom}/{x}/{y}.png?token=_TOKEN_ID_",  
                  minZoom:  1,  
                  maxZoom:  15  
            };  
            var  waqiTileSource  =  new  Microsoft.Maps.TileSource(options);  
            var  waqiTilelayer  =  new  Microsoft.Maps.TileLayer({  mercator:  waqiTileSource  });  
            map.layers.insert(waqiTilelayer);  

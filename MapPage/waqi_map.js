function initBingMap() { 
 
    var map = new Microsoft.Maps.Map(document.getElementById('map'), { 
        center: new Microsoft.Maps.Location(3.140853, 101.693207), 
        zoom:11, 
        credentials: 'AmCdGM5M9Px2QVxkUld09IDlK3M2gKajjbYpCm58wbeelDCZscodbbgGT1xv_vgV',
    } ); 
    
    var options = { 
    uriConstructor: "https://tiles.aqicn.org/tiles/usepa-aqi//{zoom}/{x}/{y}.png? token=_TOKEN_ID_", 
    minZoom: 1, 
    maxZoom: 15 
    }; 
    var waqiTileSource = new Microsoft.Maps.TileSource(options); 
    var waqiTilelayer = new Microsoft.Maps.TileLayer({ mercator: waqiTileSource }); 
    map.layers.insert(waqiTilelayer); 
    }
   
function GetMap() { 
 
    var maps = new Microsoft.Maps.Map(document.getElementById('maps'), { 
        center: new Microsoft.Maps.Location(3.140853, 101.693207), 
        zoom:11, 
        credentials: 'AmCdGM5M9Px2QVxkUld09IDlK3M2gKajjbYpCm58wbeelDCZscodbbgGT1xv_vgV',
    } ); 
}

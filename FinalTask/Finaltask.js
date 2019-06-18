var apply = 0;

function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();

    screen.init( volume, {
        width: window.innerWidth*0.8,
        height: window.innerHeight,
        enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    if(apply==1){
      surfaces = null;
      var isovalue = document.getElementById("isovalue").value*256;
      var surfaces = Isosurfaces( volume, isovalue );
      screen.scene.add( surfaces );
    }else{
      surfaces = null;
      var isovalue  = 128;
      var surfaces = Isosurfaces( volume, isovalue );
      screen.scene.add( surfaces );
    }

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth*0.8, window.innerHeight ] );
    });

    screen.loop();
}

function button1(){
    apply = 1;
    main();
}

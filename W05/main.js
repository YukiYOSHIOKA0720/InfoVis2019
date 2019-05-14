function main()
{
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    var vertices = [
      [-1, 1, 0], // v0
      [-1,-1, 0], // v1
      [ 1,-1, 0], // v2
      [ 1, 1, 0], // v3
      [-1, 1, 2], // v4
      [-1,-1, 2], // v5
      [ 1,-1, 2], // v6
      [ 1, 1, 2] // v7
    ];

    var faces = [
      [0,3,1], // f0: v0-v1-v2
      [3,2,1], // f1: v0-v2-v3
      [3,7,2], // f2: v3-v2-v7
      [7,6,2], // f3: v7-v2-v6
      [7,4,6], // f4: v7-v6-v4
      [4,5,6], // f5: v4-v6-v5
      [4,0,5], // f6: v4-v5-v0
      [0,1,5], // f7: v0-v5-v1
      [4,7,0], // f8: v4-v7-v0
      [7,3,0], // f9: v7-v3-v0
      [1,2,5], // f10: v1-v2-v5
      [2,6,5], // f11: v2-v6-v5
    ];

    var geometry = new THREE.Geometry();
    for(var i=0; i<8; i++){
      geometry.vertices.push( new THREE.Vector3().fromArray( vertices[i] ) );
    }

    var material = new THREE.MeshBasicMaterial();
    material.vertexColors = THREE.FaceColors;
    for(var i=0; i<12; i++){
      geometry.faces.push( new THREE.Face3( faces[i][0], faces[i][1], faces[i][2] ) );
      //geometry.faces[i].color = new THREE.Color( 1, 0, 0 );//Color(Red,Green,Blue)
    }

    // Normal vectors for each face are automatically computed.
    //geometry.computeFaceNormals();

    // Front: THREE.FrontSide (default)
    // Back: THREE.BackSide
    // Both: THREE.DoubleSide
    //metrial.side = THREE.DoubleSide

    var triangle = new THREE.Mesh( geometry, material );
    scene.add( triangle );

    var light = new THREE.PointLight( 0xffffff );
    light.position.set( 1, 1, 1 );
    scene.add( light );

    renderer.render( scene, camera );
    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        triangle.rotation.x += 0.01;
        triangle.rotation.y += 0.01;
        renderer.render( scene, camera );
    }
}

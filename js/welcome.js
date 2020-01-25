(async function(){
  let scene, renderer, CSS2DRenderer, camera, width, height, aspect
  const threeJs = document.getElementById("welcome");
  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(devicePixelRatio)
  renderer.setClearColor(0x000000, 0);
  CSS2DRenderer = new THREE.CSS2DRenderer();
  CSS2DRenderer.setSize(width, height);
  CSS2DRenderer.domElement.style.position = "absolute";
  CSS2DRenderer.domElement.style.top = 0;
  CSS2DRenderer.domElement.style.outline = "none";
  threeJs.appendChild(CSS2DRenderer.domElement);
  threeJs.appendChild(renderer.domElement);
  camera = new THREE.PerspectiveCamera(45, aspect, 1, 1000);
  camera.position.set(0, 30, 250);

  const globalLight = new THREE.AmbientLight(0xffffff, 1);
  const shadowLight = new THREE.DirectionalLight(0xffffff, .5);
  shadowLight.position.set(200, 150, -300);
  const lightTarget = new THREE.Object3D();
  lightTarget.position.set(0, -20, -150)
  const fontSpotLight = new THREE.DirectionalLight(0xE7FFB5, 1);
  fontSpotLight.position.set(-200, -50, 0);
  fontSpotLight.target = lightTarget;
  scene.add(globalLight, shadowLight, fontSpotLight);


  const GLTFLoader = new THREE.GLTFLoader();
  const dracoLoader = new THREE.DRACOLoader();
  dracoLoader.setDecoderPath('./js/lib/DRACOLoader.js');
  GLTFLoader.setDRACOLoader(dracoLoader);
  GLTFLoader.load('./model/model.glb', 
    gltf => {
      gltf.scene.position.x = -100
      gltf.scene.rotation.y = Math.PI * 1
      scene.add(gltf.scene)
    },
    xhr => console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' ),
    error => console.log( 'An error happened' )
  );

  const particle = new Particle(4, 0.9, 0.9, 0.7, 250, 50);
  scene.add(particle.particleSystem);

  const frontButtonLabel = document.getElementById('front');
  const frontButtonObj = new THREE.CSS2DObject(frontButtonLabel);
  frontButtonObj.position.set(-95, -20, 0);
  const backButtonLabel = document.getElementById('back');
  const backButtonObj = new THREE.CSS2DObject(backButtonLabel);
  backButtonObj.position.set(95, -20, 0);
  scene.add(frontButtonObj, backButtonObj);

  const button = document.querySelectorAll('.button')
  button.forEach(dom=>{
    dom.addEventListener('mouseenter', function(){
      this.style.transform = 'scale(1.3)'
    })
    dom.addEventListener('mouseleave', function(){
      this.style.transform = 'scale(1)'
    })
  })

  const fontLoader = new THREE.FontLoader();
  function font(text, x){
    return new Promise(resolve=>{
      fontLoader.load('./js/lib/Montserrat_Regular.json', font => {
        const fontGeo = new THREE.TextBufferGeometry(text, {
          font,
          size: 100,
          height: 15,
          bevelEnabled: true,
          bevelThickness: 1,
          bevelSize: 1,
          bevelOffset: 0,
          bevelSegments: 1
        });
        const fontMat = new THREE.MeshLambertMaterial({color: '#536280'}); 
        const fontModel = new THREE.Mesh(fontGeo, fontMat); 
        fontModel.position.set(x, -20, -150);
        scene.add(fontModel)
        
        resolve(fontModel)
      })
    })
  }
  const text1 = await font('MASTER POCKET', 0)
  const text2 = await font('MASTER POCKET', 1300)

  function handleWindowResize() {
    width = innerWidth;
    height = innerHeight;
    CSS2DRenderer.setSize(width, height);
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
  window.addEventListener("resize", handleWindowResize);

  function render() {
    text1.position.x < -1700 ? text1.position.x = 900 : text1.position.x = text1.position.x
    text2.position.x < -1700 ? text2.position.x = 900: text2.position.x = text2.position.x
    text1.position.x -= .5
    text2.position.x -= .5
    particle.update();
    requestAnimationFrame(render);
    CSS2DRenderer.render(scene, camera);
    renderer.render(scene, camera);
  }
  handleWindowResize();
  render();
})()
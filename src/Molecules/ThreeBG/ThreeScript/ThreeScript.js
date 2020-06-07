import * as THREE from 'three';

export const ThreeScript = (el) => {
  // Three.js - Shadertoy Bleepy Blocks
// from https://threejsfundamentals.org/threejs/threejs-shadertoy-bleepy-blocks.html


function main() {
  const canvas = el
  const renderer = new THREE.WebGLRenderer({canvas});
  renderer.autoClearColor = false;

  const camera = new THREE.OrthographicCamera(
    -1, // left
     1, // right
     1, // top
    -1, // bottom
    -1, // near,
     1, // far
  );
  const scene = new THREE.Scene();
  const plane = new THREE.PlaneBufferGeometry(2, 2);

  const fragmentShader = `
  #include <common>

  uniform vec3 iResolution;
  uniform float iTime;
  uniform sampler2D iChannel0;

float rand2(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord/iResolution.xy;
    
    //Gradient
    
    //Blue corner gradient from bottom right, weakened with a minimum
    float blue = ((uv.x + 1.0 - uv.y-.1)*.22)+.2;
    //Red corner gradient from top left, weakened with a minimum
    float red = ((1.0-uv.x + uv.y-.1)*.3)+.3;
    //constant green to produce a less harsh "tinge" for red and blue
    float green = .25;
    //initial red to blue gradient
	vec3 col = vec3(red, green, blue);
    //creating "chunked" variable that we feed into the random number generator
    
    //Random Checkerboard
    
    //we adjust this random number to alternate between 0 and 2 pi, the frequency of sign
    float fragCoordBlocks = rand(floor(fragCoord/25.5))*(3.14159265359*2.0);
    //The variance function alternates between -1 and 1 with sin
    //It does this at three times the growth rate of iTime
    //we add a random offset to the frequency
	float variance = sin(iTime*2.2+fragCoordBlocks);
    // we take our original gradient, adjust our variance to center on 0, and reduce its magnitude
    col = col + ((variance-.5)*.023);
    
    //Output our final calculated color
    fragColor = vec4(col,1.0);
}

  void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
  }
  `;
  const loader = new THREE.TextureLoader();
  const texture = loader.load('https://threejsfundamentals.org/threejs/resources/images/bayer.png');
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  const uniforms = {
    iTime: { value: 0 },
    iResolution:  { value: new THREE.Vector3() },
    iChannel0: { value: texture },
  };
  const material = new THREE.ShaderMaterial({
    fragmentShader,
    uniforms,
  });
  scene.add(new THREE.Mesh(plane, material));

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render(time) {
    time *= 0.001;  // convert to seconds

    resizeRendererToDisplaySize(renderer);

    const canvas = renderer.domElement;
    uniforms.iResolution.value.set(canvas.width, canvas.height, 1);
    uniforms.iTime.value = time;

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();

};

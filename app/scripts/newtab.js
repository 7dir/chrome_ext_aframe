// Enable chromereload by uncommenting this line:
import 'chromereload/devonly'

import * as d3 from "d3";
import 'aframe'
// import 'aframe-inspector'
import 'aframe-template-component'

// import 'kframe'
// import 'aframe-extras'

import 'aframe-physics-system'
import 'aframe-mouse-cursor-component'
import 'aframe-event-set-component'
import 'aframe-layout-component'

import './earcut.js'
import './triangulateShape_earcut.js'

import './randomName'
// import 'aframe-text-geometry-component'

AFRAME.registerComponent('normal-material', {
  multiple: true,
  init: function (){
    var material = new THREE.MeshNormalMaterial();
    var geometry = this.el.getObject3D('mesh').geometry;
    this.el.setObject3D('mesh', new THREE.Mesh(geometry, material));
  },
  remove: function(){
    this.el.removeObject3D('mesh');
  }
});

AFRAME.registerComponent('school-playground', {
  init: function () {
    var sceneEl = document.querySelector('a-scene'); 
    for (var i = 0; i < 50; i++) {
      var boxEl = document.createElement('a-box');
      boxEl.setAttribute('material', {color: '#EF2D5E'});
      boxEl.setAttribute('position', {x: Math.random() * 20 - 10, y: Math.random() * 20 - 10, z: Math.random() * 20 - 10});
      boxEl.setAttribute('scale', {x: Math.random() / 2, y: Math.random() / 2, z: Math.random() / 2});
      sceneEl.appendChild(boxEl);
    }
  }
});
// console.log(`New Tab`);

// var sceneEl = document.querySelector('a-scene')

// var boxEl = document.createElement('a-box');
// boxEl.setAttribute('material', {color: '#EF2D5E'});
// boxEl.setAttribute('position', {x: Math.random() * 20 - 10, y: Math.random() * 20 - 10, z: Math.random() * 20 - 10});
// boxEl.setAttribute('scale', {x: Math.random() / 2, y: Math.random() / 2, z: Math.random() / 2});
// sceneEl.appendChild(boxEl);


AFRAME.registerComponent('books', {
  init: function () {
    var sceneEl = document.querySelector('a-scene'); 
    var lineLayout = sceneEl.querySelector('#lineLayout');
    window['books'].forEach(function(i, indx, a){

      var entityEl = document.createElement('a-text')
      entityEl.setAttribute('value', i.title )
      lineLayout.appendChild(entityEl)
    });
  }
});

document.addEventListener("DOMContentLoaded", function(event) { 
  //do work
});

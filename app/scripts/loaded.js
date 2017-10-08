// loaded.js

var scene = document.querySelector('a-scene');
if (scene.hasLoaded) {
  run();
} else {
  scene.addEventListener('loaded', run);
}
function run () {
  // var entity = scene.querySelector('a-entity');
  // entity.setAttribute('material', 'color', 'red');
  // var sceneEl = document.querySelector('a-scene');
  window['books'].forEach(function(i, indx, a){
    var lineLayout = document.querySelector('#lineLayout');
    var entityEl = document.createElement('a-text')
    // entityEl.setAttribute('material', {color: '#EF2D5E'});
    entityEl.setAttribute('value', i.title )
    lineLayout.appendChild(entityEl)
  });
  
}

// document.querySelector('a-scene').addEventListener('loaded', function () {
// });

// document.querySelector('a-scene').addEventListener('loaded', function () {
// })

// fake data
// var data = [ 10, 20, 30, 15, 25, 35, 40,
//             45, 50, 70, 100, 120, 130,
//            12, 18, 22, 29, 33, 44, 59, 200]

// // we select the scene object just like an svg
// var scene = d3.select("a-scene")

// we use d3's enter/update/exit pattern to draw and bind our dom elements
// var bars = scene.selectAll("a-cube.bar").data(data)
// bars.enter().append("a-cube").classed("bar", true)
// we set attributes on our cubes to determine how they are rendered
// bars.attr({
//   position: function(d,i) {
//     // cubes are positioned by their center so we
//     // offset for their height
//     var y = 1 + hscale(d)/2;
//     // lets place the bars all around our camera
//     var radius = 5;
//     //var x = i - data.length/2;
//     var x = radius * Math.cos(i/data.length * 2 * Math.PI)
//     var z = radius * Math.sin(i/data.length * 2 * Math.PI)
//     return x + " " + y + " " + z
//   },
//   rotation: function(d,i) {
//     var x = 0;
//     var z = 0;
//     var y = -(i/data.length)*360;
//     return x + " " + y + " " + z
//   },
//   width: function(d) { return 0.5},
//   depth: function(d) { return 0.9},
//   height: function(d) { return hscale(d)},
//   opacity: function(d,i) { return 0.6 + (i/data.length) * 0.4},
//   //metalness: function(d,i) { return i/data.length}
// })
// .on("click", function(d,i) {
//   console.log("click", i,d)
// })
// .on("mouseenter", function(d,i) {
//   // this event gets fired continuously as long as the cursor
//   // is over the element. we only want trigger our animation the first time
//   if(this.hovering) return;
//   console.log("hover", i,d)
//   this.hovering = true;
//   d3.select(this).transition().duration(1000)
//   .attr({
//     metalness: 0.5,
//     width: 2
//   })
// })
// .on("mouseleave", function(d,i) {
//   console.log("leave",i,d)
//   this.hovering = false;
//   d3.select(this).transition()
//   .attr({
//     metalness: 0,
//     width: 0.5
//   })
// })    

//....here your code













// function appendObject(id, file, scale, position, rotation, scale) {
//         $('<a-obj-model />', {
//           id: id,
//           class: 'city object children',
//           position: position,  // doesn't seem to do anything, known issue
//           scale: scale,
//           rotation: rotation,
//           file: file,
//           src: '#' + file + '-obj',
//           mtl: '#' + file + '-mtl',
//           appendTo : $('#city')
//         });
//        document.getElementById(id).setAttribute("position", position); // this does set position as a workaround
//       }
 // onMenuDown: function () {
 //        previousObject = document.querySelector("#object" + (objectCount - 1));
 //        previousObject.parentNode.removeChild(previousObject);
 //        objectCount -= 1;
 //        if(objectCount == -1) {objectCount = 0};
 //  },      
// NETSCAPE-Bookmark-file-1
// newFolder
function bNewFolder(a={'title': '3d'}) {
  chrome.bookmarks.create(a, function(newFolder) {
    // console.log("added folder: " + newFolder.title);
    // console.log("Id: " + newFolder.id);
    return newFolder.id;
  });
}

// search by title
function bSearch(a={'title': '3d'}) {
  chrome.bookmarks.search(a, function(e) {
  });
}

// chrome.bookmarks.create({ 'title': 'Extensions doc', 'url': 'http://code.google.com/chrome/extensions'});

var opts = { 'title': '3d' };
window['books'] = [];
chrome.bookmarks.search(opts, function(e){
  if (e.length<1){
    demoData();
  } else {
    chrome.bookmarks.search(opts, function(ee){ 
      chrome.bookmarks.getSubTree(ee[0].id, function(subTree){
        subTree[0]['children'].forEach(function(item, i, arr) {
          // console.log( i + ": " + item.title );
          window['books'].push({title: item.title, src: item.url, id: item.id });
        });
      })
    })
  }
});

function demoData() {
  bNewFolder();
  for (var i = 1; i < 13; i++) {
    chrome.bookmarks.search(opts, function(ee) {
      // console.log(ee[0].title);
      chrome.bookmarks.create({ 'parentId': ee[0].id, 'title': randomEl(adjectives)+' '+randomEl(nouns), 'url': 'https://unsplash.it/300/200/?random=2'});
    });
  }
}
// window['books'] = books;

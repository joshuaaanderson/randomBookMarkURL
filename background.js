var bookMarkList = [];

chrome.action.onClicked.addListener(tab => {

  let bookmarkSize = "";
  let newURL = "";
  let randomNum = "";

  chrome.bookmarks.getTree(function(BookmarkTreeNode) {
    for (var i = 0; i < BookmarkTreeNode[0].children.length; i++) {
      hasChildren(BookmarkTreeNode[0].children[i])
    }
    randomNum = Math.floor((Math.random() * (bookMarkList.length - 1 - 0) + 0));
    newURL = bookMarkList[randomNum];

    chrome.tabs.update({
      url: newURL
    },
    function(url) {
      // do nothing, who cares?
    });

  });
  bookMarkList = [];

});

function hasChildren(obj) {
  for (var i = 0; i < obj.children.length; i++) {

    if (obj.children[i].children) {
      hasChildren(obj.children[i]);
    } else {
      bookMarkList.push(obj.children[i].url)
    }
  }

}
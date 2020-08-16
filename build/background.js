
var menuItem = {
  "id": "YouTube",
  "title": "!Trailer on YouTube",
  "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

function slugify(text) {
  return text
    .toString()
    .normalize('NFD')
    .trim()
    .replace(/\s+/g, '+');
}

chrome.contextMenus.onClicked.addListener(function (clickData) {
  if (clickData.menuItemId == "YouTube" && clickData.selectionText) {
    var url = "https://www.youtube.com/results?search_query=" + slugify(clickData.selectionText) + "+trailer";
    var createData = {
      "url": url,
      "active": true
    };
    chrome.tabs.create(createData, function () { });
  }
});

// https://www.youtube.com/results?search_query=hello+world

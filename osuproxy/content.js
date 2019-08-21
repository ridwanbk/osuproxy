//alert("Hi there from osuproxy")

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      //var firstHref = $("a[href^='http']").eq(0).attr("href");
      var firstHref = window.location.href;
      console.log(firstHref);
      
      var reslink = "http://proxy.lib.ohio-state.edu/login?url="+firstHref;
      chrome.runtime.sendMessage({"message": "open_new_tab","url": reslink});


    }
  }
);

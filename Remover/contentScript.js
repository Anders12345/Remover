
console.log("test");

// Select the node that will be observed for mutations
const targetNode = document.body;

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log(mutation);

            // IGN Nordic
            var elem = document.getElementById("qc-cmp2-container");
            if(elem !== null) {
                elem.style.display = "none";
            }

            // Rottentomatoes
            var rthtml = document.documentElement;
            var rtbody = document.body;
            if(rthtml !== null && rtbody !== null) {
              rthtml.style.overflow = "visible";
              rtbody.style.overflow = "visible";
            }

            var rtOverlay = document.querySelector("div.fEy1Z2XT");
            if(rtOverlay !== null) {
                rtOverlay.style.display = "none";
            }

            var rtCookie = document.getElementById("truste-consent-track");
            if(rtCookie !== null) {
                rtCookie.style.display = "none";
            }
            // Twitter
            var twtOverlay = document.getElementById("layers");
            if(twtOverlay !== null) {
              twtOverlay.style.display = "none";
            }

        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
//observer.disconnect();

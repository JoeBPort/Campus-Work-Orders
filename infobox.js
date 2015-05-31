var boxText = document.createElement("div"); 
boxText.style.cssText = "overflow-y:auto;  height: 170px;-moz-border-radius: 5px; border-radius: 5px; padding: 7px; ";
boxText.style.background ="#d5d5d5";
//#695757

//Code was from online Resource


var boxOptions = {
        content: boxText
        ,disableAutoPan: false
        ,maxWidth: 0
        ,pixelOffset: new google.maps.Size(-140, 0)
        ,zIndex: null
        ,boxStyle: { 
		width: "300px"
		 ,opacity: 0.90

                   }
        ,closeBoxMargin: "10px 2px 2px 2px"
        ,closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif"

        ,infoBoxClearance: new google.maps.Size(1, 1)
        ,isHidden: false
        ,pane: "floatPane"
        ,enableEventPropagation: false
};

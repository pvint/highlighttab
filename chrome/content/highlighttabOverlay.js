/**
 *  highlighttab namespace.
 *   */
if ("undefined" == typeof(highlighttab)) {
	  var highlighttab = {};
};

var highlighttab = {
	        toggleHighlight: function(aEvent, node) {
					  alert(aEvent);
					  alert(node.label);
					  node.style.background = "red";
					  //x.style.background = 'red';
				  },

		highlightTab: function(evt, node, c) {
				      node.style.background = c;
			      }
};




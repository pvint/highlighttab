/**
 *  highlighttab namespace.
 *   */
if ("undefined" == typeof(highlighttab)) {
	  var highlighttab = {};
};

var highlighttab = {

		highlightTab: function(evt, node, c) {
				      if( c == '' )
				      {
					      node.style.background = '';
					      node.style.borderBottom = '';
				      }
				      else
				      {
					      node.style.background = c;
					      node.style.borderBottom = '2px solid ' + c;
					}
			      }
};




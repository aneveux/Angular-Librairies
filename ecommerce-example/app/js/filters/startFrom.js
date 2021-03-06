define(['appModule'], function(app) {
	
	/** Filter used to return a collection which only elements at or after a given index. */
    app.lazy.filter('startFrom', function() {
    	return function(pArray, pStartIndex) {
    		if (pArray != undefined && pArray != null) {
    			var filteredArray = [];
    			for(var index = pStartIndex; index < pArray.length; index++) {
    				filteredArray.push(pArray[index]);
    			}
    			return filteredArray;
    		}
    		return pArray;
    	};
    });
});
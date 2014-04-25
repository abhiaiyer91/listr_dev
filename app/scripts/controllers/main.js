'use strict';


app.controller('MainCtrl', function ($scope) {
    $scope.map = {
		center: {
			latitude: 32.716238,
			longitude: -117.160128
		},
		zoom: 14,
		settings: {
    		scrollwheel: false
    	}
	};
	$scope.marks = {
		coords:
		{
			latitude: 32.716238,
			longitude: -117.160128
		}
	};
});



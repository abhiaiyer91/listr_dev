'use strict';

app.controller('SignUpForm', function ($scope){
	$scope.infos = [];

	$scope.form = {
		first_name: '',
		last_name: '',
		birthdate: '',
		email: '',
		home_address: '',
		city: '',
		phone: '',
		gender: '',
		venue: ''
	}

	$scope.submitForm = function () {
		$scope.infos.push($scope.form);

		$scope.form = {
			first_name: '',
			last_name: '',
			birthdate: '',
			email: '',
			home_address: '',
			city: '',
			phone: '',
			gender: '',
			venue: ''
		}		
	};
});

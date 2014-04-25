'use strict';

app.controller('SignUpForm', function ($scope){
	$scope.infos = [];

	$scope.complete = [];

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
		Form.save($scope.form, function (ref) {
			$scope.infos[ref.name] = $scope.form
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
		});

		
	};

	$scope.fulfillForm = function (index) {
		var clone = $scope.infos.shift();
		$scope.complete.push(clone);	
	};

	$scope.removeForm = function (index) {
		$scope.infos.splice(index,1);
	}
});

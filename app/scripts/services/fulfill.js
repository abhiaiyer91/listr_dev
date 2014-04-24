'use strict';

app.factory('Histore', function ($firebase, FIREBASE_URL) {
	var ref = new Firebase(FIREBASE_URL + 'histore');

	var orders = $firebase(ref);

	var Histore = {
		all: orders,
		child: function(post) {
			orders.$child(post)
		},
		create: function (post) {
			return orders.$add(post);
		},
		find: function (postId) {
			return orders.$child(postId);
		},
		delete: function (postId) {
			return orders.$remove(postId);
		}

	};

	return Histore;

	

});
'use strict';

app.factory('Form', function ($resource) {
	return $resource('https://listr-fire.firebaseio.com/infos/:id.json');
});
angular.module('mu').factory('Mus', ['$resource', function ($resource) {
    return $resource('/api/mus/:muId', {
        muId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);
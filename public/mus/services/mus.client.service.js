angular.module('mus').factory('Mus', ['$resource', function($resource) {
    return $resource('/api/mus/:muId', {
        muId: '@_id'
    }, {
            save: {
                method: 'POST',
                headers: { 'Content-Type': undefined },
                transformRequest: function(data) {
                    var formData = new FormData();
                    for (var i in data) {
                        if (data.hasOwnProperty(i)) {
                            formData.append(i, data[i]);
                        }
                    }
                    return formData;
                }
            },
            update: {
                method: 'PUT'
            },
            updatePv: {
                method: 'PUT',
                url: '/api/mus/updatePv'
            },
            updateLike: {
                method: 'PUT',
                url: '/api/mus/updateLike'
            }
        });
}]);
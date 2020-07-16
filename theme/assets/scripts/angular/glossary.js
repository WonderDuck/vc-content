var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('glossaryController', ['$scope', function ($scope) {
    $scope.glossaries = [];
    $scope.glossariesOriginal = [];
    $scope.currentCategory = '';

    $scope.initGlossary = function () {
        $scope.glossaries = JSON.parse(window.glossaries);
        $scope.glossariesOriginal = JSON.parse(window.glossaries);
    }

    $scope.setCurrentCategory = function (category) {
        $scope.currentCategory = category;
        $scope.glossaries = $scope.currentCategory ? $scope.glossariesOriginal.filter(c => c.url.toLowerCase().includes('?tag=' + $scope.currentCategory.toLowerCase())) : $scope.glossariesOriginal;
    };
}]);

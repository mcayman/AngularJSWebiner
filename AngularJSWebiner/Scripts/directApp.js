var directApp = angular.module("directApp", []);

/**************** Custom Directive (element)*********************/
directApp.directive("userDetail", function () {
    return {
        restrict: 'E', //element tipinde directive
        template: '<div><strong>Picture:</strong><img ng-src="{{User.avatar_url}}" /></div><div><strong>JSON Data</strong><textarea rows="10" cols="100">{{User | json}}</textarea></div>'
    }
});

/**************** Custom Directive (attribute)*********************/
directApp.directive("searchUser", function () {
    return {
        restrict: 'A',
        template: 'Search User: <input type="text" placeholder="Search user.." ng-model="searchKey" /><input type="button" ng-click="Search(searchKey)" value="Search User" />'
    }

})

/*merhaba*/
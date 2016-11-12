(function (hede) {
    /************ SAMPLE1 ***************************************************************************/

    //var MainController = function ($scope) {
    //    $scope.Message = "Merhaba AngularJS";
    //}

    //var TestController = function ($scope) {
    //    $scope.Message = "Hello AngularJS";
    //}


    //var app = angular.module("app", []);
    //app.controller("MainController", ["$scope", MainController])
    //app.controller("TestController", ["$scope", TestController])


    /************ SAMPLE2 ***************************************************************************/

    //var MainController = function ($scope) {

    //    $scope.User = {
    //        Name: "Murat CAYMAN",
    //        Location: "İstanbul / Türkiye",
    //        Picture: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAleAAAAJDI0MmIwNjEzLTkxOTMtNDczMS1iYTNkLTYwNTcwN2Q1ZDNjOQ.jpg"
    //    }

    //}


    //var app = angular.module("app", []);
    //app.controller("MainController", ["$scope", MainController]);


    /************ SAMPLE3 ***************************************************************************/

    var MainController = function ($scope, $http, $log, $interval) {

        $scope.orderKey = "-stargazers_count";
        $scope.searchKey = "Angular";
        $scope.counter = 5;
        
        //sayı 0 olduğunda butonun click lenme event ini çağıran fonksiyon
        var decrease = function(){
            $scope.counter--;
            if ($scope.counter < 1){
                $scope.Search($scope.searchKey);
                $scope.counter = null;
            }
        };

        var intervalFlag;
        var counterFunc = function () {
            intervalFlag = $interval(decrease, 1000, $scope.counter);
        }

        counterFunc();


        //search butonuna basıldığında..
        $scope.Search = function (key) {

            $http.get("https://api.github.com/users/" + key).success(function (userData) {
                $log.info("User datası yüklendi");
                $scope.User = userData;

                if (intervalFlag){
                    $interval.cancel(intervalFlag);
                    $scope.counter = null;
                }

                $http.get($scope.User.repos_url).success(function (repoData) {
                    $log.info("Repo datası yüklendi");
                    $scope.Repos = repoData;
                }).error(function (err) {
                    $log.info("Repo bilgisi alınırken hata oluştu " + err);
                });

            }).error(function (data, status, headers, config) {
                console.log(data);
                if (data != null)
                    $log.info("User datasını alırken hata oluştu!\nError Message:" + data.message);
                $log.info("\nStatus:" + status);
            });

        }       

    }

    var app = angular.module("app", ["directApp"]);//directApp inject edilir
    app.controller("MainController", ["$scope", "$http", "$log", "$interval", MainController]);
    //app.controller("MainController", [MainController]); // böylede tanımlanabilir


    /**************** Custom Filter ************************/
    app.filter("checkFilter", function () {
        return function (checkData) {
            return (checkData) ? "\u2713" : "\u2716";
        }
    });


    /**************** Custom Directive (element)*********************/
    //app.directive("userDetail", function () {
    //    return {
    //        restrict: 'E', //element tipinde directive
    //        template: '<div><strong>Picture:</strong><img ng-src="{{User.avatar_url}}" /></div><div><strong>JSON Data</strong><textarea rows="10" cols="100">{{User | json}}</textarea></div>'
    //    }
    //});

    /**************** Custom Directive (attribute)*********************/
    //app.directive("searchUser", function () {
    //    return {
    //        restrict: 'A',
    //        template: 'Search User: <input type="text" placeholder="Search user.." ng-model="searchKey" /><input type="button" ng-click="Search(searchKey)" value="Search User" />'
    //    }

    //})

    //yukardakiler directApp.js taşındı ve app modulü oluştururken inject edildi

})(angular);
//angular'a cast etmek zorunda değiliz, şimdilik örnekte öğle diye yaptım
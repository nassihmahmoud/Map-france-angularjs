app.controller('mapController',['$scope','openweathermapFactory','$window','$rootScope', function($scope,openweathermapFactory,$window,$rootScope){
	
	 var _appid = "413d81fd0b6be4ce1d7c443e9342c1dc";
	 $scope.clique = false
	 $scope.loading =true;
	 $scope.cestbon = false;
	  if($scope.clique ==false){
	                    $scope.ville = "Centre"
	                        openweathermapFactory.getWeatherFromCitySearchByName({
									q:$scope.ville,
									lang : "fr",
									appid:_appid,
								}).then(function(_data){
									//console.info("weather from city by name", _data);
									$scope.loading =false;
									$scope.cestbon = true;
										$scope.data = _data;
										$scope.lat = $scope.data.data.coord.lat;
										$scope.lon = $scope.data.data.coord.lon;
										$scope.temp = Math.round(($scope.data.data.main.temp - 273.15) * 100) / 100;
										$scope.description =  $scope.data.data.weather[0].description
										$scope.tempMax = Math.round(($scope.data.data.main.temp_max - 273.15) * 100) / 100;
										$scope.tempMin = Math.round(($scope.data.data.main.temp_min - 273.15) * 100) / 100;
										$scope.humidity = $scope.data.data.main.humidity;
										$scope.pressure = $scope.data.data.main.pressure;
										$scope.deg = $scope.data.data.wind.deg;
										$scope.speed= $scope.data.data.wind.speed;
										var t = "/Date(" + $scope.data.data.sys.sunrise + "000)/";
										$scope.sunrise = moment(t).format("H") + "h" + moment(t).format("mm")+"min";
										var t2 = "/Date(" + $scope.data.data.sys.sunset + "000)/";
										$scope.sunset = moment(t2).format("H") + "h" + moment(t2).format("mm")+"min";
										
								});
	
	  }
	
	 
	$scope.recuprerville = function () {
		$scope.clique=true;
	   $rootScope.$on("scopeville", function (event, args) {
           $scope.ville = args;
	               //console.log($scope.ville);
								openweathermapFactory.getWeatherFromCitySearchByName({
									q:$scope.ville,
									lang : "fr",
									appid:_appid,
								}).then(function(_data){
									//console.info("weather from city by name", _data);
									$scope.loading =false;
									$scope.cestbon = true;
										$scope.data = _data;
										$scope.lat = $scope.data.data.coord.lat;
										$scope.lon = $scope.data.data.coord.lon;
										$scope.temp = Math.round(($scope.data.data.main.temp - 273.15) * 100) / 100;
										$scope.description =  $scope.data.data.weather[0].description
										$scope.tempMax = Math.round(($scope.data.data.main.temp_max - 273.15) * 100) / 100;
										$scope.tempMin = Math.round(($scope.data.data.main.temp_min - 273.15) * 100) / 100;
										$scope.humidity = $scope.data.data.main.humidity;
										$scope.pressure = $scope.data.data.main.pressure;
										$scope.deg = $scope.data.data.wind.deg;
										$scope.speed= $scope.data.data.wind.speed;
										var t = "/Date(" + $scope.data.data.sys.sunrise + "000)/";
										$scope.sunrise = moment(t).format("H") + "h" + moment(t).format("mm")+"min";
										var t2 = "/Date(" + $scope.data.data.sys.sunset + "000)/";
										$scope.sunset = moment(t2).format("H") + "h" + moment(t2).format("mm")+"min";
										
								});
            });
	};
	
	
	//initailialiser 
	
	                            
    
}]);
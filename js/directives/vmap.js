angular.module('app.vmap', [])

.directive('vmap', function ($rootScope) {
    return {
        restrict: 'C',
        link: function (scope,element) {
              jQuery('#vmap').vectorMap({
						  map: 'france_fr',
						  enableZoom: true,
						  showTooltip: true,
						  onRegionClick: function(element, code, region)
                              {	
							    scope.ville = region;
								$rootScope.$emit("scopeville", scope.ville);
			                  }
                        });
        }
    };
});
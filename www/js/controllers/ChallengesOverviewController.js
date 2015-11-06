angular.module('gc.controllers')

.controller('ChallengesOverviewController', function($scope, ChallengesOverview) {

    ChallengesOverview.loadChallangeOverview().then(function(challenges){
        $scope.challenges = challenges;
    }, function(){
        // error
    }).finally(function(){
        // finally
    });
});

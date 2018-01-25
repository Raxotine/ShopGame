app.controller("myCtrl", function($scope) {
        $scope.currentitem = 0;
        $scope.stock = [3, 2, 10];
        $scope.item = ["knife", "sword", "potion"];
        $scope.cost = [20, 100, 5];
        $scope.customeritem = $scope.item[Math.floor(Math.random()*3)];
        //$scope.customerprice = Math.floor(Math.random()*10);
        $scope.gold = 431;
        $scope.buying = 0;
        $scope.ordering = 0;
        $scope.selling = 0;
        $scope.sellingfor = 0;
        $scope.orderingstock = "";
        $scope.checkingstock = "";
        $scope.clock = 9;
        
        
        
        $scope.done = function() {
            $("#taxa").fadeOut(2000, function() {
                $scope.customeritem = $scope.item[Math.floor(Math.random()*3)];
                $("#taxa").text("Do you have a " + $scope.customeritem + " by any chance?")
                $scope.clock += 1;
                $("#taxa").fadeIn(1000, function() {
                    
                })
            })
        }
        $scope.queryorder = function() {
            
            if ($scope.item.indexOf($scope.orderingstock) > -1)
            {
            $scope.ordering = 1;
            }
            else
            {
            $scope.ordering = 0;
            }

            
            /*
            for (i=0; i<$scope.item.length; i++) {
                if (String($scope.orderingstock) === $scope.item[i])
                {
                $scope.ordering = 1;
                }
            }
            */
        }
        $scope.querycheck = function() {
            
            if ($scope.item.indexOf($scope.checkingstock) > -1)
            {
            $scope.selling = 1;
            }
            else
            {
            $scope.selling = 0;
            }
            /*
            for (i=0; i<$scope.item.length; i++) {
                if (String($scope.checkingstock) === $scope.item[i])
                {
                $scope.selling = 1;
                }
            }   
            */
        }
        $scope.ordered = function() {
            console.log($scope.gold > ($scope.buying * $scope.cost));
            if ($scope.gold > ($scope.buying * $scope.cost[0])) 
            {
                $scope.gold -= $scope.buying * $scope.cost[0]
                $scope.stock[0] = $scope.stock[0]+Number($scope.buying);
                $scope.buying = 0;
            }
        }
        $scope.sold = function() {
            if ($scope.checkingstock === $scope.customeritem) 
            {
                if ($scope.stock[$scope.item.indexOf($scope.checkingstock)] > 0)
                {
                    if ($scope.sellingfor >= ($scope.cost[$scope.item.indexOf($scope.checkingstock)] + $scope.cost[$scope.item.indexOf($scope.checkingstock)]/2))
                    {
                    $("#taxa").append("<br><br>You trying to rob me blind or something!");
                    }
                    else
                    if ($scope.sellingfor < $scope.cost[$scope.item.indexOf($scope.checkingstock)])
                    {
                    $("#taxa").append("<br><br>Such a deal! I'm going to have to shop here more often.");
                    $scope.gold += $scope.sellingfor
                    $scope.selling = 0;
                    $scope.stock[$scope.item.indexOf($scope.checkingstock)] = Number($scope.stock[$scope.item.indexOf($scope.checkingstock)])-1
                    $scope.done();
                    }
                    else
                    {
                    $("#taxa").append("<br><br>You drive a hard bargin but I'll pay.");
                    $scope.gold += $scope.sellingfor
                    $scope.selling = 0;
                    $scope.stock[$scope.item.indexOf($scope.checkingstock)] = Number($scope.stock[$scope.item.indexOf($scope.checkingstock)])-1
                    $scope.checkingstock = "";
                    $scope.done();
                    }
                }
                else
                {
                $("#taxa").append("<br><br>Bah! Carry more of the bloody things then!");  
                $scope.done();  
                }
            }
            else
            {
            $("#taxa").append("<br><br>Thats not what I wanted!");
            }
        }
        $scope.outofstock = function() {
        $("#taxa").append("<br><br>Bah! Carry more of the bloody things then!");  
        $scope.done();
        }
        
    });
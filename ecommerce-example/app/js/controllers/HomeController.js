define(['appModule'], function(app)
{
    app.lazy.controller('HomeController',
    [
        '$scope','$resource',
        function($scope,$resource)
        {
        	$scope.message = "Welcome in our shop!!!";

        	$scope.message = "Welcome in our shop!!!";

			var News = $resource('/news/:id');

			$scope.allNews = News.query();

			$scope.currentNews = News.get({id : 1});

			$scope.addedNews = new News;

			$scope.addLike = function(news) {
				news.likes++;
				news.$save();
			}

			$scope.deleteNews = function(news) {
				news.$delete();
				$scope.allNews = News.query();
			}

			$scope.addNews = function() {
				$scope.addedNews.id=-1;
				$scope.addedNews.$save();
				$scope.allNews = News.query();
			}
        }
    ]);
});
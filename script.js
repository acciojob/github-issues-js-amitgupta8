//your code here
$(document).ready(function(){
			var pageNumber = 1;

			function loadIssues(pageNumber){
				$.ajax({
					url: `https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`,
					method: 'GET',
					success: function(response){
						$('#issues_list').empty(); //clear the list before adding new issues
						$.each(response, function(index, issue){
							var issueName = issue.title;
							$('#issues_list').append(`<li>${issueName}</li>`);
						});
						$('h1').text(`Page number ${pageNumber}`);
					}
				});
			}

			loadIssues(pageNumber); //load the issues for page 1 by default

			$('#load_prev').click(function(){
				if(pageNumber > 1){ //don't go back if on page 1
					pageNumber--;
					loadIssues(pageNumber);
				}
			});

			$('#load_next').click(function(){
				pageNumber++;
				loadIssues(pageNumber);
			});
		});

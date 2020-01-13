//function myFunction() {
//	var division = document.getElementById("division");
//	var request = new XMLHttpRequest();
//	request.open('GET', 'ServletAjax', true);
//
//	request.onreadystatechange = function() {
//
//		if ((request.readyState == 4) && (request.status == 200)) {
//			var json = JSON.parse(request.responseText);
//			var display = '';
//			display += "<table style=\"border:1px solid black;\"><tr><td>User Name</td><td>Emp ID</td></tr>";
//			console.log(json)
//			
//			for (i = 0; i < json.length; i++) {
//				display += "<tr><td>" + json[i].username + "</td><td>"
//						+ json[i].employeeId + "</td></tr>";
//			}
//			
//			display += "</table>";
//			division.innerHTML = display;
//		}
//	};
//	request.send();
//}

//$(document)
//		.ready(
//				function() {
//					$("#btn").click(action);
//					function action() {
//						$
//								.ajax({
//									type : 'GET',
//									url : 'ServletAjax',
//									// data:"",
//									dataType : 'json',
//									success : function(json) {
//										var display = '';
//										display += "<table style=\"border:1px solid black;\"><tr><td>User Name</td><td>Emp ID</td></tr>";
//										$(json).each(
//												function(index, value) {
//													console.log(value);
//													display += "<tr><td>"
//															+ value.username
//															+ "</td><td>"
//															+ value.employeeId
//															+ "</td></tr>";
//												});
//										display += "</table>";
//										$("#division").html(display);
//									},
//									error : function(e) {
//										alert("page not found");
//									}
//
//								})
//					}
//				});

$(document).ready(function() {
			$("#btn").click(action);
			function action() {
				$.getJSON('ServletAjax',function(data) {
									var display = '';
									display += "<table style=\"border:1px solid black;\"><tr><td>User Name</td><td>Emp ID</td></tr>";
									$(data).each(
											function(index, value) {
												console.log(value);
												display += "<tr><td>"
														+ value.username
														+ "</td><td>"
														+ value.employeeId
														+ "</td></tr>";
											});
									display += "</table>";
									$("#division").html(display);
								})
			}

		});
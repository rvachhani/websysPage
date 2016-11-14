// The JavaScript function that creates and AJAX get request in order to fill
// The html div with the content of the xml file

$(document).ready(function() {
	$.ajax({
		url: "resources/labs.xml",
		dataType: "xml",
		type: "GET",
		success: function(myXml) {
			var content = "<tr><th>Lab</th><th>Description</th></tr>";
			$(myXml).find("entry").each(function() {
				content += "<tr><td><a href='" + 
				$(this).find("location").text() + "'>" + 
				$(this).find("folderName").text() + "</a></td><td>" + 
				$(this).find("description").text() + "</td></tr>";
			});
			document.getElementById("lab_content").innerHTML = content;
		}, err: function(msg) {
              alert("There was a problem loading the xml file");
        }
	});
});

$(document).ready(function() {
	$.ajax({
		url: "resources/hws.xml",
		dataType: "xml",
		type: "GET",
		success: function(hws) {
			var content = "<tr><th>Lab</th><th>Description</th></tr>";
			$(hws).find("entry").each(function() {
				content += "<tr><td><a href='" + 
				$(this).find("location").text() + "'>" + 
				$(this).find("folderName").text() + "</a></td><td>" + 
				$(this).find("description").text() + "</td></tr>";
			});
			document.getElementById("hw_content").innerHTML = content;
		}, err: function(msg) {
			alert("There was a problem loading the xml file");
		}
	});
});
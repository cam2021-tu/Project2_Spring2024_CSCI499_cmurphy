function apisearch(){
    $.ajax({
        type: 'GET',
        dataType:"jsonp",
        url: "https://www.googleapis.com/customsearch/v1?key=IzaSyBZ1Bei18loj9cpWmbxrNflAEiAP7DAlKA&cx=11a4667f4d4a34a57&q=" + $("#querybox").val(),
        success: function (result) {
            console.log('data: ', result);
            var searchOutput = '';
            var len = result.items.length;
            for (i = 0; i < len; i++) {
                searchOutput += `<p><a href="${result.items[i].title}">${result.items[i].link}</a>: ${result.items[i].snippet}</p>`;
            }
    
            $("#output").html(searchOutput);
    
        }
    });   
}

// DO NOT CHANGE CODE ABOVE EXCEPT LINE 5 AS STATED IN THE ASSIGNMENT. YOU MAY COPY THE ABOVE FUNCTION FOR QUESTION (4) OF JS.

// START TYPING BELOW
document.addEventListener("DOMContentLoaded", function() {
    var searchBtn = document.getElementById("searchBtn");
    var luckyBtn = document.getElementById("luckyBtn");
    var toggleFadeBtn = document.getElementById("toggleFadeBtn");
    var changeBgColorBtn = document.getElementById("changeBgColorBtn");
    var queryInput = document.getElementById("query");
    var searchResultsDiv = document.getElementById("searchResults");

    // Search Button Click Event
    searchBtn.addEventListener("click", function() {
        var query = queryInput.value.trim();
        if (query !== "") {
            apiSearch(query);
        }
    });

    function apisearch(query) {
        $.ajax({
            type: 'GET',
            dataType: "jsonp",
            url: "https://www.googleapis.com/customsearch/v1?key=IzaSyBZ1Bei18loj9cpWmbxrNflAEiAP7DAlKA&cx=11a4667f4d4a34a57&q=" + encodeURIComponent(query),
            success: function(result) {
                console.log('data: ', result);
                var searchOutput = '';
                if (result.items && result.items.length > 0) {
                    result.items.forEach(function(item) {
                        searchOutput += `<p><a href="${item.link}">${item.title}</a>: ${item.snippet}</p>`;
                    });
                } else {
                    searchOutput = "<p>No results found</p>";
                }
                searchResultsDiv.innerHTML = searchOutput;
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
            }
        });
    }

    // Lucky Button Click Event
    luckyBtn.addEventListener("click", function() {
        var query = queryInput.value.trim();
        if (query !== "") {
            apiSearchLucky(query);
        }
    });

    // Toggle Fade Button Click Event
    toggleFadeBtn.addEventListener("click", function() {
        toggleFade(fadeh1);
        toggleFade(query);
        toggleFade(searchBtn);
    });

    // Change Background Color Button Click Event
    changeBgColorBtn.addEventListener("click", function() {
        changeBgColor();
    });

    // API Search Function
    function apiSearch(query) {
        // This is where you would call your actual search API
        searchResultsDiv.innerHTML = "<p>Search results for: <strong>" + query + "</strong></p>";
    }

    // API Search Lucky Function
    function apiSearchLucky(query) {
        // This function is similar to apiSearch, but it only displays the first result
        searchResultsDiv.innerHTML = "<p>Lucky result for: <strong>" + query + "</strong></p>";
    }

    // Toggle Fade Function
    function toggleFade(element) {
        if (element.style.opacity === "0") {
            element.style.opacity = "1";
        } else {
            element.style.opacity = "0";
        }
    }

    // Change Background Color Function
    function changeBgColor() {
        var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    }
});

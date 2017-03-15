$( document ).ready(function(){
    $.getJSON("http://it.wikipedia.org/w/api.php?action=query&format=json&list=random&rnnamespace=0&rnlimit=1&callback=?",     function(json_data) {
            var title = json_data['query']['random']['0']['title'];
            $.getJSON("http://it.wikipedia.org/w/api.php?action=parse&format=json&callback=?", {page:title, prop:"text"}, function(data) {
                                element = data['parse']['text']['*'];
                                title =  data['parse']['title'];
                                $("#content").append(element);
                                $("#title").append(title);
                            });
    });
});
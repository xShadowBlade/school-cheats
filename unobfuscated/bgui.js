javascript:(function () {        
    function getScript(url, success) {            
        var script = document.createElement('script');            
        script.src = url;            
        var head = document.getElementsByTagName('head')[0];            
        var completed = false;            
        script.onload = script.onreadystatechange = function () {                
            if (!completed && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {                    
                completed = true;                    
                success();                    
                script.onload = script.onreadystatechange = null;                    
                head.removeChild(script);                
            }            
        };            
        head.appendChild(script);        
    }        
    getScript("https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js", function () {            
        getScript("https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.js", function () {                
            var myStylesLocation = "https://code.jquery.com/ui/1.13.0-alpha.1/themes/smoothness/jquery-ui.css";                
            $('<link rel="stylesheet" type="text/css" href="'+myStylesLocation+'" >').appendTo("head");                
            $("<div id='dialog'; title='Bookmarklet UI'; style='border:none; background-color:white; font-size:80%'; <p>This is text inside a bookmarklet.</p></div>").appendTo("body");                
            $( "#dialog" ).dialog();            
        });        
    });})();
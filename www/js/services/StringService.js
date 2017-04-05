angular.module('ecoop')
    
    .factory('StringService', function(API_ENDPOINT){

        String.prototype.format = function (args) {
            var str = this;
            return str.replace(String.prototype.format.regex, function(item) {
                var intVal = parseInt(item.substring(1, item.length - 1));
                var replace;
                if (intVal >= 0) {
                    replace = args[intVal];
                } else if (intVal === -1) {
                    replace = "{";
                } else if (intVal === -2) {
                    replace = "}";
                } else {
                    replace = "";
                }
                return replace;
            });
        };
        String.prototype.format.regex = new RegExp("{-?[0-9]+}", "g");
        
        var getURL = function(endPoint, params)
        {
            var _url = API_ENDPOINT.host + endPoint;
            return _url.format(params);
        };

        return {
            getURL:       getURL
        };
    })
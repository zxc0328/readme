const marked = require('marked');

export default {
	get: function(val){
		const rawMarkup = marked(val, {
            sanitize: true
        });
        return {
            __html: rawMarkup
        };
	}

}
angular.module('ecoop')

    .constant(
        'API_ENDPOINT',{
            host:       'https://ecoop.joulesapp.de/dev2/restApi/',
            api_key:	'ee8babb5b27cd7d6785962c627599cb8',

            suppliers:  'suppliers?energy_type={0}&name={1}'
        })

    .constant(
    	'CONSTANTS', {
    		energy_types: ['electricity', 'gas']
    	})
        
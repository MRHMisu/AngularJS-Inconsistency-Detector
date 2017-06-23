(function(angular) {
'use strict';
    function constructor() {
       var list=[
            {
                id: 'escape',
                name: 'Escape',
                notyet: true
            },
            {
                id: 'htmlentities',
                name: 'HtmlEntities',
                notyet: false
            },
            {
                id: 'urlencode',
                name: 'URLencode',
                notyet: false
            },
            {
                id: 'base64',
                name: 'Base64',
                notyet: false
            },
            {
                id: 'md5',
                name: 'MD5',
                notyet: false
            },
            {
                id: 'sha1',
                name: 'SHA1',
                notyet: false
            },
            {
                id: 'sha256',
                name: 'SHA256',
                notyet: false
            },
            {
                id: 'gost',
                name: 'Gost',
                notyet: true
            },
            {
                id: 'cr32',
                name: 'CR32',
                notyet: false
            },
            {
                id: 'whirlpool',
                name: 'Whirlpool',
                notyet: true
            },
            {
                id: 'ripemd128',
                name: 'Ripemd128',
                notyet: true
            },
            {
                id: 'snefru',
                name: 'Snefru',
                notyet: true
            }
        ];

        this.list=list;
        
    }

constructor.$inject = [];
angular.module('kodigon').service('algorithms', constructor);

})(window.angular);
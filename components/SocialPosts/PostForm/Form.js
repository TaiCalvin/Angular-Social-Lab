"use strict";
{
    angular.module('app')
        .component('other', {
            templateUrl: 'components/SocialPosts/PostForm/Form.html',
            bindings: {
                onSubmit: '<',
                hide: '<'
            }
        })
}
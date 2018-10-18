"use strict";
{
    angular.module('app')
        .component('post', {
            templateUrl: 'components/SocialPosts/Post/post.html',
            bindings: {
                item: '<'
            }
        })
}
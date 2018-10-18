"use strict";

{
    angular.module('app')
        .controller('SocialController', function(){
            const $ctrl = this;
            $ctrl.thoughts = 
            [{title:'Dog', done: 'Lorem ipsum dolor sit amet.'},
            {title:'Cat', done: 'Lorem ipsum dolor sit amet.'}];
            
        $ctrl.addText = function() {
            $ctrl.show = true;
        }

        $ctrl.hideText = function(){
            $ctrl.show = false;
        }

        $ctrl.addPost = function(post){
            $ctrl.thoughts.unshift(post)
            $ctrl.hideText();
        }
        });

    
}
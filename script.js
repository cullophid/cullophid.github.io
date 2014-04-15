/*jslint browser:true, nomen:true*/
/*global $:true*/
$(function() {
    'use strict';
    $('.animate').each(function() {
        var $this = $(this)
        setTimeout(function() {
            $this.css('opacity', 1);
        }, (Math.random() * 3000));
    });
});
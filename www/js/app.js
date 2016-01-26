/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

// function myEventHandler() {
//     "use strict" ;
// // ...event handler code here...
// }


// ...additional event handlers here...
var api_domain = 'http://simple-api.dev';

var info = function(id) {
    $.get(api_domain + '/location/' + id, function(data) {
        var info = data.data;
        alert(info.name + ' location at ' + info.latitude + ', ' + info.longitude);
    });
}

var generate_list = function(data,container) {
	$('#'+container).html('');
	var list = data;
    var str = '';
    $.each(list, function(index, val) {
        str += '<a onclick="info('+val.id+')" style="cursor:pointer;" class="list-group-item allow-badge widget uib_w_8" data-uib="twitter%20bootstrap/list_item" data-ver="1">'
        str += '<h4 class="list-group-item-heading">'+val.name+'</h4>';
        str += '<p class="list-group-item-text">'+val.description+'</p>';
        str += '</a>';
    });
    $('#'+container).append(str);
}
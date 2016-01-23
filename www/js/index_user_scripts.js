/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
        /* button  #login */
    $(document).on("click", "#login", function(evt)
    {
         /*global activate_page */
         activate_page("#cord-app-list"); 
    });
    
        /* button  #btn-new-cord-app */
    $(document).on("click", "#btn-new-cord-app", function(evt)
    {
         /*global activate_page */
         activate_page("#cord-app-new"); 
    });
    
        /* button  #submit-form */
    $(document).on("click", "#submit-form", function(evt)
    {
         /*global activate_page */
         activate_page("#cord-app-list"); 
    });
    
        /* button  #logout */
    $(document).on("click", "#logout", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
    });
    
        /* button  #submit-form-cancel */
    $(document).on("click", "#submit-form-cancel", function(evt)
    {
         /*global activate_page */
         activate_page("#cord-app-list"); 
    });
    
        /* button  #btn-get-photo */
    $(document).on("click", "#btn-get-photo", function(evt)
    {
        /* your code goes here */ 
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
            destinationType: Camera.DestinationType.DATA_URL
        });

        function onSuccess(imageData) {
            var image = document.getElementById('myImage');
            image.src = "data:image/jpeg;base64," + imageData;
            $('#photo').val(image.src);
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
    });
    
        /* button  #btn-get-post */
    $(document).on("click", "#btn-get-post", function(evt)
    {
        /* your code goes here */ 
        navigator.geolocation.getCurrentPosition(geolocationSuccess);
        
        function geolocationSuccess(position) {
            $('#longitude').val(position.coords.longitude);
            $('#latitude').val(position.coords.latitude);
            $('#input-gps-loc').html('Location: '+position.coords.longitude+', '+position.coords.latitude);
        }
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();



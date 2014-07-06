(function($){
    $.ajax({
     dataType: 'json',
     header: {'Content-Type': 'application/json'},
     crossDomain: true,
     url: 'http://booklog.io/1/post',
     success: function(response){
                  $('#postTemplate')
                        .tmpl(response.posts)
                        .appendTo('#content');
        }
    });

 }) ($);
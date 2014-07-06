(function($){
    var response ={}; 
 
    var start=function(){
        var content=$('#content');
        var posts=response.posts; //array
        var html ='';
        posts.forEach(function(post){
            html+= '<div class="alert-info">';
            html+= post.subject;
            html+= '</div>';
        });
        content.html(html);
    };
    $.ajax({
     dataType: 'json',
     header: {'Content-Type': 'application/json'},
     crossDomain: true,
     url: 'http://booklog.io/1/post',
     success: function(data, textStatus, jqXHR){
                response = data;
                start();
        }
    });

 }) ($);
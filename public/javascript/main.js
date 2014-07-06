(function($){
    var response ={}; 
 
    var start=function(){
        var content=$('#content');
        //var index;

        //for (index=0; index<response.posts.length;++index){
        //   content.html(response.posts[index].subject);
        //}
        var posts=response.posts; //array
        var html ='';
        posts.forEach(function(post){
            html+= '<h2>';
            html+= post.subject;
            html+= '</h2>';
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
$(document).ready(function (){


    /**********************NavbarColorChangeOnScroll**********************/
    /**********************NavbarColorChangeOnScroll**********************/
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e){
        e.preventDefault();
        $(document).off("scroll");

        $('#navul a').each(function (){
            $(this).removeAttr('id');
        })
        $(this).attr('id', 'currentPart');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 20
        }, 500, 'swing', function (){
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    function onScroll(event){
        var scrollPosition = $(document).scrollTop();
        $('#navul a').each(function (){
            var currentLink = $(this);
            var refElement = $(currentLink.attr("href"));
            if(refElement.position().top <= scrollPosition &&
                refElement.position().top + refElement.height() > scrollPosition)
            {
                $('#navul li a').removeAttr('id');
                currentLink.attr('id', 'currentPart');
            }

            else
            {
                currentLink.removeAttr('id');
            }
        });
    }


    /***********************ImageToFancyBoxOnClick***********************/
    /***********************ImageToFancyBoxOnClick***********************/
    $(function($){
        var addToAll = false;
        var gallery = true;
        var titlePosition = 'inside';
        
        $(addToAll ? 'img' : 'img.fancybox').each(function(){
            var $this = $(this);
            var title = $this.attr('title');
            var src = $this.attr('data-big') || $this.attr('src');
            var a = $('<a href="#" class="fancybox"></a>').attr('href', src).attr('title', title);
            $this.wrap(a);
        });
        
        if (gallery)
            $('a.fancybox').attr('rel', 'fancyboxgallery');
            
        $('a.fancybox').fancybox({
            titlePosition: titlePosition
        });
    });

    $.noConflict();


    /***********************DownlaodButtonHover***********************/
    /***********************DownlaodButtonHover***********************/
    $(function() {
        $('#cvDownload').bind("mouseover", function(){
            var color  = $(this).css("color");

            $(this).css("color", "#D5F800");

            $(this).bind("mouseout", function(){
                $(this).css("color", color);
            });  
        });   
    });


    /***********************DownlaodButtonHover***********************/
    /***********************DownlaodButtonHover***********************/
    



});
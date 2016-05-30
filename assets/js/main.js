$(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $('.footer').load('include-footer.html');


    // for employer Gallery
    $('.employerGallery .gllaeryPicList img').on('click',function(){
    	var imgBigSrc = $(this).attr('data-src');
    	$(this).parents('.employerGallery').find('.gllaeryPic img').attr('src', imgBigSrc)
    })
})
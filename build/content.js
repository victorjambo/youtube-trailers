/**
 * Responsible for
 * 1. Adding the youtube button to the page
 * 2. Show the modal
 */

var $trailer = $(`
  <a class="btn movie-info-start-watch-btn" id="trailer" data-toggle="modal" data-src="https://www.youtube.com/embed/IP7uGKgJL8U" data-target="#myModal">
    <div class="play-arrow-container">
      <div class="play-arrow"></div>
    </div>
    TRAILER
  </a>
`)
$(".row-fluid:contains('START')").append($trailer);

var $modal = $(`
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <button type="button" class="close" id="close-modal" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <!-- 16:9 aspect ratio -->
          <div class="embed-responsive embed-responsive-16by9" id="embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="" id="video" allowscriptaccess="always" allow="autoplay"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
`);
$("body").append($modal);

$('#trailer').click(function() {
    var $videoSrc = $(this).data("src");
    $('#myModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" );
    })
});

// stop playing the youtube video when I close the modal
$('#myModal').on('hide.bs.modal', function (e) {
    $("#video").attr('src', '');
})

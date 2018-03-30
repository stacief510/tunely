/* CLIENT-SIDE JS
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 */
 
$(document).ready(function() {
  console.log('app.js loaded!');



  $.ajax({
      method: 'GET',
      url: '/api/albums' ,
      success: handleSuccess,
      error: handleError
    });
        function handleSuccess(albums){
            albums.forEach(function(album){
              renderAlbum(album);
            });
        }
        function handleError (err){
          console.log('There is an error', + err); 
        }

  $('#album-form').on('submit', function(event){
        event.preventDefault();
        var formData = $(this).serialize();
        console.log(formData);
        this.reset();
  });


// this function takes a single album and renders it to the page
function renderAlbum(album) {

    $('#albums').append(` 
      <div class="row album">
            <div class="col-md-10 col-md-offset-1">
              <div class="panel panel-default">
                <div class="panel-body">

                <!-- begin album internal row -->
                  <div class='row'>
                    <div class="col-md-3 col-xs-12 thumbnail album-art">
                      <img src="images/800x800.png" alt="album image">
                    </div>

                    <div class="col-md-9 col-xs-12">
                      <ul class="list-group">
                        <li class="list-group-item">
                          <h4 class='inline-header'>Album Name:</h4>
                          <span class='album-name'>${album.name}</span>
                        </li>

                        <li class="list-group-item">
                          <h4 class='inline-header'>Artist Name:</h4>
                          <span class='artist-name'>${album.artistName}</span>
                        </li>

                        <li class="list-group-item">
                          <h4 class='inline-header'>Released date:</h4>
                          <span class='album-releaseDate'>${album.releaseDate}</span>
                        </li>
                      </ul>
                    </div>

                  </div>
                  <!-- end of album internal row -->

                  <div class='panel-footer'>
                  </div>

                </div>

              </div>

            </div>

          </div>`);
}

}); //doc ready ending. DONT DELETE

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


  $('#album-form').on('submit', function(event){
        event.preventDefault();
        var formData = $(this).serialize();
        console.log(formData);
        this.reset();

        $.ajax({
          method: 'POST',
          url: '/api/albums',
          data: formData,
          success: successfulAlbum,
          error: handleError
        });
       });

}); //doc ready ending. DONT DELETE

  function handleSuccess(albums){
      albums.forEach(function(album){
        renderAlbum(album);
      });
  }
  function handleError (err){
    console.log('There is an error', + err); 
  }

  function successfulAlbum(createdAlbum){
       renderAlbum(createdAlbum);
      };
  
$('#albums').on('click', '.add-song', function(event){
  console.log('button clicked');
});



// this function takes a single album and renders it to the page
function renderAlbum(album) {

      var arrayOfSongStr = album.songs.map(function(eachSong){
        return `${eachSong.trackNumber} - ${eachSong.name}`
      });
      var formattedSongsStr = arrayOfSongStr.join(', ');
      

    $('#albums').append(` 
      <div data-album-id="album._id" class="row album">
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

                         <li class="list-group-item">
                          <h4 class='inline-header'>Songs:</h4>
                          <span class='album-releaseDate'>${formattedSongsStr}</span>
                        </li>
                      </ul>
                    </div>

                  </div>
                  <!-- end of album internal row -->

                  <div class='panel-footer'>
                  </div>
                    <div class='panel-footer'>
                        <button class='btn btn-primary add-song'>Add Song</button>
                    </div>
                </div>

              </div>

            </div>

          </div>`);
}


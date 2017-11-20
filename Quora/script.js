
function initMap() {
        var myLatLng = {lat: 20.5937, lng: 78.9629};

        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('googleMap'), {
          center: myLatLng,
          zoom: 4
        });

        // Create a marker and set its position.
        var marker = new google.maps.Marker({
          map: map,
          position: myLatLng,
          title: 'Hello World!'
        });

        var myOptions = {
          zoom: 13,
          center: myLatLng
        }

        var geocoder = new google.maps.Geocoder();
        var place;
        google.maps.event.addListener(map, 'click', function(event) {
          geocoder.geocode({
            'latLng': event.latLng
          }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              if (results[5]) {
                alert(results[5].formatted_address);
                //place=results[5];
                //alert(place);
                showUser(results[5].formatted_address);
                showQues(results[5].formatted_address);
              }
              else if (results[4]) {
                alert(results[4].formatted_address);
                //place=results[4];
                //alert(place);
                showUser(results[4].formatted_address);
                showQues(results[4].formatted_address);
              }
              else if (results[3]) {
                alert(results[3].formatted_address);
                //place=results[3];
                //alert(place);
                showUser(results[3].formatted_address);
                showQues(results[3].formatted_address);
              }
              else if (results[2]) {
                alert(results[2].formatted_address);
                //place=results[2];
                //alert(place);
                showUser(results[2].formatted_address);
                showQues(results[2].formatted_address);
              }
              else if (results[1]) {
                alert(results[1].formatted_address);
                //place=results[1];
                //alert(place);
                showUser(results[1].formatted_address);
                showQues(results[1].formatted_address);
              }
              else if (results[0]) {
                alert(results[0].formatted_address);
              //  place=results[0];
                //alert(place);
                showUser(results[0].formatted_address);
                showQues(results[0].formatted_address);

              }
            }

          });
        });
      }

      function showUser(place) {
        alert(place);
              if (window.XMLHttpRequest) {
                  // code for IE7+, Firefox, Chrome, Opera, Safari
                  xmlhttp = new XMLHttpRequest();
              } else {
                  // code for IE6, IE5
                  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
              }
              xmlhttp.onreadystatechange = function() {
                  if (this.readyState == 4 && this.status == 200) {
                      document.getElementById("trendingList").innerHTML = this.responseText;
                  }
              };
              xmlhttp.open("GET","map.php?q="+place,true);
              xmlhttp.send();

               //$('#trendingList').load('map.php?q='+place);
               //$('mainpost').load('map.php?q='+place);
          }
          function showQues(place) {
            alert(place);
                  if (window.XMLHttpRequest) {
                      // code for IE7+, Firefox, Chrome, Opera, Safari
                      xmlhttp = new XMLHttpRequest();
                  } else {
                      // code for IE6, IE5
                      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                  }
                  xmlhttp.onreadystatechange = function() {
                      if (this.readyState == 4 && this.status == 200) {
                          document.getElementById("mainpost").innerHTML = this.responseText;
                      }
                  };
                  xmlhttp.open("GET","ques.php?q="+place,true);
                  xmlhttp.send();

                   //$('#trendingList').load('map.php?q='+place);
                   //$('mainpost').load('map.php?q='+place);
              }

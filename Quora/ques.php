<?php


if(isset($_GET['q'])){
  $q = $_GET['q'];

  $con = mysqli_connect('localhost','root','sakshamR','quora');
  if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
  }

  mysqli_select_db($con,"ajax_demo");

$sql="SELECT * FROM question WHERE Country = '".$q."'";
$result = mysqli_query($con,$sql);


while($row = mysqli_fetch_array($result)) {

  echo'<div id ="mainpost" class="post">
    <div class="post-title">'.$row['Question'].'</div>
    <div class="post-pic left fullheight"><img src="https://qph.ec.quoracdn.net/main-thumb-341517646-50-uhfkyhxiqdxycsavqruchbicuqrgnoze.jpeg" class="author-pic"></div>
    <div class="post-content left">
      <div class="author-details"><span class="bold">Isha Uniyal</span>, <span>studied at Ryan International School [ Mayur-Vihar]
Answered 7h ago</span>.</div>
      <div class="text-grey">Updated July 14</div>
      <div class="answer">

          <br>'.$row['Answer'].

      '</div>
      <div class="row">
        <div class="upvote button left text-grey bg-white">
          <a href="" >Upvote</a>
        </div>
        <div class="downvote button left text-grey bg-white">
          <a href="" >Downvote</a>
        </div>
        <div class="comments button left text-grey bg-white">
          <a href="" >Comment</a>
        </div>

        <hr class="clear hide">
      </div>
    </div>
    <hr class="clear hide">
  </div>';
}
mysqli_close($con);
}
 ?>

  <?php
  if(isset($_GET['q'])){
    $q = $_GET['q'];

    $con = mysqli_connect('localhost','root','sakshamR','quora');
    if (!$con) {
      die('Could not connect: ' . mysqli_error($con));
    }

    mysqli_select_db($con,"ajax_demo");
    $sql="SELECT * FROM trendT WHERE Country = '".$q."'";
    $result = mysqli_query($con,$sql);

    echo '<div class="text-black" style="margin-top:10%">'.$q.'</div>';
    while($row = mysqli_fetch_array($result)) {

      echo '<li class="text-black"><i class="fa fa-circle text-feed" aria-hidden="true"></i>'  .$row['Topic']. '</li>';


    }



    mysqli_close($con);
  }

  ?>

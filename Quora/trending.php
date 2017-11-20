<!DOCTYPE html>

<html>
<head>
  <title>Quora Homepage</title>
  <meta name="viewpot" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" type="text/css" href="stylesheet.css">
  <link href="font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
  <script type="text/javascript" src="script.js"></script>
</head>

<body>
  <div id="main">
    <!--Navigation bar starts-->
    <header>
      <div class="inner">
        <nav>
          <a href="#" class="logo">Quora</a>
          <ul >
            <li class="search-bar left"><input type="search" cols="30" placeholder="Ask or Search Quora"></li>
            <li><a href="index.html" class="lihover"><i class="fa fa-home"></i>Home</a></li>

            <li class="lihover"><a href="trending.html" >Ask</a></li>
            <li class="lihover"><a href="#">Blog</a></li>
            <li class="lihover"><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <!--Navigation Bar Ends-->

    <!--Left Column Starts-->
    <div class="container aside-panel left bg-white card">
      <h3 class="feeds-heading font-medium bolder  left">Feeds</h3>
      <a href="" class="right" style="position:relative;top:6px;">Edit</a>
      <hr class="clear">
      <div class="text-black" style="margin-top:10%">Topics</div>
      <ul class="fa-ul " id="trendingList">

      <!--  <li class="text-black"><i class="fa fa-circle text-feed" aria-hidden="true"></i>  Computer Science</li>
        <li class="text-black"><i class="fa fa-circle text-feed" aria-hidden="true"></i> Business</li>
        <li class="text-black"><i class="fa fa-circle text-feed" aria-hidden="true"></i> Productivity</li>
        <li class="text-black"><i class="fa fa-circle text-feed" aria-hidden="true"></i> Machine Learning</li>
        <li class="text-black "><i class="fa fa-circle text-feed" aria-hidden="true"></i> Motivational</li>-->

        <?php
        $q = echo $_GET['q'];

        $con = mysqli_connect('localhost','root','sakshamR','quora');
        if (!$con) {
          die('Could not connect: ' . mysqli_error($con));
        }

        mysqli_select_db($con,"ajax_demo");
        $sql="SELECT * FROM trendT WHERE Country = '".$q."'";
        $result = mysqli_query($con,$sql);


        
        mysqli_close($con);
        ?>

      </ul>

      <div style="margin-top: 20%"></div>

    </div>
    <!--Left Column Ends Here-->

    <!--Main Column Starts-->
    <div class="container centre-panel left bg-white text-black card">
      <h3 class="panel-heading font-medium bold ">Top Stories For You</h3>
      <hr>

      <section class="tab" id="discover-content">

        <div id="googleMap" style="width: 100%; height: 300px;"  ></div>

        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAcDeQ5wihXivPd7fjC79eN0WAQ6UzQ29k&callback=initMap"></script>


      </div>
      <div class="container aside-panel right bg-white card" style="text-align: center">
        <h3 class="feeds-heading font-medium bolder  left" style="color:black;">There's more on Quora...</h3>
        <hr class="clear"></hr>
        <p>Pick new people and topics to follow and see the best answers on Quora.</p>
        <br><br>
        <a href="" class="updateinterests">Update Your Interests</a>
      </div>


    </body>
    </html>

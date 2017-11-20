<!DOCTYPE html>

<html>
<head>
  <title>Quora Homepage</title>
  <meta name="viewpot" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" type="text/css" href="stylesheet.css">
  <link href="font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
  <script type="text/javascript" src="script.js"></script>
  <script
  src="https://code.jquery.com/jquery-3.2.1.js"
  integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
  crossorigin="anonymous"></script>
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


       <li class="text-black"><i class="fa fa-circle text-feed" aria-hidden="true"></i>  Computer Science</li>
        <li class="text-black"><i class="fa fa-circle text-feed" aria-hidden="true"></i> Business</li>
        <li class="text-black"><i class="fa fa-circle text-feed" aria-hidden="true"></i> Productivity</li>
        <li class="text-black"><i class="fa fa-circle text-feed" aria-hidden="true"></i> Machine Learning</li>
        <li class="text-black "><i class="fa fa-circle text-feed" aria-hidden="true"></i> Motivational</li>


      </ul>


      <div style="margin-top: 20%"></div>

    </div>
    <!--Left Column Ends Here-->

    <!--Main Column Starts-->
    <div class="container centre-panel left bg-white text-black card">
      <h3 class="panel-heading font-medium bold ">Top Stories For You</h3>
      <hr>



        <div id="googleMap" style="width: 100%; height: 300px;"  >


        </div>

        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAcDeQ5wihXivPd7fjC79eN0WAQ6UzQ29k&callback=initMap"></script>

        <div id="mainpost" class="post">
          <div class="post-title">How can an Indian student get admission into Harvard University?</div>
          <div class="post-pic left fullheight"><img src="https://qph.ec.quoracdn.net/main-thumb-341517646-50-uhfkyhxiqdxycsavqruchbicuqrgnoze.jpeg" class="author-pic"></div>
          <div class="post-content left">
            <div class="author-details"><span class="bold">Isha Uniyal</span>, <span>studied at Ryan International School [ Mayur-Vihar]
  Answered 7h ago</span>.</div>
            <div class="text-grey">Updated July 14</div>
            <div class="answer">

                <br>Hey! Well I think I can answer this question because I also want admissions in Harvard and I have done a lot of research.. So, getting admissions in a prestigious IVY college like Harvard is 70% hardwork and 30%luck. You need to have stellar academics and extra curriculars. Don't indulge in a lot of extracurriculars and affect your academics! Do a few but excel in that. Also these colleges want to see leadership skills in you so if you are the president or prime minister of your school then it will be highly beneficial. You will have to send recommendations (atleast2). Prepare for your SAT / ACT exam. And you'll have to excel in that too. Having a good GPA is a plus point but if you don't then you'll have to compensate for that in your SAT/ACT scores. Coming to the common app essay.. Your admissions depend a lot on your essay so try and be yourself in your essay. Don't write anything fake. Describe your history, opinions, activities... Harvard people want to know you! The other 30% is luck because there are students who have a perfect 4.1 GPA and perfect SAT/ACT scores but still don't get in. So just give your best. Don't worry if you don't get in. Harvard doesn't describe your future!

            </div>
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
        </div>

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

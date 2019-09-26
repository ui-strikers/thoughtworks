<!DOCTYPE html>
<html>
<head>
	<title>Image Slides Show</title>
	
</head>

<body>
	<header>
		<h2>
			Image Slides Show
		</h2>
	</header>
	<main>
		<section>
			<figure id="image">
			 <img  id="slidesImage" src="../images/butterfly-1127666__340.jpg" width="500" height="400">  
			</figure>
			<div>
				<!-- <input type="button" name="button" id="previous" value="previous" onclick="previous();" /> -->
				<input type="button" name="button" id="next" value="next" onclick="start();" />
				<input type="button" name="button" id="stop" value="stop" onclick="stop();" />
			</div>
		</section>
	</main>
<script type="text/javascript">
		//Images Array
		var images = ['../images/photo-1500622944204-b135684e99fd.jpeg',
		'../images/butterfly-1127666__340.jpg',
		'../images/photo-1500622944204-b135684e99fd.jpeg',
		'../images/photo-1500622944204-b135684e99fd.jpeg'];
         var i = 0; 
         //createing function to show images one by one
		function slideShow() {
		 	document.getElementById('slidesImage').src = images[i];
		 	console.log( images[i]);
		 	if(i < (images.length- 1)){
		 		i++;
		 	}
		 	else{
		 		i =0;
		 	}
		  
		}
		 
		setInterval(slideShow,2000);
</script>
	
</body>
</html>
<!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 ie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 ie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 ie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8" />

	<!-- Use the .htaccess and remove these lines to avoid edge case issues.-->
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

	<title>Javascript Shopping Cart - simpleCart(js) </title>
	
	<!--SEO & Social Content-->
	<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
	<meta property="og:title" content="" />
	<meta property="og:description" content="" />
	<meta property="og:image" content="" />
	<meta name="description" content="" />
	<meta name="author" content="" />

	<!-- Mobile viewport -->
	<meta name="viewport" content="width=device-width,initial-scale=1" />

	<!-- CSS-->
	<link rel="stylesheet" href="/assets/css/style.css" />
	<link rel="stylesheet" type="text/css" href="/assets/css/jquery.snippet.css" />
	<link rel="stylesheet" type="text/css" href="/assets/css/uniform.dark.css" />
	

	<!-- All JavaScript at the bottom, except for Modernizr -->
	<script src="/assets/js/libs/modernizr-2.0.6.min.js"></script>
	<script type="text/javascript">
	  var _bugHerdAPIKey = 'e17e5c93-4185-482c-ba7c-c925b546d45d';
	  (function (d, t) {
	    var bh = d.createElement(t), s = d.getElementsByTagName(t)[0];
	    bh.type = 'text/javascript';
	    bh.src = "//www.bugherd.com/bugherd.js?";
	    s.parentNode.insertBefore(bh, s);
	  })(document, 'script');
	</script>
	<meta name="google-site-verification" content="WcY30KvAx7r1ibqGt6J2hv8V_Uas-sVPVoMPMvmEjZ0" />
	
</head>

<body>
	<div id="container" class="clearfix">
		<h1><a href="/">simpleCart(js)</a></h1>
		<div id="content">
			<header>
				<nav id="mainNavigation">
					<ul>
						<li><a href="http://simplecartjs.org/features">Features</a></li>
<li class="last"><a href="http://simplecartjs.org/documentation">Documentation</a></li>

						<li class="last"><a href="http://github.com/wojodesign/simplecart-js">Source</a></li>
					</ul>
				</nav>
				
				<div class="cartInfo"><span class="simpleCart_quantity"></span> items</div>
				<div id="cartPopover">
					<div id="triangle">&#x25B2;</div>
					<div class="simpleCart_items"></div>
					<div id="cartData" class="clearfix">
						<div class="left"><strong>Items: </strong><span class="simpleCart_quantity"></span></div>
						<div class="right"><strong>Total: </strong><span class="simpleCart_total"></span></div>
					</div>
					<div id="popoverButtons" class="clearfix">
						<a href="/cart/" class="hudbtn left">View</a>
						<a href="javascript:;" class="simpleCart_checkout hudbtn primary right">Checkout</a>
					</div>
				</div><!--End #cartPopover-->
				
				
					<a href="https://github.com/wojodesign/simplecart-js/zipball/master" class="btnSmallDownload"><span>Download</span></a>
				
			</header><!--End header-->

	<section class="intro row">
		<div class="one-half">
			<h2 class="welcome">A free and open-source javascript shopping cart that easily integrates with your current website.</h2>
			<a href="https://github.com/wojodesign/simplecart-js/zipball/master" class="btnDownload"><span>Download</span></a>
		</div>
		<div id="demo" class="one-half">
			<div id="demoShelf">
				<div class="simpleCart_shelfItem">
					<div class="tooltip">
						<span class="item_price">$19.99</span>
						<a href="javascript:;" class="item_add">Add to Cart</a>
					</div>
					<img src="/assets/images/inceptiondvd.png" alt="Sample Product" class="item_image item_add"/>
					<span class="item_name">Inception</span>
				</div>
				<div class="simpleCart_shelfItem">
					<div class="tooltip">
						<span class="item_price">$59.99</span>
						<a href="javascript:;" class="item_add">Add to Cart</a>
					</div>
					<img src="/assets/images/nhl12.png" alt="Sample Product" class="item_image item_add"/>
					<span class="item_name">NHL 12</span>
				</div>
				<!-- <div class="simpleCart_shelfItem">
									<div class="tooltip">
										<span class="item_price">$9.99</span>
										<a href="javascript:;" class="item_add">Add to Cart</a>
									</div>
									<img src="/assets/images/blackkeysbrothers.png" alt="Sample Product" class="item_image"/>
									<span class="item_name">Black Keys - Brothers</span>
								</div> -->
				<div class="simpleCart_shelfItem">
					<div class="tooltip">
						<span class="item_price">$12.99</span>
						<a href="javascript:;" class="item_add">Add to Cart</a>
					</div>
					<img src="/assets/images/goodtogreat.png" alt="Sample Product" class="item_image item_add"/>
					<span class="item_name">Good To Great</span>
				</div>
			</div>
			<span id="demoArrows">Give the demo a try</span>
		</div><!--End #demo -->
	</section>
	<section class="row">
		<span class="one-half home-page-code" >
			<pre class="js">simpleCart({
  checkout: {
    type: "PayPal",
    email: "you@yours.com"
  }
});</pre>
		</span>
		<span class="one-half">
			<h2>Ecommerce in Minutes.</h2>
			<div class="largeText"><p>
	No databases, no programming, no headaches. A simple javascript shopping cart that you can setup in minutes. It&#39;s lightweight, fast, simple to use, and completely customizable. <strong>All you need to know is basic HTML.</strong></p>
</div>
			<p>
				<a href="/features/" class="large btn"><span class="icn icnList">Browse Features</span></a>
			</p>
		</span>
	</section>

		<footer>
			<h1 class="left"><a href="/">simpleCart(js)</a></h1>
			<div class="right">
				<a href="http://github.com/wojodesign/simplecart-js" target="_blank" class="icnGithub">Github</a>
				&nbsp;&nbsp;
				<a href="http://twitter.com/simplecartjs" target="_blank" class="icnTwitter">Twitter</a>
			</div>
		</footer>
	</div><!-- End #content -->
</div><!-- End #container -->

<!-- JavaScript -->
<!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if offline -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="/assets/js/libs/jquery-1.6.2.min.js"><\/script>')</script>

<script src="/assets/js/simpleCart-latest.php"></script>
<script src="/assets/js/libs/jquery.snippet.js"></script>
<script defer src="/assets/js/plugins.js"></script>
<script defer src="/assets/js/main.js"></script>
<!--*****************************************************
simpleCart(js) Demo Code.
*********************************************************-->
<script>
	simpleCart({
		//Setting the Cart Columns for the sidebar cart display.
		cartColumns: [
			//A custom cart column for putting the quantity and increment and decrement items in one div for easier styling.
			{ view: function(item, column){
				return	"<span>"+item.get('quantity')+"</span>" + 
						"<div>" +
							"<a href='javascript:;' class='simpleCart_increment'><img src='/assets/images/increment.png' title='+1' alt='arrow up'/></a>" +
							"<a href='javascript:;' class='simpleCart_decrement'><img src='/assets/images/decrement.png' title='-1' alt='arrow down'/></a>" +
						"</div>";
			}, attr: 'custom' },
			//Name of the item
			{ attr: "name" , label: false },
			//Subtotal of that row (quantity of that item * the price)
			{ view: 'currency', attr: "total" , label: false  }
		],
		cartStyle: 'div'
	});
	
</script>
<!-- Change UA-XXXXX-X to be your site's ID -->
<script>
	var _gaq = [['_setAccount', 'UA-5082207-15'], ['_setDomainName', 'simplecartjs.org'], ['_trackPageview'], ['_trackPageLoadTime']];
	(function(d, t) {
		var g = d.createElement(t),
		s = d.getElementsByTagName(t)[0];
		g.async = true;
		g.src = '//www.google-analytics.com/ga.js';
		s.parentNode.insertBefore(g, s);
	})(document, 'script');
</script>


<!-- Prompt IE 6 users to install Chrome Frame. Remove this if you want to support IE 6. -->
<!--[if lt IE 7 ]>
  <script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
  <script>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
<![endif]-->

</body>
</html>
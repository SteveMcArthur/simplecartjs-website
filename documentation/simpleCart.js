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
</head>

<body>
	<div id="container" class="clearfix">
		<h1><a href="/">simpleCart(js)</a></h1>
		<div id="content">
			<header>
				<nav id="mainNavigation">
					<ul>
						<li><a href="http://simplecartjs.org/features">Features</a></li>
<li><a href="http://simplecartjs.org/documentation">Documentation</a></li>
<li class="last"><a href="http://simplecartjs.org/tutorials">Tutorials</a></li>

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
			</header><!--End header-->

<div class="faux clearfix">
	<nav class="sideNav">	
		
				<h4>Quick Start Guide</h4>
				<ul>
					
							<li><a href="/documentation/displaying_cart_data">Displaying Cart Data</a></li>
					
							<li><a href="/documentation/shipping">Shipping</a></li>
					
							<li><a href="/documentation/currency">Currency</a></li>
					
							<li><a href="/documentation/cart_columns">Cart Columns</a></li>
					
							<li><a href="/documentation/the_shelf">The Shelf</a></li>
					
							<li><a href="/documentation/setup_initialization">Setup/Initialization</a></li>
					
				</ul>
		
				<h4>Events</h4>
				<ul>
					
							<li><a href="/documentation/ready-event">ready</a></li>
					
							<li><a href="/documentation/update-event">update</a></li>
					
							<li><a href="/documentation/aftersave-event">afterSave</a></li>
					
							<li><a href="/documentation/beforesave-event">beforeSave</a></li>
					
							<li><a href="/documentation/load-event">load</a></li>
					
							<li><a href="/documentation/beforecheckout-event">beforeCheckout</a></li>
					
							<li><a href="/documentation/beforeremove-event">beforeRemove</a></li>
					
							<li><a href="/documentation/afteradd-event">afterAdd</a></li>
					
							<li><a href="/documentation/beforeadd-event">beforeAdd</a></li>
					
							<li><a href="/documentation/using_events">Using Events</a></li>
					
				</ul>
		
				<h4>Checkout Methods</h4>
				<ul>
					
							<li><a href="/documentation/sendform-checkout">SendForm</a></li>
					
							<li><a href="/documentation/amazon_payments">Amazon Payments</a></li>
					
							<li><a href="/documentation/google_checkout">Google Checkout</a></li>
					
							<li><a href="/documentation/paypal">PayPal</a></li>
					
				</ul>
		
				<h4>Function Reference</h4>
				<ul>
					
							<li><a href="/documentation/simplecart-item-equals">.Item.equals</a></li>
					
							<li><a href="/documentation/simplecart-item-get">.Item.get</a></li>
					
							<li><a href="/documentation/simplecart-item-set">.Item.set</a></li>
					
							<li><a href="/documentation/simplecart-item-total">.Item.total</a></li>
					
							<li><a href="/documentation/simplecart-item-id">.Item.id</a></li>
					
							<li><a href="/documentation/simplecart-item-price">.Item.price</a></li>
					
							<li><a href="/documentation/simplecart-item-quantity">.Item.quantity</a></li>
					
							<li><a href="/documentation/simplecart-item-remove">.Item.remove</a></li>
					
							<li><a href="/documentation/simplecart-item-decrement">.Item.decrement</a></li>
					
							<li><a href="/documentation/simplecart-item-increment">.Item.increment</a></li>
					
							<li><a href="/documentation/simplecart-item-underscore">.Item._</a></li>
					
							<li><a href="/documentation/simplecart-update">.update</a></li>
					
							<li><a href="/documentation/simplecart-trigger">.trigger</a></li>
					
							<li><a href="/documentation/simplecart-total">.total</a></li>
					
							<li><a href="/documentation/simplecart-tocurrency">.toCurrency</a></li>
					
							<li><a href="/documentation/simplecart-taxrate">.taxRate</a></li>
					
							<li><a href="/documentation/simplecart-tax">.tax</a></li>
					
							<li><a href="/documentation/simplecart-shipping">.shipping</a></li>
					
							<li><a href="/documentation/simplecart-load">.load</a></li>
					
							<li><a href="/documentation/simplecart-save">.save</a></li>
					
							<li><a href="/documentation/simplecart-ready">.ready</a></li>
					
							<li><a href="/documentation/simplecart-quantity">.quantity</a></li>
					
							<li><a href="/documentation/simplecart-item">.Item</a></li>
					
							<li><a href="/documentation/simplecart-has">.has</a></li>
					
							<li><a href="/documentation/simplecart-grandtotal">.grandTotal</a></li>
					
							<li><a href="/documentation/simplecart-find">.find</a></li>
					
							<li><a href="/documentation/simplecart-extend">.extend</a></li>
					
							<li><a href="/documentation/simplecart-empty">.empty</a></li>
					
							<li><a href="/documentation/simplecart-element-attr">.ELEMENT.attr</a></li>
					
							<li><a href="/documentation/simplecart-element-val">.ELEMENT.val</a></li>
					
							<li><a href="/documentation/simplecart-element-html">.ELEMENT.html</a></li>
					
							<li><a href="/documentation/simplecart-element-text">.ELEMENT.text</a></li>
					
							<li><a href="/documentation/simplecart-element-underscore">.ELEMENT._</a></li>
					
							<li><a href="/documentation/simplecart-each">.each</a></li>
					
							<li><a href="/documentation/simplecart-currency">.currency</a></li>
					
							<li><a href="/documentation/simplecart-copy">.copy</a></li>
					
							<li><a href="/documentation/simplecart-chunk">.chunk</a></li>
					
							<li><a href="/documentation/simplecart-checkout-sendform">.checkout.SendForm</a></li>
					
							<li><a href="/documentation/simplecart-checkout-paypal">.checkout.PayPal</a></li>
					
							<li><a href="/documentation/simplecart-checkout-googlecheckout">.checkout.GoogleCheckout</a></li>
					
							<li><a href="/documentation/simplecart-checkout-amazonpayments">.checkout.AmazonPayments</a></li>
					
							<li><a href="/documentation/simplecart-checkout">.checkout</a></li>
					
							<li><a href="/documentation/simplecart-bindoutlets">.bindOutlets</a></li>
					
							<li><a href="/documentation/simplecart-bindinputs">.bindInputs</a></li>
					
							<li><a href="/documentation/simplecart-bind">.bind</a></li>
					
							<li><a href="/documentation/simplecart-element">.ELEMENT</a></li>
					
							<li><a href="/documentation/simplecart-add">.add</a></li>
					
							<li><a href="/documentation/simplecart-dollar-sign-create">.$create</a></li>
					
							<li><a href="/documentation/simplecart-dollar-sign">.$</a></li>
					
				</ul>
		
				<h4>Core</h4>
				<ul>
					
							<li><a href="/documentation/simplecart-update">.update</a></li>
					
							<li><a href="/documentation/simplecart-total">.total</a></li>
					
							<li><a href="/documentation/simplecart-taxrate">.taxRate</a></li>
					
							<li><a href="/documentation/simplecart-tax">.tax</a></li>
					
							<li><a href="/documentation/simplecart-shipping">.shipping</a></li>
					
							<li><a href="/documentation/simplecart-load">.load</a></li>
					
							<li><a href="/documentation/simplecart-save">.save</a></li>
					
							<li><a href="/documentation/simplecart-ready">.ready</a></li>
					
							<li><a href="/documentation/simplecart-quantity">.quantity</a></li>
					
							<li><a href="/documentation/simplecart-has">.has</a></li>
					
							<li><a href="/documentation/simplecart-grandtotal">.grandTotal</a></li>
					
							<li><a href="/documentation/simplecart-find">.find</a></li>
					
							<li><a href="/documentation/simplecart-extend">.extend</a></li>
					
							<li><a href="/documentation/simplecart-empty">.empty</a></li>
					
							<li><a href="/documentation/simplecart-currency">.currency</a></li>
					
							<li><a href="/documentation/simplecart-checkout">.checkout</a></li>
					
							<li><a href="/documentation/simplecart-element">.ELEMENT</a></li>
					
							<li><a href="/documentation/simplecart-add">.add</a></li>
					
				</ul>
		
				<h4>Checkout</h4>
				<ul>
					
							<li><a href="/documentation/simplecart-checkout-sendform">.checkout.SendForm</a></li>
					
							<li><a href="/documentation/simplecart-checkout-paypal">.checkout.PayPal</a></li>
					
							<li><a href="/documentation/simplecart-checkout-googlecheckout">.checkout.GoogleCheckout</a></li>
					
							<li><a href="/documentation/simplecart-checkout-amazonpayments">.checkout.AmazonPayments</a></li>
					
							<li><a href="/documentation/simplecart-checkout">.checkout</a></li>
					
				</ul>
		
				<h4>Event</h4>
				<ul>
					
							<li><a href="/documentation/simplecart-trigger">.trigger</a></li>
					
							<li><a href="/documentation/simplecart-ready">.ready</a></li>
					
							<li><a href="/documentation/simplecart-bindoutlets">.bindOutlets</a></li>
					
							<li><a href="/documentation/simplecart-bindinputs">.bindInputs</a></li>
					
							<li><a href="/documentation/simplecart-bind">.bind</a></li>
					
				</ul>
		
				<h4>Items</h4>
				<ul>
					
							<li><a href="/documentation/simplecart-item-equals">.Item.equals</a></li>
					
							<li><a href="/documentation/simplecart-item-get">.Item.get</a></li>
					
							<li><a href="/documentation/simplecart-item-set">.Item.set</a></li>
					
							<li><a href="/documentation/simplecart-item-total">.Item.total</a></li>
					
							<li><a href="/documentation/simplecart-item-id">.Item.id</a></li>
					
							<li><a href="/documentation/simplecart-item-price">.Item.price</a></li>
					
							<li><a href="/documentation/simplecart-item-quantity">.Item.quantity</a></li>
					
							<li><a href="/documentation/simplecart-item-remove">.Item.remove</a></li>
					
							<li><a href="/documentation/simplecart-item-decrement">.Item.decrement</a></li>
					
							<li><a href="/documentation/simplecart-item-increment">.Item.increment</a></li>
					
							<li><a href="/documentation/simplecart-item-underscore">.Item._</a></li>
					
							<li><a href="/documentation/simplecart-item">.Item</a></li>
					
							<li><a href="/documentation/simplecart-has">.has</a></li>
					
							<li><a href="/documentation/simplecart-add">.add</a></li>
					
				</ul>
		
				<h4>UI & DOM Manipulation</h4>
				<ul>
					
							<li><a href="/documentation/simplecart-update">.update</a></li>
					
							<li><a href="/documentation/simplecart-element-attr">.ELEMENT.attr</a></li>
					
							<li><a href="/documentation/simplecart-element-val">.ELEMENT.val</a></li>
					
							<li><a href="/documentation/simplecart-element-html">.ELEMENT.html</a></li>
					
							<li><a href="/documentation/simplecart-element-text">.ELEMENT.text</a></li>
					
							<li><a href="/documentation/simplecart-element-underscore">.ELEMENT._</a></li>
					
							<li><a href="/documentation/simplecart-bindoutlets">.bindOutlets</a></li>
					
							<li><a href="/documentation/simplecart-bindinputs">.bindInputs</a></li>
					
							<li><a href="/documentation/simplecart-element">.ELEMENT</a></li>
					
							<li><a href="/documentation/simplecart-dollar-sign-create">.$create</a></li>
					
							<li><a href="/documentation/simplecart-dollar-sign">.$</a></li>
					
				</ul>
		
				<h4>Utilities</h4>
				<ul>
					
							<li><a href="/documentation/simplecart-tocurrency">.toCurrency</a></li>
					
							<li><a href="/documentation/simplecart-find">.find</a></li>
					
							<li><a href="/documentation/simplecart-each">.each</a></li>
					
							<li><a href="/documentation/simplecart-copy">.copy</a></li>
					
							<li><a href="/documentation/simplecart-chunk">.chunk</a></li>
					
				</ul>
		
	</nav>
	<div id="main">
					<p class="breadcrumbs"></p>
			
					<h2 class="pageTitle">Displaying Cart Data</h2>
					<p>You can display simpleCart(js) data anywhere on the page by adding class names to your markup.  Below is a full list of simpleCart(js) output/input classes</p>

<pre class="html">
<!-- create a checkout button -->
<a href="javascript:;" class="simpleCart_checkout"></a>

<!-- button to empty the cart -->
<a href="javascript:;" class="simpleCart_empty"></a>

<!-- show the cart -->
<div class="simpleCart_items"></div>

<!-- cart total (ex. $23.11)-->
<div class="simpleCart_total"></div>

<!-- cart quantity (ex. 3) -->
<div class="simpleCart_quantity"></div>

<!-- tax cost (ex. $1.38) -->
<div class="simpleCart_tax"></div>

<!-- tax rate (ex. %0.6) -->
<div class="simpleCart_taxRate"></div>

<!-- shipping (ex. $5.00) -->
<div class="simpleCart_shipping"></div>

<!-- grand total, including tax and shipping (ex. $28.49) -->
<div class="simpleCart_grandTotal"></div>

</pre>


			
			
			<div id="commentArea">
				<h2>Comments</h2>
				<ol id="comments">
					
				</ol>
			
				
			</div><!--End #commentArea-->
			
			</div>
</div>
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

<script src="https://raw.github.com/wojodesign/simplecart-js/v3/simpleCart.js"></script>
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
	var _gaq = [['_setAccount', 'UA-XXXXX-X'], ['_trackPageview'], ['_trackPageLoadTime']];
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
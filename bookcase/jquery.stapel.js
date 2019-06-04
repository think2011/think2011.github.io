/**
 * jquery.stapel.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
;( function( $, window, undefined ) {
	
	'use strict';

	/*
	* debouncedresize: special jQuery event that happens once after a window resize
	*
	* latest version and complete README available on Github:
	* https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
	*
	* Copyright 2011 @louis_remi
	* Licensed under the MIT license.
	*/
	var $event = $.event,
	$special,
	resizeTimeout;

	$special = $event.special.debouncedresize = {
		setup: function() {
			$( this ).on( "resize", $special.handler );
		},
		teardown: function() {
			$( this ).off( "resize", $special.handler );
		},
		handler: function( event, execAsap ) {
			// Save the context
			var context = this,
				args = arguments,
				dispatch = function() {
					// set correct event type
					event.type = "debouncedresize";
					$event.dispatch.apply( context, args );
				};

		if ( resizeTimeout ) {
				clearTimeout( resizeTimeout );
			}

			execAsap ?
				dispatch() :
				resizeTimeout = setTimeout( dispatch, $special.threshold );
		},
		threshold: 150
	};

	// ======================= imagesLoaded Plugin ===============================
	// https://github.com/desandro/imagesloaded

	// $('#my-container').imagesLoaded(myFunction)
	// execute a callback when all images have loaded.
	// needed because .load() doesn't work on cached images

	// callback function gets image collection as argument
	//  this is the container

	// original: mit license. paul irish. 2010.
	// contributors: Oren Solomianik, David DeSandro, Yiannis Chatzikonstantinou

	// blank image data-uri bypasses webkit log warning (thx doug jones)
	var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

	$.fn.imagesLoaded = function( callback ) {
		var $this = this,
			deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
			hasNotify = $.isFunction(deferred.notify),
			$images = $this.find('img').add( $this.filter('img') ),
			loaded = [],
			proper = [],
			broken = [];

		// Register deferred callbacks
		if ($.isPlainObject(callback)) {
			$.each(callback, function (key, value) {
				if (key === 'callback') {
					callback = value;
				} else if (deferred) {
					deferred[key](value);
				}
			});
		}

		function doneLoading() {
			var $proper = $(proper),
				$broken = $(broken);

			if ( deferred ) {
				if ( broken.length ) {
					deferred.reject( $images, $proper, $broken );
				} else {
					deferred.resolve( $images );
				}
			}

			if ( $.isFunction( callback ) ) {
				callback.call( $this, $images, $proper, $broken );
			}
		}

		function imgLoaded( img, isBroken ) {
			// don't proceed if BLANK image, or image is already loaded
			if ( img.src === BLANK || $.inArray( img, loaded ) !== -1 ) {
				return;
			}

			// store element in loaded images array
			loaded.push( img );

			// keep track of broken and properly loaded images
			if ( isBroken ) {
				broken.push( img );
			} else {
				proper.push( img );
			}

			// cache image and its state for future calls
			$.data( img, 'imagesLoaded', { isBroken: isBroken, src: img.src } );

			// trigger deferred progress method if present
			if ( hasNotify ) {
				deferred.notifyWith( $(img), [ isBroken, $images, $(proper), $(broken) ] );
			}

			// call doneLoading and clean listeners if all images are loaded
			if ( $images.length === loaded.length ){
				setTimeout( doneLoading );
				$images.unbind( '.imagesLoaded' );
			}
		}

		// if no images, trigger immediately
		if ( !$images.length ) {
			doneLoading();
		} else {
			$images.bind( 'load.imagesLoaded error.imagesLoaded', function( event ){
				// trigger imgLoaded
				imgLoaded( event.target, event.type === 'error' );
			}).each( function( i, el ) {
				var src = el.src;

				// find out if this image has been already checked for status
				// if it was, and src has not changed, call imgLoaded on it
				var cached = $.data( el, 'imagesLoaded' );
				if ( cached && cached.src === src ) {
					imgLoaded( el, cached.isBroken );
					return;
				}

				// if complete is true and browser supports natural sizes, try
				// to check for image status manually
				if ( el.complete && el.naturalWidth !== undefined ) {
					imgLoaded( el, el.naturalWidth === 0 || el.naturalHeight === 0 );
					return;
				}

				// cached images don't fire load sometimes, so we reset src, but only when
				// dealing with IE, or image is complete (loaded) and failed manual check
				// webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
				if ( el.readyState || el.complete ) {
					el.src = BLANK;
					el.src = src;
				}
			});
		}

		return deferred ? deferred.promise( $this ) : $this;
	};

	// global
	var $window = $( window ),
		Modernizr = window.Modernizr;

	$.Stapel = function( options, element ) {
		
		this.el = $( element );
		this._init( options );
		
	};

	// the options
	$.Stapel.defaults = {
		// space between the items
		gutter : 40,
		// the rotations degree for the 2nd and 3rd item 
		// (to give a more realistic pile effect)
		pileAngles : 2,
		// animation settings for the clicked pile's items
		pileAnimation : { 
			openSpeed : 400,
			openEasing : 'ease-in-out', // try this :) 'cubic-bezier(.47,1.34,.9,1.03)',
			closeSpeed : 400,
			closeEasing : 'ease-in-out'
		},
		// animation settings for the other piles
		otherPileAnimation : { 
			openSpeed : 400,
			openEasing : 'ease-in-out',
			closeSpeed : 350,
			closeEasing : 'ease-in-out'
		},
		// delay for each item of the pile
		delay : 0,
		// random rotation for the items once opened
		randomAngle : false,
		onLoad : function() { return false; },
		onBeforeOpen : function( pileName ) { return false; },
		onAfterOpen : function( pileName, totalItems ) { return false; },
		onBeforeClose : function( pileName ) { return false; },
		onAfterClose : function( pileName, totalItems ) { return false; }
	};

	$.Stapel.prototype = {

		_init : function( options ) {
			
			// options
			this.options = $.extend( true, {}, $.Stapel.defaults, options );

			// cache some elements
			this._config();
			
			// preload images
			var self = this;
			this.el.imagesLoaded( function() {
				self.options.onLoad();
				self._layout();
				self._initEvents();
			} );

		},
		_config : function() {

			// css transitions support
			this.support = Modernizr.csstransitions;

			var transEndEventNames = {
					'WebkitTransition' : 'webkitTransitionEnd',
					'MozTransition' : 'transitionend',
					'OTransition' : 'oTransitionEnd',
					'msTransition' : 'MSTransitionEnd',
					'transition' : 'transitionend'
				},
				transformNames = {
					'WebkitTransform' : '-webkit-transform',
					'MozTransform' : '-moz-transform',
					'OTransform' : '-o-transform',
					'msTransform' : '-ms-transform',
					'transform' : 'transform'
				};

			if( this.support ) {

				this.transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ] + '.cbpFWSlider';
				this.transformName = transformNames[ Modernizr.prefixed( 'transform' ) ];

			}

			// true if one pile is opened
			this.spread = false;

			// the li's
			this.items = this.el.children( 'li' ).hide();
			
			// close pile
			this.close = $( '#tp-close' );

		},
		_getSize : function() {

			this.elWidth = this.el.outerWidth( true );

		},
		_initEvents : function() {

			var self = this;
			$window.on( 'debouncedresize.stapel', function() { self._resize(); } );
			this.items.on( 'click.stapel', function() {
				
				var $item = $( this );

				if( !self.spread && $item.data( 'isPile' ) ) {

					self.spread = true;
					self.pileName = $item.data( 'pileName' );
					self.options.onBeforeOpen( self.pileName );
					self._openPile();
					
					return false;

				}

			} );

		},
		_layout : function() {

			/*
			piles() : save the items info in a object with the following structure:

			this.piles = {
				
				pileName : {
					
					// elements of this pile (note that an element can be also in a different pile)
					// for each element, the finalPosition is the position of the element when the pile is opened
					elements : [
						{ el : HTMLELEMENT, finalPosition : { left : LEFT, top : TOP } },
						{},
						{},
						...
					],
					// this is the position of the pile (all elements of the pile) when the pile is closed
					position : { left : LEFT, top : TOP },
					index : INDEX
				},

				// more piles
				...

			}
			*/
			this._piles();

			// items width & height
			// assuming here that all items have the same width and height
			this.itemSize = { width : this.items.outerWidth( true ) , height : this.items.outerHeight( true ) };

			// remove original elements
			this.items.remove();

			// applies some initial style for the items
			this._setInitialStyle();

			this.el.css( 'min-width', this.itemSize.width + this.options.gutter );

			// gets the current ul size (needed for the calculation of each item's position)
			this._getSize();

			// calculate and set each Pile's elements position based on the current ul width
			// this function will also be called on window resize
			this._setItemsPosition();
			
			// new items
			this.items = this.el.children( 'li' ).show();
			// total items
			this.itemsCount	= this.items.length;

		},
		_piles : function() {

			this.piles = {};
			var pile, self = this, idx = 0;
			this.items.each( function() {
					
				var $item = $( this ),
					itemPile = $item.attr( 'data-pile' ) || 'nopile-' + $item.index(),
					attr = itemPile.split( ',' );

				for( var i = 0, total = attr.length; i < total; ++i ) {
					
					var pileName = $.trim( attr[i] );
					pile = self.piles[ pileName ];

					if( !pile ) {

						pile = self.piles[ pileName ] = {
							elements : [],
							position : { left : 0, top : 0 },
							index : idx
						};

						++idx;
				
					}
					
					var clone = $item.clone().get(0);
					pile.elements.push( { el : clone, finalPosition : { left : 0, top : 0 } } );
					$( clone ).appendTo( self.el );
				
				}
			
			} );

		},
		_setInitialStyle : function() {

			for( var pile in this.piles ) {

				var p = this.piles[pile];

				for( var i = 0, len = p.elements.length; i < len; ++i ) {

					var $el = $( p.elements[i].el ),
						styleCSS = { transform : 'rotate(0deg)' };

					this._applyInitialTransition( $el );
						
					if( i === len - 2 ) {
						styleCSS = { transform : 'rotate(' + this.options.pileAngles + 'deg)' };
					}
					else if( i === len - 3 ) {
						styleCSS = { transform : 'rotate(-' + this.options.pileAngles + 'deg)' };
					}
					else if( i !== len - 1 ) {
						var extraStyle = { visibility : 'hidden' };
						$el.css( extraStyle ).data( 'extraStyle', extraStyle );
					}
					else if( pile.substr( 0, 6 ) !== 'nopile' ) {
						$el.data( 'front', true ).append( '<div class="tp-title"><span>' + pile + '</span><span>' + len + '</span></div>' );
					}

					$el.css( styleCSS ).data( {
						initialStyle : styleCSS,
						pileName : pile,
						pileCount : len,
						shadow : $el.css( 'box-shadow' ),
						isPile : pile.substr( 0, 6 ) === 'nopile' ? false : true
					} );

				}

			}

		},
		_applyInitialTransition : function( $el ) {

			if( this.support ) {
				$el.css( 'transition', 'left 400ms ease-in-out, top 400ms ease-in-out' );
			}	

		},
		_setItemsPosition : function() {

			var accumL = 0, accumT = 0, 
				l, t, ml = 0,
				lastItemTop = 0;

			for( var pile in this.piles ) {

				var p = this.piles[pile],
					stepW = this.itemSize.width + this.options.gutter,

					accumIL = 0, accumIT = 0, il, it;

				if( accumL + stepW 
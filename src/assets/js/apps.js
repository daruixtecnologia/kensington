"use strict";

var appsLocalization = {
	daysText: 'days',
	nightsText: 'nights',
	bookedText: 'booked',
	unavailableText: 'unavailable',
	partiallyBookedText: 'partially booked',
	partiallyUnavailableText: 'partially unavailable',
}

jQuery(document).ready(function($){
	var siteBody = $('body');
	var siteHeader = $("#header");
	var navbarBrandImage = $('#navbar-brand img');
	var footerBrandImage = $('#footer-brand img');
	var themeOptionsItem = $("#theme-options a");
	var menuDropdown = $('#navbar > .nav > .dropdown');

	menuDropdown.each(function() {
		$(this).on('click', function() {
			$(this).toggleClass('expand-menu');
			menuDropdown.not(this).removeClass('expand-menu');
		});
	});

	// ------------------------------------
	// Mobile Topbar Varian 2
	// ------------------------------------
	$('.slide-topbar').slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		vertical: true,
		verticalSwiping: true,
		autoplay: true,
		autoplaySpeed: 2000,
	});

	// ------------------------------------
	// Make header sticky on more than 170 pixel from top
	// ------------------------------------
	if ($(this).scrollTop() > 170) {
		siteHeader.addClass("scrolled");
	}
	else {
		siteHeader.removeClass("scrolled");
	}

	// ------------------------------------
	// Make header sticky on scroll
	// ------------------------------------
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 170) {
			siteHeader.addClass("scrolled");
		}
		else {
			siteHeader.removeClass("scrolled");
		}
	});

	// ------------------------------------
	// CUSTOMIZER
	// ------------------------------------
	var siteBody = $('body');
	var btnHeaderStyle = $("#btn-header-style");
	var headerStyleOption = $('#header-style a');
	var caret = ' <span class="caret"></span>';
	var customizer = $('#customizer');
	var btnPageHeaderStyle = $("#btn-page-header-style");
	var pageHeaderStyleOption = $("#page-header-style a");

	// Set Cookie
	// ------------------------------------
	function setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
	// Get Cookie
	// ------------------------------------
	function getCookie(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i <ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) === ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) === 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}
	// Cookie Template
	// ------------------------------------
	function cookieTemplate()
	{
		// Cookie Color
		if( getCookie( 'cookie_color' ) ) {
			siteBody.addClass( getCookie( 'cookie_color' ) );
		}
		// Cookie Header
		if( getCookie( 'cookie_header' ) ) {
			siteBody.removeClass('header-1 header-2 header-3');
			siteBody.addClass( getCookie( 'cookie_header' ) );
		}
		// Cookie Page Header
		if( getCookie( 'cookie_page_header' ) ) {
			siteBody.removeClass('page-header-1 page-header-2 page-header-3 page-header-4');
			siteBody.addClass( getCookie( 'cookie_page_header' ) );
		}
	}
	// Delete Cookie
	// ------------------------------------
	function deleteCookie()
	{
		var exp = 'Thu, 01 Jan 1970 00:00:00 UTC';

		// Delete Cookie Color
		setCookie( 'cookie_color', '', exp );

		// Delete Cookie Header
		setCookie( 'cookie_header', '', exp );

		// Delete Cookie Page Header
		setCookie( 'cookie_page_header', '', exp );

		// Reload after reset default
		location.reload();

	}
	// Reset Button
	$('#reset-button').on('click', function(e){
		deleteCookie();
	});

	cookieTemplate();

	// Open Close Customizer
	$('#customizer-panel').on('click', function(){
		customizer.toggleClass('customizer-open');
	});

	$('#close-customizer').on('click', 'a', function(){
		customizer.removeClass('customizer-open');
	});

	// Click everywhere will close customizer box
	$(document).on('click', function(e) {
		if ($(e.target).closest('#customizer').length === 0 ) {
			customizer.removeClass('customizer-open');
		}
	});

	// Header Style
	var styleHeader = getCookie('cookie_header');
	if (styleHeader) {
		var styleHeaderValue = $('a#'+styleHeader).html();
		if (styleHeaderValue) {
			btnHeaderStyle.html(styleHeaderValue);
			btnHeaderStyle.val(styleHeaderValue).change();
		}
	}

	$("#header-style").on('click', 'a', function(event){
		var headerStyle = $(this).attr("id");
		var headerStyleName = $(this).attr("title");

		headerStyleOption.removeClass('active');
		$(this).addClass('active');

		if (headerStyle === "header-1") {
			siteBody.removeClass(function(index, className) {
				return (className.match(/(^|\s)header-\S+/g) || []).join(' ');
			});
		}
		else if (headerStyle === "header-2") {
			siteBody.removeClass(function(index, className) {
				return (className.match(/(^|\s)header-\S+/g) || []).join(' ');
			});
		}
		else if (headerStyle === "header-3") {
			siteBody.removeClass(function(index, className) {
				return (className.match(/(^|\s)header-\S+/g) || []).join(' ');
			});
		}

		siteBody.addClass(headerStyle);
		btnHeaderStyle.html(headerStyleName+caret);
		btnHeaderStyle.val($(this).text());

		// Set Cookie Header
		setCookie('cookie_header', headerStyle);

		event.preventDefault();
		return false;
	});

	// Page Header Style
	var stylePageHeader = getCookie('cookie_page_header');
	if (stylePageHeader) {
		var stylePageHeaderValue = $('a#'+stylePageHeader).html();
		if (stylePageHeaderValue) {
			btnPageHeaderStyle.html(stylePageHeaderValue);
			btnPageHeaderStyle.val(stylePageHeaderValue).change();
		}
	}

	$("#page-header-style").on('click', 'a', function(event){
		var pageHeaderStyle = $(this).attr("id");
		var pageHeaderStyleName = $(this).attr("title");

		pageHeaderStyleOption.removeClass('active');
		$(this).addClass('active');

		if (pageHeaderStyle === "page-header-1") {
			siteBody.removeClass(function(index, className) {
				return (className.match(/(^|\s)page-header-\S+/g) || []).join(' ');
			});
		}
		else if (pageHeaderStyle === "page-header-2") {
			siteBody.removeClass(function(index, className) {
				return (className.match(/(^|\s)page-header-\S+/g) || []).join(' ');
			});
		}
		else if (pageHeaderStyle === "page-header-3") {
			siteBody.removeClass(function(index, className) {
				return (className.match(/(^|\s)page-header-\S+/g) || []).join(' ');
			});
		}
		else if (pageHeaderStyle === "page-header-4") {
			siteBody.removeClass(function(index, className) {
				return (className.match(/(^|\s)page-header-\S+/g) || []).join(' ');
			});
		}

		siteBody.addClass(pageHeaderStyle);
		btnPageHeaderStyle.html(pageHeaderStyleName+caret);
		btnPageHeaderStyle.val($(this).text());

		// Set Cookie Header
		setCookie('cookie_page_header', pageHeaderStyle);

		event.preventDefault();
		return false;
	});

	// Theme Options
	var colorTemplate = getCookie('cookie_color');
	if (colorTemplate) {
		$('#theme-options a').removeClass('active');
		$('a#'+colorTemplate).addClass('active');
		setTheme(colorTemplate);
	} else {
		setTheme("brand-default");
	}

	$("#theme-options").on('click', 'a', function(event){
		var theme = $(this).attr("id");
		setTheme(theme);
		themeOptionsItem.removeClass('active');
		$(this).addClass('active');

		// Set Cookie Color
		setCookie('cookie_color', theme);

		event.preventDefault();
	});

	function setTheme(theme) {
		var currentClass = siteBody.attr('class');
		if ( "undefined" === typeof currentClass ) {
			currentClass = "";
		}
		if ( currentClass ) {
			currentClass = currentClass.split(/\s+/);
		} else {
			currentClass = [];
		}
		for (var i = currentClass.length - 1; i >= 0; i--) {
			if ( currentClass[i].substr(0,6) === "brand-" ) {
				currentClass.splice(i, 1);
			}
		}
		currentClass.push(theme);
		var newClass = currentClass.join(" ");
		siteBody.attr('class', newClass);
		if (theme === "brand-default") {
			navbarBrandImage.attr("src", "assets/images/header-logo-default.png");
			footerBrandImage.attr("src", "assets/images/footer-logo-default.png");
		}
		else if (theme === "brand-yellow") {
			navbarBrandImage.attr("src", "assets/images/header-logo-yellow.png");
			footerBrandImage.attr("src", "assets/images/footer-logo-yellow.png");
		}
		else if (theme === "brand-red") {
			navbarBrandImage.attr("src", "assets/images/header-logo-red.png");
			footerBrandImage.attr("src", "assets/images/footer-logo-red.png");
		}
		else if (theme === "brand-orange") {
			navbarBrandImage.attr("src", "assets/images/header-logo-orange.png");
			footerBrandImage.attr("src", "assets/images/footer-logo-orange.png");
		}
		else if (theme === "brand-green") {
			navbarBrandImage.attr("src", "assets/images/header-logo-green.png");
			footerBrandImage.attr("src", "assets/images/footer-logo-green.png");
		}
	}

	// Default single post style
	function fixedMap() {
		var mapWrapper = $(".map-wrapper");
		var searchResult = $("#property-search-result .container");

		$(window).scroll(function() {
			var header = $("#header");
			var idMap = $(".map-wrapper #map");
			var postContent = $("#property-search-result").offset().top;
			var contentHeight = ($(".search-result-content").height() - 72);
			var footer = $("#footer").position().top;
			var scroll = $(window).scrollTop();
			var heightHeader = $("#header").height();

			// console.log("footer position:" + footer);
			// console.log("scroll position:" + scroll);
			// console.log("content height:" + contentHeight);

			if (header.hasClass("scrolled")) {
				mapWrapper.addClass("on-scrolled");

				if($(window).width() > 991) {
					mapWrapper.css("top", 0);
				}

				else if($(window).width() > 1198) {
					mapWrapper.css("top", "72px");
					idMap.css("height", "100vh !important");
				}

				else if ($(this).scrollTop() > contentHeight ) {
					mapWrapper.addClass("sticky-off");
					mapWrapper.css("top", "auto");
				}
				else {
					mapWrapper.removeClass("sticky-off");
				}
			}
			else {
				mapWrapper.removeClass("on-scrolled");
				if($(window).width() > 991) {
					mapWrapper.css("top", heightHeader);
				}
			}
		});

		$(window).ready(function() {
			if($(window).width() > 991) {
				searchResult.removeClass("container");
			}
			else if($(window).width() > 1200) {
				mapWrapper.css("top", "165px");
			}
		});
	}

	if ($("#property-search-result.sidebar-map").length) {
		fixedMap();
	}

	// Booking Calendar
	var calendar_container = "#booking-calendar";
	if ($(calendar_container).length) {
		var booked 		= $(calendar_container).data('booked') || [];
		var unavailable = $(calendar_container).data('unavailable') || [];
		var midday 		= $(calendar_container).data('midday') || false;
		var start_booked 	= [];
		var full_booked 	= [];
		var end_booked 		= [];
		var start_unavailable 	= [];
		var full_unavailable 	= [];
		var end_unavailable 	= [];
		booked.sort();
		unavailable.sort();
		var lastCheck = moment(new Date(1900,0,1));
		for ( var b = 0; b < booked.length; b++ ) {
			var parts = booked[b].split('-');
			var theDate = new Date(parts[0],parts[1]-1,parts[2]);
			var dayWrapper = moment(theDate);
			var beforeDayWrapper = moment(theDate).subtract(1, 'days');
			var diff = dayWrapper.diff(lastCheck, 'days');
			if (!midday) {
				if (diff > 1) { // masukin ke start date
					start_booked.push(booked[b]);
				} else if (diff == 1) {
					end_booked.push(booked[b]);
					if (end_booked.indexOf(beforeDayWrapper.format('YYYY-MM-DD')) >= 0) {
						full_booked.push(beforeDayWrapper.format('YYYY-MM-DD'));
						var index = end_booked.indexOf(beforeDayWrapper.format('YYYY-MM-DD'));
						end_booked.splice(index, 1);
					}
				}
			} else {
				if (diff > 1) { // masukin ke start date
					start_booked.push(booked[b]);
				} else if (diff == 1) {
					if (end_booked.indexOf(dayWrapper.format('YYYY-MM-DD')) >= 0) {
						full_booked.push(dayWrapper.format('YYYY-MM-DD'));
						var index = end_booked.indexOf(dayWrapper.format('YYYY-MM-DD'));
						end_booked.splice(index, 1);
					}
				}
				end_booked.push(moment(theDate).add(1, 'days').format('YYYY-MM-DD'));
			}
			lastCheck = dayWrapper;
		}
		var lastCheck = moment(new Date(1900,0,1));
		for ( var u = 0; u < unavailable.length; u++ ) {
			var parts = unavailable[u].split('-');
			var theDate = new Date(parts[0],parts[1]-1,parts[2]);
			var dayWrapper = moment(theDate);
			var beforeDayWrapper = moment(theDate).subtract(1, 'days');
			var diff = dayWrapper.diff(lastCheck, 'days');
			if (!midday) {
				if (diff > 1) { // masukin ke start date
					start_unavailable.push(unavailable[u]);
				} else if (diff == 1) {
					end_unavailable.push(unavailable[u]);
					if (end_unavailable.indexOf(beforeDayWrapper.format('YYYY-MM-DD')) >= 0) {
						full_unavailable.push(beforeDayWrapper.format('YYYY-MM-DD'));
						var index = end_unavailable.indexOf(beforeDayWrapper.format('YYYY-MM-DD'));
						end_unavailable.splice(index, 1);
					}
				}
			} else {
				if (diff > 1) { // masukin ke start date
					start_unavailable.push(unavailable[u]);
				} else if (diff == 1) {
					if (end_unavailable.indexOf(dayWrapper.format('YYYY-MM-DD')) >= 0) {
						full_unavailable.push(dayWrapper.format('YYYY-MM-DD'));
						var index = end_unavailable.indexOf(dayWrapper.format('YYYY-MM-DD'));
						end_unavailable.splice(index, 1);
					}
				}
				end_unavailable.push(moment(theDate).add(1, 'days').format('YYYY-MM-DD'));
			}
			lastCheck = dayWrapper;
		}

		function nextStartDate(current) {
			var theCurrent = moment(current).valueOf();
			var startOfDay = moment(current).startOf('day').valueOf();
			var diff = theCurrent - startOfDay;
			var startDates = start_booked.concat(start_unavailable);
			startDates.sort();
			for (var d = 0; d < startDates.length; d++) {
				var parts = startDates[d].split('-');
				var theDate = moment(new Date(parts[0],parts[1]-1,parts[2]));
				if (theDate.valueOf() > startOfDay) {
					return theDate.valueOf() + diff;
				}
			}
			return false;
		}

		$(calendar_container).dateRangePicker({
			startDate: new Date(),
			showTopbar: false,
			inline: true,
			container: calendar_container,
			alwaysOpen: true,
			singleMonth: true,
			stickyMonths: true,
			selectForward: true,
			extraClass: midday ? "midday" : "",
			hoveringTooltip: function(days, startTime, hoveringTime) {
				if (midday) {
					return days > 1 ? (days - 1) + ' ' + appsLocalization.nightsText : '';
				} else {
					return days > 1 ? days + ' ' + appsLocalization.daysText : '';
				}
			},
			beforeShowDay: function(t) {
				var date = moment(t).format('YYYY-MM-DD');
				var valid = true;
				var _class = '';
				var _tooltip = '';
				// booked
				if (start_booked.indexOf(date) >= 0) {
					if (midday) {
						var valid        = true;
						var _tooltip     = appsLocalization.partiallyBookedText;
					} else {
						var valid        = false;
						var _tooltip     = appsLocalization.bookedText;
					}
					_class += ' first-date-booked booked';
				} else if (end_booked.indexOf(date) >= 0) {
					if (midday) {
						var valid = false;
						var _tooltip = appsLocalization.partiallyBookedText;
					} else {
						var valid = false;
						var _tooltip = appsLocalization.bookedText;
					}
					_class += ' last-date-booked booked';
				} else if (full_booked.indexOf(date) >= 0) {
					var valid         = false;
					var _tooltip     = appsLocalization.bookedText;
					_class += ' booked';
				} else if (start_unavailable.indexOf(date) >= 0) {
					if (midday) {
						var valid        = true;
						var _tooltip     = appsLocalization.partiallyUnavailableText;
					} else {
						var valid        = false;
						var _tooltip     = appsLocalization.unavailableText;
					}
					_class += ' first-date-unavailable unavailable';
				} else if (end_unavailable.indexOf(date) >= 0) {
					if (midday) {
						var valid = false;
						var _tooltip = appsLocalization.partiallyUnavailableText;
					} else {
						var valid = false;
						var _tooltip = appsLocalization.unavailableText;
					}
					_class += ' last-date-unavailable unavailable';
				} else if (full_unavailable.indexOf(date) >= 0) {
					var valid         = false;
					var _tooltip     = appsLocalization.unavailableText;
					_class += ' unavailable';
				}
				return [valid,_class,_tooltip];
			}
		}).bind('datepicker-first-date-selected', function(event, obj) {
			$(calendar_container).removeClass('select-first');
			if (midday) {
				var selectedDate = obj.date1;
				var nextStart = nextStartDate(selectedDate);
				$(calendar_container).find('.first-date-booked, .first-date-unavailable').each(function() {
					var time = $(this).attr('time');
					if (time == nextStart) {
						$(this).removeClass('invalid').addClass('valid');
					}
				});
				$(calendar_container).find('.last-date-booked, .last-date-unavailable').each(function() {
					var time = $(this).attr('time');
					$(this).removeClass('valid').addClass('invalid');
				});
			}
		}).bind('datepicker-change',function(event,obj) {
			$(calendar_container).addClass('select-first');
			if (midday) {
				$(calendar_container).find('.first-date-booked, .first-date-unavailable').each(function() {
					$(this).addClass('invalid').removeClass('valid');
				});
				$(calendar_container).find('.last-date-booked, .last-date-unavailable').each(function() {
					$(this).addClass('valid').removeClass('invalid');
				});
			}
		}).find('.first-date-booked, .first-date-unavailable, .last-date-booked, .last-date-unavailable').each(function() {
			if ( midday ) {
				if ($(this).hasClass('first-date-booked') || $(this).hasClass('first-date-unavailable')) {
					$(this).addClass('invalid').removeClass('valid');
				} else if ($(this).hasClass('last-date-booked') || $(this).hasClass('last-date-unavailable')) {
					$(this).addClass('valid').removeClass('invalid');
				}
			}
		});
	}

	// Set Default Start Date
	var now = new Date();
    var tomorrow = moment().add(1, 'day').format('YYYY-MM-DD');
    var afterTomorrow = moment().add(2, 'day').format('YYYY-MM-DD');

   	$('#nb-start-date').val(tomorrow);

   	// Set Default End Date
	var today_day = now.getDay();
	var jump = 0;
	if (today_day == 5) {
		jump = 3;
	} else if (today_day == 6) {
		jump = 2;
	} else {
		jump = 1;
	}

	$('#nb-end-date').val(afterTomorrow);

	// Start Date for New Booking
	if ($("#nb-start-date").length) {
		$("#nb-start-date").dateRangePicker({
			format: 'YYYY-MM-DD',
			autoClose: true,
			singleDate : true,
			showShortcuts: false,
			singleMonth: true,
			startDate: tomorrow
		});
	}

	// End Date for New Booking
	if ($("#nb-end-date").length) {
		$("#nb-end-date").dateRangePicker({
			format: 'YYYY-MM-DD',
			extraClass: 'end-date-wrapper',
			autoClose: true,
			singleDate : true,
			showShortcuts: false,
			singleMonth: true,
			startDate: '+1d',
		}).bind('datepicker-change', function(event,obj) {
			var firstValue = $("#nb-start-date").val();
			var startAfterFirst = moment(firstValue, 'YYYY-MM-DD').add(1,'day').startOf('day').valueOf();
			var afterFirst = moment(firstValue, 'YYYY-MM-DD').add(1,'day').format('YYYY-MM-DD');
			var selected = moment(obj.value, 'YYYY-MM-DD').startOf('day').valueOf();
			if (selected < startAfterFirst) {
				$("#nb-end-date").data('dateRangePicker').setStart(afterFirst);
			}
		});
	}

	// Advanced Search Toggle
	$(".btn-toggle-search").on("click", function(e){
		$(this).toggleClass("active");
		$(this).parents(".form-body").find(".advanced-search").slideToggle(100);
		e.preventDefault();
	});

	// Button Compare
	// $(".btn-compare").on("click", function(e){
	// 	$(this).addClass("active");
	// 	$("#sidebar-compare").addClass("active");
	// 	$('#customizer-panel').hide();
	// 	e.preventDefault();
	// });

	// // Compare Sidebar
	// $(".compare-toggle").on("click", function(e){

	// 	if ( $("#sidebar-compare").hasClass("active") ) {
	// 		$(this).parents("#sidebar-compare").removeClass("active");
	// 		$('#customizer-panel').show();
	// 	} else {
	// 		$(this).parents("#sidebar-compare").addClass("active");
	// 		$('#customizer-panel').hide();
	// 	}
	// 	e.preventDefault();
	// });

	// Post Slider
	// $(".property-compare-wrapper").slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows: false,
	// 	dots: false,
	// 	responsive: [
	// 	{
	// 		breakpoint: 2000,
	// 		settings: "unslick"
	// 	},
	// 	{
	// 		breakpoint: 920,
	// 		settings: {
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1,
	// 			arrows: false,
	// 			dots: true
	// 		}
	// 	}
	// 	]
	// });

	// Post Slider
	// $(".secondary-slider").slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows: false,
	// 	dots: false,
	// 	asNavFor: '.secondary-slider-nav',
	// 	responsive: [
	// 	{
	// 		breakpoint: 480,
	// 		settings: {
	// 			dots: true,
	// 			fade: false
	// 		}
	// 	}
	// 	]
	// });

	// Post Slider Navigation
	// $(".secondary-slider-nav").slick({
	// 	slidesToShow: 4,
	// 	slidesToScroll: 1,
	// 	asNavFor: '.secondary-slider',
	// 	dots: false,
	// 	arrows: false,
	// 	focusOnSelect: true,
	// });

	// Single Property Slider
	// $(".property-slider").slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows: false,
	// 	dots: false,
	// 	asNavFor: '#property-slider-nav',
	// });

	// Single Property Slider Navigation
	// $(".property-slider-nav").slick({
	// 	slidesToShow: 5,
	// 	slidesToScroll: 1,
	// 	asNavFor: '#property-slider',
	// 	dots: false,
	// 	focusOnSelect: true,
	// 	centerMode: true,
	// 	responsive: [
	// 	{
	// 		breakpoint: 768,
	// 		settings: {
	// 			slidesToShow: 3,
	// 		}
	// 	}
	// 	]
	// });

	// Main Slider
	// $(".featured-property-slider").slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	dots: false,
	// 	autoplay: true,
	// 	autoplaySpeed: 7000,
	// 	pauseOnHover: true,
	// });

	// Product Slider
	// $(".product-slider").slick({
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	prevArrow: $(".slide-left"),
	// 	nextArrow: $(".slide-right"),
	// 	dots: false,
	// 	autoplay: true,
	// 	autoplaySpeed: 7000,
	// 	pauseOnHover: true,
	// 	responsive: [
	// 	{
	// 		breakpoint: 992,
	// 		settings: {
	// 			slidesToShow: 3
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 768,
	// 		settings: {
	// 			slidesToShow: 2
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 480,
	// 		settings: {
	// 			slidesToShow: 1
	// 		}
	// 	},
	// 	]
	// });

	// Content Slider - Testimony
	// $(".content-slider").slick({
	// 	vertical: true,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	prevArrow: $(".content-left"),
	// 	nextArrow: $(".content-right"),
	// 	dots: false,
	// 	autoplay: true,
	// 	autoplaySpeed: 7000,
	// 	pauseOnHover: true,
	// });

	// Range Feet
	// $("#sale-range-feet, #rent-range-feet, #book-range-feet").ionRangeSlider({
	// 	type: "double",
	// 	min: $(this).data('min'),
	// 	max: $(this).data('max'),
	// 	from: $(this).data('from'),
	// 	to: $(this).data('to'),
	// 	hide_min_max: true,
	// 	hide_from_to: false,
	// 	grid: false,
	// 	postfix: "",
	// 	max_postfix: ""
	// });

	// // Range Price
	// $("#sale-range-price, #rent-range-price, #book-range-price").ionRangeSlider({
	// 	type: "double",
	// 	min: $(this).data('min'),
	// 	max: $(this).data('max'),
	// 	from: $(this).data('from'),
	// 	to: $(this).data('to'),
	// 	hide_min_max: true,
	// 	hide_from_to: false,
	// 	grid: false,
	// 	prefix: ""
	// });

	// Popup Gallery
	// $('.popup-gallery').magnificPopup({
	//     delegate: 'a',
	//     type: 'image',
	//     tLoading: 'Loading image #%curr%...',
	//     mainClass: 'mfp-img-mobile',
	//     gallery: {
	//     enabled: true,
	//     navigateByImgClick: true,
	//     preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	// },
	// image: {
	//     tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
	//     titleSrc: function(item) {
	//         return item.el.attr('title');
	//     }
	// }
	// });
});

/*!
*
* The MIT License (MIT)
* Copyright (c) 2023
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy of
* this software and associated documentation files (the "Software"), to deal in
* the Software without restriction, including without limitation the rights to
* use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
* the Software, and to permit persons to whom the Software is furnished to do so,
* subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*
* @version v1.0.0
* @link https://github.com/andressousa/as-qliksense-darkmode
* @author André Sousa
* @license MIT
*/

define([
	 "qlik"
	,"jquery"
	,"./support"
	,"./definition"
	,"css!./style.css"
],
function (
	 qlik
	,$
	,support
	,definition
	,css
){
	'use strict';

	return {
		definition 	: definition,
		support 	: support,
		paint: function ($element) {

			//clear html
			$element.empty();

			//generate full html layout
			var html = '';
			html += '<button class="lui-button dark_button_normal"><span class="lui-icon">&#9728;</span></button>';
			html += '<button class="lui-button dark_button_grey"><span class="lui-icon">&#9872;</span></button>';
			html += '<button class="lui-button dark_button_dark"><span class="lui-icon">&#9873;</span></button>';
			
			//show elements
			$element.append(html);

			//reset button trigger
			$element.find('.dark_button_normal').on( 'click', function(){
				$('html').removeClass('auto_dark_grey').removeClass('auto_dark_dark');
			});

			//grey scale button trigger
			$element.find('.dark_button_grey').on( 'click', function(){
				$('html').removeClass('auto_dark_grey').removeClass('auto_dark_dark').addClass('auto_dark_grey');
			});

			//high contrast button trigger
			$element.find('.dark_button_dark').on( 'click', function(){
				$('html').removeClass('auto_dark_grey').removeClass('auto_dark_dark').addClass('auto_dark_dark');
			});

			return qlik.Promise.resolve();
		}
	};

} );

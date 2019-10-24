/*****************************************************************
** Author: Asvin Goel, goel@telematique.eu
**
** A plugin for reveal.js allowing slides to use the full window
** size. 
**
** Version: 0.1
** 
** License: MIT license (see LICENSE.md)
**
******************************************************************/

var RevealFullscreen= window.RevealFullscreen || (function(){

	var config = null;
	var className = 'fullscreen';

	// Reveal.addEventListener( 'ready', function( event ) {
	// 	setConfig();
	// } );

	Reveal.addEventListener( 'slidechanged', function( event ) {
		if ( Reveal.getCurrentSlide().hasAttribute("data-fullscreen") ) {
			if(!config) setConfig();
			if(event.currentSlide) event.currentSlide.classList.add(className);
			Reveal.configure( { width: window.innerWidth, height: window.innerHeight, margin: 0 } );
		}
		else {
			if(event.previousSlide) event.previousSlide.classList.remove(className);
            Reveal.configure( config );
		}
	} );

	// window.addEventListener( 'resize', function( event ) {
	// 	const currentSlide = Reveal.getCurrentSlide();
	// 	if ( currentSlide && currentSlide.hasAttribute("data-fullscreen") ) {
	// 		Reveal.configure( { width: window.innerWidth, height: window.innerHeight, margin: 0 } );
	// 	}
	// } );

	function setConfig() {
		config = { width: Reveal.getConfig().width, height: Reveal.getConfig().height, margin: Reveal.getConfig().margin };
	}
})();

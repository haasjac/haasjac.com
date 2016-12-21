// Set of functions to operate on the game slideshow display in Main
// TODO: Figure out why direct button selection isn't working

const NumSlides_c = 6;  // number of objects in the slideshow

var slideIndex = 0; // the index of the slide currently being displayed
var dots; // container of white dots indicating current index

// After the document has loaded, we set the center slideshow object to default and get a
// reference to the slideshow dots
$(function() {
    dots = $('#slideshowDots').children();
    fadeSlide(0);
});

// Move the slideshow to the given index. If newIndex < slideIndex, move to the left. Otherwise,
// move right.
function slideshowGoto(newIndex)
{
    if (newIndex == slideIndex || newIndex < 0 || newIndex >= NumSlides_c)
        return;
    if (newIndex < slideIndex) {
        addSlide('left', newIndex);
    } else {
        addSlide('right', newIndex);
    }
}

// Move the slideshow one index to the right (or wrap around back to 1)
function slideshowMoveRight() { addSlide('right', plusSlideIndex()); }

// Move the slideshow one index to the left (or wrap around back to max)
function slideshowMoveLeft() { addSlide('left', minusSlideIndex()); }

// Causes the given slide to fade in (assumes this is the only slide that exists).
function fadeSlide(newSlideIndex)
{
    var objs = $('#slideshowObjs');
    slideIndex = newSlideIndex;
    var slideHTML = generateSlide(slideIndex);
    objs.append(slideHTML);
    var newSlide = $('#newSlide');  // Find the element we just added
    newSlide.show();
    newSlide.attr('id', 'currentSlide');
    $(dots[slideIndex]).css({'background-color': 'white'});
}

// Adds a new slide to the slideshow, causing it to slide in FROM the given direction, and the
// current slide to slide out in the opposite direction. animation can be one of 'left' or 'right'.
function addSlide(animation, newSlideIndex)
{
    var objs = $('#slideshowObjs');
    var oldIndex = slideIndex;
    var animationOpposite;

    // Move index
    slideIndex = newSlideIndex;
    if (animation == 'right') {
        animationOpposite = 'left';
    } else {
        animationOpposite = 'right';
    }

    // Make a new slide from our updated slideIndex
    var slideHTML = generateSlide(slideIndex);
    objs.append(slideHTML);

    // Animate slides
    var currentSlide = $('#currentSlide');
    var newSlide = $('#newSlide');
    currentSlide.toggle('slide', { direction: animationOpposite }, 750, function() {
        currentSlide.remove();
    });
    newSlide.toggle('slide', { direction: animation }, 750);
    currentSlide.attr('id', 'oldSlide');
    newSlide.attr('id', 'currentSlide');

    // Animate dots
    $(dots[oldIndex]).stop().animate({ backgroundColor: 'transparent' }, 500);
    $(dots[slideIndex]).stop().animate({ backgroundColor: 'white' }, 750);
}

// Generates a copy of the HTML slide at the given index.
function generateSlide(index)
{
    var gameImgPath = lookupGameImgPath(index);
    return `<div id="newSlide">
		        <img class="slideshowImg" src="${gameImgPath}" />
		    </div>`;
}

// Returns the path to a game's slideshow image based on the given ID
function lookupGameImgPath(index)
{
	switch (index) {
	    case 0: return "makerspace/banana.jpg";
	    case 1: return "makerspace/collabathon.jpg";
	    case 2: return "makerspace/playdoh.jpg";
	    case 3: return "makerspace/playdoh2.jpg";
	    case 4: return "makerspace/teach.png";
	    case 5: return "makerspace/wind.jpg";
	}
}

// Returns the index of the slide to the right of the current one, including wrap-around
function plusSlideIndex()
{
    if (slideIndex + 1 >= NumSlides_c)
        return 0;
    return slideIndex + 1;
}

// Returns the index of the slide to the left of the current one, including wrap-around
function minusSlideIndex()
{
    if (slideIndex - 1 < 0)
        return NumSlides_c - 1;
    return slideIndex - 1;
}
$("#gamePirate").hover(function() {
  TweenMax.to($(this), 0.2, {scale:1.1, ease:Bounce.easeOut});
  TweenMax.to("#imgf", 0.5, {left:-15, scale:1.05, ease:Bounce.easeOut});
  TweenMax.to("#imgfw", 0.05, {left:-15, scale:1.05, opacity:1, yoyo:true, repeat:1});
  TweenMax.to("#imgb", 0.1, {right:0, top:18, scale:1, opacity:1, yoyo:true, repeat:1});
  TweenMax.to("#iconp", 0.6, {left:200, rotation:360, opacity:0, ease:Bounce.easeOut});
  TweenMax.to("#iconph", 0.6, {left:200, rotation:360, opacity:1, ease:Bounce.easeOut});
  TweenMax.to("#labelp", 0.3, {opacity:0});
  TweenMax.to("#labelph", 0.3, {opacity:1});
},function() {
  TweenMax.to($(this), 0.2, {scale:1, ease:Expo.easeOut});
  TweenMax.to("#imgf", 0.5, {left:0, scale:1, ease:Bounce.easeOut});
  TweenMax.to("#imgfw", 0.5, {left:0, scale:1, opacity:0, ease:Bounce.easeOut});
  TweenMax.to("#imgb", 0.2, {rigth:-20, scale:1, opacity:0, ease:Bounce.easeOut});
  TweenMax.to("#iconp", 0.4, {left:0, rotation:0, opacity:1, ease:Bounce.easeOut});
  TweenMax.to("#iconph", 0.4, {left:0, rotation:0, opacity:0, ease:Bounce.easeOut});  
  TweenMax.to("#labelp", 0.3, {opacity:1});
  TweenMax.to("#labelph", 0.3, {opacity:0});
});

// second access
$("#gameFind").hover(function() {
  TweenMax.to($(this), 0.2, {scale:1.1, ease:Back.easeOut});
  TweenMax.to("#imgHunter", 0.5, {right:-40, scale:1.1, rotation: 5, ease:Bounce.easeOut});
  TweenMax.to("#imgSnake", 0.5, {left:-20, top:5, scale:1.1, ease:Bounce.easeOut});
  TweenMax.to("#imgSnakew", 0.05, {left:-20, top:5, scale:1.1, opacity:1, yoyo:true, repeat:1})
  TweenMax.to("#imgligthf2", 0.5, {opacity:0, yoyo:true, repeat:-1});
  TweenMax.to("#iconp_gf", 0.6, {left:200, rotation:360, opacity:0, ease:Bounce.easeOut});
  TweenMax.to("#iconph_gf", 0.6, {left:200, rotation:360, opacity:1, ease:Bounce.easeOut});
  TweenMax.to("#labelp_gf", 0.3, {opacity:0});
  TweenMax.to("#labelph_gf", 0.3, {opacity:1});
},function() {
  TweenMax.to($(this), 0.2, {scale:1, ease:Expo.easeOut});
  TweenMax.to("#imgHunter", 0.5, {right:-20, scale:1, rotation: -25, ease:Bounce.easeOut});
  TweenMax.to("#imgligthf2", 0.5, {opacity:1});
  TweenMax.to("#imgSnake", 0.05, {left:-20, top:20, scale:1});
  TweenMax.to("#imgSnakew", 0.05, {left:-20, top:20, scale:1, opacity:0});
  TweenMax.to("#iconp_gf", 0.4, {left:0, rotation:0, opacity:1, ease:Bounce.easeOut});
  TweenMax.to("#iconph_gf", 0.4, {left:0, rotation:0, opacity:0, ease:Bounce.easeOut});  
  TweenMax.to("#labelp_gf", 0.3, {opacity:1});
  TweenMax.to("#labelph_gf", 0.3, {opacity:0});
});

// third access
$("#gameJump").hover(function() {
  TweenMax.to($(this), 0.2, {scale:1.1, ease:Back.easeOut});
  TweenMax.to("#hunter", 0.05, {opacity:0});
  TweenMax.to("#hunterw", 0.05, {opacity:1, yoyo:true, repeat:1});
  TweenMax.to("#hunterj", 0.3, {opacity:1, top: -20, delay:0.1, ease:Bounce.easeOut});
  TweenMax.to("#hunterjb", 0.1, {opacity:1, top: -10, delay:0.1, ease:Bounce.easeOut, yoyo:true, repeat:1});
  TweenMax.to("#iconp_gj", 0.6, {left:200, rotation:360, opacity:0, ease:Bounce.easeOut});
  TweenMax.to("#iconph_gj", 0.6, {left:200, rotation:360, opacity:1, ease:Bounce.easeOut});
  TweenMax.to("#labelp_gj", 0.3, {opacity:0});
  TweenMax.to("#labelph_gj", 0.3, {opacity:1});
},function() {
  TweenMax.to($(this), 0.2, {scale:1, ease:Expo.easeOut});
  TweenMax.to("#hunter", 0.01, {opacity:1});
  TweenMax.to("#hunterw", 0.01, {opacity:0});
  TweenMax.to("#hunterj", 0.05, {opacity:0, top:10});
  TweenMax.to("#hunterjb", 0.05, {opacity:0, top:10});
  TweenMax.to("#iconp_gj", 0.4, {left:0, rotation:0, opacity:1, ease:Back.easeOut});
  TweenMax.to("#iconph_gj", 0.4, {left:0, rotation:0, opacity:0, ease:Back.easeOut});  
  TweenMax.to("#labelp_gj", 0.3, {opacity:1});
  TweenMax.to("#labelph_gj", 0.3, {opacity:0});
});
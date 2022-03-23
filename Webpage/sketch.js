let numb = 220;
let big = 10;
let down = 1;

let dots = [];

let cnv;
let im1, im2, im3, im4, im5, im6, im7, im8, im9, im10, im11, im12, im13, im14, im15;
let hello;

function preload() {
  im1 = createImg("https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTg3OTkzNDE3NjY0NDQwMjEz/tom-brady-49ers-wide.png","happy holidays");
  im2 = createImg("https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTg3OTkzNDE3NjY0NDQwMjEz/tom-brady-49ers-wide.png","wedding bells");
  im3 = createImg("assets/ben1.jpg","ben's headshot");
  im4 = createImg("assets/leen1.jpg","colleen's face at home");
  im5 = createImg("assets/SLKM.jpg","us doing our thing");
  im6 = createImg("assets/cats.jpg", "the cats!");
  im7 = createImg("assets/benart1.png","things that ben does");
  im8 = createImg("assets/benart2.png","things ben has done");
  im9 = createImg("assets/benart3.jpg","things that ben does");
  im12 = createImg("assets/benart4.jpg","and again, things he does!");
  im10 = createImg("assets/benwork1.jpg","things that ben does");
  im11 = createImg("assets/leencat1.jpg","leen and the rocket");
  im13 = createImg("assets/houseday.jpg","our house in the middle of the street");
  im14 = createImg("assets/houserebuild1.jpg","building the place back");
  im15 = createImg("assets/bridge.jpg","a bridge during the mississippi draw-down between locks");
  im16 = createImg("assets/leenout.jpg", "Colleen walking through the Quaking Bog in the park");
  hello = createP("newspaper");//an attempt at a title for the page
}

// Will run once when the sketch is opened
function setup() {
  cnv = createCanvas(windowWidth, 200);//for the visuals
  cnv.parent('sketch-holder');
  im1.parent("img1");
  im2.parent("img2");
  im3.parent("img3");
  im4.parent("img3");
  im5.parent("wedding");
  im6.parent("img5");
  im7.parent("img6");
  im8.parent("img6");
  im9.parent("img6");
  im10.parent("img6");
  im11.parent("img7");
  im12.parent("img6");
  im13.parent("img8");
  im14.parent("img8");
  im15.parent("img8");
  im16.parent("img7");
  hello.parent("hello");

  noStroke();
  // Initialize the snowflakes with random positions
  for (let i = 0; i < numb; i++) {
    dots.push({
      x: random(width),
      y: random(height)
    });
  }
}

// Will run every frame (refreshes many times per second)
function draw() {
  background("blue");

  // Iterate through each snowflake to draw and update them
  for (let i = 0; i < dots.length; i++) {
    const snowflake = dots[i];
    circle(snowflake.x, snowflake.y, big);
    if (snowflake.y > height + big) snowflake.y = -big;
    else snowflake.y += down;
  }

}

function windowResized() {
  resizeCanvas(windowWidth,200);
}

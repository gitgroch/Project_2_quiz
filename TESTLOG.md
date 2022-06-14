# Testing 

Testing methodologies and results are detailed below.

## A note on Responsiveness

As I took a "Mobile First" approach to development, responsiveness was tested throughout development as such responsiveness issues were addressed as the project progressed (some of these issues can befound in the Bugs & Fixes section below.)

Once the site was completed and deployed, formal testing took place under the following conditions: 

## Hardware Testing 

- Desktop responsiveness was tested on multiple screen sizes and resolutions including:
    - 14 inch 1920 x 1080
    - 24 inch 1920 x 1080 
    - 27 inch 2560 x 1440
    - 34 inch 3440 x 1440
- The Following Mobile Devices were used test layout and responsiveness:
    - Google Pixel 6 
    - Huawei P30 Pro 
    - Samsung Galaxy S20 plus 

## Virtual Testing 

- In addition to hardware testing, multiple templates were used to test responsiveness in Google Chrome Developers tools with the screen size template for Moto 4G being the baseline for the smallest screen size. 

## Browser Testing 

The website was tested manually on the latest versions of following browsers: 

- Chrome 
- Edge 
- Firefox 
- Opera 



## Testing Results 
- All internal and external links have been tested and work as intended.
- All JavaScript functions operate as expected 
- All Images are responsive and scale to screen size. 
- All Media queries work as intended to adjust elements for different screen sizes.
- I did not find any instance of elements such as text or images touching the side of the screen at any screen size.
- No ineternal errors are generated on the page or the console due to user actions
- There are no remaining app breaking bugs.

## Lighthouse 

All pages in the deployed site were passed through Google's Lighthouse tool to test for Performance, Best Practices, Accessibility and SEO in incognito mode. 

The scores from Lighthouse at time of testing were:

**index.html**
- **Desktop**
    - 99 performance, 100 Accessibility, 100 Best Practice, 100 SEO 
- **Mobile**
    - 100 performance, 100 Accessibility, 100 Best Practice, 100 SEO 

**quiz.html**
- **Desktop**
    - 99 performance, 100 Accessibility, 100 Best Practice, 100 SEO 
- **Mobile**
   -  92 performance, 100 Accessibility, 100 Best Practice, 100 SEO 

**end.html**
- **Desktop**
   - 100 performance, 100 Accessibility, 100 Best Practice, 100 SEO 
- **Mobile**
   - 100 performance, 100 Accessibility, 100 Best Practice, 100 SEO 

**highscore.html**
- **Desktop**
   - 100 performance, 100 Accessibility, 100 Best Practice, 100 SEO 
- **Mobile**
   - 98 performance, 100 Accessibility, 100 Best Practice, 100 SEO 




## Validator Testing 

- HTML 
    - No errors were returned when passing through the official W3C validator.
- CSS
    - No errors were found when passing through the official (Jigsaw) validator.
-JavaScript
    -   

## Accessibility 

- I used the [Web accessibility evaluation (WAVE)](https://wave.webaim.org/) tool to check if there were any major issues with the Accessibility of website.
- The tool gave me one error for an element in my navigation menu 'error: Empty form label'.
    - This is due to an empty span that is used to create the mobile drop down menu, however I would consider changing the design to address this in the future.

## Semantic Checklist

- I used a [semantics checklist](https://learn-the-web.algonquindesign.ca/topics/html-semantics-checklist/) as a final check to make sure the HTML code adhered to best practice.

# Bugs and Fix Log 

There were numerous bugs discovered and fixes applied throughout development, too many to keep track of, however below I have logged some of the more complex issues I came across that represented learning opportunities for future projects.

**Bug:** Logo in top left is blue when page first loads.

- **Fix:** Added text-decoration none to header class.

**Bug** All pages throw warning in HTML validator that H1 should only be used to signify the start of a section to conform to semantic web design.

- **Fix** The logo was initially designed using H1 tag. Replaced this with a div and copied in H1 styling to maintain the effect.


**Bug:** Unwanted border around images when adding hover effect on home page.

- **Fix:** Changed padding to 0 for main image styling.

**Bug:** Couldn’t get text to appear for card cover effect on home page.

- **Fix:** Div closed after image and not after the text.


**Bug:** Unable to apply before/after affect to card using & as per a tutorial.

- **Fix:** Realised this was a feature of SASS so applied before and after directly to class .card rather than using shorthand.


**Bug:** When applying hover style to all cards on the home page, I broke the entire flex layout:

- **Fix:** Caused by not closing the new divs properly. Undid all changes and carefully added the divs. 


**Bug:** When adding buttons to the main page cars, their position weren’t consistent:

- **Fix:** added class to all p elements under the images and gave it a min width to ensure the button positions remained consistent with each other.


**Bug:** Potrait orientated pictures in Gallery lightbox are stretching outside the screen on desktop.

- **Fix:** Created new class specifically for portrait oriented images and adjusted the flex layout and sizing properties to contain image within the screen.

**Bug:** On mobile screens it was possible to scroll horizontally to uncenter the entire home page.

- **Fix:** The styling given to the Explore heading was creating overflow making the page scrollable horizontally. I moved the styling to apply to my media query for larger screens, so it is not present for smaller screens. The nature of the effect means it wouldn’t display properly for smaller screens anyway so this resolved two issues. 

**Bug:** Points being deducted for SEO in Lighthouse tool due to the use of generic text in Links on home page.

- **Fix:** Changed Text "Learn More" to the title of the page the link takes you to. SWEO now passes with 100.

**Bug:** Points being deducted for Accessibility in Lighthouse tool due to insufficient contrast on certain elements on the Biography page.

- **Fix:** Changed background color on class .bio_block to enhance contrast resulting in a score of 100. 

**Bug:** Points being deducted for Mobile Performance in Lighthouse tool due to images loading slowly.

- **Fix:** Converted all images used from jpeg to webp.

**Bug:** In Firefox, the text of the top and bottom cards was pushed to the right leaving a large gap between the picture and text.

- **Fix:** Max-width was set to 100% for class "art_img", removing this resolved the issue.


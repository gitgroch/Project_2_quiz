# Testing 

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
- No internal errors are generated on the page or the console due to user actions
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
    - No errors were found when passing through JSHint.com
The following Metrics were returned:
    - script.js 
        - There are 12 functions in this file.
        - Function with the largest signature take 2 arguments, while the median is 0.5.
        - Largest function has 10 statements in it, while the median is 3.
        - The most complex function has a cyclomatic complexity value of 3 while the median is 1.
    - highscore.js 
        - There is only one function in this file. 
        - It takes one argument.
        - This function contains only one statement.
        - Cyclomatic complexity number for this function is 1.
    - end.js
        - There are 3 functions in this file.
        - Function with the largest signature take 2 arguments, while the median is 1.
        - Largest function has 7 statements in it, while the median is 1.
        - The most complex function has a cyclomatic complexity value of 1 while the median is 1.
    
    

## Accessibility 

- I used the [Web accessibility evaluation (WAVE)](https://wave.webaim.org/) tool to check if there were any major issues with the Accessibility of website.
    - There were no major errors to report

# Bugs and Fix Log 

There were various minor bugs along the way, but I have detailed below the one I had most trouble identifying and resolving: 

**Bug:** Multiple JavaScript 'cannot read properties of undefined' errors appearing on each page when testing. 

- **Fix:** During development I had linked all Javascript files to all HTML files. This resulted in the functions attempting to run on DOMs where certain id's did not exist and therefore causing errors because variables were undefined. 
The fix was to only link the appropriaye JS file to the corresponding HTML files. 




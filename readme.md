# Project Overview
## Project Schedule
This schedule will be used to keep track of your progress throughout the week and align with our expectations.  
You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.
|  Day | Deliverable | Status
| --- | -------------------------------------------- | ---------- |
|Day 1| Project Description                          | Complete   |
|Day 1| Wireframes / Priority Matrix / Timeline      | Complete   |
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete   |
|Day 4| MVP & Bug Fixes                              | Complete   |
|Day 5| Final Touches                                | Incomplete |
|Day 6| Present                                      | Incomplete |
## Project Description
The goal of this project is to create a functional and professional portfolio website. The website will function as a space to showcase my work, highlight my skills, and provide an avenue of communication between interested parties and myself. 
## Portfolio I want to Emulate
Search and compare at least 3 profile web sites.  Record your findings in the table below and include some aspect of the site that you would like to incorporate into your own site.
Link To Site  | One Thing I'd Like To Incorporate | 
| ------------- | ------------- |
| [denisechandler.com](http://www.denisechandler.com/)| unique hamburger animation
| [samcasey.info](https://samcasey.info/) |  I like the subtle gradient and the use of icons alongside technologies.
|[renaemeines.com](http://renaemeines.com/)| good design and project gallery forward
---
## Wireframes
- [Portfolio Site Wireframe](https://i.imgur.com/CGfdx4s.jpg)
## Time/Priority Matrix 
- [Portfolio Site Priority Matrix](https://i.imgur.com/mDfTJvb.jpg)
	- (Initially the hours marked are 1, 2, & 3, but the actual Time axis is probably closer to 1, 1:30, & 2)
### MVP/PostMVP
| __MVP__                             | ///////// |                        PostMVP |
| :------------------------------------- | :-: | --------------------------------: |
| 1A - Flexbox Nav                        | / |  1C - Hamburger Animation & Design |
| 1B - Responsive Hamburger               | / |        2B - Color Lines Background |
| 2A - Photo Placement & Design           | / |                3B - Icons for Tech |
| 2C - Write Personal Brand               | / |    4D - Hover and Click Animations |
| 3A - CSS Grid Layout                    | / |                   5 - Blog Section |
| 3C - Identify Relevant Skills & Tech    | / | 5A - Design Summary Cards Container|
| 4A - API Updates Project Cards          | / |          5B - Design Summary Cards |
| 4B - Responsive Card Gallery            | / |        6B - Notification on Submit |
| 4C - Card Layout & Buttons              | / |         6C - Icon Links to Socials |
| 6A - Working Contact Form               | / |               7B - Footer Site Map |
| 7A - Footer Copyright                   | / |                                    |
| 7C - Footer Site Links & Resume         | / |                                    |


## Functional Components
#### MVP
| Component                       | Priority | Estimated Time | Actual Time |
| ------------------------------------ | :-: |  :-----: | :-----: | 
| 1A - Flexbox Nav                     |  H  | 1hr      | 0.5 hrs |
| 1B - Responsive Hamburger Nav        |  H  | 1hr      | 1 hr    |
| 2A - Photo Placement & Design        |  M  | 1 hr     | 1 hr   |
| 2C - Write Personal Brand            |  L  | 0.5 hrs  | 0.5 hrs |
| 3A - CSS Grid Layout                 |  H  | 1 hr     | 0.5 hrs |
| 3C - Identify Relevant Skills & Tech |  M  | 0.5 hrs  | 0.5 hrs |
| 4A - API Updates Project Cards       |  H  | 2 hrs    | 0.5 hrs |
| 4B - Responsive Card Gallery         |  M  | 1.5 hrs  | 0.5 hrs |
| 4C - Card Layout & Buttons           |  M  | 2 hrs    | 1 hr    |
| 6A - Working Contact Form            |  H  | 2 hrs    | 1 hr    |
| 7A - Footer Copyright                |  L  | 0.5 hrs  | 0.5 hrs |
| 7C - Footer Site Links & Resume      |  L  | 0.5 hrs  | 0.5 hrs |
| Total                                |  H  | 13.5 hrs | 8 hrs   |
#### PostMVP
| Component                     | Priority | Estimated Time | Actual Time |
| ---------------------------------- | :-: |  :-----: | :-----: | 
| 1C - Hamburger Animation & Design  |  H  | 1 hr     | 1 hr    |
| 2B - Color Lines Background        |  M  | 1.5 hrs  | 1.5 hrs |
| 3B - Icons for Tech                |  M  | 0.5 hrs  | 0.5 hrs |
| 4D - Hover and Click Animations    |  M  | 1 hr     | 0.5 hrs |
| 5 - Blog Section                   |  L  | 2 hrs    | 
| 5A - Design Summary Cards Container|  L  | 1 hr     |
| 5B - Design Summary Cards          |  L  | 1 hr     |
| 6B - Notification on Submit        |  H  | 1.5 hrs  |
| 6C - Icon Links to Socials         |  H  | 0.5 hrs  | 0.5 hrs |
| 7B - Footer Site Map               |  H  | 0.5 hrs  |
| Total                              |  H  | 10.5 hrs | 5 hrs   |
## Additional Libraries
 - jQuery
	- interaction between JS and the DOM
## Code Snippet
This section was revised maybe 3 different times as the functionality requirements changed. I wanted to avoid pulling in bootstrap for this one component, so I figured out how to make the toggleable nav myself! Commented out is the original display settings before the sliding nav menu was implemented. 
```js
const toggleNav = $(`.fa-bars`).on(`click`, () => {
    const $NavLinks = $(`.nav-link-list`);
    if ($NavLinks.css(`display`) !== `none`) {
      $NavLinks.slideToggle(500)
      // $NavLinks.css(`display`,`none`) 
    } else {
        $NavLinks.slideToggle(500)
        // $NavLinks.css(`display`,`block`)
    }
})
```
## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.
#### SAMPLE.....
| _ERROR_ | RESOLUTION |
| :---- | ---------: |
|_css: project card image breaking out through rounded corners of card div_ | used `border-radius: 10px 10px 0 0;` to give rounded corners to the top left and right corners on the image|
|_app.js:65 Uncaught TypeError: Cannot read property 'addEventListener' of null_ | default ID for the form needed to be changed to match the customized ID of my form. (much easier fix than I was anticipating)|

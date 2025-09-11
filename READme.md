# Tech Ed week 5 group assignment

Consolidate your knowledge of full-stack development by designing and building a web application that showcases your skills in HTML, CSS, client-side JavaScript, server-side JavaScript with Express, and database interactions using Postgres.

## Reflection

#### Monday

- We started by brainstorming ideas on what kind of website we wanted to create, we threw around some useful tools for fantasy games such as Dungeons and Dragons or even creative writers to use for creating characters.
- We created our google docs, trello, and discord to share ideas - we shared initial inspiration links for pages that emulate the kind of things we’re going for such as Roll20 and DnD Beyond.
- We started out by putting all of our ideas and suggestions on the figma board, discussing all the features we wanted to include, ideas we can play with.
- Sam agreed to do the set up for the github monopro, supabase and render, and create the boiler - then checked that it was all working and talking to each other.
- In Figma, Sam created some layout templates for the pages we want - Steph then formatted them to include the sections we agreed we wanted. We created a colour palette page which we all contributed to with colours we thought would be good as page themes. Corinna created some example page templates with the different colour palettes - the group then discussed them and came to a consensus of liking the gray and green colour combination. Corinna suggested a gradient background to soften the contract, Sam recommended a border around the section boxes to make the information stand out.

#### Tuesday

- Agreed that the scale we wanted to achieve wasn’t achievable with the time constraints, so we scaled down to one page that meets the requirements of the brief. We discussed what the most important content was. Sam adjusted the wireframe to reflect the changes, Corinna added the styling. Steph set about making the element prompt that allows the users to select an item from one of twenty weapon choices.
- Sam made a template character sheet as downloadable PDF that users can download for creating their characters.
- We agreed on roles for today; Sam to complete Index Html, and test the backend. Steph and Corinna to collaborate on CSS styling.
- Steph moved to working on the item generator so Corinna took on the CSS styling, and began by creating a grid based on the wire frame.
- There was a disagreement about adding two text boxes with immersive text to create more authentic user experience. The disagreement surrounded having the text create an immersive experience vs. crowding the page and being exclusionary to amateurs who are new to character creation.

#### Wednesday

- Joe went through our stand up in the morning, and we also reviewed our conflict resolution plan and communication plan. We updated both to help us move forward, then agreed on tasks for the day.
- Steph created a spotify playlist which was added to the page, and also added more characters to the API for the users to choose from. The consensus on the immersive text was to reduce the amount of text so that it’s not so overwhelming for the user. Corinna added scroll stylers to the character wrapper to make it easier to view.
- Sam addressed issues on render, running tests to establish why there were issues with deployment, and paused the js while he tested.
- Mid-morning, we discovered that Corinna and Steph working on different things simultaneously and updating features meant the page layout altered to accommodate the changes. The group checked in and decided that styling should be paused until all the elements were functional and on the page. The group agreed that all code would be pushed and pulled before lunch so that after lunch everyone would be starting with the same code.
  While looking through the code together for issues that might be affecting the styling, we found duplicate code/items in the html. Steph worked on tidying up the code and removing those items, Sam went through the css and added height parameters to the containers to stop the stretching the boxes they are in.
- Corinna updated the reflections, then updated the wireframe to reflect the new elements positioning.
- Final push and pull done before lunch.
- Plan for after lunch: Sam & Steph to collaborate on getting the item generator functioning, Corinna to pitch in but to continue with styling the page - everything on the page is currently being pushed to the margin and the group looked through the code together to establish reasons; it might be because some of the elements haven’t been placed yet so they are defaulting, sub grids might be needed to create space in grid areas where elements are currently overlapping.
- Over lunch Sam reworked the css and managed to get everything sat on the page as desired. It was then agreed that Corinna would move onto the accessibility and responsive side of the site, and Steph and Sam began working through the code for the item generator to see why the items weren’t appearing on the page.
- Corinna made a start on adding aria labels to each element, while Sam and Steph debugged the code for the item generator. The whole team did a push and pull at the end of the day to ensure that when starting again the next day, everyone started with the same code.

#### Thursday

- Thursday morning we regrouped and went over what still needed doing; the item generator still wasn’t rendering so it was agreed that Manny or Joe would be consulted after the stand in. As the item generator did appear on the page, it just didn’t list the item, it would not affect layout so Corinna would carry on with the aria labels, adding the media query and formatting the effects of the buttons and links.
- The group agreed to try and have everything functional and ready to test by lunchtime so that after lunch could be spent testing the functionality, responsiveness and accessibility of the site.
- Manny gave some pointers to Sam and Steph that might help them correct the issues with the item generator; initially it had trouble calling the items through Render and getting this to speak with the site, this was resolved with a reviewed method to fetch the information. Once this was established, there was a problem rendering the items on the page, which ultimately culminated in a misplaced capital letter causing the issue with identifying what needed to be retrieved.
- Once the item generator was calling items and rendering them on the page, and Corinna finished adding the aria labels, the media query and hover effects to the buttons and links, all group members pushed their code ready for testing after lunch.
- After lunch, Sam and Steph worked through the errors appearing in render during deployment, while Corinna got a screen reader on the website to check the aria-labels. Corinna also tested the website, Steph tried a screen reader on a different computer to check functionality on other devices. Everything worked across the board, however some changes were made in css as the boxes surrounding the rendered items were overflowing off the page when testing on mobile. The dimensions for the boxes were changed to accommodate smaller screens. We did also have a play about trying to get the text boxes to sit in the center when shrunk, however this upset the formatting, and the group decided to leave it given the time constraints.
- Once the group was happy with how everything functioned and formatted, we got another instructor, Tim, to try the website and give us his thoughts. He recommended changing the character sheet link so that it opened in a new tab to allow users to input their character without losing progress on the form on the website. The change was made, and the site rendered. Everything looked good so the team set about diving up the presentation and documentation. Corinna updated the readMe, while Sam and Steph started making the presentation slides and each filling out the parts they had been involved in.

## Requirements / User Stories

#### Main Goals

- ✅ 🎯 I want users to be able to submit a character idea
- ✅ 🎯 I want to view submitted characters
- ✅ 🎯 I want to be able to use a item generator
- ✅ 🎯 I want to be able to download a blank character sheet

#### Stretch Goals

- ✅ 🏹 Spotify embed for the playlist
- ✅ 🏹 To include aria labels, media queries and hover effects to make the website accessible, responsive and interactive
- 🏹 Image pull field for any characters that people submit
- 🏹 I want to be able to explore multiple pages
- 🏹 I want to roll a D20 for initiative
- 🏹 I want videos for different atmospheres (iframe)
- 🏹 I want the cursor to be a wand (toggle)

## Wireframe

- overall review about the wireframe

- something about this image

 <div align="center">

![Mobile](./GroupPlanner/WireFrame/Mobile.png)

</div>

- something about this image

<div align="center">

![DeskTop](./GroupPlanner/WireFrame/DeskTop.png)

</div>

- something aboout this image

<div align="center">

![ColourPalette](./GroupPlanner/WireFrame/ColourPalette.png)

</div>

## Errors or Bugs I Encountered

..

## What went really well and what could have gone better?

..

## External sources

#### Info

[Tech Ed repo](https://github.com/Tech-Educators/software-dev-021) , [FigJam](https://www.figma.com/board/JjN2Zgtoynrau06MjWJs6q/SD021?node-id=0-1&p=f&t=V1WCGcrmVKnoxJDr-0) , [MDN](https://developer.mozilla.org/en-US/) , [W3School](https://www.w3schools.com/)

#### Render & Supabase

[Sam's set-up guide](https://github.com/IndieMasco/TechEdSoftwareDeveloper021/blob/main/week4/render-and-supabase/READme.md)

#### Downloadable PDF

[Link A Webpage Button To An Internal PDF](https://www.youtube.com/watch?v=sWHcoekPKCU) , [Stack Overflow - Downloadable PDF](https://stackoverflow.com/questions/2906582/how-do-i-create-an-html-button-that-acts-like-a-link)

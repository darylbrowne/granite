# Granite.js
![CI](https://github.com/TeamAddapptation/granite/workflows/CI/badge.svg) ![Generated Button](
https://github.com/TeamAddapptation/granite/blob/image-data/badge.svg) ![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square) [![Anaconda-Server Badge](https://anaconda.org/anaconda/brotli/badges/version.svg)](https://anaconda.org/anaconda/brotli) ![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)

Granite.js is a front-end component library from addapptation, built to render formatted JSON as PWA-ready DOM elements.

A nod to both where it was created (New Hampshire, USA - also known as _The Granite State_), as well as to how it renders data in such a... rock solid way. Each _block_ of granite.js creates a self-contained chunk of HTML, CSS, and JS that can be late-loaded into any front-end enviroment - yes, even inside your existing Vue, React, or Angular project.

The ideal use case for Granite.js is a data-driven, multi-page web application that needs to decouple legacy server-side logic from the need for evergreen mobile, responsive, and progressive UX/UI. In addition to reinventing your site users' experience, replacing your existing view code with semantic HTML, or even plain old _div_ tags containing JSON in Granite.js format, will dramatically reduce your application's build, load, and response times.

---

## Getting Started

1. Your page includes a reference to your raw, minified, or compressed version of _granite.js_ 


```html

<script src='[path/]granite[.min].js[.br]'></script>

```

2. Your server-side logic writes a DOM element with a unique _id_, a _data-granite-block_ attribute containing the JSON required for the desired UI element, and an optional _data-granite-theme_ attribute containing a JSON-based theme palette.

```html

<div id='someUniqueID' 
     data-granite-block='<% =#[Block JSON Here]%>'
     data-granite-theme='<% =#[Theme JSON Here]%>'>
</div>

```
...and those JSON objects might look like this:

```js
     //Block JSON
     {
      "id": "someUniqueID", //REQUIRED
      "feature": "tiles", //REQUIRED      
      "class": "a_custom",
      "options": {
        "title": "Header",
        "description": "Ibid ipsum lorem",
        "style": "basic",
        "layout": "center",
        "theme": "custom",
        "header_color": "",
        "header_size": "medium",
        "description_color": "",
        "description_size": "medium",
        "height": "150px",
        "padding": "small"
      },
      "records": [
        {
          "title": "Vermont",
          "description": "Donec sed urna at ligula maximus accumsan a tempor orci.",
          "background_color": "#333",
          "background_image": "https://picsum.photos/id/1002/400",
          "href": "https://addapptation.com/",
          "center": false,
          "icon": "fas fa-dog",
          "hover_color": "#333",
          "target": false,
          "classes": "a__record_class"
        },
        {
          "title": "New Hampshire",
          "description": "",
          "background_color": "orange",
          "background_image": "",
          "href": "https://addapptation.com/",
          "link_name": "",
          "center": false,
          "buttons": [{"name": "View", "href": "/cards?selection=view"}],
          "icon": "",
          "icon_color": "",
          "icon_size": "",
          "title_color": "",
          "title_size": "",
          "description_color": "",
          "description_size": "",
          "hover_color": "",
          "target": false,
          "classes": "a__record_class"
        }
      ]
     }

     //Theme JSON
     {
          "colors" : {
               "primary" : "#ffffff",
               "secondary" : "#ffcc66"           
          }
     }

```

3. Everything just works.

![](https://media.giphy.com/media/3oKIPytp6F9wjDftLi/giphy.gif)

---

# Understanding Granite.js

The following core concepts constitute the foundation of development of all new and existing _blocks_ of Granite.js 

> **block:** a Granite.js UI element is called a block, and consists of an HTML tag with an _id_ and a _data-granite_ attribute.

> **theme:** Granite.js offers global and/or block-level styling via JSON.

> **JSON:** Granite.js relies on valid JSON (which includes defining keys as strings). When in doubt, run your JSON through [https://jsonlint.com/](https://jsonlint.com/) 


The following foundational factors go in to developing and extending Granite.js: 

> **Run-Time Solution:** Granite.js requires one standardized JSON object and generates an immediately usable component, with no need for a compile step between receiving data and rendering results. To this end, we use CSS Variables instead of SASS.

> **One Flavor - Vanilla:** Granite.js is based on the best of breed usage of HTML, CSS, and JavaScript. To keep everything as atomic as possible, Granite.js leverages the native strengths of each language or protocol with no special flavors except vanilla. 

> **Chatty vs Chunky Notifications:** From their initial invocation through their entire life cycle, blocks provide interface points for your external notification, warning, and error handling solutions.  


### Setting Up Development Environment

- Once you have a local copy of Granite.js, open a terminal window in that directory and be sure you have a current version of npm running.

> install/update npm

```shell
$ npm install npm@latest -g
```

> install granite.js packages

```shell
$ cd [your local granite.js project]
$ npm install
```

##  Using Workflows (Build Options)

You are free to use this project in its raw, uncompressed form by simply forking the repository. However, if you are integrating Granite.js into a professional workflow, we recommend using the YAML file to build your Development, Stage, and Production environments. This repository's release branch contains the latest, documented stable from each of the below's latest run via our own CI/CD automation (that mirrors to GitHub from GitLab). Finally, there are regular Releases available for each stable release commit. Refer to the repository for additional notes. 

> Remember to _run test_ before you merge changes upstream,

```shell
$ run test
```

- **Development**: Continuous Integration build process runs jest tests and file compression on every commit
- **Stage**: Continuous Deployment creates semantic versioned release branch 
- **Release**: Integrate with GitHub Actions to populate a CDN and/or pull releases*

*_Pipeline builds brotli files for faster and leaner CDN response times. [Read about brotli...](https://medium.com/@suneetbansal/brotli-vs-gzip-compression-surprising-compression-result-8de14e0574a)_

## Previewing Locally

To see what your JSON looks like _set in stone_, take the following steps:

1. Create a file containing: 
```js

export let jsonBlock = {
     // Your block JSON
};

export let jsonTheme = {
     // Your theme JSON
};
```
2. Save your work as a .js file(s) in a subfolder under the /qa folder
3. Browse the rendered JSON using comma-separated references to the files* 
     (e.g. https://teamaddapptation.github.io/granite/qa/?show=tiles/tiles_1.2,tabs/acme)

     _*Be sure to exclude the .js file extension in the above filepath - just subfolder and file name_

## Developing / Refactoring / Customizing Granite.js Blocks

...

## Release Notes

|                |Features                          |Date                         |
|----------------|-------------------------------|-----------------------------|
|Version 0.1.0|Tiles, YAML            |May 6, 2020            |
|Version 0.2.0          |Themes, QA            |May 13, 2020           |
|Version 0.3.0          |Tabs, Action Row|May 20, 2020|
|Version 0.4.0          |Sidepane |May 27, 2020|
|Version 0.5.0          |Nav, Form |June 3, 2020|
|Version 0.6.0          |Table |June 10, 2020|






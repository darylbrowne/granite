console.log('tabs 1.0')
export function tabs(jsonTabs, jsonTheme) {
    /*---------------------------------------------
    Global Variables
    ---------------------------------------------*/
    console.log(jsonTheme);
    var json = JSON.parse(jsonTabs);
    var jsonTheme = JSON.parse(jsonTheme);
    var addappterID = json['id'];
    var cssID = ".a__" + addappterID;
    var id = "a__" + addappterID;
    var options = json['options'];
    var records = json['records'];
    var style = style(options);
    // var style = options['style'] ? options['style'] : "tabs";
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const tab_param = urlParams.get('tab');
    const style_param = urlParams.get('style');
    var objClasses = {
        "micro": {
          "item": ["row"]
        },
        "action" : {
          "container" : ["a__tile_action"]
        },
        "multi": {
            "wrapper": ["a__multi_wrapper"],
            "container": ["multi-container"],
            "containerID": ["multiContainer"],
            "content": ["multi-step"],
            "contentID": ["multiStep"],
            "item": ["step-container", "g__link"]
        },
        "tabs": {
            "wrapper": ["g__tabs_Wrapper"],
            "container": ["tabs-container"],
            "containerID": ["gTabsContainer"],
            "content": ["g__contents"],
            "contentID": ["gContents"],
            "link": ["nav-link"],
            "item": ["g__link", "single-tab"]
        },
        "block": {
          "container": ["block-container"],
          "item": ["block-item"],
          "link": ["block-link"]
        }
      };
    function style(o){
        switch (o.style){
          case "tabs":
              return "tabs";
          break;
          case "multi":
            return "multi";
          break;
          default:
            return "tabs";
          break;
      }
    }
    var content = (document.getElementById(addappterID).innerHTML).trim();
    if (content !== ""){
      return;
    }
    var aTitle = options.title ? true : false;
    var aDescription = options.description ? true : false;
    if(options.buttons){
      var aButtons = options.buttons.length ? true : false;
    }
    var action = (aTitle || aDescription || aButtons);
    /*---------------------------------------------
    Helpers - Should be moved to there own file
    ---------------------------------------------*/
    var isObject = function (val) {
        return Object.prototype.toString.call(val) === "[object Object]";
    };

    var isArray = function (val) {
        return Array.isArray(val);
    };

    var createElement = function (a, b) {
        var d = document.createElement(a);
        if (b && "object" == typeof b) {
            var e;
            for (e in b) {
                if ("html" === e) {
                    d.innerHTML = b[e];
                } else {
                    d.setAttribute(e, b[e]);
                }
            }
        }
        return d;
    };
    var each = function (arr, fn, scope) {
        var n;
        if (isObject(arr)) {
            for (n in arr) {
                if (Object.prototype.hasOwnProperty.call(arr, n)) {
                    fn.call(scope, arr[n], n);
                }
            }
        } else {
            for (n = 0; n < arr.length; n++) {
                fn.call(scope, arr[n], n);
            }
        }
    };
    /*---------------------------------------------
    Align Tabs and block
    ---------------------------------------------*/
    switch (options.align){
        case "center":
            var align = "center";
        break;
        case "right":
            var align = "flex-end";
        break;
        default:
            var align = "flex-start";
        break;
    }
    /*---------------------------------------------
    Align Tabs and block
    ---------------------------------------------*/
    switch (options.padding){
        case "small":
            var tab_padding = "20px";
        break;
        case "large":
            var tab_padding = "40px";
        break;
        default:
            var tab_padding = "30px";
        break;
    }
    /*---------------------------------------------
    Cursor
    ---------------------------------------------*/
    switch (options.cursor_disabled){
      case true:
          var cursor = "none";
      break;
      default:
        var pointer = "pointer";
      break;
  }
    /*---------------------------------------------
    Font Size
    ---------------------------------------------*/
    switch (options.font_size){
        case "small":
            var font_size = "14px";
        break;
        case "large":
            var font_size = "22px";
        break;
        default:
            var font_size = "18px";
        break;
    }
    var font_color =  options.font_color ? options.font_color : "#A1A1A1";
    var active_color =  options.active_color ? options.active_color : "#101010";
    var hover_color =  options.hover_color ? options.hover_color : "#BF458A";
    var highlight_color = options.highlight_color ? options.highlight_color : "#BF458A";
    /*---------------------------------------------
    Multi Tab Spacing
    ---------------------------------------------*/
    var viewport = options.full_width ? document.documentElement.clientWidth - 260 : 1140;
    var multiCount = records.length;

    if (multiCount <= 4){
        var circleWidth = 50;
        var step_padding = 20;
        var step_width = viewport / multiCount - circleWidth;
        var left = (step_width/2) + (circleWidth/2);
        var top = (circleWidth/2);
    }else{
        var circleWidth = 40;
        var step_padding = 20;
        var step_width = 200 - circleWidth;
        var left = (step_width/2) + (circleWidth/2);
        var top = (circleWidth/2);
    }
        var m_circleWidth = 30;
        var step_padding = 10;
        var m_step_width = 150 - m_circleWidth;
        var m_left = (m_step_width/2) + (m_circleWidth/2);
        var m_top = (m_circleWidth/2);
    /*---------------------------------------------
    Theme Variables
    ---------------------------------------------*/
    if(jsonTheme){
        var primary = jsonTheme.primary ? jsonTheme.primary : "#BF458A";
        var secondary = jsonTheme.secondary ? jsonTheme.secondary : "#5611ff";
        var darkGray = jsonTheme.darkGray ? jsonTheme.darkGray : "#666666";
        var mediumGray = jsonTheme.mediumGray ? jsonTheme.mediumGray : "#b7b7b7";
        var lightGray = jsonTheme.lightGray ? jsonTheme.lightGray : "#d9d9d9";
        for (var p in jsonTheme) {
            if( jsonTheme[p] === ":root" ) {
                var color = "--" + p;
                jsonTheme[p] = getComputedStyle(document.body).getPropertyValue(color);
                }
            }
    } else {
        var primary = "#BF458A";
        var secondary = "#5611ff";
        var darkGray = "#666666";
        var mediumGray = "#b7b7b7";
        var lightGray = "#d9d9d9";
    }

    /*---------------------------------------------
    CSS Block
    ---------------------------------------------*/
    var css = document.createElement('style');
    css.innerHTML = `
    :root{
        --primary: ${primary};
        --secondary: ${secondary};
        --darkGray: ${darkGray};
        --mediumGray: ${mediumGray};
        --lightGray: ${lightGray};
    }
    ${cssID}.g__container{
      max-width: 1140px;
      margin-left: auto;
      margin-right: auto;
    }
    ${cssID}.g__container-fluid{
      max-width: 100%;
      margin-left: auto;
      margin-right: auto;
    }
    ${cssID} .tabs-container {
        justify-content: ${align};
      }
    ${cssID} .tabs-container .g__link[aria-selected="true"] {
        text-decoration: none;
        border-bottom: 2px solid ${highlight_color};;
      }
    ${cssID} .tabs-container .g__link[aria-selected="true"] .nav-link {
      text-decoration: none;
      color: var(--darkGray);
    }
    ${cssID} .tabs-container .g__link[aria-selected="false"] .nav-link {
        color: var(--mediumGray);
    }
    ${cssID} .tabs-container .single-tab .nav-link {
        font-size: ${font_size};
      }
    ${cssID} .tabs-container .single-tab .dropdown-menu .dropdown-item {
        color: var(--darkGray);
        font-size: ${font_size};
      }
    ${cssID} .tabs-container .single-tab .dropdown-menu .dropdown-item[aria-selected="true"] {
        color: var(--darkGray);
      }
    ${cssID} .tabs-container .g__link a{
        padding: 5px ${tab_padding};
      }
    ${cssID} .tabs-container .dropdown-item[aria-selected="true"] {
        background-color: var(--lightGray);
      }
    ${cssID} .step-container {
        width: ${step_width}px;
        padding: 0 ${step_padding}px;
      }
    ${cssID} .step-container .step-num {
        width: ${circleWidth}px;
        height: ${circleWidth}px;
        text-decoration: none;
      }
    ${cssID} .step-container:not(:last-child):after {
        width: ${step_width}px;
        left: ${left}px;
        top: ${top}px;
      }
    ${cssID} .step-container.complete .step-num {
        color: ${highlight_color};
        border: 2px solid ${highlight_color};
        box-shadow: 0 0 4px 0 ${highlight_color};
        text-decoration: none;
      }
    ${cssID} .step-container.active .step-num {
        color: ${highlight_color};
        border: 1px solid ${highlight_color};
        text-decoration: none;
      }
      ${cssID} .step-container[aria-selected="true"] .step-num {
        color: ${highlight_color};
        border: 1px solid ${highlight_color};
        text-decoration: none;
      }
    ${cssID} .step-container.complete:after {
        border-color: ${highlight_color};
        background: ${highlight_color};
      }
    @media only screen and (max-width: 767.98px) {
        ${cssID} .tabs-container {
            justify-content: flex-start;
          }
        ${cssID} .step-container {
            width: ${m_step_width}px;
          }
        ${cssID} .step-container .step-num {
            width: ${m_circleWidth}px;
            height: ${m_circleWidth}px;
          }
        ${cssID} .step-container:not(:last-child):after {
            width: ${m_step_width}px;
            left: ${m_left}px;
            top: ${m_top}px;
          }
    }
    :root {
        --lg-step-width: 100px;
        --lg-step-margin: 30px;
        --lg-circle-width: 50px;
        --sm-step-width: 80px;
        --sm-step-margin: 20px;
        --sm-circle-width: 40px;
        }
        /* -------- CUSTOM BUTTONS -------*/
      .g__btns-container {
        display: flex;
      }
      .g__action-content{
        display: flex;
        justify-content: flex-end;
      }
      .g__btns-wrapper{
        display: flex;
        flex-direction: row;
        position: relative;
      }
      .g__custom-btn{
        border: 1px solid #BFBFBF;
        letter-spacing: 0.7px;
        color: #A1A1A1;
        padding: 5px 35px;
        font-size: 14px;
        color: #A1A1A1;
        border-radius:.25rem;
        background: #fff;
        text-decoration: none;
        margin-left: 15px;
      }
      .g__custom-btn:hover{
        background: #F5F5F5;
        color: #101010;
        text-decoration: none;
        border-color: #A1A1A1;
      }
      .hamburger{
        display:none;
      }
      .hamburger .line{
        width: 25px;
        height: 3px;
        background-color: #101010;
        display: block;
        margin: 5px auto;
        -webkit-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }
      .hamburger:hover{
        cursor: pointer;
      }

      #hamburger-1.is-active .line:nth-child(2){
        opacity: 0;
      }

      #hamburger-1.is-active .line:nth-child(1){
        -webkit-transform: translateY(8px) rotate(45deg);
        -ms-transform: translateY(8px) rotate(45deg);
        -o-transform: translateY(8px) rotate(45deg);
        transform: translateY(8px) rotate(45deg);
      }

      #hamburger-1.is-active .line:nth-child(3){
        -webkit-transform: translateY(-8px) rotate(-45deg);
        -ms-transform: translateY(-8px) rotate(-45deg);
        -o-transform: translateY(-8px) rotate(-45deg);
        transform: translateY(-8px) rotate(-45deg);
      }
        /*---------------------------------------------
        Multi Styles
        ---------------------------------------------*/
        #multiContainer{
          overflow: auto;
          display: flex;
          justify-content: center;
        }
        .a__multi_wrapper{
          padding: 0;
        }
        .multi-step {
          display: flex;
          justify-content: center;
          align-items: start;
          list-style-type: none;
          padding: 10px 0;
        }
        .step-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          text-decoration: none;
          transition: transform 1s;
        }
        .step-container:hover {
          text-decoration: none;
        }
        .step-container:not(:last-child):after {
          content: "";
          height: 3px;
          background: #fff;
          border-top: 1px solid;
          border-bottom: 1px solid;
          border-color: #ccc;
          background: #fff;
          position: absolute;
        }
        .step-container .step-num {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoriation: none;
          background: white;
          border: 1px solid #ccc;
          border-radius: 50px;
          color: #101010;
          padding-left: 0;
          padding-right: 0;
          z-index: 5;
          transition: transform .5s;
        }
        .step-container.active .step-num {
          transition: transform .5s;
        }
        .step-container.complete .step-num {
          transition: transform .5s;
        }
        .step-container p {
          margin-top: .25rem;
          margin-bottom: .75rem;
          text-align: center;
        }
        .step-num:hover {
          text-decoration: none;
          cursor: ${cursor};
          background: #FCF6FA;
          transform: scale(1.1);
        }
        .step-label {
          text-decoration: none;
          color: #b4b4b4;
        }
        @media only screen and (max-width: 767.98px) {
          #multiContainer{
            overflow: auto;
            display: flex;
            justify-content: flex-start;
          }
          .step-container p {
            margin-top: .25rem;
            margin-bottom: .75rem;
            font-size:12px;
          }
        }

        /*---------------------------------------------
        Tab Styles
        ---------------------------------------------*/
        .g__tabs{
          position: relative;
        }
        .tab-pane{
          display:none;
        }
        .tab-pane.active{
          display:block;
        }
        .g__tabs_Wrapper {
          position: relative;
          padding: 0 15px;
          box-sizing: border-box;
        }
        .g__tabs_Wrapper select::-ms-expand {
          display: none;
        }
        .tabs-container {
          display: flex;
          justify-content: flex-start;
          overflow-x: auto;
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          white-space: nowrap;
          /* position: relative; */
          border-bottom: 1px solid #b4b4b4;
          display:flex;

        }
        .tabs-container {
          -ms-overflow-style: -ms-autohiding-scrollbar;
        }
        .tabs-container::-webkit-scrollbar {
          display: none;
        }
        .tabs-container .g__contents {
          float: left;
          padding: 0;
          margin-bottom: 0;
          margin-top:0;
          transition: transform 0.2s ease-in-out;
        }
        .tabs-container .g__contents-no-transition {
          transition: none;
        }
        .tabs-container .g__link{
          text-decoration: none;
          font-size: 16px;
          display: inline-flex;
          align-items: center;
          min-height: 40px;
          border: 1px solid transparent;
        }
        .tabs-container .g__link a:hover{
          text-decoration: none;
          cursor: pointer;
        }
        .g__advancer {
          /* Reset the button */
          appearance: none;
          background: #fff;
          padding: 2px 8px;
          border: 0;
          position: absolute;
          top: 0;
          bottom: 3px;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .g__advancer:focus {
          outline: 0;
        }
        .g__advancer:hover {
          cursor: pointer;
        }
        .g__advancer-left {
          left: 0;
        }
        [data-overflowing="both"] ~ .g__advancer-left, [data-overflowing="left"] ~ .g__advancer-left {
          opacity: 1;
        }
        .g__advancer-right {
          right: 0;
        }
        [data-overflowing="both"] ~ .g__advancer-right, [data-overflowing="right"] ~ .g__advancer-right {
          opacity: 1;
        }
        .g__advancer_icon {
          width: 10px;
          height: 24px;
          fill: #bbb;
        }
        .nav-link {
          text-decoration: none;
          display: block;
          padding: 0
        }
        .tabs-container .single-tab .dropdown-content {
          display: none;
          position: absolute;
          background: #ffffff;
          box-shadow: 0 0 4px 1px #ccc;
          margin-top: 3px;
          border: none;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          z-index: 1;
          top: 39px;
        }
        .tabs-container .single-tab .dropdown-content .dropdown-item {
          display: block;
          color: #a1a1a1;
          font-size: 14px;
          text-decoration: none;
        }
        .tabs-container .single-tab .dropdown-content .dropdown-item.active {
          background-color: #f8f9fa;
          color: #212529;
        }
        .tabs-container .single-tab .dropdown-content.show {
          display:block;
        }
        .tabs-container .single-tab .g__dropdown-toggle i{
          padding-left: 10px;
          padding-right: 10px;
          transition: transform 0.3s ease;
        }
        .tabs-container .single-tab .g__dropdown-toggle.show  i {
          transform-origin: center center;
          transform: rotate(180deg);
        }
        @media only screen and (max-width: 767.98px) {
          .hamburger{
            display:block;
          }
          .g__btns-container.active {
            height: auto;
            overflow: auto;
            border: 1px solid #a1a1a1;
          }
          .g__btns-container {
            padding: 0 25px;
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 30px;
            right: 0;
            z-index: 99;
            border-radius: .25rem;
            width: 200px;
            background: white;
            height:0;
            overflow: hidden;
            transition: height 1s;
          }
          .g__custom-btn{
            border: 0;
          }
          .g__link{
            min-height: 50px;
          }
          .g__tabs_Wrapper {
            padding: 0;
          }
          .g__link {
            font-size: 14px;
          }
          .nav-link::after{
            content: "";
            height: 30px;
            width: 1px;
            background:#A1A1A1;
          }
          .tabs-container .g__link a{
            border-right: 1px solid #A1A1A1;
          }
        }



        /*---------------------------------------------
        Block styles
        ---------------------------------------------*/
        .block-container {
          display: flex;
          list-style-type: none;
          padding: 0;
        }
        .block-item {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .block-item:after {
          content: '';
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          left: 0;
          opacity: 0;
        }
        .block-link{
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(
            175deg,
            #ffb866 -5%,
            #ff8bcd 40%,
            #d44697 65%,
            #202020 96%
          );
          margin: 0 5px;
          z-index: 5;
        }
        .block-item.active {
          box-shadow: 0 -6px 0 0 var(--highlight-color) inset;
        }
    `;
    document.head.appendChild(css);

    /*---------------------------------------------
    build functions
    ---------------------------------------------*/
    function fullWidth(o){
      return o.full_width ? "" : " g__container";
    }
    function active_check(value){
        var ival = value + 1;
        var is_active = (ival == tab_param) || (value == 0 && tab_param == null) || (!!tab_param && tab_param.includes(ival));
        var val = is_active ? " active" : ""
        return val;
      }
    // CLASS LEVELS
    function strClass(style, level) {
    var arrClasses = objClasses[style][level] || "";
    var strClasses =
        arrClasses === "" ? "" : arrClasses.join(" ");
    return strClasses;
    }
    function classes(o){
      return o.classes ? " " + o.classes : "";
    }
    // DISPLAY TEXT OF ICON
    function tabsBody(r) {
    return r.icon ? `<i class='${r.icon}'></i>` : r.name;
    }
    // BUILD HREF WITH EXISTING PARAMS
    function buildHref(href, value, dropdown){
        var ival = value + 1; // INCREMENTED INDEX VALUE
        var tval = ival// + dval // TAB VALUE
        if(!!href && href.includes("tab=")){
            // HREF HAS TAB PARAM
            href = (!!href && href.length) ? (href.includes("?") ? href + `&tab=${tval}` : href + `?tab=${tval}`) : queryString.replace(`tab=${tab_param}`, `tab=${tval}`);
        } else {
            if(!!href && href.length){
            // HREF EXISTS WITH NO TAB PARAM
            href = href.includes("?") ? href + `&tab=${tval}` : href + `?tab=${tval}`;
            } else {
            // HREF DOES NOT EXIST
              if(queryString.includes("tab=")){
                  // CURRENT PAGE HAS TAB PARAM
                  var x = queryString.replace(`tab=${tab_param}`, `tab=${tval}`);
              } else {
                  // CURRENT PAGE HAS NO TAB PARAM
                  var x = queryString.includes("?") ? queryString + `&tab=${tval}` : queryString + `?tab=${tval}`
              }
            href = x;
            }
        }
        return href;
    }
    function tabBuilder(o, r, val) {
      var sidepane = r.sidepane ? " a__side_pane_link" : "";
        if (r.dropdown){
          var href = buildHref(r.href, val);
          console.log(r.dropdown_item);
          var options = r.dropdown_item;
          var dropdown_content = "";
          for (var i=0; i < options.length; i++) {
              dropdown_content += buildOptions(options[i], val, i, o);
          }
              return `<a class="nav-link g__dropdown-toggle${sidepane}" data-toggle="dropdown" title="${!!r.name && r.name.length ? r.name : ''}">${r.name}<i class="fal fa-angle-down"></i></a>
                      <div id="g__dropdown" class="dropdown-content">
                          ${dropdown_content}
                      </div>`;
        } else  {
            var href = buildHref(r.href, val, false);
            return `<a class='${strClass(style, "link")}${sidepane}' ${link(o, href)} title="${!!r.name && r.name.length ? r.name : ''}">${tabsBody(r)}</a>`;
        }
    }
    function link(o, href){
        return o.noLoad ? `onclick='window.update("${href}", false, this)'` : `href="${href}"`;
    }
    function dropdownLink(o, href){
        return o.noLoad ? `onclick='window.update("${href}", true, this)'` : `href="${href}"`;
    }
    function buildOptions(val, tabval, index, o) {
        var dval = dropdown ? String.fromCharCode(97 + index) : ""; // DROPDOWN CHARACTER
        var href = buildHref(val.href, tabval, true) + dval;
        var tab_value = href.split('tab=')[1];
        var is_active = (tab_value === tab_param);
        var item = `<a class="dropdown-item ${is_active ? "active" : ""}" ${dropdownLink(o, href)} title="${!!val.name && val.name.length ? val.name : ''}">${val.name}</a>`;
        return item;
    }
    function dropdown(r) {
        return r.dropdown ? " dropdown" : "";
      }
    function complete(val, r){
        var ival = val + 1
        var is_complete = ival < tab_param;
        return is_complete ? " complete" : "";
    }
    function selected(r, val){
        var ival = val + 1;
        var url = window.location.href;
        var param = url.split('?').pop();
        var href = buildHref(r.href, val);
        var link = href.slice(1);
        // var step = param.includes(link) || (val == 0 && param == '');
        var step = (ival == tab_param) || (val == 0 && tab_param == null) || (!!tab_param && tab_param.includes(ival));
        console.log(`val:${val}  param:${param} url:${url}  step:${step}`);
        return step ? "true" : "false";
    }
    /*---------------------------------------------
    Container Build
    ---------------------------------------------*/
    (function tabMicro(o, r){
        var wrapper = createElement("div", {
          "id": `a__${addappterID}`,
          "class": `${strClass(style, "wrapper")} a__${addappterID} ${classes(o)} ${fullWidth(o)}`,

        });
        var tabs = createElement("div", {
          "class": `g__tabs g__container-fluid`
        });
        var container = createElement("div", {
          "id": `${strClass(style, "containerID")}`,
          "class": `${strClass(style, "container")}`
        });
        if(action){
          var actionWrapper = createElement("div", {
            "id": "g__action-wrapper",
            "class": "g__action-wrapper"
          });
          var actionHeader = createElement("div", {
            "id": "g__action-header",
            "class": "g__action-header"
          });
          var actionContent = createElement("div", {
              "id": "g__action-content",
              "class": "g__action-content"
          });
          actionWrapper.appendChild(actionHeader);
          actionWrapper.appendChild(actionContent);
          wrapper.appendChild(actionWrapper);
        }
        var content = createElement("ul", {
            "id": `${strClass(style, "contentID")}`,
            "class": `${strClass(style, "content")}`

        });
        wrapper.appendChild(tabs).appendChild(container).appendChild(content);
        if (records && records.length) {
            each(r, function(r, val){
                switch (style) {
                    case "multi":
                        var multiHref = buildHref(r.href, val);
                        var ival = val + 1
                        // var is_complete = r.completed ? true : false;
                        var li = createElement("li", {
                            html: `<a class="step-num" ${link(o, multiHref)}>${r.completed ? "<i class='far fa-check'></i>" : ival}</a><p class="a__label">${r.name}</p>`,
                            "class": strClass(style, "item") + active_check(val) + complete(val)
                        });
                        content.appendChild(li);
                    break;
                    default:
                      var li = createElement("li", {
                        html: tabBuilder(o, r, val),
                        "class": strClass(style, "item"),
                        "aria-selected": selected(r, val)
                    });
                    content.appendChild(li);

                }
            })
            if(o.noLoad){
              var content = document.getElementsByClassName('tab-pane');
              var url = window.location.href;
              var param = url.split('?').pop();
              for (var i = 0; i < content.length; i++){
                  if(content[i].classList.contains(param)){
                      content[i].classList.add('active');
                  };
              }
            }
            if (style === "tabs"){
                var leftBtn = createElement("button", {
                    html: '<svg class="g__advancer_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 551 1024"><path d="M445.44 38.183L-2.53 512l447.97 473.817 85.857-81.173-409.6-433.23v81.172l409.6-433.23L445.44 38.18z"/></svg>',
                    "id": "pnAdvancerLeft",
                    "class": "g__advancer g__advancer-left",
                    "type": "button"
                });
                tabs.appendChild(leftBtn);
                var rightBtn = createElement("button", {
                    html: '<svg class="g__advancer_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 551 1024"><path d="M105.56 985.817L553.53 512 105.56 38.183l-85.857 81.173 409.6 433.23v-81.172l-409.6 433.23 85.856 81.174z"/></svg>',
                    "id": "pnAdvancerRight",
                    "class": "g__advancer g__advancer-right",
                    "type": "button"
                });
                tabs.appendChild(rightBtn);
            }
    };
    if ((document.getElementById(addappterID).innerHTML).trim() == "") {
    	document.getElementById(addappterID).appendChild(wrapper);
    }
    document.getElementById(addappterID).appendChild(wrapper);
    })(options, records);
  /*---------------------------------------------
  Action Row
  ---------------------------------------------*/
  (function actionBtns(o){
    var title = o.title;
    var description = o.description;
    var btns = o.buttons;
    var parent = document.getElementById(id);
    var aHeader = parent.getElementsByClassName("g__action-header");
    var aContent = parent.getElementsByClassName("g__action-content");
    if(title){
      var header = createElement("h2", {
          html: title
      })
      for (i = 0; i < aHeader.length; i++) {
        aHeader[i].appendChild(header);
      }
    }
    if(description){
        var desc = createElement("p", {
            html: description
        })
        for (i = 0; i < aHeader.length; i++) {
          aHeader[i].appendChild(desc);
        }
    }
    if (btns){
      var customBtns = createElement("div", {
          "id": "g__btns",
          "class": "g__btns-wrapper",
      })
      var hamburger = createElement("div", {
          "class": "hamburger",
          "id": "hamburger-1",
          "onclick": "hamburger(this)"
      })
      for (i = 0; i < 3; i++) {
          var line = createElement("span", {
              "class": "line",
          })
          hamburger.appendChild(line);
      }
      customBtns.appendChild(hamburger);
      var btnContainer = createElement("div", {
          "class": "g__btns-container",
      })
      for (i = 0; i < btns.length; i++) {
          var link = createElement("a", {
              html: btns[i].label,
              "class": "g__custom-btn",
              "href": btns[i].href
          })
          btnContainer.appendChild(link);
      }
      customBtns.appendChild(btnContainer)
      for (i = 0; i < aContent.length; i++) {
        aContent[i].appendChild(customBtns);
      }
  }
  })(options);
  /*---------------------------------------------
  Multi Step JS
  ---------------------------------------------*/
  if (style == "multi"){
    var multiContainer = document.getElementById('multiContainer');
    var multiUl = document.getElementById('multiStep');
    var item = document.querySelector('.active');
    var textPosition = item.getBoundingClientRect();
    multiContainer.scrollLeft = textPosition.x-25;

    var label = document.getElementsByClassName('a__label');
  }
  /*---------------------------------------------
  HAMBURGER MENU
  ---------------------------------------------*/
  function hamburger(val){
  val.classList.toggle("is-active");
  val.nextSibling.classList.toggle("active");
  }
  /*---------------------------------------------
  Tabs JS - Scroll position and no load function
  ---------------------------------------------*/
  if (style == "tabs"){
      //JS Dropdown
      var tabDropdown = document.querySelectorAll('[data-toggle=dropdown]');
      if(tabDropdown){
        tabDropdown.forEach(function(dd){
          var position = dd.getBoundingClientRect();
          dd.addEventListener('click', function(e){
            var target = e.target;
            target.classList.toggle('show');
            console.log(target);
            target.nextElementSibling.classList.toggle('show');
            var width = window.innerWidth;
            if(width < 767.98){
              var position = target.getBoundingClientRect();
              target.nextElementSibling.style.left = position.x - 3 + "px"
            }

          })
        })
        //Hide Dropdown
        window.addEventListener('click', function(e){
          if (!event.target.matches('.g__dropdown-toggle')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
              }
            }
          }
        })
      }
    var SETTINGS = {
      navBarTravelling: false,
      navBarTravelDirection: "",
    navBarTravelDistance: 150
    }
    // Out advancer buttons
    var pnAdvancerLeft = document.getElementById("pnAdvancerLeft");
    var pnAdvancerRight = document.getElementById("pnAdvancerRight");
    var gTabsContainer = document.getElementById("gTabsContainer");
    var gContents = document.getElementById("gContents");
    gTabsContainer.setAttribute("data-overflowing", determineOverflow(gContents, gTabsContainer));
    // Handle the scroll of the horizontal container
    var last_known_scroll_position = 0;
    var ticking = false;
    function doSomething(scroll_pos) {
      gTabsContainer.setAttribute("data-overflowing", determineOverflow(gContents, gTabsContainer));
    }
    gTabsContainer.addEventListener("scroll", function(val) {
      var dropdown = document.getElementsByClassName("dropdown-content");
      var menu = document.getElementsByClassName("dropdown-menu");
      for (var i = 0; i < dropdown.length; i++){
        if (dropdown[i].classList.contains("show")){
          dropdown[i].classList.remove("show");
        };
      }
      for (var i = 0; i < menu.length; i++){
          if (menu[i].classList.contains("show")){
            menu[i].classList.remove("show");
          };
      }
      last_known_scroll_position = window.scrollY;
      if (!ticking) {
          window.requestAnimationFrame(function() {
              doSomething(last_known_scroll_position);
              ticking = false;
          });
      }
      ticking = true;
    });
    pnAdvancerLeft.addEventListener("click", function() {
      if (SETTINGS.navBarTravelling === true) {
          return;
      }
      if (determineOverflow(gContents, gTabsContainer) === "left" || determineOverflow(gContents, gTabsContainer) === "both") {
          var availableScrollLeft = gTabsContainer.scrollLeft;
          if (availableScrollLeft < SETTINGS.navBarTravelDistance * 2) {
              gContents.style.transform = "translateX(" + availableScrollLeft + "px)";
          } else {
              gContents.style.transform = "translateX(" + SETTINGS.navBarTravelDistance + "px)";
          }
          gContents.classList.remove("g__contents-no-transition");
          SETTINGS.navBarTravelDirection = "left";
          SETTINGS.navBarTravelling = true;
      }
      gTabsContainer.setAttribute("data-overflowing", determineOverflow(gContents, gTabsContainer));
    });
    pnAdvancerRight.addEventListener("click", function() {
      if (SETTINGS.navBarTravelling === true) {
          return;
      }
      if (determineOverflow(gContents, gTabsContainer) === "right" || determineOverflow(gContents, gTabsContainer) === "both") {
          var navBarRightEdge = gContents.getBoundingClientRect().right;
          var navBarScrollerRightEdge = gTabsContainer.getBoundingClientRect().right;
          var availableScrollRight = Math.floor(navBarRightEdge - navBarScrollerRightEdge);
          if (availableScrollRight < SETTINGS.navBarTravelDistance * 2) {
              gContents.style.transform = "translateX(-" + availableScrollRight + "px)";
          } else {
              gContents.style.transform = "translateX(-" + SETTINGS.navBarTravelDistance + "px)";
          }
          gContents.classList.remove("g__contents-no-transition");
          SETTINGS.navBarTravelDirection = "right";
          SETTINGS.navBarTravelling = true;
      }
      // Now update the attribute in the DOM
      gTabsContainer.setAttribute("data-overflowing", determineOverflow(gContents, gTabsContainer));
    });
    gContents.addEventListener(
      "transitionend",
      function() {
          var styleOfTransform = window.getComputedStyle(gContents, null);
          var tr = styleOfTransform.getPropertyValue("-webkit-transform") || styleOfTransform.getPropertyValue("transform");
          var amount = Math.abs(parseInt(tr.split(",")[4]) || 0);
          gContents.style.transform = "none";
          gContents.classList.add("g__contents-no-transition");
          if (SETTINGS.navBarTravelDirection === "left") {
              gTabsContainer.scrollLeft = gTabsContainer.scrollLeft - amount;
          } else {
              gTabsContainer.scrollLeft = gTabsContainer.scrollLeft + amount;
          }
          SETTINGS.navBarTravelling = false;
      },
      false
    );
    var item = document.querySelector('[aria-selected="true"]');
    if (item){
      var textPosition = item.getBoundingClientRect();
      gTabsContainer.scrollLeft = textPosition.x;
    }



    function determineOverflow(content, container) {
      var containerMetrics = container.getBoundingClientRect();
      var containerMetricsRight = Math.floor(containerMetrics.right);
      var containerMetricsLeft = Math.floor(containerMetrics.left);
      var contentMetrics = content.getBoundingClientRect();
      var contentMetricsRight = Math.floor(contentMetrics.right);
      var contentMetricsLeft = Math.floor(contentMetrics.left);
    if (containerMetricsLeft > contentMetricsLeft && containerMetricsRight < contentMetricsRight) {
          return "both";
      } else if (contentMetricsLeft < containerMetricsLeft) {
          return "left";
      } else if (contentMetricsRight > containerMetricsRight) {
          return "right";
      } else {
          return "none";
      }
    }
  }
  window['update'] = function(param, dd, tab){
    var links = [].slice.call(document.querySelectorAll(".g__link"));
    links.forEach(function(item) {
        item.setAttribute("aria-selected", "false");
    })
    var dropItem = [].slice.call(document.querySelectorAll(".dropdown-item"));
    dropItem.forEach(function(link) {
        link.classList.remove('active');
    })
    if(dd){
        tab.classList.add('active');
        tab.parentElement.parentElement.setAttribute("aria-selected", "true")
    }else{
        tab.parentElement.setAttribute("aria-selected", "true")
    }
    window.history.pushState("", "Tabs", param);
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var paramArr = [];
    var clsArray = [];
    for (var [key, value] of urlParams){
        paramArr.push(key + '=' + value);
    }
    var content = document.getElementsByClassName('tab-pane');
    for (var i = 0; i < content.length; i++){
        for (var a = 0; a < paramArr.length; a++){
            if(content[i].classList.contains(paramArr[a])){
                content[i].classList.add('active');
                break;
            } else{
                content[i].classList.remove('active');
            }
        }
    }
    if(style === "multi"){
      var multiSteps = tab.parentElement.parentElement.childNodes;
      multiSteps.forEach(function(val){
        val.classList.remove('complete');
        val.classList.remove('active');
      })
      for (var i = 0; i < multiSteps.length; i++){
          var state = multiSteps[i].getAttribute('aria-selected');
          if(state === "false"){
            multiSteps[i].classList.add('complete');
          } else {
            break;
          }
      }
    };
  }
}//end main function

/*---------------------------------------------
HAMBURGER MENU
---------------------------------------------*/
function hamburger(val){
  val.classList.toggle("is-active");
  val.nextSibling.classList.toggle("active");
}

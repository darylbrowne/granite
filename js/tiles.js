/*---------------------------------------------
Block Name: Granite.js Tile Block
---------------------------------------------*/
export function tiles(jsonTiles, jsonTheme) {
    /*---------------------------------------------
    Global Variables
    ---------------------------------------------*/
    var json = JSON.parse(jsonTiles);
    var jsonTheme = JSON.parse(jsonTheme);
    var addappterID = json['id'];
    var cssID = "#a__" + addappterID;
    var id = addappterID;
    var options = json['options'];
    var records = json['records'];
    var style = options['style'] ? options['style'] : "basic" ;
    var objClasses = {
        "micro" : {
            "container" : ["a__tile_wrapper", "g__container-fluid"]
        },
        "action" : {
            "container" : ["a__tile_action"]
        },
        "basic" : {
            "container" : ["g__col", "a__tile_container"],
            "item" : ["a__basic_tile"]
        },
        "icon" : {
            "container" : ["g__col", "a__tile_container"],
            "item" : ["a__icon_tile"],
            "icon" : ["a_tile_icon", "text-center"],
            "title" : ["a__tile_body", "text-center"]
        }
      };
    var carrot = "\f078";
    var content = (document.getElementById(addappterID).innerHTML).trim();
    if (content !== ""){
      return;
    }
    var aTitle = !!options.title;
    var aDescription = options.description ? true : false;
    if(options.custom_buttons){
      var aButtons = options.custom_buttons.length ? true : false;
    }
    if (!!options.filter_label && !!options.filter_tag_options){
      var aFilters = !!options.filter_label ? true : false;
    }
    var aSearch = options.search === "true" ? true : false;
    var action = (aTitle || aDescription || aButtons || aFilters || aSearch);
    /*---------------------------------------------
    User Generated CSS
    ---------------------------------------------*/
    var height = options.height ? options.height : "300px";
    var border_radius = options.border_radius ? options.border_radius : "0";
    var border = options.border ? options.border : "0";
    var border_color = options.border_color ? border_color : "#fff";

    /*---------------------------------------------
    Header Font Size
    ---------------------------------------------*/
    switch (options.header_size){
        case "small":
            var header_size = "30px";
        break;
        case "medium":
            var header_size = "40px";
        break;
        case "large":
            var header_size = "50px";
        break;
        default:
            var header_size = style === "basic" ? "50px" : "40px";
        break;
    }
    /*---------------------------------------------
    Layout
    ---------------------------------------------*/
    var columns;
    switch (options.columns){
      case "1":
        columns = "100%";
      break;
      case "2":
        columns = "50%";
      break;
      case "3":
        columns = "33.33%";
      break;
      case "4":
        columns = "25%";
      break;
      case "5":
        columns = "20%";
      break;
      case "6":
        columns = "16.66%";
      break;
      case "7":
        columns = "14.28%";
      break;
      case "8":
        columns = "12.5%";
      break;
      default:
        columns = "25%";
      break;
    }
    if(options.fillRow){
      var fillRow = 1;
    } else {
      var fillRow = 0;
    }

    /*---------------------------------------------
    Description Font Size
    ---------------------------------------------*/
    switch (options.description_size){
        case "small":
            var desc_size = "18px";
        break;
        case "medium":
            var desc_size = "24px";
        break;
        case "large":
            var desc_size = "26px";
        break;
        default:
            var desc_size = style === "basic" ? "22px" : "18px";
        break;
    }
    /*---------------------------------------------
    Icon Size
    ---------------------------------------------*/
    switch (options.icon_size){
        case "small":
            var icon_size = "100px";
        break;
        case "medium":
            var icon_size = "125px";
        break;
        case "large":
            var icon_size = "150px";
        break;
        default:
            var icon_size = "100px";
        break;
    }
    /*---------------------------------------------
    Padding Size
    ---------------------------------------------*/
    switch (options.padding){
        case "none":
            var padding = "0";
        break;
        case "small":
            var padding = "2px";
        break;
        case "large":
            var padding = "10px";
        break;
        default:
            var padding = "5px";
        break;
    }
    /*---------------------------------------------
    Theme Variables
    ---------------------------------------------*/
    if(jsonTheme){
      var primary = jsonTheme.primary ? jsonTheme.primary : "#BF458A";
      var secondary = jsonTheme.secondary ? jsonTheme.secondary : "#5611ff";
      var darkGray = jsonTheme.darkGray ? jsonTheme.darkGray : "#666666";
      var mediumGray = jsonTheme.mediumGray ? jsonTheme.mediumGray : "#b7b7b7";
      var lightGray = jsonTheme.lightGray ? jsonTheme.lightGray : "#5d5d5d";
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
      var lightGray = "#5d5d5d";
  }
    /*---------------------------------------------
    Theme Case Block
    ---------------------------------------------*/
    const blk = "#101010";
    const wht = "#fff";
    switch (options.theme){
        case "dark":
            var header_color =  wht;
            var desc_color = wht;
            var icon_color =  wht;
            var filter_one = blk;
            var filter_two = blk;
            var hover_color = "#000000";
        break;
        case "custom":
            var header_color =  options.header_color ? options.header_color : wht;
            var desc_color = options.description_color ? options.description_color : wht;
            var icon_color = options.icon_color ? options.icon_color : wht;
            var filter_one = options.filter_one ? options.filter_one : "";
            var filter_two = options.filter_two ? options.filter_two : "";
            var hover_color = options.hover_color ? options.hover_color : "#000000";
        break;
        case "theme":
            var header_color =  options.header_color ? options.header_color : wht;
            var desc_color = options.description_color ? options.description_color : wht;
            var icon_color = options.icon_color ? options.icon_color : wht;
            var filter_one = options.filter_one ? options.filter_one : primary;
            var filter_two = options.filter_two ? options.filter_two : secondary;
            var hover_color = options.hover_color ? options.hover_color : "#000000";
        break;
        default:
            var header_color = blk;
            var desc_color = blk;
            var icon_color = blk;
            var filter_one = wht;
            var filter_two = wht;
            var hover_color = "#FFFFFF";
        break;
    }
    /*---------------------------------------------
    Layout Case Block
    ---------------------------------------------*/
    switch (options.layout){
      case "left":
        var content_layout = "row";
        var content_align = "flex-start";
        var desc_align = "left";
      break;
      case "right":
        var content_layout = "row-reverse";
        var content_align = "flex-end";
        var desc_align = "left";
      break;
      default:
        var content_layout = "column";
        var content_align = "center";
        var desc_align = "center";
      break;
    }
    /*---------------------------------------------
    CSS Block
    ---------------------------------------------*/
    var cssStyle = (style === "basic") ? "basic" : "icon";
    var css = document.createElement('style');
    css.innerHTML = `
    :root{
        --primary: ${primary ? primary : "orange"};
        --secondary: ${secondary ? secondary : "#5611ff"};
        --darkGray: ${darkGray ? darkGray : "#666666"};
        --mediumGray: ${mediumGray ? mediumGray : "#b7b7b7"};
        --lightGray: ${lightGray ? lightGray : "#d9d9d9"};
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
    ${cssID}.a__tile_wrapper .g__col{
      flex: ${fillRow} 0 ${columns};
      overflow: hidden;
    }
    ${cssID} .a__tile_container .a__${cssStyle}_tile {
        flex-direction: ${content_layout};
        justify-content: ${content_align};
        height: ${height};
        border-radius: ${border_radius};
        border:${border} solid ${border_color};
    }
    ${cssID} .a__tile_container .a__basic_tile .a__desc_container {
        text-align: ${desc_align};
    }
    ${cssID} .a__${cssStyle}_tile.a__filters:before {
        background: ${filter_one};
        border-radius: ${border_radius};
    }
    ${cssID} .a__${cssStyle}_tile.a__filters:after {
        background: ${filter_two};
        border-radius: ${border_radius};
    }
    ${cssID} .a__${cssStyle}_tile .a__tile_body .a__tile_header{
        color: ${header_color};
        font-size: ${header_size};
        text-align: ${desc_align};
    }
    ${cssID} .a__tile_container .a__basic_tile .a__desc_container {
        text-align: ${desc_align};
        border-radius: ${border_radius};
        justify-content: ${content_align};
    }
    ${cssID} .a__tile_container .a__${cssStyle}_tile .a__desc_container p{
        color: ${desc_color};
        font-size: ${desc_size};
    }
    ${cssID} .a__basic_tile:hover  .a__desc_container {
        background-color:${hover_color}66;
        justify-content:${content_align};
        text-align: ${desc_align};
      }
    ${cssID} .a__basic_tile .a__desc_container .a__desc {
        max-height: ${height};
    }
    ${cssID} .a__basic_tile:hover .a__desc_container .a__desc {
        max-height: ${descHeight(height)};
      }
    ${cssID} .a__tile_container .a__icon_tile {
      box-shadow: inset 1000px 1000px 1000px 10 00px transparent;
      transition: all 1s;
      }
    ${cssID} .a__tile_container .a__icon_tile:hover {
      box-shadow: inset 1000px 1000px 1000px 1000px ${hover_color}66;
      }
    ${cssID} .a__icon_tile .a__icon{
        color: ${icon_color};
      }
      ${cssID} .a__icon_tile .a__icon i{
        font-size: ${icon_size};
      }
    ${cssID} .a__tile_container .a__icon_tile .a__desc_container {
        text-align: ${desc_align};
        max-height: ${descHeight(height)};
      }
    ${cssID} .a__card_container{
        padding: ${padding};
      }
      /*---------------------------------------------
      No Records
      ---------------------------------------------*/
      .a__no-records{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        color: #BFBFBF;
        height: 225px;
        margin-top: 50px;
        border: 2px dashed #707070;
      }
      #a__tile{
        display: flex;
        flex-wrap: wrap;
        margin-right: 15px;
        margin-left: 15px;
      }
      /*---------------------------------------------
      Layout
      ---------------------------------------------*/
      .a__tile_wrapper{
        padding-right: 0;
        padding-left: 0;
        margin-top: 15px;
        margin-bottom: 15px;
        box-sizing: border-box;
      }
      .a__tile_container {
          padding: ${padding};
      }
      *, ::after, ::before {
        box-sizing: border-box;
      }
      .mr-3{
        margin-right: 15px
      }
      /*---------------------------------------------
      Basic Layout
      ---------------------------------------------*/
      .a__tile_wrapper .row {
        margin-right: 0;
        margin-left: 0;
      }
      .a__tile_wrapper .a__tile_container .a__basic_tile {
        position: relative;
        display: flex;
        align-items: center;
        padding: 20px;
        background-size: cover;
        background-position: center center;
        cursor: pointer;
        overflow: hidden;
        }
      /* Overlays */
      .a__basic_tile.a__filters:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: .6;
      }
      .a__basic_tile.a__filters:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: .6;
      }
      /* Fonts & Icons */
      .a__tile_wrapper .a__basic_tile .a__tile_icon,
      .a__tile_wrapper .a__basic_tile .a__tile_body{
        z-index: 5;
      }
      .a__tile_wrapper .a__basic_tile .a__tile_body .a__tile_header{
        z-index: 10;
        transition: opacity .5s ease-out;
      }
      .a__tile_wrapper .a__basic_tile:hover .a__tile_body .a__tile_header.hover{
        opacity: 0;
      }
      .a__tile_wrapper .a__basic_tile:hover .a__tile_body .a__tile_header.noHover{
        opacity: 1;
      }
      .a__tile_wrapper .a__basic_container .a__desc_container {
        z-index: 10;
        overflow: auto;
      }
      .a__tile_wrapper .a__tile_container .a__basic_tile .a__desc_container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        padding: 25px;
        opacity: 0;
        z-index: 10;
        transition: all .5s ease-out;
      }
      .a__tile_wrapper .a__tile_container .a__basic_tile .a__desc_container p{
        margin-bottom: 0;
      }
      .a__tile_wrapper .a__basic_tile:hover  .a__desc_container {
        opacity: .75;
        display: flex;
        align-items: center;
      }
      .a__tile_wrapper .a__basic_tile .a__desc_container .a__desc {
        overflow: auto;
        opacity: 0;
      }
      .a__tile_wrapper .a__basic_tile:hover .a__desc_container .a__desc {
        overflow: auto;
        opacity: 1;
      }
      /*---------------------------------------------
      Icon Layout
      ---------------------------------------------*/
      /* Main Structure */
      .a__tile_container .a__icon_tile {
        position: relative;
        display: flex;
        align-items: center;
        padding: 20px;
        background-size: cover;
        background-position: center center;
        transition: all .2s;
        overflow: hidden;
      }
      .a__tile_container .a__icon_tile:hover {
        cursor: pointer;
      }
      .a__icon_tile.a__filters:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: .6;
      }
      .a__icon_tile.a__filters:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: .6;
      }
      .a__tile_wrapper .a__icon_tile .a__icon{
        z-index: 5;
        opacity: 1;
        padding: 20px 25px;
        transition: opacity .5s ease-out;
      }
      .a__tile_wrapper .a__icon_tile .a__tile_body{
        z-index: 5;
      }
      .a__tile_container .a__icon_tile .a__tile_body .a__tile_header{
        z-index: 10;
        opacity: 1;
        transition: opacity .5s ease-out;
      }
      .a__tile_container .a__icon_tile .a__desc_container {
        overflow: auto;
        z-index: 10;
        overflow: auto;
      }
      /*---------------------------------------------
      Action Row
      ---------------------------------------------*/
      .g__action-wrapper{
        margin-left: 15px;
        margin-right: 15px;
        padding-bottom: 15px;
        margin-top: 15px;
        margin-bottom: 15px;
        border-bottom: 1px solid #a1a1a1;
      }
      .g__block-m-block{
        display:flex;
        flex-direction: column;
      }
      .g__inline-m-block{
        display:flex;
        flex-direction: row;
      }
      .g__inline-m-inline{
        display:flex;
        flex-direction: row;
      }
      .g__align-bottom{
        display: flex;
        align-items: flex-end;
      }
      .g__none{
        display:none;
      }
      .g__block{
        display:flex;
        flex-direction: column;
      }
      .g__space-between{
        justify-content: space-between;
      }
      .g__center-align-m-left{
        align-items: center;
      }
      .g__end{
        justify-content: flex-end;
      }
      .g__push {
        margin-left: auto;
      }
      .g__pull {
        margin-right: auto;
      }
      .a__btns-container{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-top: 25px;
      }
      /* -------- CUSTOM BUTTONS -------*/
      .g__btns-container {
        display: flex;
      }
      .g__btns-wrapper{
        display: flex;
        flex-direction: row;
        position: relative;
        white-space: nowrap;
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
      /* -------- CUSTOM BUTTONS -------*/
      .a_action_content p{
        margin-bottom: 0;
      }
      .a__seach_row {
        display: flex;
        justify-content: flex-end;
        flex: 1;
      }
      .g__search-search {
        position: relative;
      }
      .g__search-search input#a__search_input {
        height: 30px;
        width: 300px;
        color: transparent;
        font-size: 14px;
        background: #fff;
        border: 1px solid #b4b4b4;
        padding-left: 2rem;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
      }
      .g__search-search .icon {
        transition: all 0.3s ease;
        position: absolute;
        z-index: 1;
        top: 6px;
        left: 9px;
      }
      .g__search-search.active .icon {
        transform: scaleX(0) rotate(45deg);
      }
      .g__search-search.active input#a__search_input {
        padding-left: 1rem;
      }
      .g__search-search.active input#a__search_input.active {
        color: #101010;
      }
      .g__search-search input#a__search_input:hover,
      .g__search-search input#a__search_input:focus,
      .g__search-search input#a__search_input:active{
        outline:none;
        background: #f5f5f5;
      }
      .g__search-search input#a__search_input:focus {
        background: #fff;
      }
      /*--------------------------
      SELECT
      --------------------------*/
      /* The container must be positioned relative: */
      .custom-select {
        position: relative;
        display: flex;
        font-family: Arial;
        padding: 0;
        color: #A1A1A1;
        width: 300px;
        height: 30px;
        border: 0;
      }

      .custom-select select {
        display: none; /*hide original SELECT element: */
      }
      .custom-select .select-label {
        height: 30px;
        font-size: 14px;
        padding: 5px 10px;
        background-color: #FDFCFC;
        color: #A1A1A1;
        border-left: 1px solid #BFBFBF;
        border-top: 1px solid #BFBFBF;
        border-bottom: 1px solid #BFBFBF;
        border-radius: .25rem 0 0 .25rem;
      }
      .custom-select .select-selected {
        flex: 1;
        height: 30px;
        font-size: 14px;
        padding: 5px 10px;
        background-color: #FDFCFC;
        color: #a1a1a1;
        border: 1px solid #BFBFBF;
        border-radius: 0 .25rem .25rem 0;
      }
      /* Style the arrow inside the select element: */
      .select-selected:after {
        position: absolute;
        background: #F4F3F3;
        content: "";
        top: 1px;
        right: 1px;
        padding: 5px 9px;
        width:33px;
        height: 28px;
        border-left:1px solid #BFBFBF;
        border-radius: 0 .25rem .25rem 0;
        transition: transform .5s;
      }
      .select-selected:before {
        position: absolute;
        font-family: "Font Awesome 5 Pro";
        font-weight: 900;
        content: "\\f078";
        top: 1px;
        right: 1px;
        padding: 5px 9px;
        z-index: 5;
        transition: transform .5s;
      }
      /* Point the arrow upwards when the select box is open (active): */
      .select-selected.select-arrow-active:before {
        top: 1px;
        transform: rotate(180deg);
      }
      /* style the items (options), including the selected item: */
      .select-items div,.select-selected {
        color: #a1a1a1;
        padding: 5px;
        font-size: 14px;
        border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
        cursor: pointer;
      }

      /* Style items (options): */
      .custom-select .select-items {
        position: absolute;
        background-color: #FFF;
        color: #a1a1a1;
        top: 100%;
        left: 0;
        right: 0;
        z-index: 99;
        box-shadow: 0px 3px 6px #00000029;
      }

      /* Hide the items when the select box is closed: */
      .select-hide {
        display: none;
      }

      .select-items div:hover, .same-as-selected {
        background-color: rgba(0, 0, 0, 0.1);
      }

      /*---------------------------------------------
      Mobile Styles
      ---------------------------------------------*/
      @media (max-width: 991.98px) {
        ${cssID}.a__tile_wrapper .g__col{
          flex: ${fillRow} 0 50%;
          overflow: hidden;
        }
      }
      @media only screen and (max-width: 767.98px) {
        .a__desc_container {
          position: relative;
          opacity: 1;
          padding: 0;
        }
        .a__tile:hover  .a__desc_container {
          background-color: transparent;
        }
        .a__basic_container .a__desc_container {
        opacity: 1;
        position: relative;
        }
        .a__tile_action{
          display: flex;
          flex-direction: column;
        }

        .a_action_content{
          margin-right: 0px;
        }
        .a_action_content p{
          margin-bottom: 15px;
        }
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
        .g__inline-m-block{
          display:flex;
          flex-direction: column;
        }
        .g__center-align-m-left{
          align-items: flex-start;
        }
        .g__search-search input#a__search_input {
          height: 30px;
          width: 30px;
          color: transparent;
          background: #fff;
          border: 0;
        }
        .g__search-search.active input#a__search_input {
          height: 30px;
          width: 300px;
          color: transparent;
          font-size: 14px;
          background: #fff;
          border: 1px solid #b4b4b4;
          padding-left: 2rem;
          -webkit-border-radius: 5px;
          -moz-border-radius: 5px;
          border-radius: 5px;
        }
      }
      @media (max-width: 575.98px) {
        ${cssID}.a__tile_wrapper .g__col{
          flex: 0 0 100%;
          overflow: hidden;
        }
      }
    `;
    document.head.appendChild(css);
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
    Element Functions
    ---------------------------------------------*/
    function descHeight(val){
        if(val.indexOf("px")){
            return style === "basic" ? (val.slice(0, -2)) - 50 + "px" : (val.slice(0, -2)) / 2 + "px";
        } else {
            return style === "basic" ? (val - 50) + "px" : (val / 2) + "px";
        }
    }
    function container(o){
        return o.full_width ? "g__container-fluid" : "g__container";
    }
    function strClass(style, level) {
        var arrClasses = objClasses[style][level] || "";
        var strClasses = arrClasses === "" ? "" : arrClasses.join(" ") + "";
        return strClasses;
    }
    function action(o){
       var title = o.title ? `<h2>${o.title}</h2>` : "";
       var desc = o.description ? `<p>${o.description}</p>` : "";
        return `<div class="a_action_content">${title} ${desc}</div>`;
    }
    function showIcon(o, r){
        if(o.style === "icon"){
            var icon = (r.icon && o.style === "icon") ? `<div class="a__tile_icon a__icon"><i class='${r.icon}'></i></div>` : "";
            return icon;
        } else {
            return "";
        }
    }
    function rClasses(r){
        return r.classes ? ` ${r.classes}` : "";
    }
    function tileBkg(o, r){
        if(r.background_image){
            return `background-image: url(${r.background_image});`;
        } else if (r.background_color){
            return `background-color:${r.background_color};`;
        } else if (!r.background_color && !r.background_image && !r.title && !r.description && !r.icon ) {
          return `background-color: #ffffff; box-shadow: 0px 3px 6px #00000029;`;
        } else if (!r.background_color && !r.background_image){
            return `background-color:transparent; border: 2px solid #f5f5f5`;
        } else if (!r.title && !r.description && !r.icon ) {
            return `background-color: #ffffff; box-shadow: 0px 3px 6px #00000029;`;
        }
    }
    function title(o, r){
        if(r.title){
            return r.title;
        } else if (!r.title && !r.description && !r.icon) {
            return `<span style="color:#5d5d5d">Empty</span>`;
        }else{
            return "";
        }
    }
    function description(o, r){
        return r.description ? `<div class="a__desc_container"><div class="a__desc"><p>${r.description}</p></div></div>` : "";
    }
    function click(o, r){
        return r.href ? `window.open('${r.href}', '${r.target ? r.target : "_self"}')`: "";
    }
    function filters(r){
        return ((!r.title && !r.description) && !r.icon) ? "" : "a__filters";
    }
    function tags(r){
      if(r.tags){
        var tags = r.tags;
        return `data-tags="${tags.join(" ")}"`
      }else{
        return ""
      }
    }
    function hover(r){
        return r.description ? "hover" : "noHover";
    }
    function customClass(o){
        return o.classes ? " " + o.classes : "";
    }
    /*---------------------------------------------
    Container Build
    ---------------------------------------------*/
    (function tileMicro(o, r){
        var tileContainer = createElement("div", {
          "class": container(o)
        });
        var wrapper = createElement("div", {
            "id": `a__${addappterID}`,
            "class": `${strClass("micro", "container")}${customClass(o)}`
        });
        var row = createElement("div", {
            "id": "a__tile"
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
          tileContainer.appendChild(actionWrapper);
        }
        if (records && records.length) {
            each(r, function(r){
                var itemContainer = createElement("div", {
                    "class": strClass(style, "container") +  rClasses(r)
                })
                itemContainer.appendChild(createElement("div", {
                    html: `${tileBuild(o, r)}`,
                    "class": strClass(style, "item") + " " +  filters(r),
                    "style": tileBkg(o, r),
                    "onclick": click(o, r),
                    }))
                tileContainer.appendChild(wrapper);
                wrapper.appendChild(row);
                row.appendChild(itemContainer);
            })
        } else {
            var empty = createElement("div", {
                html: "<h2>Add Tile Element</h2>",
                "class": "a__no-records col-12 mt-3"
            })
            tileContainer.appendChild(row).appendChild(empty);
        };
        var target = document.getElementById(addappterID);
        if (!target) {
            target = document.createElement('div');
            target.setAttribute("id", addappterID);
            document.body.appendChild(target);
        }
        if ((document.getElementById(addappterID).innerHTML).trim() == "") {
          document.getElementById(addappterID).appendChild(tileContainer);
        }

    })(options, records);
    /*---------------------------------------------
    Record Build
    ---------------------------------------------*/
    function tileBuild(o, r){
      switch (style){
          case "basic":
          case "icon":
              return `${showIcon(o, r)}
                      <div class="a__tile_body">
                          <div class="a__tile_header ${hover(r)}" ${tags(r)}>
                              ${title(o, r)}
                          </div>
                              ${description(o, r)}
                      </div>`
          break;
          default:
              console.error("Hello! Please select basic or icon as your style. -Team addapptation")
          break;
        }
    }
    /*---------------------------------------------
    Action Row
    ---------------------------------------------*/
    (function actionBtns(options, records){
        var o = options;
        var filter_label = o.filter_label;
        var filter_tag_options = o.filter_tag_options;
        var btns = o.custom_buttons;
        var title = o.title;
        var description = o.description;
        var search = o.search;
        var parent = document.getElementById(id);
        var aWrapper = parent.getElementsByClassName("g__action-wrapper");
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
        if(search){
            var sContainer = createElement("div", {
                "id": "g__search",
                "class": "g__search-search"
            })
            var sIcon = createElement("span", {
                html: "<i class='fas fa-search'></i>",
                "class": "icon"
            })
            var sInput = createElement("input", {
                "id": "a__search_input",
                "class": "a__tile_search",
                "type": "text",
                "onkeyup": `window.tileSearch('${id}', this)`
            })
            sContainer.appendChild(sIcon);
            sContainer.appendChild(sInput);
            for (i = 0; i < aContent.length; i++) {
              aContent[i].appendChild(sContainer);
            }

        }
        if(filter_label){
          var x, i, j, selElmnt, a, b, c, d, e, f;
          selElmnt = filter_tag_options;
          x = document.createElement("div");
          x.setAttribute("id", "g__select");
          x.setAttribute("class", "custom-select");
          e = document.createElement("select")
          x.appendChild(e);
          d = document.createElement("DIV");
          d.setAttribute("class", "select-label");
          d.innerHTML = filter_label;
          x.appendChild(d);
          a = document.createElement("DIV");
          a.setAttribute("class", "select-selected");
          a.setAttribute("id", "g__tile-filter");
          a.innerHTML = filter_tag_options[0];
          x.appendChild(a);
          b = document.createElement("DIV");
          b.setAttribute("class", "select-items select-hide");
          for (j = 0; j < selElmnt.length; j++) {
              f = document.createElement("option");
              f.setAttribute("value", selElmnt[j]);
              f.innerHTML = selElmnt[j];
              e.appendChild(f);
              c = document.createElement("div");
              c.innerHTML = selElmnt[j];
              c.addEventListener("click", function(e) {
                  var y, i, k, s, h;
                  var filter = this.innerHTML.toUpperCase();
                  var parent = document.getElementById(id);
                  var all = "all"
                  var cont = parent.getElementsByClassName('a__tile_container');
                  for (i = 0; i < cont.length; i++) {
                      var tileCont = cont[i].getElementsByClassName("a__tile_header")[0];
                      var txtValue = tileCont.textContent || tileCont.innerText;
                      var tags = tileCont.getAttribute("data-tags");
                      if(tags && tags.toUpperCase().includes(filter)){
                        cont[i].style.display = "";
                      } else if(filter == all.toUpperCase()){
                        cont[i].style.display = "";
                      } else {
                        cont[i].style.display = "none";
                      }
                  }
                  s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                  h = this.parentNode.previousSibling;
                  for (i = 0; i < s.length; i++) {
                      if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        for (k = 0; k < y.length; k++) {
                          y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                      }
                    }
                    h.click();
              });
              b.appendChild(c);
          }
          x.appendChild(b);
          a.addEventListener("click", function(e) {
              /* When the select box is clicked, close any other select boxes,
              and open/close the current select box: */
              e.stopPropagation();
              closeAllSelect(this);
              this.nextSibling.classList.toggle("select-hide");
              this.classList.toggle("select-arrow-active");
            });
          for (i = 0; i < aContent.length; i++) {
            aContent[i].appendChild(x);
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
            /* Action Row Layout */
            // var aTitle = o.title ? true : false;
            // var aDescription = o.description ? true : false;
            // var aButtons = o.buttons.length ? true : false;
            // var aFilters = o.filters.length ? true : false;
            var aSearch = o.search ? true : false;
            var searchBar = document.getElementById("g__search");
            var btnsGroup = document.getElementById("g__btns");
            var filterSelect = document.getElementById("g__select");
            var wrapper = document.getElementById("g__action-wrapper");
            var content = document.getElementById("g__action-content");
            console.log(`Title:${aTitle} Desc:${aDescription} Buttons:${aButtons} Filters:${aFilters} Search:${aSearch}`);
            // Header only
            if(aTitle && !aDescription && !aButtons && !aFilters && !aSearch){
                wrapper.classList.add("g__inline-m-inline");
            }
            // search only
            if(!aTitle && !aDescription && !aButtons && !aFilters && aSearch){
                console.log('Search Only');
                wrapper.classList.add("g__inline-m-inline");
                wrapper.classList.add("g__end");
            }
            // filter only
            if(aTitle && !aDescription && !aButtons && aFilters && !aSearch){
              console.log('Filter Only');
              wrapper.classList.add("g__inline-m-inline");
              wrapper.classList.add("g__end");
            }
            // buttons only
            if(aTitle && !aDescription && aButtons && !aFilters && !aSearch){
                console.log('Buttons Only');
                wrapper.classList.add("g__inline-m-inline");
                wrapper.classList.add("g__end");
            }
            // Search and buttons
            if(aTitle && !aDescription && aButtons && !aFilters && aSearch){
              console.log('Search and Buttons');
                wrapper.classList.add("g__inline-m-inline");
                wrapper.classList.add("g__end");
                content.classList.add("g__inline-m-inline");
            }
            // Search, filters and buttons
            if(aTitle && !aDescription && aButtons && aFilters && aSearch){
                content.classList.add("g__inline-m-inline");
                filterSelect.classList.add("g__push");

            }
            // Header and description
            if(aTitle && aDescription && !aButtons && !aFilters && !aSearch){
                wrapper.classList.add("g__inline-m-inline");
                content.classList.add("g__none");
            }
            //Header and Search
            if(aTitle && !aDescription && !aButtons && !aFilters && aSearch){
                wrapper.classList.add("g__inline-m-block");
                wrapper.classList.add("g__space-between");
                wrapper.classList.add("g__center-align");
                wrapper.classList.add("g__center-align-m-left");
            }
            //Header and Buttons
            if(aTitle && !aDescription && aButtons && !aFilters && !aSearch){
                wrapper.classList.add("g__inline-m-inline");
                wrapper.classList.add("g__space-between");
                wrapper.classList.add("g__center-align");
                wrapper.classList.add("g__center-align-m-left");
            }
            //Header and Filters
            if(aTitle && !aDescription && !aButtons && aFilters && !aSearch){
                wrapper.classList.add("g__inline-m-block");
                wrapper.classList.add("g__space-between");
                wrapper.classList.add("g__center-align-m-left");
                wrapper.classList.add("g__center-align-m-left");
            }
            //Header search and Filters
            if(aTitle && !aDescription && !aButtons && aFilters && aSearch){
                wrapper.classList.add("g__inline-m-block");
                wrapper.classList.add("g__space-between");
                wrapper.classList.add("g__center-align-m-left");
                content.classList.add("g__inline-m-inline");
                searchBar.classList.add("mr-3");
            }
            //Header search and Buttons
            if(aTitle && !aDescription && aButtons && !aFilters && aSearch){
              wrapper.classList.add("g__inline-m-block");
              wrapper.classList.add("g__space-between");
              wrapper.classList.add("g__center-align-m-left");
              content.classList.add("g__inline-m-inline");
              searchBar.classList.add("mr-3");
          }
            //Header search, buttons and Filters
            if(aTitle && !aDescription && aButtons && aFilters && aSearch){
                wrapper.classList.add("g__inline-m-block");
                wrapper.classList.add("g__space-between");
                wrapper.classList.add("g__center-align-m-left");
                content.classList.add("g__inline-m-inline");
                searchBar.classList.add("mr-3");
            }
            //Header, description, search, buttons and Filters
            if(aTitle && aDescription && aButtons && aFilters && aSearch){
                wrapper.classList.add("g__block-m-block");
                content.classList.add("g__inline-m-inline");
                btnsGroup.classList.add("g__push");
                searchBar.classList.add("mr-3");
            }
            //Header, description, search and buttons
            if(aTitle && aDescription && aButtons && !aFilters && aSearch){
              console.log('Header, Description, Search and Buttons');
                wrapper.classList.add("g__block-m-block");
                content.classList.add("g__inline-m-inline");
                content.classList.add("g__end");
                searchBar.classList.add("mr-3");
            }
            //Header, description, search and filter
            if(aTitle && aDescription && !aButtons && aFilters && aSearch){
              console.log('Header, Description, Search and Filter');
                wrapper.classList.add("g__block-m-block");
                content.classList.add("g__inline-m-inline");
                content.classList.add("g__end");
                searchBar.classList.add("mr-3");
            }
            //Header, description and search
            if(aTitle && aDescription && !aButtons && !aFilters && aSearch){
              console.log('Header, Description and search');
                wrapper.classList.add("g__block-m-block");
                content.classList.add("g__inline-m-inline");
                content.classList.add("g__end");
            }
            //Header, description and filters
            if(aTitle && aDescription && !aButtons && aFilters && !aSearch){
              console.log('Header, Description and search');
                wrapper.classList.add("g__block-m-block");
                content.classList.add("g__inline-m-inline");
                content.classList.add("g__end");
            }
    })(options, records);

/*---------------------------------------------
SEARCH BAR
---------------------------------------------*/
var dt_search = document.querySelectorAll('.g__search-search .a__tile_search');
for (var i = 0; i < dt_search.length; i++){
  var search_input = dt_search[i];
  search_input.addEventListener('focus', function(){
      var search = this;
      search.parentNode.classList.add('active');
      setTimeout(function(){
      search.classList.add('active');
      }, 300);
  });
  search_input.addEventListener('focusout', function(){
      var search = this;
      var val = this.value;
      if(val.length == 0){
      search.parentNode.classList.remove('active');
      setTimeout(function(){
          search.classList.remove('active');
      }, 300);
      }
  });
}

//End Main Function
};


window['tileSearch'] = function (id, el) {
  var input, filter, tiles, t, a, i, txtValue, parent;
  input = document.getElementById(el.id);
  filter = input.value.toUpperCase();
  parent = document.getElementById(id);
  tiles = document.getElementById("a__tile");
  t = parent.getElementsByClassName('a__tile_container');
  for (i = 0; i < t.length; i++) {
      a = t[i].getElementsByClassName("a__tile_header")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          t[i].style.display = "";
          } else {
          t[i].style.display = "none";
      }
  }
}
/*---------------------------------------------
HAMBURGER MENU
---------------------------------------------*/
function hamburger(val){
    val.classList.toggle("is-active");
    val.nextSibling.classList.toggle("active");
}


/*---------------------------------------------
FILTER SELECT
---------------------------------------------*/
function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
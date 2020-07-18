export function cards(jsonCards, jsonTheme) {
    /*---------------------------------------------
    Global Variables
    ---------------------------------------------*/
    var json = JSON.parse(jsonCards);
    var jsonTheme = JSON.parse(jsonTheme);
    var ID = json.id;
    var cssID = ".a__" + ID;
    var o = json['options'];
    var r = json['records'];
    /*---------------------------------------------
    Prevent Micro From Running Twice
    ---------------------------------------------*/
    var content = (document.getElementById(ID).innerHTML).trim();
    if (content !== ""){
    return;
    }
    /*---------------------------------------------
    Theme Variables
    ---------------------------------------------*/
    if(jsonTheme){
        var gradient_1 = jsonTheme.gradient_1 ? jsonTheme.gradient_1 : "linear-gradient(175deg, #ffb866 -5%, #ff8bcd 40%, #d44697 65%, #202020 96%)";
        var gradient_2 = jsonTheme.gradient_2 ? jsonTheme.gradient_2 : "linear-gradient(to left, #ffb866 -5%, #ff8bcd 40%, #d44697 65%, #202020 96%);";
        var primary = jsonTheme.primary ? jsonTheme.primary : "#BF458A";
        var secondary = jsonTheme.secondary ? jsonTheme.secondary : "#D44697";
        var success = jsonTheme.success ? jsonTheme.success : "#00B28B";
        var warning = jsonTheme.warning ? jsonTheme.warning : "#00B28B";
        var alert = jsonTheme.alert ? jsonTheme.alert : "#EA386E";
        var darkGray = jsonTheme.darkGray ? jsonTheme.darkGray : "#666666";
        var mediumGray = jsonTheme.mediumGray ? jsonTheme.mediumGray : "#b7b7b7";
        var lightGray = jsonTheme.lightGray ? jsonTheme.lightGray : "#5d5d5d";
    } else {
        var gradient_1 = "linear-gradient(175deg, #ffb866 -5%, #ff8bcd 40%, #d44697 65%, #202020 96%)";
        var gradient_2 = "linear-gradient(to left, #ffb866 -5%, #ff8bcd 40%, #d44697 65%, #202020 96%);";
        var primary = "#BF458A";
        var secondary = "#D44697";
        var success = "#00B28B";
        var warning = "#00B28B";
        var alert = "#EA386E";
        var darkGray = "#666666";
        var mediumGray = "#b7b7b7";
        var lightGray = "#5d5d5d";
    }
    /*---------------------------------------------
    Padding Size
    ---------------------------------------------*/
    switch (o.padding){
        case "small":
            var padding = "5px";
            var shadow = "0px 0px 4px 2px rgba(0, 0, 0, 0.15);";
        break;
        case "large":
            var padding = "15px";
            var shadow = "0px 0px 10px 5px rgba(0, 0, 0, 0.15);";
        break;
        default:
            var padding = "10px";
            var shadow = "0px 0px 7px 5px rgba(0, 0, 0, 0.15);";
        break;
    }
    /*---------------------------------------------
    Layout
    ---------------------------------------------*/
    var columns;
    switch (o.columns){
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
    if(o.fill_row){
      var fillRow = 1;
    } else {
      var fillRow = 0;
    }
    /*---------------------------------------------
    Block Level CSS
    ---------------------------------------------*/
    var cardCss = document.createElement('style');
    cardCss.innerHTML = `
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
    /*---------------------------------------------
    Basic Layout
    ---------------------------------------------*/
    /* Main Structure */
    /* .a__tile_container{
        padding: 20px;
    } */
    .a__tile_wrapper {
        margin-right: 15px;
        margin-left: 15px;
    }
    /*---------------------------------------------
    Containers
    ---------------------------------------------*/
    ${cssID} g__container{
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
    ${cssID} .a__card_container{
        display: flex;
        flex-wrap: wrap;
    }
    ${cssID} .a__card_single{
        flex: ${fillRow} 0 ${columns};
        overflow: hidden;
      }
    /*---------------------------------------------
    Card Styles
    ---------------------------------------------*/
    ${cssID} .a__card_single{
        box-sizing: border-box;
        padding: ${padding}
    }
    .a__card_single .card:hover {
        box-shadow: ${shadow};
        transition: box-shadow .5s;
    }
    .card-img-top {
        max-height: 200px;
        padding: 10px;
        display: block;
        width: auto;
        margin: auto;
    }
    .card > a {
        border-bottom: 1px solid lightgray;
    }
    .a__card_single .card{
        height: calc(225px + 80px);
        overflow: hidden;
    }
    .a__card_single .a__card_top{
        height: 225px;
        padding: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 25px;
    }
    .a__card_single .a__card_top i{
        font-size:  30px;
        color: #27b07d;
    }

    .a__card_single .a__card_body{
        overflow: auto;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        top: 225px;
        padding: 10px;
        width: 100%;
        height: 80px;
        background: #fff;
        border-top: 1px solid #b4b4b4;
        transition: all .4s;
    }
    .a__card_single .a__card_body.active{
        overflow: hidden;
        padding:10px;
        position: absolute;
        top: 0;
        border-top: 1px solid #fff;
        background: #fff;
        height: 100%;
    }
    .a__card_single .a__card_img{
        max-height: 100%;
        max-width: 100%;
    }
    .a__card_single .a__card_body .a__card_header{
        font-size: 24px;
        margin-top: -5px;
        font-weight: 400;
        margin-bottom: 0;
        color: #101010;
    }

    .a__card_single .a__card_body .a__card_desc{
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 0;
        color: #5d5d5d;
        overflow: hidden;
        max-height: 210px;
        height: 20px;
        padding-right: 15px;
        width: fit-content;
        transition: height .4s;
    }
    .a__card_single .a__card_body.active .a__card_desc{
        overflow: auto;
        height: 210px;
    }
    .a__card_single .a__show_more {
        display: none;
        position: absolute;
        bottom: 1px;
        right: 0;
        cursor: pointer;
        color: #101010;
        font-size: 14px;
        background: white;
        padding: 0 10px 10px 10px;
        box-shadow: -10px 0 10px 0px white;
    }
    .a__card_single .a__card_body.active .a__show_more {
        position: absolute;
        top: 0px;
        right: 6px;
        cursor: pointer;
        color: #a1a1a1;
        font-size: 30px;
        background: transparent;
        padding: 0 10px 10px 10px;
        box-shadow: 0px 0 0px 0px white;
    }
    .a__card_single .a__show_more.show {
        display: block;
    }
    .a__card_single .a__white_btn{
        opacity: 0;
        z-index: 5;
        border: 1px solid #fff;
        padding: 5px;
        width: 200px;
        text-align: center;
        background: transparent;
        cursor: pointer;
        font-weight: 400;
        border-radius: 5px;
        text-decoration: none;
        color: #fff;
        margin: 10px;
        transition: opacity .4s;
    }
    .a__card_single .a__white_btn:hover{
        background: rgba(0, 0, 0, .50);
        cursor: pointer;
    }
    .a__card_single .a__filter{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width:100%;
        height: 225px;
        content: '';
        background: rgba(0, 0, 0, .50);
        transition: opacity .4s;
    }
    .a__card_single .a__card_top:hover .a__filter,
    .a__card_single .a__card_top:hover .a__white_btn{
        opacity: 1;
    }
    /*----------
    Overlays
    ----------*/
    /* .a__card_single .a__card_top:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: .7;
    }
    .a__card_single .a__card_top:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: .7;
    } */
    /*---------------------------------------------
    Action Row
    ---------------------------------------------*/
    .a__tile_action{
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #a1a1a1;
    }
    .a_action_content{
    margin-right: 50px;
    }
    .a_action_content p{
    margin-bottom: 0;
    }
    .a__seach_row {
    display: flex;
    justify-content: flex-end;
    flex: 1;
    }
    .search-container {
    position: relative;
    margin-left: auto;
    margin-top: 10px;
    }
    .search-container input#a__search_input {
    height: 30px;
    width: 300px;
    color: transparent;
    font-size: .825rem;
    font-family: arial;
    background: #fff;
    border: 1px solid #b4b4b4;
    padding-left: 2rem;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    }
    .search-container .icon {
    transition: all 0.3s ease;
    position: absolute;
    z-index: 1;
    top: 5px;
    left: 9px;
    }
    .search-container.active .icon {
    transform: scaleX(0) rotate(45deg);
    }
    .search-container.active input#a__search_input {
    padding-left: 1rem;
    }
    .search-container.active input#a__search_input.active {
    color: #101010;
    }
    .search-container input#a__search_input:hover,
    .search-container input#a__search_input:focus,
    .search-container input#a__search_input:active{
    outline:none;
    background: #f5f5f5;
    }
    .search-container input#a__search_input:focus {
    background: #fff;
    }

  /*---------------------------------------------
  Mobile Styles
  ---------------------------------------------*/
  @media (max-width: 991.98px) {
    ${cssID} .a__card_single{
        flex: ${fillRow} 0 50%;
        overflow: hidden;
      }
  }
  @media only screen and (max-width: 767.98px) {
    ${cssID} .a__card_single{
        flex: ${fillRow} 0 100%;
        overflow: hidden;
      }
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
    .a__seach_row {
      width: 100%
    }
    .search-container {
      width: 100%;
    }
    .search-container input#a__search_input {
      width: 100%;
    }
  }
      `
      document.head.appendChild(cardCss);

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
    function action(o){
       var header = o.header ? `<h2>${o.header}</h2>` : "";
       var desc = o.description ? `<p>${o.description}</p>` : "";
        return `<div class="a_action_content">${header} ${desc}</div>`;
    }
    function cardBkg(r) {
        if(r.background_image){
            return `style="background: url(${r.background_image}) no-repeat center center; background-size:cover;"`;
        }else{
            return `style="background: url(https://addapptation.blob.core.windows.net/pictures/no_image.png) no-repeat center center; background-size:cover;"`;
        }
    }
    function rClasses(r){
        return r.classes ? ` ${r.classes}` : "";
    }
    function cardBtn(r){
        return r.button_link && r.button_text ? `<a href="${r.button_link}" target="${r.target}" class="a__white_btn">${r.button_text}</a>` : "";
    }
    function cardTitle(r){
        return r.header ? `<div class="a__card_header">${r.header}</div>` : "";
    }
    function cardDesc(r){
        return r.description ? `<div class="a__card_desc">${r.description}</div>` : "";
    }
    function cardLink(r){
        return !r.button_text && !!r.button_link ? ` onclick="window.open('${r.button_link}', '${r.target ? r.target : "_self"}')"` : "";
    }
    function container(o){
        return o.full_width ? "g__container-fluid" : "g__container";
    }

    /*---------------------------------------------
    Container Build
    ---------------------------------------------*/
    var wrapper = createElement("div", {
        "class": `a__tile_wrapper a__${ID} ${container(o)}`
    });
    var row = createElement("div", {
        "class": "a__card_container",
        "id": "a__card"
    });
    if(o.header || o.description){
        var action_row = createElement("div", {
            html: `${action(o)}`,
            "class": "a__tile_action mt-4"
        });
        wrapper.appendChild(action_row);
    };
        if(o.search){
            var search = createElement("div", {
                html: `<span class="icon"><i class="fal fa-search"></i></i></span><input type="text" id="a__search_input" class="a__tile_search" onkeyup="window.cardSearch()">`,
                "class": "search-container"
            });
            action_row.appendChild(search);
        };
    if (r && r.length) {
        each(r, function(r){
            var tile_container = createElement("div", {
                "class": "a__card_single" + " " +  rClasses(r)
            })
            tile_container.appendChild(createElement("div", {
                html: `${cardBuild(o, r)}`,
                "class": "a__single_card",
            }))
            wrapper.appendChild(row);
            row.appendChild(tile_container);
        })
    } else {
        var empty = createElement("div", {
            html: "<h2>Add Tile Element</h2>",
            "class": "a__no-records col-12 mt-3"
        })
        wrapper.appendChild(row).appendChild(empty);
    };
    /*---------------------------------------------
    Empty Granite Div and Append Hero
    ---------------------------------------------*/
    if ((document.getElementById(ID).innerHTML).trim() == "") {
        document.getElementById(ID).appendChild(wrapper);
    }

    /*---------------------------------------------
    Record Build
    ---------------------------------------------*/
    function cardBuild(o, r){
        return `<div class="card">
                    <div class="a__card_top" ${cardBkg(r)} ${cardLink(r)}>
                        <div class="a__filter">
                        ${cardBtn(r)}
                        </div>
                    </div>
                <div class="card-body a__card_body">
                    ${cardTitle(r)}
                    ${cardDesc(r)}
                    <div class="a__show_more">See More</div>
                </div>
                </div>`
          }
    /*---------------------------------------------
    Show More Button
    ---------------------------------------------*/
    var showMoreBtn = document.getElementsByClassName('a__show_more');
    var desc = document.getElementsByClassName('a__card_desc');
    console.log(desc.length)
    for (var n = 0; n < desc.length; n++) {
    console.log("loop");
    var char = desc[n].innerHTML.length;
    console.log(char);
        if (char > 45){
        desc[n].nextElementSibling.classList.add("show");
        }
    }
    // 'Show More' button on click
    var showMore = document.getElementsByClassName('a__show_more');
    for (var i = 0; i < showMore.length; i++) {
        showMore[i].addEventListener("click", function(e) {
            console.log("click");
            var descCont = this.parentNode;
            var cardCont = descCont.parentNode;
            descCont.classList.toggle('active');
            cardCont.classList.toggle('active');
            if (this.innerHTML === "See More"){
            this.innerHTML = "<i class='fal fa-times'></i>";
            } else{
            this.innerHTML = 'See More';
            }
        })
    }
    /*---------------------------------------------
    SEARCH BAR
    ---------------------------------------------*/
    //Event Listener
    var dt_search = document.querySelectorAll('.search-container .a__tile_search');
    // console.log(dt_search.length)
    for (i = 0; i < dt_search.length; i++){
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
    window['cardSearch'] = function() {
        console.log("Search working");
        var input, filter, tiles, t, a, i, txtValue;
        input = document.getElementById('a__search_input');
        filter = input.value.toUpperCase();
        tiles = document.getElementById("a__card");
        t = tiles.getElementsByClassName('a__card_single');
        for (i = 0; i < t.length; i++) {
            a = t[i].getElementsByClassName("a__card_header")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                t[i].style.display = "";
                } else {
                t[i].style.display = "none";
            }
        }
    }
};



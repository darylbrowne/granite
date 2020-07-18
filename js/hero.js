export function hero(jsonHero, jsonTheme){
    var json = JSON.parse(jsonHero);
    var jsonTheme = JSON.parse(jsonTheme);
    var ID = json['id'];
    var graniteID = "g__" + json['id'];
    var cssID = "#g__" + json['id'];
    var o = json.options;
    var r = json.records;
    var height = !!o.height ? o.height : "50vh";
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
    Header Font Size
    ---------------------------------------------*/
    switch (o.header_size){
        case "small":
            var header_size = "40px";
        break;
        case "large":
            var header_size = "72px";
        break;
        default:
            var header_size = "55px";
        break;
    }
    /*---------------------------------------------
    Description Font Size
    ---------------------------------------------*/
    switch (o.desc_size){
        case "small":
            var desc_size = "26px";
        break;
        case "large":
            var desc_size = "30px";
        break;
        default:
            var desc_size = "18px";
        break;
    }
    /*---------------------------------------------
    Layout Case Block
    ---------------------------------------------*/
    switch (o.align_content){
        case "center":
            var container_position = "center";
            var content_align = "center";
            var desc_align = "center";
            var width = "100%";
        break;
        case "right":
            var container_position = "flex-end";
            var content_align = "flex-start";
            var desc_align = "left";
            var width = "50%";
        break;
        default:
            var container_position = "flex-start";
            var content_align = "flex-start";
            var desc_align = "left";
            var width = "100%";
        break;
    }
    /*---------------------------------------------
    Theme Case Block
    ---------------------------------------------*/
    const blk = "#101010";
    const wht = "#fff";
    switch (o.theme){
        case "dark":
            var header_color =  wht;
            var desc_color = wht;
            var overlay = "rgba(0, 0, 0, 0.8)";
        break;
        case "custom":
            var header_color =  o.header_color ? o.header_color : wht;
            var desc_color = o.desc_color ? o.desc_color : wht;
            var overlay = o.overlay ? o.overlay : "";
        break;
        default:
            var header_color = blk;
            var desc_color = blk;
            var overlay = "rgba(255, 255, 255, 0.9)";
        break;
    }
    var heroCss = document.createElement('style');
    heroCss.innerHTML = `
    ${cssID}.g__hero_wrapper{
        min-height: ${height};
        position: relative;
        background-size: cover;
        background-position: center center;
        display:flex;
        align-items: center;
        justify-content: ${container_position};
    }
    ${cssID}.g__hero_wrapper.theme_color:after {
        content: '';
        background-color: ${overlay};
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    ${cssID}.g__hero_wrapper.theme_custom:after {
        content: '';
        background-color: ${overlay}CC;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    ${cssID} .g__hero_container{
        display: flex;
        flex-direction: column;
        align-items: ${content_align};
        justify-content: center;
        width: ${width};
        max-width: 1250px;
        padding: 20px 100px;
    }
    ${cssID} .g__hero_header{
        font-size: ${header_size};
        font-weight: 300;
        z-index: 1;
        color: ${header_color};
    }
    ${cssID} .g__hero_desc{
        z-index: 1;
        font-size: ${desc_size};
        font-weight: 300;
        color: ${desc_color};
        text-align: ${desc_align};
    }
    ${cssID} .g__hero_btn{
        z-index: 1;
        background-color: black;
        font-size: 18px;
        padding: 10px 48px;
        border-radius: 2px;
        text-decoration: none;
        margin-top: 40px;
    }
    /* --- Button Styles --- */
    ${cssID} .g__hero_btn.white_btn{
        color: ${primary};
        border: 1px solid ${primary};
        background: #ffffff;
        font-weight: 500;
        border-radius: 2px;
        transition: all 0.5s;
    }
    ${cssID} .g__hero_btn.white_btn:hover{
        color: #ffffff;
        border: 1px solid ${primary};
        background: ${primary};
        font-weight: 500;
    }
    ${cssID} .g__hero_btn.color_btn{
        color: #ffffff;
        border: 1px solid ${primary};
        background: ${primary}BF;
        font-weight: 500;
        border-radius: 2px;
        transition: all 0.5s;
    }
    ${cssID} .g__hero_btn.color_btn:hover{
        color: ${primary};
        border: 1px solid ${primary};
        background: #ffffff;
        font-weight: 500;
        transition: all 0.5s;
    }
    ${cssID} .g__hero_btn.outline_btn{
        color: #ffffff;
        border: 1px solid #ffffff;
        background: transparent;
        font-weight: 500;
        border-radius: 2px;
        transition: all 0.5s;
    }
    ${cssID} .g__hero_btn.outline_btn:hover{
        color: #ffffff;
        border: 1px solid ${primary};
        background: ${primary};
        font-weight: 500;
        transition: all 0.5s;
    }
    @media (max-width: 767.98px) {
        ${cssID} .g__hero_container{
            width: 100%;
            padding: 25px 40px;
        }
        ${cssID} .g__hero_btn.outline_btn,
        ${cssID} .g__hero_btn.color_btn,
        ${cssID} .g__hero_btn.white_btn{
            width: 100%;
            text-align: center;
        }
    }
    `
    document.head.appendChild(heroCss);
    /* Hero Wrapper */
    var hero_wrapper = document.createElement('div');
    hero_wrapper.setAttribute('id', graniteID);
    hero_wrapper.setAttribute('class','g__hero_wrapper');
    hero_wrapper.classList.add( themeStyle(o) );
    hero_wrapper.style.background = heroBkg(o);
    hero_wrapper.style.backgroundSize = "cover";
    /* Hero Container */
    var hero_container = document.createElement('div');
    hero_container.setAttribute('class','g__hero_container');
    hero_wrapper.appendChild(hero_container);
    /* Header */
    if(!!o.header){
        var hero_header = document.createElement('h2');
        hero_header.setAttribute('class','g__hero_header');
        hero_header.innerHTML = o.header;
        hero_container.appendChild(hero_header);
    }
    /* Body Copy */
    if(!!o.desc){
        var hero_body = document.createElement('p');
        hero_body.setAttribute('class','g__hero_desc');
        hero_body.innerHTML = o.desc;
        hero_container.appendChild(hero_body)
    }
    ;
    /* Hero Button */
    if(!!o.button_text){
        var hero_btn = document.createElement('a');
        hero_btn.setAttribute('href', o.button_url);
        hero_btn.setAttribute('class','g__hero_btn');
        hero_btn.setAttribute('target', target(o) );
        hero_btn.classList.add( btnStyle(o) );
        hero_btn.innerHTML = o.button_text;
        hero_container.appendChild(hero_btn);
    }
    /*---------------------------------------------
    Functions
    ---------------------------------------------*/
    function heroBkg(o){
        return    o.background_image ? `url(${o.background_image}) center center`
                : o.background_color ? o.background_color
                : "#b4b4b4";
    }
    function target(o){
        return o.target ? "_blank" : "_self";
    }
    function btnStyle(o){
        var test = "test";
        console.log(test);
        return    o.button_style === "outline" ? "outline_btn"
                : o.button_style === "color"   ? "color_btn"
                : "white_btn";
    }
    function themeStyle(o){
        if(o.theme === "dark"){
            return "theme_color";
        }else if(o.theme === "light"){
            return "theme_color";
        }else{
            return "theme_custom";
        }
    }
    /*---------------------------------------------
    Empty Granite Div and Append Hero
    ---------------------------------------------*/
    if ((document.getElementById(ID).innerHTML).trim() == "") {
        document.getElementById(ID).appendChild(hero_wrapper);
      }
}
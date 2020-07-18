export function navigation(jsonNav, jsonTheme){
  /* BUILD NAVIGATION */
      var json = JSON.parse(jsonNav);
      var jsonTheme = JSON.parse(jsonTheme);
      var targetID = json['id'];
      var options = json.options;
      var records = json.records;
      var content = (document.getElementById(targetID).innerHTML).trim();
      if (content !== ""){return;}
      /* CSS VARIABLES */
      var nav_root = document.documentElement;

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
        for (var p in jsonTheme) {
            if( jsonTheme[p] === ":root" ) {
                var color = "--" + p;
                jsonTheme[p] = getComputedStyle(document.body).getPropertyValue(color);
                }
            }
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
    if (options.type === "sidebar"){
      if(options.background === "@none"){
        var background_color = gradient_1;
      }else{
        var background_color = options.background ? options.background : gradient_1;
      }
    }else{
      if(options.background === "@none"){
        var background_color = gradient_2;
      }else{
        var background_color = options.background ? options.background : gradient_2;
      }
    }
    var font_color = options.font_color ? options.font_color : "#ffffff";
      if(!!options){
          nav_root.style.setProperty('--active', '#101010'); /*options.highlight*/
          nav_root.style.setProperty('--color', options.font_color);
          nav_root.style.setProperty('--topbarGradient', options.topbar_gradient);
          nav_root.style.setProperty('--gradient', options.gradient);
      }
      var css = document.createElement('style');
      css.innerHTML = `
      :root {
          --color: white;
          --active: #101010;
          --gradient: linear-gradient(175deg, #ffb866 -5%, #ff8bcd 40%, #d44697 65%, #202020 96%);
          --topbarGradient: linear-gradient(to left, #ffb866 -5%, #ff8bcd 40%, #d44697 65%, #202020 96%);;
        }
        /* HTML */
          html::-webkit-scrollbar {
            width: 10px;
          }
          ::-webkit-scrollbar {
            width: 8px;
          }
          html::-webkit-scrollbar-thumb {
            background: #aaa;
          }
          ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 4px;
          }
          html::-webkit-scrollbar-track {
            background: #fff;
          }
          ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px grey;
            border-radius: 4px;
          }

        /* BODY */
          body {
            transition: padding-left 0.3s ease;
            margin-bottom: 80px;
          }
          @media (min-width: 992px) {
            body {
              padding-bottom: 0;
            }
            body.sidebar_shift {
              padding-left: 260px;
            }
            body.sidebar_shift.shift {
              padding-left: 80px;
            }
            body.topbar_shift {
              padding-left: 0;
              padding-bottom: 0;
              padding-top: 60px;
            }
          }

        /* SIDEBAR */
          #a__sidebar_nav {
            font-family: FuturaPTWebLight, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            position: fixed;
            left: 0;
            top: 0;
            height: 100vh;
            width: 260px;
            box-shadow: 4px 0 10px 0 rgba(0, 0, 0, 0.15);
            background: ${background_color} !important;
            transition: margin-left 0.3s ease;
            margin-left: -260px;
            z-index: 1;
          }
          #a__sidebar_nav .g__hide-item{
            display: none;
          }
          #a__sidebar_nav.shift #a__sidebar_nav__arrow {
            transform: rotate(180deg);
          }
          @media (min-width: 992px) {
            #a__sidebar_nav {
              margin-left: 0;
            }
            #a__sidebar_nav.shift {
              margin-left: -170px; /*-180px;*/
            }
            #a__sidebar_nav.shift .img_container {
              margin-left: 170px; /*180px;*/
            }
          }

        /* HEADER */
          .a__nav_container .a__sidebar_header_wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 64px;
          }
          #a__sidebar_nav.shift .a__sidebar_header_wrapper .a__sidebar_header_label {
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          .a__nav_container .a__sidebar_nav__header {
            height: ${options.searching ? "210px" : "176px"};
            overflow: hidden;
            text-align: center;
          }
          .a__nav_container .a__sidebar_header_label {
            color: ${font_color};
            max-height: 100%;
            overflow: hidden;
          }

          /* SEARCH */
            .a__nav_container .a__search_container {
              position: absolute;
              top: 172px;
              left: 23px;
              white-space: nowrap;
              transition: all 0.3s ease;
            }
            .a__nav_container .a__search_container input {
              display: inline-block;
              position: absolute;
              width: 230px !important;
              margin-left: -1.05rem;
              top: -3px;
              transition: background 0.3s ease-in-out, border-color 0.3s ease-in-out;
              transition: all 0.3s ease;
              background: transparent;
              border-color: rgba(255,255,255,0.25);
              border-width: 2px;
              padding-left: 2rem;
            }
            .a__nav_container .a__search_container input:focus {
              background-color: rgba(255,255,255,0.25);
              box-shadow: none;
              border-color: white;
            }
            .a__nav_container .a__search_container #a__search_icon {
              pointer-events: none;
            }
            #a__sidebar_nav.shift .a__search_container {
              left: 213px;
            }
            #a__sidebar_nav.shift .a__search_container input {
              opacity: 0;
              pointer-events: none;
            }
            #a__sidebar_nav.shift .a__search_container #a__search_icon {
              pointer-events: all;
            }

          /* OPTIONS */
            #a__sidebar_nav__options {
              position: absolute;
              right: 37px; /*32px;*/
              top: 120px;
              text-align: center;
            }
            #a__sidebar_nav__options ul {
              opacity: 0;
              position: absolute;
              background: white;
              z-index: 1;
              border-radius: 3px;
              white-space: nowrap;
              pointer-events: none;
              transition: opacity 0.3s ease;
              top: 2.5rem;
              padding: 0.5rem 0;
              margin: 0;
              text-align: left;
              overflow: hidden;
              /* box-shadow: 0px 6px 6px 2px rgba(0, 0, 0, 0.16); */
              border: 1px solid rgba(0,0,0,0.15);
            }
            #a__sidebar_nav__options a {
              text-decoration: none;
            }
            #a__sidebar_nav__options ul li {
              position: relative;
              padding-right: 2.5rem;
            }
            #a__sidebar_nav__options ul li:hover {
              background: rgba(0,0,0,0.05);
            }
            #a__sidebar_nav__options ul li,
            #a__sidebar_nav__options ul li i {
              color: #101010;
              font-size: 1rem;
            }
            #a__sidebar_nav__options ul li i {
              position: absolute;
              right: 0;
              height: 40px;
              line-height: 40px;
              width: 2.5rem;
              top: 0;
              text-align: center;
            }
            #a__sidebar_nav__options ul.show {
              opacity: 1;
              pointer-events: all;
            }

          /* ICONS */
            #a__sidebar_nav__options i {
              font-size: 1.5rem;
            }
            .a__nav_container .a__search_container i,
            #a__sidebar_nav__options i {
              color: ${font_color};
              cursor: pointer;
              position: relative;
            }
            .a__nav_container .a__search_container i:after,
            #a__sidebar_nav__options i:after,
            #a__nav_hamburger i:after {
              background: transparent;
              display: block;
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              border-radius: 50%;
              z-index: -1;
              margin: 0;
              transition: 0.2s margin ease;
            }
            #a__sidebar_nav__options i:after {
              top: 4px;
              bottom: 4px;
            }
            .a__nav_container .a__search_container i:hover:after,
            #a__sidebar_nav__options i:hover:after {
              background: white;
              opacity: 0.15;
              margin: -.75rem;
            }
            #a__nav_hamburger i:after {
              margin: 1rem;
            }
            #a__nav_hamburger i:hover:after {
              background: white;
              opacity: 0.15;
              margin: .55rem;
            }

        /* LOGO */
          .a__nav_container .img_container {
            height: 100px;
            padding: 1rem .825rem .25rem; /*1rem .5rem .25rem;*/
            transition: margin-left 0.3s ease;
          }
          .a__nav_container .img_container img {
            max-height: 100%;
            max-width: 100%;
          }

        /* LIST */
          #a__sidebar_nav__list {
            height: calc(100vh - 258px); /*calc(100vh - 310px);*/
            overflow: auto;
            margin: 0;
            overflow: hidden;
          }
          #a__sidebar_nav__list:hover {
            overflow-y: scroll;
            margin-right: -5px;
          }
          #a__sidebar_nav__list::-webkit-scrollbar {
            width: 5px;
          }
          #a__sidebar_nav__list::-webkit-scrollbar-thumb {
            background: #aaa;
          }
          #a__sidebar_nav__list::-webkit-scrollbar-track {
            background: transparent;
          }

        /* LIST ITEMS */
          #a__sidebar_nav__list > li:last-child {
            transition: border 0.3s ease;
            border-bottom: 1px solid rgba(255, 255, 255, 0.25);
          }
          #a__sidebar_nav.shift #a__sidebar_nav__list > li:last-child,
          #a__sidebar_nav.shift #a__sidebar_nav__list li .nav-link {
            border-color: transparent;
          }
          #a__sidebar_nav__list li .nav-link {
            border-top: 1px solid rgba(255, 255, 255, 0.25);
            position: relative;
            color: ${font_color};
            font-weight: lighter;
            padding: 0;
            transition: border 0.3s ease;
          }
          #a__sidebar_nav__list li .nav-link > div {
            padding: 24px;
          }
          #a__sidebar_nav__list li.active .nav-link > div {
            background: rgba(255, 255, 255, 0.85);
          }
          #a__sidebar_nav__list .nav-link {
          }
          #a__sidebar_nav__list .nav-link:hover {
            background: rgba(255, 255, 255, 0.15);
          }
          #a__sidebar_nav__list li.active a {
            color: var(--active);
          }
          #a__sidebar_nav__list li a:hover, #a__sidebar_nav__list li.active a:hover {
            text-decoration: none;
            background: white;
          }
          .a__nav_container .a__sidebar_nav__list-icon, .submenu-icon-container {
            position: absolute;
            right: 0;
            top: 0;
            width: 90px; /*80px;*/
            text-align: center;
            font-size: 24px;
          }
          .a__nav_container .a__sidebar_nav__list-icon {
            height: 80px;
            line-height: 80px;
          }
          .a__nav_container .a__sidebar_nav__list-label {
            font-size: 1.25rem;
            width: fit-content;
            display: inline-block;
            max-width: 150px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            line-height: 34px;
          }
          .a__nav_container .a__sidebar_nav__list-arrow {
            display: none;
            transform: translateY(-.5rem);
          }
          .a__nav_container .a__label_arrow {
            vertical-align: text-bottom;
            font-size: 1.25rem;
            margin-left: .75rem;
            transition: transform 0.3s ease;
          }
          .a__nav_container li .nav-link.has_submenu .a__sidebar_nav__list-arrow {
            display: inline-block;
            position: absolute;
            right: 75px;
            top: 37px;
          }
          .a__nav_container li.active .a__label_arrow {
            transform: rotate(180deg);
          }

        /* SUBMENUS */
          .a__nav_container .submenu-icon-container {
            height: 50px;
            line-height: 50px;
          }
          .a__nav_container .nav-submenu li {
            position: relative;
            background: rgba(255, 255, 255, 0.85);
          }
          .a__nav_container .nav-submenu-link {
            width: 100%;
            height: 100%;
            padding: 0 1.5rem;
            display: block;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            padding-right: 80px;
            height: 50px;
            line-height: 50px;
            color: #101010;
          }
          .a__nav_container .nav-submenu-link.active {
            background: #fff;
          }
          #a__sidebar_nav.a__nav_container ul.nav-submenu,
          #a__mobile_nav.a__nav_container ul.nav-submenu {
            overflow: hidden;
            max-height: 0;
            transition: max-height 0.3s cubic-bezier(0, 1, 0, 1);
          }
          #a__sidebar_nav.a__nav_container li.active ul.nav-submenu,
          #a__mobile_nav.a__nav_container li.active ul.nav-submenu {
            max-height: 100vh;
            transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);
          }
          #a__topbar_nav.a__nav_container ul.nav-submenu {
            overflow: hidden;
            display: none;
            border: 1px solid rgba(0, 0, 0, 0.15);
          }
          #a__topbar_nav.a__nav_container li.active ul.nav-submenu {
            display: block;
          }
          .a__nav_container .nav-link.has_submenu {
            cursor: pointer;
          }
          .a__nav_container .nav-link.has_submenu:after {
            content: "\f107";
            font-family: "Font Awesome 5 Pro";
            position: absolute;
            right: 12px; /*8px;*/
            top: 42px; /*40px;*/
            transform: translateY(-50%);
            font-size: 1.25rem;
            transition: transform 0.3s ease, opacity 0.3s ease;
            opacity: 0;
          }
          #a__sidebar_nav.shift .nav-link.has_submenu:after {
            opacity: 1;
          }
          .a__nav_container li.active .nav-link.has_submenu:after {
            transform: translateY(-50%) rotate(180deg);
          }

        /* FOOTER */
          .a__nav_container .a__sidebar_nav__footer {
            height: 82px; /*100px;*/
            width: 100%;
            padding: 10px 1rem; /*1rem;*/
            padding-right: 1rem;
            display: flex;
            font-weight: lighter;
            align-items: flex-end;
            color: ${font_color};
            overflow: hidden;
          }
          .a__nav_container .a__sidebar_nav__footer > div {
            transition: opacity 0.3s ease;
          }
          #a__sidebar_nav.shift .a__sidebar_nav__footer > div {
            opacity: 0;
          }
          .a__nav_container .a__sidebar_nav__footer a {
            color: ${font_color};
          }
          #a__sidebar_nav__arrow {
            position: absolute;
            right: 5px;
            bottom: -3px;
            line-height: 50px;
            font-size: 42px;
            width: 50px;
            height: 50px;
            text-align: center;
            cursor: pointer;
            color: ${font_color};
            transition: transform 0.3s ease;
            margin: 15px;
            border-radius: 50%;
          }
          #a__sidebar_nav__arrow::after {
            background: transparent;
            display: block;
            content: '';
            position: absolute;
            top: 2px;
            right: 0;
            bottom: 2px;
            left: 4px;
            border-radius: 50%;
            z-index: -1;
            margin: .5rem;
            transition: 0.2s margin ease;
          }
          #a__sidebar_nav__arrow:hover::after {
            background: white;
            opacity: 0.15;
            margin: 0;
          }

        /* MOBILE NAV */
          /* NAV BAR */
            #a__mobile_nav {
              position: fixed;
              bottom: 0;
              left: 0;
              right: 0;
              z-index: 10;
            }
            #mobile_nav_bar {
              background: #202020;
              color: ${font_color};
              height: 3.25rem;
              position: fixed;
              bottom: 0;
              left: 0;
              right: 0;
              transform: translateY(0%);
              transition: transform 0.3s ease;
              z-index: 1;
            }
            @media (min-width: 992px) {
              #a__mobile_nav {
                transform: translateY(100vh);
              }
            }

          /* MOBILE MENU */
           #a__mobile_menu_toggle {
              cursor: pointer;
              padding: 0.125rem;
              position: fixed;
              right: 50%;
              bottom: 1rem;
              background: white;
              border-radius: 50%;
              z-index: 1;
              transform: translateX(50%) rotate(180deg);
              box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
            }
            #a__mobile_menu_toggle_arrow {
              transition: 0.3s;
              width: 42px;
              height: 42px;
              border-radius: 50%;
              text-align: center;
              background: url(https://addapptation.blob.core.windows.net/addapptation/nav%20arrow.svg);
              background-repeat: no-repeat;
              border: none !important;
            }
            #a__mobile_menu_toggle_arrow.flip {
              transform: rotate(180deg);
              color: rgb(144, 37, 177);
            }
            #mobile_logo {
              height: 32px;
              margin-right: 10px;
              vertical-align: text-top;
            }
            #a__mobile_nav .mobile_menu {
              margin: 0;
              padding: 0;
              list-style: none;
            }
            #a__mobile_nav .mobile_menu .a__sidebar_nav__list-icon {
              height: 71px;
              line-height: 71px;
            }
            .a__nav_container .mobile_nav_header {
              padding: .5rem;
              color: #fff;
              font-size: 24px;
              border-bottom: 1px solid #fff;
              height: 3.25rem;
              background: black;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-weight: lighter;
            }
            .a__nav_container .mobile_menu .submenu-icon-container {
              color: ${font_color} !important;
            }
            #a__mobile_menu_scrollable {
              overflow-y: auto;
              overflow-x: hidden;
              height: calc(100vh - 104px);
              background: ${background_color} !important;
            }
            #a__mobile_menu_scrollable > li:not(.active) div {
              color: ${font_color};
            }
            #a__mobile_options_scrollable {
              overflow: auto;
              height: calc(100vh - 112px);
            }
            #a__mobile_options_scrollable a {
              text-decoration: none;
            }
            #a__mobile_nav .mobile_menu .nav-link {
              position: relative;
              color: var(--active);
              padding: 1rem;
              font-size: 1.25rem;
            }
            #a__mobile_nav .mobile_menu .nav-link .a__sidebar_nav__list-arrow {
              top: 20px;
          }
            /*#a__mobile_nav .mobile_menu .nav-link:hover {
              background: rgba(0,0,0,0.05);
            }*/
            #a__mobile_nav .mobile_menu .nav-link .a__sidebar_nav__list-arrow {
              transform: none;
              vertical-align: top;
            }
            #a__mobile_menu_scrollable > li.active {
              background: rgba(255, 255, 255, 0.85);
            }
            #a__mobile_menu_scrollable > li,
            #a__mobile_options_scrollable .nav-link {
              border-bottom: 1px solid #ccc;
              color: #101010 !important;
            }
            #a__mobile_options_scrollable i {
              width: 3rem;
              text-align: center;
              position: absolute;
              right: 0;
              top: 0;
              line-height: 71px;
              margin-right: 1rem;
            }

          /* MOBILE CONTAINERS */
            #mobile_menu, #mobile_options_container, #mobile_search_container {
              height: calc(100vh - 52px);
              transition: 0.5s;
              background: #FDFCFC;
              display: block;
              transform: translateY(-100vh);
              position: absolute;
              width: 100%;
            }
            #mobile_menu:not(.show),
            #mobile_search_container:not(.show),
            #mobile_options_container:not(.show) {
              transform: translateY(100vh);
            }
            #mobile_search_header {
              font-size: 2rem;
              text-align: center;
              box-shadow: 0px 0px 12px -4px grey;
              margin-bottom: 12px;
            }
            #mobile_menu .nav-submenu-link:hover {
              text-decoration: none;
              color: var(--active);
              background: rgba(0,0,0,0.05);
            }

          /* MOBILE OPTIONS AND SEARCH */
            #mobile_options, #mobile_search {
              cursor: pointer;
              font-size: 24px;
              vertical-align: middle;
              color: #fff;
              opacity: 0.75;
              transition: 0.3s all ease;
              line-height: 52px;
            }
            #mobile_options:hover, #mobile_search:hover {
              opacity: 1;
            }
            #mobile_search {
              margin-left: 10%;
            }
            #mobile_options {
              vertical-align: bottom;
              font-size: 38px;
              float: right;
              margin-right: 10%;
            }
            #mobile_search_field {
              width: -webkit-fill-available;
              padding: 4px 8px;
              font-size: 18px;
              margin: 0.5rem 1.5rem;
              border-radius: 4px;
              border: 1px solid #a1a1a1;
            }
            #mobile_search_button_container {
              margin: 0.5rem 1.5rem;
              position: absolute;
              bottom: 20px;
              left: 0;
              right: 0;
            }
            #mobile_search_button.btn-outline-primary {
              width: 100%;
              background-color: white;
              color: var(--active);
              border-color: var(--active);
            }
            #mobile_search_button.btn-outline-primary:hover {
              background-color: var(--active);
              color: white;
              border-color: var(--active);
            }
        /* TOPBAR MOBILE */
        #a__mobile_nav_topbar {
          position: fixed;
          height:50px;
          top: 0;
          left: 0;
          right: 0;
          z-index: 10;
        }
        #mobile_nav_bar_topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 15px;
          background: #101010;
          color: ${font_color};
          height: 50px;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          transform: translateY(0%);
          transition: transform 0.3s ease;
          z-index: 1;
        }
        #mobile_logo_topbar{
          height: 32px;
        }
        #mobile_menu_topbar:not(.show){
          transform: translateY(-100vh);
      }
        #mobile_menu_topbar{
          height: 100vh;
          transition: 0.5s;
          background: #fff;
          margin-top:50px;
          display: block;
          transform: translateY(0);
          width: 100%;
        }
        #a__mobile_nav_topbar.a__nav_container ul.nav-submenu {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.3s cubic-bezier(0, 1, 0, 1);
        }
        #a__mobile_nav_topbar.a__nav_container li.active ul.nav-submenu {
          max-height: 100vh;
          transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);
        }
        #a__mobile_nav_topbar .mobile_menu_topbar {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        #a__mobile_nav_topbar .mobile_menu_topbar .nav-link {
          position: relative;
          color: ${font_color};
          padding: 1rem;
          font-size: 1.25rem;
        }
        #a__mobile_nav_topbar .mobile_menu_topbar .a__sidebar_nav__list-icon {
          height: 71px;
          line-height: 71px;
        }
        .a__nav_container .mobile_menu_topbar .a__sidebar_nav__list-icon {
          position: absolute;
          right: 0;
          top: 0;
          width: 90px;
          text-align: center;
          font-size: 24px;
        }
        .a__nav_container .mobile_menu_topbar .submenu-icon-container {
          color: #101010 !important;
        }
        #a__mobile_nav .mobile_menu_topbar .nav-link {
          position: relative;
          color: ${font_color};
          padding: 1rem;
          font-size: 1.25rem;
        }
        #a__mobile_nav_topbar .mobile_menu_topbar .nav-link .a__sidebar_nav__list-arrow {
          top: 20px;
        }
        #a__mobile_nav_topbar .mobile_menu_topbar .nav-link .a__sidebar_nav__list-arrow {
          transform: none;
          vertical-align: top;
        }
        #a__mobile_menu_scrollable_topbar {
          overflow-y: auto;
          overflow-x: hidden;
          height: 100vh;
          background: linear-gradient(175deg, #101010 -5%, #BF458A 116%) !important;
        }
        #a__mobile_menu_scrollable_topbar > li, #a__mobile_options_scrollable_topbar .nav-link {
          border-bottom: 1px solid #ccc;
          color: #101010 !important;
        }
        .a__topbar_hamburger {
          cursor: pointer;
          display: block;
          position: fixed;
          right: 0;
          opacity: 1;
          font-size: 26px;
          margin: 0px 10px;
        }
        .a__topbar_hamburger, .a__topbar_hamburger::before, .a__topbar_hamburger::after {
          width: 30px !important;
          height: 2px !important;
          background-color: #FFF;
          border-radius: 4px;
          position: absolute;
          transition-property: transform;
          transition-duration: 0.5s;
          transition-timing-function: ease;
        }
        .a__topbar_hamburger::before {
          top: -10px;
        }
        .a__topbar_hamburger::after {
          bottom: -10px;
        }
        .a__topbar_hamburger::before, .a__topbar_hamburger::after {
          content: "";
          display: block;
        }
        .flip .a__topbar_hamburger::after {
          transform: rotate(-45deg);
          bottom: -1px;
        }
        .flip .a__topbar_hamburger::before {
          transform: rotate(45deg);
          top: -1px;
        }
        .flip .a__topbar_hamburger {
          height: 0 !important;
        }
        @media (min-width: 992px) {
          #a__mobile_nav_topbar {
            transform: translateY(100vh);
            display: none;
          }
        }
        /* TOPBAR */
          #a__topbar_nav {
            background: ${background_color} !important;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 60px;
            overflow: visible;
            white-space: nowrap;
            min-width: 320px;
            z-index: 99;
            display: none;
          }
          #a__topbar_nav .img_container img {
            height: 100%;
          }
          #a__topbar_nav .a__sidebar_nav__header {
            height: 60px;
            width: fit-content;
            display: inline-block;
            vertical-align: top;
            overflow: visible;
            padding-right: 20px;
          }
          #a__topbar_nav .a__sidebar_nav__header.search_shift {
            padding-right: 240px;
          }
          #a__topbar_nav .a__sidebar_header_label {
            padding-left: 0.25rem;
          }
          #a__topbar_nav .img_container {
            height: 100%;
            padding: 10px 12px;
            text-align: left !important;
            display: inline-block;
          }
          #a__topbar_nav .a__sidebar_header_wrapper {
            display: inline-block;
            font-size: 1.5rem;
            font-weight: lighter;
          }
          #a__topbar_nav .a__search_container {
            display: inline-block;
            position: relative;
            top: 0;
            left: 1rem;
            text-align: left;
          }
          #a__topbar_nav .a__search_container #a__search_icon {
            pointer-events: all;
          }
          #a__topbar_nav .a__search_container input {
            position: relative;
            margin-left: 0.75rem;
            vertical-align: top;
            position: absolute;
            left: -20px;
          }
          #a__topbar_nav #a__nav_hamburger {
            display: inline-block;
          }
          #a__topbar_nav #a__sidebar_nav__arrow {
            display: none;
          }
          #a__topbar_nav #a__sidebar_nav__list {
            height: 60px;
            display: inline-block;
            position: absolute;
            right: 0;
            top: 0;
            text-align: right;
            overflow: visible;
            padding-right: .825rem;
          }
          #a__topbar_nav #a__sidebar_nav__list.options_shift {
            padding-right: 60px;
          }
          #a__topbar_nav #a__sidebar_nav__list.hide {
            pointer-events: none;
            visibility: hidden;
          }
          #a__topbar_nav #a__sidebar_nav__list li {
            display: inline-flex;
            height: 60px;
            width: 60px;
            vertical-align: top;
            position: relative;
            opacity: 0.75;
          }
          #a__topbar_nav #a__sidebar_nav__list li.g__hide-item{
            display: none !important;
          }
          #a__topbar_nav #a__sidebar_nav__list li:hover {
            opacity: 1;
          }
          #a__topbar_nav #a__sidebar_nav__list li.label_only {
            width: fit-content;
          }
          #a__topbar_nav #a__sidebar_nav__list li a.nav-link {
            border-top: 0 !important;
            height: 60px;
            width: 60px;
            display: inline-block;
          }
          #a__topbar_nav #a__sidebar_nav__list li a.nav-link.label_only {
            width: fit-content;
          }
          #a__topbar_nav #a__sidebar_nav__list li a.nav-link.label_only > div {
            width: fit-content;
            padding: 1.125rem 1rem;
          }
          #a__topbar_nav #a__sidebar_nav__list li a.nav-link > div {
            width: 100%;
            height: 60px;
            display: inline-block;
          }
          #a__topbar_nav .label_icon .a__sidebar_nav__list-label{
            position: absolute;
            font-size: .75rem;
            bottom: 0rem;
            left: 0;
            width: 100%;
            text-align: center;
          }
          #a__topbar_nav .label_icon .a__sidebar_nav__list-icon{
            top: -3px;
          }
          #a__topbar_nav ul:not(#a__nav_hamburger_container) li.label_icon .nav-link.has_submenu .a__sidebar_nav__list-arrow {
            font-family: "Font Awesome 5 Pro";
            position: absolute;
            right: -4px;
            width: 18px;
            height: 18px;
            top: 25px;
            line-height: 12px;
            text-align: center;
        }
          #a__topbar_nav .a__sidebar_nav__list-label.label_only {
            height: fit-content;
            font-size: 20px;
            position: relative;
          }
          #a__topbar_nav ul:not(#a__nav_hamburger_container) .a__sidebar_nav__list-label.icon_only {
            display: none;
          }
          #a__topbar_nav .a__sidebar_nav__list-icon {
            width: 60px;
            height: 60px;
            line-height: 60px;
            line-height: 50px;
          }
          #a__topbar_nav .a__sidebar_nav__list-icon.icon_only {
            line-height: 60px;
            font-size: 2rem;
          }
          #a__topbar_nav ul:not(#a__nav_hamburger_container) li .nav-link.has_submenu .a__sidebar_nav__list-arrow {
            font-family: "Font Awesome 5 Pro";
            position: absolute;
            right: -4px;
            width: 18px;
            height: 18px;
            top: 33px;
            line-height: 12px;
            text-align: center;
          }
          #a__topbar_nav .a__label_arrow {
            font-size: 1rem;
            margin-left: 0;
            line-height: 14px;
          }
          #a__topbar_nav #a__nav_hamburger_container .a__label_arrow {
            padding: 0 16px;
            margin-top: 21px;
          }
          #a__topbar_nav ul.nav-submenu {
            position: absolute;
            top: 60px;
            right: 0;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            padding: .5rem 0;
            /* box-shadow: 0 0px 10px 0px grey; */
          }
          #a__topbar_nav ul.nav-submenu {
            background: white;
            z-index: -1;
          }
          #a__topbar_nav ul.nav-submenu li {
            display: flex !important;
            width: 100% !important;
            text-align: left;
            height: 40px !important;
          }
          #a__topbar_nav ul.nav-submenu li a,
          #a__topbar_nav ul.nav-submenu li .submenu-icon-container {
            height: 40px;
            line-height: 40px;
          }
          #a__topbar_nav ul.nav-submenu li a:hover {
            background: rgba(0,0,0,0.05) !important;
          }
          #a__topbar_nav #a__sidebar_nav__list:hover {
            margin-right: 0;
          }
          #a__topbar_nav .submenu-icon-container {
            width: 60px;
          }
          #a__topbar_nav .a__sidebar_nav__footer {
            display: none;
          }
          #a__topbar_nav #a__sidebar_nav__list li.active .nav-link > div {
            background: none;
            box-shadow: 0 -.25rem 0 0 inset white;
          }
          #a__topbar_nav #a__sidebar_nav__list li.active > a {
            color: ${font_color};
          }
          #a__sidebar_nav__list li.active a:hover {
            background: rgba(255, 255, 255, 0.15);
          }
          #a__topbar_nav #a__sidebar_nav__list li.active {
            opacity: 1;
          }
          #a__topbar_nav #a__sidebar_nav__list li a:hover {
            background: transparent;
          }
          #a__topbar_nav .submenu-icon {
            font-size: 1rem;
            transform: translateY(-25%);
          }
          #a__topbar_nav .nav-submenu-link {
            max-width: 275px;
          }
          @media (min-width: 992px) {
            #a__topbar_nav {
              display: block;
            }
            #a__topbar_nav #a__side_pane {
              height: calc(100vh - 60px) !important;
            }
            #a__topbar_nav #a__side_pane.sidenav.fullscreen {
              max-width: 100% !important;
            }
          }
          #a__topbar_nav .a__sidebar_header_wrapper,
          #a__topbar_nav .a__search_container {
            height: 60px;
            line-height: 60px;
            vertical-align: top;
          }
          #a__topbar_nav .a__search_container input {
            top: 30px;
            transform: translateY(-50%);
          }
          /* MENU OPTIONS */
            #a__topbar_nav #a__sidebar_nav__options {
              top: 0;
              right: 0;
              width: 60px;
              /* padding-top: 2px; */
              z-index: 1;
            }
            #a__topbar_nav #a__sidebar_nav__options-container {
              position: absolute;
              right: 0;
              top: 60px;
              opacity: 1;
              /* max-height: 0; */
              display: none;
              /* transition: max-height 0.3s cubic-bezier(0, 1, 0, 1); */
              /* box-shadow: none; */
            }
            #a__topbar_nav #a__sidebar_nav__options-container.show {
              /* max-height: 100vh; */
              display: block;
              /* box-shadow: 0px 6px 6px 2px rgba(0, 0, 0, 0.16); */
              /* transition: max-height 0.3s cubic-bezier(1, 0, 1, 0), box-shadow 0.3s ease; */
            }
            #a__topbar_nav #a__sidebar_nav__options-container li {
              line-height: 40px;
              padding: 0 1.5rem;
              padding-right: 76px;
            }
            #a__topbar_nav #a__sidebar_nav__options-container li i {
              width: 60px;
            }
          /* HAMBURGER LIST */
            #a__nav_hamburger {
              color: ${font_color};
              height: 60px;
              width: 60px;
              vertical-align: top;
              position: absolute;
              right: .825rem;
              line-height: 60px;
              text-align: center;
              display: none;
            }
            #a__nav_hamburger.options_shift {
              right: 60px;
            }
            #a__nav_hamburger i {
              cursor: pointer;
              padding: 1rem;
            }
            #a__nav_hamburger.hide {
              visibility: hidden;
              pointer-events: none;
            }
            #a__nav_hamburger #a__nav_hamburger_container {
              display: block;
              position: absolute;
              top: 60px;
              right: 0;
              background: white;
              vertical-align: top;
              max-width: 300px;
              list-style: none;
              color: aliceblue;
              width: fit-content;
              box-shadow: none;
              /* max-height: 0; */
              display: none;
              overflow: hidden;
              /* transition: max-height 0.3s cubic-bezier(0, 1, 0, 1); */
              border: 1px solid rgba(0,0,0,0.15);
              margin: 0;
              padding: 0;
              border-radius: 3px;
            }
            #a__nav_hamburger #a__nav_hamburger_container.show {
              display: block;
              /* max-height: 100vh; */
              /* transition: max-height 0.3s cubic-bezier(1, 0, 1, 0), box-shadow 0.3s ease; */
              /* box-shadow: 0px 6px 6px 2px rgba(0, 0, 0, 0.16); */
            }
            #a__nav_hamburger li {
              white-space: nowrap;
              width: fit-content;
              position: relative;
              min-width: 200px;
              min-height: 40px;
              width: 100%;
            }
            #a__topbar_nav #a__nav_hamburger ul.nav-submenu li:hover,
            #a__nav_hamburger li.active:hover {
              background: white;
            }
            #a__nav_hamburger li:hover {
              background: rgba(0,0,0,0.05);
            }
            #a__nav_hamburger li:hover a {
              text-decoration: none;
              color: #101010;
            }
            #a__nav_hamburger li .a__sidebar_nav__list-label {
              text-align: left;
              padding-left: 1.5rem;
            }
            #a__nav_hamburger li .a__sidebar_nav__list-label,
            #a__nav_hamburger li .a__sidebar_nav__list-icon,
            #a__nav_hamburger li .has_submenu .a__sidebar_nav__list-arrow {
              height: 40px;
              line-height: 40px;
              display: inline-block;
              color: ${font_color};
              position: absolute;
              font-size: 1rem;
              top: 0;
            }
            #a__nav_hamburger li .has_submenu .a__sidebar_nav__list-arrow {
              right: -10px !important;
              bottom: 30px !important;
              height: auto;
            }
            #a__nav_hamburger i {
              line-height: 0;
            }
            #a__topbar_nav #a__nav_hamburger .a__sidebar_nav__list-label.label_only {
              height: 40px;
              font-size: 1rem;
              position: absolute;
            }
            #a__topbar_nav #a__nav_hamburger .a__sidebar_nav__list-icon.icon_only {
              line-height: 40px;
              font-size: 1rem;
            }
            #a__topbar_nav #a__nav_hamburger .nav-link.has_submenu {
              height: 40px;
            }
            #a__topbar_nav #a__nav_hamburger ul.nav-submenu {
              height: fit-content;
              position: unset;
              box-shadow: none;
              box-shadow: inset 0px 11px 8px -10px #000, inset 0px -11px 8px -10px #000;
              background: rgba(0,0,0,0.05);
              padding: 0;
              border-radius: 0;
              border: 0;
            }
            @media (max-width: 991.98px) {
              body.sidebar_shift {
                margin-top: 55px;
                }
            }

      `
      document.head.appendChild(css);
      /* MENU OPTIONS */
      var options_list_content = '';
      var options_list = '';
      if(options.menu){
          var menu_items = options.menu_items;
          if(!!menu_items){
          menu_items.forEach(function(record, index){
              options_list_content += `<a href='${record.href}' class='show_loader'><li class='nav-link'>${record.label}<i class='a__nav_options_icon fal fa-${record.icon}'></i></li></a>`;
          });
          }
          options_list_content += `<a href='/sign_out' class='show_loader'><li class='nav-link'>Sign Out<i class='a__nav_options_icon fal fa-sign-out'></i></li></a>`;

          options_list = `
          <div id='a__sidebar_nav__options'>
          <i id='a__options_link' class='fal fa-ellipsis-h'></i>
          <ul id='a__sidebar_nav__options-container'>
              ${options_list_content}
          </ul>
          </div>`;
      }

      /* NAV CONTAINER */
      var nav = document.createElement('nav');
      var side_pane = document.getElementById('a__side_pane');
      var navShift = sessionStorage.getItem('navShift');
      console.log(navShift);
      var topbar = false;

      if(options.type === 'topbar'){
          nav.setAttribute('id','a__topbar_nav');
          nav.setAttribute('class','a__nav_container');
          topbar = true;
          document.body.classList.add('topbar_shift');
          if(!!side_pane){
          side_pane.classList.add('topbar_shift');
          }
      } else {
          nav.setAttribute('id','a__sidebar_nav');
          nav.setAttribute('class','a__nav_container');
          document.body.classList.add('sidebar_shift');
          if(!!side_pane){
          side_pane.classList.add('sidebar_shift');
          }
          if(navShift === "true"){
            console.log("Shift is True");
            nav.classList.add('shift');
            document.body.classList.add('shift');
          } else {
            console.log("Shift is False");
            nav.classList.remove('shift');
            document.body.classList.remove('shift');
          }
      }

      /* NAV HEADER */
      var path = window.location.pathname.split('/').pop();
      var nav_header = document.createElement('div');
      function extractText(text) {
          var span = document.createElement('span');
          span.innerHTML = text;
          return span.textContent || span.innerText;
      }
      var header_label_text = extractText(options.header_label);
      var header_label = options.header_label.replace(/'/g,'"');
      nav_header.setAttribute('class','a__sidebar_nav__header');
      nav_header.innerHTML = `<div class='img_container'>
          <a href='${options.header_link}'><img src='${options.header_image}'></a>
          </div>
          <div class='a__sidebar_header_wrapper'>
          <div class='a__sidebar_header_label' title='${header_label_text}'>${header_label}</div>
              ${options_list}
          </div>`;
      if(options.searching) {
          if(!!nav_header){nav_header.classList.add('search_shift');}
          nav_header.innerHTML += `<div class='a__search_container'>
          <a id='a__global_search_link' class='a__side_pane_link fullscreen' href='/search?test=true'></a>
          <i id='a__search_icon' class='a__search_icon fal fa-search'></i>
          <form action='${options.search_url}'>
              <input id='a__search_input' type='text' class='a__input_search form-control form-control-sm' name='s'>
          </form>
          </div>`;
      }

      // if(options.hide_mobile_nav != 'true') {
      //   document.body.css('padding-top','60px !important');
      // }

      /* NAV LIST */
      var nav_list = document.createElement('ul');
      nav_list.setAttribute('id','a__sidebar_nav__list');
      nav_list.setAttribute('class','a__sidebar_nav__list');
      nav_list.setAttribute('class','list-unstyled');

      var nav_list_content = '';
      var in_submenu = false;
      var is_submenu_item = false;
      records.forEach(function(record, val){
          var href = record.href;
          var label = extractText(record.label);
          var hide_text = record.hide_if;
          var icon = record.icon;
          var link_text = !!href ? href.substr(1) : href;
          var link_check = path === link_text ? true : false;
          var is_active = link_check ? true : (path === '/' || path === '' || path === '/homepage' || path === 'homepage') && val == 0;
          var active_class = is_active ? 'active' : '';
          if(is_active && record.submenu_item){
            console.log("active submenu item");
          }
          is_submenu_item = record.submenu;

          /* CHECK FOR LABEL AND ICON */
          var label_only = false;
          var icon_only = false;
          var label_icon = false;
          if(!!label && label.length && !!icon && icon.length){
              label_icon = true;
          } else if(!!label && label.length){
              label_only = true;
          } else if(!!icon && icon.length){
              icon_only = true;
          }
          if(record.submenu_header){
          nav_list_content += `${in_submenu ? '</ul></li>' : ''}
              <li class='${active_class}${label_only ? ' label_only' : ''}${label_icon ? ' label_icon' : ''} has_submenu'>
              <a id='nav-link-partials' title='${label}' class='nav-link has_submenu ${label_only ? 'label_only' : ''}'>
                  <div>
                    <div class='a__sidebar_nav__list-label ${label_only ? 'label_only' : ''} ${icon_only ? 'icon_only' : ''}'>${label}</div>
                    <div class='a__sidebar_nav__list-arrow'><i class='fal fa-angle-down a__label_arrow'></i></div>
                    <div class='a__sidebar_nav__list-icon ${icon_only ? 'icon_only' : ''}'>
                        <i class='${icon}'></i>
                    </div>
                  </div>
              </a>
              <ul class='nav-submenu list-unstyled' id='nav-link-partials-submenu' data-spy='affix'>`;
          in_submenu = true;
          is_submenu_item = true;
          } else {
          if(is_submenu_item){
              nav_list_content += `
              <li class="g__submenu-item">
                  <a href='${href}' target='_self' id='nav-link-calendar-calendar' title='${label}' class='nav-submenu-link ${active_class}'>
                  <span>${label}</span>
                  <div class='submenu-icon-container'>
                      <i class='${icon} submenu-icon'></i>
                  </div>
                  </a>
              </li>`;
          } else {
              nav_list_content += `${in_submenu ? '</ul></li>' : ''}`
              in_submenu = false;
              if(!!href){
              nav_list_content += `
                  <li class='g__menu-item ${active_class}${label_only ? ' label_only' : ''}${label_icon ? ' label_icon' : ''}'>
                    <a href='${href}' id='nav-link-home' title='${label}' class='nav-link ${label_only ? 'label_only' : ''}'>
                        <div>
                          <div class='a__sidebar_nav__list-label ${label_only ? 'label_only' : ''} ${icon_only ? 'icon_only' : ''}'>${label}</div>
                          <div class='a__sidebar_nav__list-arrow'><i class='fal fa-angle-down a__label_arrow'></i></div>
                          <div class='a__sidebar_nav__list-icon ${icon_only ? 'icon_only' : ''}'>
                              <i class='${icon}'></i>
                          </div>
                        </div>
                    </a>
                  </li>`;
              }
          }
          }
      });

      nav_list.innerHTML = nav_list_content;

      /* HAMBURGER LIST */
      var options_shift_class = options_shift ? 'options_shift' : '';
      nav_header.innerHTML += `<div id='a__nav_hamburger' class='hide ${options_shift_class}'>
          <i class='far fa-bars'></i>
          <ul id='a__nav_hamburger_container'>${nav_list_content}</ul>
          </div>`;

      /* NAV FOOTER */
      var nav_footer = document.createElement('div');
      nav_footer.setAttribute('class','a__sidebar_nav__footer');
      nav_footer.innerHTML = `<div>${options.footer}</div>
          <i id='a__sidebar_nav__arrow' class='fal fa-angle-left'></i>`;

      /* APPEND ELEMENTS TO DOM */
      nav.innerHTML = [nav_header.outerHTML, nav_list.outerHTML, nav_footer.outerHTML].join('');
      document.getElementById(targetID).appendChild(nav);

  /* MOBILE NAV FOOTER*/
  if(options.mobile_menu === "topbar"){
      var mobile_nav = document.createElement('div');
      mobile_nav.setAttribute('id','a__mobile_nav_topbar');
      mobile_nav.setAttribute('class','a__nav_container');
      mobile_nav.innerHTML = `<div id='mobile_nav_bar_topbar'>
                                <a href='/'>
                                  <img id='mobile_logo_topbar' src='https://addapptation.blob.core.windows.net/logo/logo_5_black_bg.svg'>
                                </a>
                                <div id='a__mobile_topbar_toggle'>
                                  <div class="a__topbar_hamburger"></div>
                                </div>
                              </div>
                              <div id='mobile_menu_topbar' class=''>
                                <div>
                                  <ul class='mobile_menu_topbar'>
                                      <div id='a__mobile_menu_scrollable_topbar'>
                                      ${nav_list_content}
                                      </ul></div>
                                  </ul>
                                </div>
                              </div>
                              `;
      document.getElementById(targetID).appendChild(mobile_nav);
    } else {
      var mobile_nav = document.createElement('div');
      mobile_nav.setAttribute('id','a__mobile_nav');
      mobile_nav.setAttribute('class','a__nav_container');
      var mobile_nav_header = `<div class='mobile_nav_header'><a href='/'><img id='mobile_logo' src='https://addapptation.blob.core.windows.net/logo/logo.png'></a><span title='addapptation'>addapptation</span></div>`;
      var mobile_search_button = options.searching ? `<i id='mobile_search' class='far fa-search'></i>` : '';
      var mobile_options_button = options.menu ? `<i id='mobile_options' class='fal fa-ellipsis-h'></i>` : '';

      mobile_nav.innerHTML = `<div id='mobile_nav_bar'>
          ${mobile_search_button}
          <div id='a__mobile_menu_toggle'><div id='a__mobile_menu_toggle_arrow'></div></div>
          ${mobile_options_button}
      </div>
      <div id='mobile_menu' class=''>
          <div>
          <ul class='mobile_menu'>
              ${mobile_nav_header}
              <div id='a__mobile_menu_scrollable'>
              ${nav_list_content}
              </ul></div>
          </ul>
          </div>
      </div>`;

      if(options.searching){
      mobile_nav.innerHTML += `<div id='mobile_search_container' class=''>
          ${mobile_nav_header}
          <div id='mobile_search_header'>Global Search</div>
          <div>
              <form action='${options.search_url}'>
              <input id='mobile_search_field' name='s' placeholder='Search...' type='text'>
              <div id='mobile_search_button_container'>
                  <button id='mobile_search_button' class='btn btn-outline-primary w-100' type='submit'>Search</button>
              </div>
              </form>
          </div>
          </div>`;
      }
      if(options.menu){
      mobile_nav.innerHTML += `<div id='mobile_options_container' class=''>
          ${mobile_nav_header}
          <div>
              <ul class='mobile_menu'>
              <div id='a__mobile_options_scrollable'>
                  ${options_list_content}
              </div>
              <li class='spacer'></li>
              </ul>
          </div>
          </div>
          `;
      }
      document.getElementById(targetID).appendChild(mobile_nav);
    }

  /* CLICK HANDLERS */
      /* SEARCH */
      var search_icon = document.getElementById('a__search_icon');
      var search_input = document.getElementById('a__search_input');
      var nav_arrow = document.getElementById('a__sidebar_nav__arrow');

      if(!!search_icon){
          search_icon.addEventListener('click', function(){
          nav_arrow.click();
          search_input.focus();
          }, false);
      }

      /* OPTIONS */
      var options_link = document.getElementById('a__options_link');
      var options_input = document.getElementById('a__sidebar_nav__options-container');
      var options_shown = false;
      if(!!options_link){
          options_link.addEventListener('click', function(){
          options_input.classList.toggle('show');
          options_shown = options_input.classList.contains('show');
          }, false);
      }

      document.addEventListener('click', function(e){
          var target = e.target.id;
          if(options_shown && target != 'a__options_link'){
          options_input.classList.remove('show');
          }
      });

      /* HAMBURGER MENU */
      var hamburger_list = document.getElementById('a__nav_hamburger');
      var hamburger_container = document.getElementById('a__nav_hamburger_container');

      setTimeout(function(){
          var nav_header = document.getElementsByClassName('a__sidebar_nav__header');
          var nav_header_width = nav_header[0].clientWidth;
          var nav_list = document.getElementById('a__sidebar_nav__list');
          var nav_list_offset = nav_list.getBoundingClientRect().left;

          function toggleHamburger(){
          if(nav_list_offset < nav_header_width){
              nav_list.classList.add('hide');
              hamburger_list.classList.remove('hide');
          } else {
              nav_list.classList.remove('hide');
              hamburger_list.classList.add('hide');
          }
          }
          toggleHamburger();
          window.addEventListener('resize',function(){
          nav_list_offset = nav_list.getBoundingClientRect().left;
          toggleHamburger();
          });

          var hamburger_list_icon = document.querySelector('#a__nav_hamburger .fa-bars');
          hamburger_list_icon.addEventListener('click',function(){
          hamburger_container.classList.toggle('show');
          });
      }, 250);

      /* NAV SUBMENUS */
      var navbar = topbar ? document.getElementById('a__topbar_nav') : document.getElementById('a__sidebar_nav');
      var nav_link = document.getElementsByClassName('nav-link');
      var options_list_container = document.getElementById('a__sidebar_nav__options-container');
      var submenus = navbar.querySelectorAll('.has_submenu');

      function toggleSubmenu(){
          for (var k = 0; k < submenus.length; k++) {
          submenus[k].parentElement.classList.remove('active');
          }
      }
      var singleSubmenu = topbar ? true : options.single_submenu;
      for (var i = 0; i < nav_link.length; i++) {
          nav_link[i].addEventListener('click', function(){
          var parent = this.parentElement;
          if(!this.parentElement.classList.contains('active')){
              if(singleSubmenu){
              toggleSubmenu();
              }
          }
          parent.classList.toggle('active');
          if(!!options_list_container){
              options_list_container.classList.remove('show');
          }
          }, false);
      }

      var options_shift = false;
      if(topbar && !!options_link){
          var topbar_nav_list = document.getElementById('a__sidebar_nav__list');
          topbar_nav_list.classList.add('options_shift');
          hamburger_list.classList.add('options_shift');
          options_shift = true;
          options_link.addEventListener('click', function(){
          hamburger_container.classList.remove('show');
          toggleSubmenu();
          });
      }

      hamburger_list.addEventListener('click',function(){
          if(!!options_list){
          options_list.classList.remove('show');
          }
      });

      /* NAV COLLAPSE */
      var nav_container = document.getElementById('a__sidebar_nav');

      nav_arrow.addEventListener('click', function(){
          nav_container.classList.toggle('shift');
          document.body.classList.toggle('shift');
          var shifted = nav_container.classList.contains('shift');
          if(!!side_pane){
          side_pane.classList.toggle('shift');
          }
          console.log("Click:" + shifted)
          if(shifted){
          sessionStorage.setItem('navShift', true);
          } else {
          sessionStorage.setItem('navShift', false);
          }
      }, false);

      if(topbar){
          window.addEventListener('click', function(e){
          var dropdown = document.querySelectorAll('li.has_submenu.active')[0];
          if (!!dropdown && !dropdown.contains(e.target)){
              dropdown.classList.remove('active');
          }
          });
      }

      /* MOBILE NAV BAR */
      var m_menu = document.getElementById('mobile_menu');
      var m_menu_topbar = document.getElementById('mobile_menu_topbar');
      var m_search_container = document.getElementById('mobile_search_container');
      var m_options_container = document.getElementById('mobile_options_container');

      /* MOBILE MENU TOPBAR */
      if(options.mobile_menu === "topbar"){
        var m_nav_topbar_hamburger = document.getElementById('a__mobile_topbar_toggle');
        m_nav_topbar_hamburger.addEventListener('click', function(){
        m_nav_topbar_hamburger.classList.toggle('flip');
        m_menu_topbar.classList.toggle('show');
        }, false);
      } else {
        /* MOBILE MENU FOOTER */
        var m_nav_arrow = document.getElementById('a__mobile_menu_toggle_arrow');
        m_nav_arrow.addEventListener('click', function(){
        m_nav_arrow.classList.toggle('flip');
        m_menu.classList.toggle('show');
        if(!!m_search_container){
            m_search_container.classList.remove('show');
        }
        if(!!m_options_container){
            m_options_container.classList.remove('show');
        }
        }, false);
      }

      /* MOBILE SEARCH */
          if(options.searching){
          var m_search_button = document.getElementById('mobile_search');

          m_search_button.addEventListener('click', function(){
              m_search_button.classList.toggle('show');
              if(!!m_search_container){
              m_search_container.classList.toggle('show');
              }
              m_menu.classList.remove('show');
              if(!!m_options_container){
              m_options_container.classList.remove('show');
              }
              m_nav_arrow.classList.remove('flip');
          }, false);
          }

      /* MOBILE OPTIONS */
          var m_options_button = document.getElementById('mobile_options');

          if(!!m_options_button){
          m_options_button.addEventListener('click', function(){
              m_options_button.classList.toggle('show');
              m_options_container.classList.toggle('show');
              m_menu.classList.remove('show');
              if(!!m_search_container){
              m_search_container.classList.remove('show');
              }
              m_nav_arrow.classList.remove('flip');
          }, false);
          }
  };

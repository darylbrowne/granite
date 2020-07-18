export function pane(){

    var g__pane;
    const HTML_COLLAPSE = `<span class="g__icon"><i class='fal fa-times'></i></span>`;

    function customClose(paneType,strClose) {
      const CUSTOM_CLASS = strClose ? 'custom' : '';
      let htmlPaneCollapse = strClose ? strClose : HTML_COLLAPSE;
      let sideOrBottom = ['side','bottom'].includes(paneType) ? paneType : 'side';
      if (strClose === htmlPaneCollapse) {
        document.getElementById(`g__${sideOrBottom}pane_close`).innerHTML = htmlPaneCollapse;
        document.getElementById(`g__${sideOrBottom}pane_close`).classList.add('custom');
      } else {
        document.getElementById(`g__${sideOrBottom}pane_close`).innerHTML = HTML_COLLAPSE;
        document.getElementById(`g__${sideOrBottom}pane_close`).classList.remove('custom');        
      }
    }

    function addPanes() {

      if (document.getElementById(`g__sidepane_container`) &&
          document.getElementById(`g__bottompane_container`)) {
        return;
      }

      let css = document.createElement('style');
      css.innerHTML = `
        :root {
          --sidepane-width : 600px;
          --sidepane-max-width : 50%;
          --sidepane-fullscreen-width : 94%;
          --sidepane-fullscreen-max-width : 94%;
          --sidepane-left : inherit;
          --sidepane-right : 0;
          --sidepane-top : inherit;
          --sidepane-bottom : 0;
          --sidepane-transform-start : translateX(100%);
          --sidepane-transform-end : translateX(0%);
          --sidepane-transform-fullscreen : translateX(0%);
          --sidepane-transition : 0.3s transform ease, 0.3s width ease, 0.3s max-width ease;
          --sidepane-expand-visibility : visible;
          --bottompane-width : 100%;
          --bottompane-max-width : 100%;
          --bottompane-fullscreen-width : 100%;
          --bottompane-fullscreen-max-width : 100%;
          --bottompane-left : 0;
          --bottompane-right : inherit;
          --bottompane-top : inherit;
          --bottompane-bottom : 0;
          --bottompane-transform-start : translateY(100%);
          --bottompane-transform-end : translateY(75%);
          --bottompane-transform-fullscreen : translateY(10%);
          --bottompane-transition : 0.3s transform ease, 0.3s height ease, 0.3s max-height ease;
          --bottompane-expand-visibility : hidden;
        }

        #g__shade {
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0);
            opacity: 0;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 99998;
            pointer-events: none;
            transition: opacity 0.5s ease-in-out;
        }
        #g__shade.show {
            opacity: .4;
            transition: opacity 0.5s ease-in-out;
        }
        #g__shade.hide {
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        }
        a.g__sidepane_link, 
        a.g__bottompane_link {
          display: block;
          width: fit-content;
        }
        .g__pane_buttons button, 
        .g__pane_buttons button:active,
        .g__pane_buttons button:focus {
          border-width: 0;
          outline: none;
        }
        .g__pane_buttons button:hover,
        .g__pane_collapse button:active {
          color: #101010;
        }  
        .g__pane_buttons button:active {
          border-width: thin;
        }
        #g__sidepane {
          height: 100vh;
          position: fixed;
          border-left: 2px solid #eae9e9;
          background: white;
          background: url(https://addapptation.blob.core.windows.net/addapptation/SidePane_Loading_Gif.gif) center;
          background-size: 500px;
          z-index: 99999;
          width: var(--sidepane-width);
          max-width: var(--sidepane-max-width);
          top: var(--sidepane-top);
          left:  var(--sidepane-left);
          right: var(--sidepane-right);
          bottom:  var(--sidepane-bottom);
          transform: var(--sidepane-transform-start);
          transition: var(--sidepane-transition);
        }     
        #g__bottompane {
          height: 100vh;
          position: fixed;
          border-left: 2px solid #eae9e9;
          background: white;
          background: url(https://addapptation.blob.core.windows.net/addapptation/SidePane_Loading_Gif.gif) center;
          background-size: 500px;
          z-index: 99999;
          width: var(--bottompane-width);
          max-width: var(--bottompane-max-width);
          top: var(--bottompane-top);
          left:  var(--bottompane-left);
          right: var(--bottompane-right);
          bottom:  var(--bottompane-bottom);
          transform: var(--bottompane-transform-start);
          transition: var(--bottompane-transition);
        }     
        @media (min-width: 992px) {
          .g__pane_expand {
            display: inline-block;
          }
          #g__sidepane {
            width: var(--sidepane-width);
            max-width: var(--sidepane-max-width);
          }
          #g__bottompane {
            width: var(--bottompane-width);
            max-width: var(--bottompane-max-width);
          }
        }
        .g__pane_buttons {
          height: 50px;
        }
        .g__icon {
          border-radius: 50%;
          display: inline-block;
          font-size: 1rem;
          width: 1rem;
          height: 1rem;
          margin: auto;
          pointer-events: none;
        }
        .g__pane_collapse {
          float: right;
        }
        .g__pane_expand,
        .g__pane_collapse {
          cursor: pointer;
          width: fit-content;
          background: transparent;
          border-radius: 50%;
          border-width: thin;
          outline:none;
          height: 30px;
          display: inline-block;
          margin: 10px;
          text-align: center;
          line-height: 18px;
          color: #A1A1A1;
          position: relative;
        }
        #g__sidepane .g__pane_expand {
          visibility: var(--sidepane-expand-visibility);
        }
        #g__bottompane .g__pane_expand {
          visibility: var(--bottompane-expand-visibility);
        }
        .g__pane_expand:after,
        .g__pane_collapse:after {
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
          margin: 6px;
          transition: 0.2s margin ease;
        }
        .g__pane_collapse.custom {
          border-radius: 0%;
          border: 1px solid #101010;
          font-family: Futura;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 30px;  
          letter-spacing: 0.06em;
          color: #101010;
          padding: 0px 48px 8px;            
        }
        .g__pane_collapse.custom::after {
          border-radius: 0;
        }
        .g__pane_expand:hover:after,
        .g__pane_collapse:hover:after {
          background: rgba(0,0,0,0.065);
          margin: 0;
        }
        #g__sidepane.fullscreen .g__expand_button.fa-expand:before,
        #g__bottompane.fullscreen .g__expand_button.fa-expand:before 
        {
          content: "\\f066";
        }
        #g__sidepane_content,
        #g__bottompane_content
         {
          height: calc(100vh - 50px);
          width: 100%;
          border: none;
          overflow: auto;
        }
        #g__sidepane_content::-webkit-scrollbar,
        #g__bottompane_content::-webkit-scrollbar
         {
          width: 5px;
        }
        #g__sidepane_content::-webkit-scrollbar-thumb,
        #g__bottompane_content::-webkit-scrollbar-thumb
         {
          background: #aaa;
        }
        #g__sidepane_content::-webkit-scrollbar-track,
        #g__bottompane_content::-webkit-scrollbar-track {
          background: transparent;
        }
        #g__sidepane.show {
          transform: var(--sidepane-transform-end);
        }
        #g__bottompane.show {
          transform: var(--bottompane-transform-end);
        }
        #g__sidepane.fullscreen {
          width: var(--sidepane-fullscreen-width);
          max-width: var(--sidepane-fullscreen-max-width);
          transform: var(--sidepane-transform-fullscreen);
        }
        #g__bottompane.fullscreen {
          width: var(--bottompane-fullscreen-width);
          max-width: var(--bottompane-fullscreen-max-width);
          transform: var(--bottompane-transform-fullscreen);
        }
       @media (max-width: 600px) {
          .g__sidepane_expand,
          .g__bottompane_expand {
            display: none;
          }
          #g__sidepane,
          #g__bottompane {
            transform: translateY(100%);
            transition: 0.3s transform ease, 0.3s height ease, 0.3s max-height ease;
          }
          #g__sidepane.fullscreen,
          #g__bottompane.fullscreen {
            width: 100%;
            max-width: 100%;
          }
        }`;
    

      document.head.appendChild(css);

      let node = document.createElement('div');
      node.setAttribute('id', 'g__panes');
      node.innerHTML = `
      <div id="g__sidepane_container">
        <aside id="g__sidepane">
          <nav class="g__pane_buttons">
            <button class="g__sidepane_link g__pane_expand fullscreen"><span class="g__icon"><i class='fa fa-expand g__expand_button'></i></span></button>
            <button class="g__sidepane_link g__pane_collapse" id="g__sidepane_close">${HTML_COLLAPSE}</button>
          </nav>
          <section id="g__sidepane_content"></section>
        </aside>
      </div>
      <div id="g__bottompane_container">
        <aside id="g__bottompane">
          <nav class="g__pane_buttons">
            <button class="g__bottompane_link g__pane_expand fullscreen"><span class="g__icon"><i class='fa fa-expand g__expand_button'></i></span></button>
            <button class="g__bottompane_link g__pane_collapse" id="g__bottompane_close">${HTML_COLLAPSE}</button>
          </nav>
          <section id="g__bottompane_content"></section>
        </aside>
      </div>
      <div id="g__shade"></div>`;
      document.body.appendChild(node);
    }

    function getScript(source, callback) {
        let script = document.createElement('script');
        let prior = document.getElementsByTagName('script')[0];
        script.async = 1;
        script.onload = script.onreadystatechange = function( _, isAbort ) {
            if(isAbort || !script.readyState || /loaded|complete/.test(script.readyState) ) {
                script.onload = script.onreadystatechange = null;
                script = undefined;
                if(!isAbort && callback) setTimeout(callback, 0);
            }
        };

        if (source) {
          script.src = source;
          prior.parentNode.insertBefore(script, prior);
        } else {
          let s = document.createElement('script');
          console.log(s);
          console.log(prior);
          console.log(callback);
          s.innerHTML = callback;
          prior.parentNode.insertBefore(s, prior);
        }
    }

    function cleanupScripts(src) {
      var oldScripts = document.getElementsByTagName("script");
      for (var i = 0; i < oldScripts.length; i++) {
        if (oldScripts[i].src == src) {
          oldScripts[i].parentNode.removeChild(oldScripts[i]);
        }
      }
    }

    var getPane = function(paneType, url){
      let sideOrBottom = ['side','bottom'].includes(paneType) ? paneType : 'side';
      let paneURL = (url).includes('://') ? url : `${g__PATH}/${url}`;
      console.log(sideOrBottom + ' <-- ' + paneURL);
      fetch(paneURL)
      .then(function(response){    
        return response.text().then(function(text) {
          return text;
        });
      })
      .then(function(html){
            let parser = new DOMParser();
            let doc = parser.parseFromString(html, "text/html");
            let strHTML = doc.querySelector('body').innerHTML;
            console.log(strHTML);
            document.getElementById(`g__${sideOrBottom}pane_content`).innerHTML = strHTML;

            let docJS = doc.getElementsByTagName('script');
            let s = document.createElement('script');
            for (let f = 0; f < docJS.length; f++) {
                if(docJS[f].src) {
                  if (!(docJS[f].src).includes('granite.js')) {
                    s.src = docJS[f].src;
                    s.type = 'text/javascript';
                    cleanupScripts(s.src);
                    document.getElementsByTagName('head')[0].appendChild(s);
                    getScript(docJS[f].src);
                  }
                } else {
                  getScript(null, docJS[f].innerHTML);
                }
            }
    })
      .catch(function(err){
        console.log('Failed to fetch page: ', err);
        window.g__notifications.errors.push(`loaded content into ${sideOrBottom} pane`);
      })
      .finally(function(){
        window.g__notifications.info.push(`loaded content into ${sideOrBottom} pane`);
      });

    };


    function paneHandler(e){
      
      e.preventDefault();

      console.log(e);

      let sideOrBottom = ((e.target.classList.value).includes('bottompane')) ? 'bottom' : 'side';
      const attrCustomClose = (e.target.dataset['customClose']);

      customClose(sideOrBottom,attrCustomClose);

      g__pane = document.getElementById(`g__${sideOrBottom}pane`);

      if (e.target.href) {getPane(sideOrBottom, e.target.getAttribute("href"));}

      let g__sidepane = document.getElementById(`g__sidepane`);
      let g__bottompane = document.getElementById(`g__bottompane`);
      let g__shade = document.getElementById('g__shade');

      let actions = {
        'g__pane_expand' : (() => {
          g__pane.classList.toggle('fullscreen')
        }),
        'g__pane_collapse' : (() => {
          g__pane.classList.remove('show', 'fullscreen');
        }),      
        'fullscreen' : (() => {
          g__pane.classList.add('show','fullscreen');
        }),
        'g__bottompane_link' : (() => {
          g__pane.classList.add('show');

        }),
        'g__sidepane_link' : (() => {
          g__pane.classList.add('show');
        })
      }

      for (const className in actions) {
        if ((e.target.classList.value).includes(className)){
          actions[className]();
          break;
        }
      }

      if ((g__pane.classList.value).includes('fullscreen') && sideOrBottom === 'side'){
        document.body.classList.add('shift');
        document.getElementById('a__sidebar_nav').classList.add('shift');
      } else {
        var navShift = sessionStorage.getItem('navShift');
        if(navShift === "true"){
          document.getElementById('a__sidebar_nav').classList.add('shift');      
          document.body.classList.add('shift');
        } else {
          document.getElementById('a__sidebar_nav').classList.remove('shift');      
          document.body.classList.remove('shift');
        }
      } 

      if (g__sidepane) {
        g__sidepane.addEventListener('mouseenter', event => {
          g__shade.classList.remove('hide');
          g__shade.classList.add('show');
        }, false);

        g__sidepane.addEventListener('mouseleave', event => {
          g__shade.classList.add('hide');
          g__shade.classList.remove('show');

        }, false);        
      }

      if (g__bottompane) {      
        g__bottompane.addEventListener('mouseenter', event => {
          g__shade.classList.remove('hide');
          g__shade.classList.add('show');
        }, false);

        g__bottompane.addEventListener('mouseleave', event => {
          g__shade.classList.add('hide');
          g__shade.classList.remove('show');

        }, false);
      }

    };

    document.body.addEventListener('click', event => {

      let handlers = {
        'g__bottompane_link' : function(event) {paneHandler(event)}, 
        'g__sidepane_link' : function(event) {paneHandler(event)}      
      }

      for (const className in handlers) {
        if ((event.target.classList.value).includes(className)){
          handlers[className](event);
          break;
        }
      }

    }, false);

    addPanes();

};
    
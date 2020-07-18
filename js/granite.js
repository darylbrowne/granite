/* Granite.js Block Renderer */
const g__URL = (document.currentScript).src;
const g__params = new URLSearchParams(window.location.search);
const g__PATH = g__URL.substring(0, g__URL.lastIndexOf("/"));
const g__codes = {'BLOCK ALREADY EXISTS' : 1000, 'SUCCESSFUL IMPORT' : 2000, 'INVALID JSON' : 4001, 'FAILED IMPORT' : 4040};
const g__JSON = parseInt(parseInt(443, 5).toString(10));
var g__error = (strError) => `<style>.g__error {letter-spacing : .5em;font-size : 2vw;width : 100%;text-align: center;margin: auto;padding: 2em;color: black;background: repeating-linear-gradient(45deg,transparent,transparent 30px,#ccc 30px,#ccc 60px),linear-gradient(to bottom,#eee,#999);}</style><div class="g__error"><h2>INVALID GRANITE JSON</h2><h4>${strError}</h4></div>`;

window['g__notifications'] = {'errors' : [], 'warnings' : [], 'info' : []};

function g__debugger(){
    if (!g__params.get('debug')) {return;}
    console.log(Array.prototype.join.call(arguments, ('\n').repeat(5)));
}                 

function g__loadHelpers() {
    if (!document.getElementById('g__sidepane') && !document.getElementById('g__bottompane')) {
        import(`${g__PATH}/pane.js`)
        .then(x => {
            x['pane']();
            window.g__notifications.info.push(`loaded pane as a helper`)
        })
        .catch(function(e){
            window.g__notifications.errors.push(`error loading pane into helpers`);
        })
        .finally(() => {
            window.g__notifications.info.push(`loaded pane into helpers`);
        });
    }
};

function g__router() {
    window.g__notifications.info.push(`${g__codes['SUCCESSFUL IMPORT']} : initializing granite`);
    let granite_block = document.querySelectorAll('[data-granite-block]');

    for (var i = 0; i < granite_block.length; i++) {

        let thisNode = granite_block[i];
        let thisData = granite_block[i].getAttribute('data-granite-block');
        let blockJSON = (thisData.charCodeAt(0) === g__JSON) ? thisData : window.atob(thisData);
        let json = JSON.parse(blockJSON);

        granite_block[i].setAttribute('data-granite-block', window.btoa(blockJSON));

        if (json.hasOwnProperty('id') && json.hasOwnProperty('feature')) {
            let id = json['id'];
            let micro = json['feature'];
            let container = granite_block[i];
            let contents = (container.innerHTML).trim();
            let themeJSON = container.getAttribute('data-granite-theme');

            if (contents === "" && micro !== "") {
                import(`${g__PATH}/${micro}.js`)
                .then(x => x[`${micro}`](blockJSON, themeJSON))
                .catch(function(){
                    //thisNode.innerHTML = g__error('invalid feature value');                
                })
                .finally(() => {
                    window.g__notifications.info.push(`loaded ${micro} into ${id}`);
                    g__debugger(blockJSON, themeJSON);
                });
            } else {
                window.g__notifications.warnings.push(`${micro} at ${id} already exists`);
            }
        } else {
            window.g__notifications.errors.push(`${g__codes['INVALID JSON']} id and feature required`);
            thisNode.innerHTML = g__error('missing id');                
        }
    }

    g__loadHelpers();    
};

const config = { childList: true, subtree: true };
const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            g__router();
        }    
    }
};

const observer = new MutationObserver(callback);

window.document.addEventListener('readystatechange', (event) => {
  if (document.readyState !== 'loading') {
    observer.observe(document.body, config);
    window.g__notifications.info.push('MutationObserver running...');
    if (document.readyState === 'complete') {g__router();}
  }
});
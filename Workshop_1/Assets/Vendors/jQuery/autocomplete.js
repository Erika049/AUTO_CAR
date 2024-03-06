/*! autocomplete.js v0.3.0 | (c) 2013 Chris Oakman | MIT License autocompletejs.com/license */
(function(){var fa=function(q){return(q+"").replace(/[\-#$\^*()+\[\]{}|\\,.?\s]/g,"\\$&")},q=[{"char":"&",html:"&amp;",charRegex:/&/g,htmlRegex:/&amp;/g},{"char":"<",html:"&lt;",charRegex:/</g,htmlRegex:/&lt;/g},{"char":">",html:"&gt;",charRegex:/>/g,htmlRegex:/&gt;/g},{"char":'"',html:"&quot;",charRegex:/"/g,htmlRegex:/&quot;/g},{"char":"'",html:"&#x27;",charRegex:/'/g,htmlRegex:/&\#x27;/g},{"char":"/",html:"&#x2F;",charRegex:/\//g,htmlRegex:/&\#x2F;/g},{"char":"`",html:"&#x60;",charRegex:/`/g,htmlRegex:/&\#x60;/g}],
r=function(r){r+="";for(var d=0;d<q.length;d++)r=r.replace(q[d].charRegex,q[d].html);return r};window.AutoComplete=window.AutoComplete||function(G,d){var ga=200,Q=[],R=!1,m,k,p,H,v,K,ha="font-family font-feature-settings font-kerning font-language-override font-size font-size-adjust font-stretch font-style font-variant font-variant-ligatures font-weight word-spacing letter-spacing white-space word-wrap word-break text-align text-align-last text-combine-horizontal text-decoration text-decoration-color text-decoration-line text-decoration-style text-indent text-orientation text-overflow text-rendering text-shadow text-transform text-underline-position".split(" "),
E=!0,ia,L={},t=!1,x=!1,w=!1,B={},n=[],M={},l={},S=function(){return"xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx".replace(/x/g,function(a){return(16*Math.random()|0).toString(16)})},s=function(a){return JSON.parse(JSON.stringify(a))},ja=function(a){a=a.split(".");return{major:parseInt(a[0],10),minor:parseInt(a[1],10),patch:parseInt(a[2],10)}},R=function(){var a=S();try{return localStorage.setItem(a,a),localStorage.removeItem(a),!0}catch(b){return!1}}(),C=Array.isArray||function(a){return"[object Array]"===
Object.prototype.toString.call(a)},z=$.isPlainObject,ka=function(a){var b=[],c;for(c in a)!0===a.hasOwnProperty(c)&&b.push(c);return b},la=function(a,b,c){!0!==c&&(c=!1);for(var e in b)if(!0===b.hasOwnProperty(e)){var d=b[e]+"";!0===c&&(d=r(d));a=a.replace(RegExp("{"+fa(e)+"}","g"),d)}return a},T=function(){return parseInt((new Date).getTime()/1E3,10)},Ha=function(a){var b,c,e=a+" expires",d=!1;if(!0===R){try{b=localStorage.getItem(a),c=localStorage.getItem(e),d=!0}catch(f){}if(!0===d&&!1===("never"===
c?!1:parseInt(c,10)<=T())&&"string"===typeof b)return JSON.parse(b);d=!1}return!1===d&&!0===B.hasOwnProperty(e)&&(c=B[e],!0===B.hasOwnProperty(a)&&!1===("never"===c?!1:parseInt(c,10)<=T())&&"string"===typeof B[a])?JSON.parse(B[a]):!1};(function(){for(var a=0;a<q.length;a++){var b=S();Q[a]={sentinel:b,sentinelRegex:RegExp(fa(b),"g")}}})();var I=function(a){return"string"===typeof a&&""!==a},ma=function(a){if("number"!==typeof a)return!1;a=parseInt(a,10);return 0>a||a>=n.length?!1:!0},U=function(a){return"string"===
typeof a?!0:!0!==z(a)||!0!==a.hasOwnProperty("value")||!0!==a.hasOwnProperty("tokenHTML")||"string"!==typeof a.tokenHTML?!1:!0},V=function(a){if(!0!==C(a)||0===a.length)return!1;for(var b=0;b<a.length;b++)if(!0!==U(a[b]))return!1;return!0},W=function(a){if(!0===U(a)||!0===V(a))return!0;if(!0!==C(a))return!1;for(var b=0;b<a.length;b++)if(!0!==V(a[b]))return!1;return!0},X=function(a){return"string"===typeof a?!0:!0!==z(a)||!0!==a.hasOwnProperty("value")?!1:!0},na=function(a){if("string"===typeof a)return!0;
if(!0===C(a)){for(var b=0;b<a.length;b++)if(!0!==X(a[b]))return!1;return!0}return!0!==z(a)?!1:!0},g=function(a,b,c){if(!0===d.hasOwnProperty("showErrors")&&!1!==d.showErrors){var e="AutoComplete Error "+a+": "+b;"console"===d.showErrors&&"object"===typeof console&&"function"===typeof console.log?(console.log(e),2<=arguments.length&&console.log(c)):"alert"===d.showErrors?(c&&(e+="\n\n"+JSON.stringify(c)),window.alert(e)):"function"===typeof d.showErrors&&d.showErrors(a,b,c)}},oa=function(a){"string"===
typeof a&&(a={tokenHTML:r(a),value:a});return a},pa=function(a){for(var b=0;b<a.length;b++)a[b]=oa(a[b]);return a},qa=function(a){if(!0===U(a))return[[oa(a)]];if(!0===V(a))return[pa(a)];for(var b=0;b<a.length;b++)a[b]=pa(a[b]);return a},N=function(a,b){if("string"===typeof a||"number"===typeof a)return a={optionHTML:r(a),tokenHTML:r(a),value:a};a.optionHTML=ra(a,b);a.tokenHTML="string"===typeof a.tokenHTML?a.tokenHTML:"string"===typeof b.tokenHTML&&!0===z(a.value)?la(b.tokenHTML,a.value,!0):"function"===
typeof b.tokenHTML?b.tokenHTML(a):ra(a,b);return a},sa=function(a){!0===C(a)&&(a={options:a});"string"===typeof a&&(a={ajaxOpts:{url:a}});a.ajaxEnabled=!1;!0!==a.hasOwnProperty("ajaxOpts")||"function"!==typeof a.ajaxOpts&&!0!==z(a.ajaxOpts)||(a.ajaxEnabled=!0);"string"!==typeof a.ajaxErrorHTML&&"function"!==typeof a.ajaxErrorHTML&&(a.ajaxErrorHTML="AJAX Error");"string"!==typeof a.ajaxLoadingHTML&&"function"!==typeof a.ajaxLoadingHTML&&(a.ajaxLoadingHTML="Searching&hellip;");!0!==a.allowFreeform&&
(a.allowFreeform=!1);!0!==a.cacheAjax&&(a.cacheAjax=!1);!1!==a.cacheAjaxSeconds&&"number"!==typeof a.cacheAjaxSeconds&&(a.cacheAjaxSeconds=1209600);"number"===typeof a.cacheAjaxSeconds&&(a.cacheAjaxSeconds=parseInt(a.cacheAjaxSeconds,10));!1!==a.highlightMatches&&(a.highlightMatches=!0);"string"!==typeof a.noResultsHTML&&"function"!==typeof a.noResultsHTML&&(a.noResultsHTML="No results found.");!0!==C(a.options)&&(a.options=[]);for(var b=0;b<a.options.length;b++)a.options[b]=N(a.options[b],a);return a},
ra=function(a,b){if("string"===typeof a.optionHTML)return a.optionHTML;if("string"===typeof b.optionHTML&&!0===z(a.value))return la(b.optionHTML,a.value,!0);if("function"===typeof b.optionHTML){var c=b.optionHTML(a);if("string"===typeof c)return c;g(3843,"optionHTML function did not return a string.",a)}if("string"===typeof a.value||"number"===typeof a.value)return r(a.value);if(!0===z(a.value))for(var e in a.value)if(!0===a.hasOwnProperty(e)&&"string"===typeof a[e])return g(3193,'Could not find a valid value for optionHTML. Resorted to using value property "'+
e+'"',a),r(a[e]);g(5783,"Unable to create HTML string for optionHTML.",a);return"<em>unknown option</em>"},ua=function(a,b,c){!0!==c&&(M={});var e="";c=0;for(var d=a.length;c<d;c++){var f=a[c],y=b,g=S();M[g]=f;y=ta(f,y);f='<li class="list-item-d13e9 option-7b59f" data-option-id="'+r(g)+'">'+f.optionHTML;"string"===typeof y&&(f+='<span class="children-indicator-ca540">&#x25B8;</span>');f+="</li>";e+=f}return e},Y=function(a,b,c){a='<li class="list-item-d13e9 '+a+'">';var e=typeof b;"string"===e&&(a+=
b);"function"===e&&(a+=b(c,s(n)));return a+"</li>"},Z=function(){H.css("display","")},F=function(){var a=p.position(),b=parseInt(p.height(),10);k.css({top:b+a.top,left:a.left})},va=function(){aa(k.find("li.option-7b59f").filter(":first"))},D=function(){v.find("div.token-group-c7334").removeClass("selected-token-group-359b9")},wa=function(){v.find("div.token-group-c7334").removeClass("selected-token-group-359b9").filter(":last").addClass("selected-token-group-359b9")},xa=function(){var a;a=n;for(var b=
"",c=0;c<a.length;c++){for(var e=a[c],b=b+('<div class="token-group-c7334" data-token-group-index="'+c+'"><span class="remove-token-group-53474">&times;</span>'),h=0;h<e.length;h++)if(b+='<span class="token-75233">'+e[h].tokenHTML+"</span>",h!==e.length-1){b+='<span class="token-separator-359b9">';"string"===typeof d.tokenSeparatorHTML&&(b+=d.tokenSeparatorHTML);if("function"===typeof d.tokenSeparatorHTML){var f=d.tokenSeparatorHTML(e[h],e[h+1]);"string"===typeof f?b+=f:g(7998,"Your tokenSeparatorHTML function did not return a string.")}b+=
"</span>"}b+="</div>"}a=b;v.html(a);""===a&&!1===x?Z():H.css("display","none")},ya=function(){var a=k.find("li");a.removeClass("first-option-96d82 last-option-c1e64");a.filter(":first").addClass("first-option-96d82");a.filter(":last").addClass("last-option-c1e64")},Ia=function(a){K.html(r(a)+"WW");a={};for(var b=0,c=ha.length;b<c;b++){var e=ha[b];a[e]=p.css(e)}K.css(a);return parseInt(K.width(),10)},Ja=function(){var a=p.val();p.css("width",Ia(a)+"px")},aa=function(a){k.find("li.option-7b59f").removeClass("highlighted-ea4c1");
$(a).addClass("highlighted-ea4c1")},ba=function(){var a=k.find("li.highlighted-ea4c1");if(1===a.length){var b=a.position().top,c=k.scrollTop();if(!0===k.find("li.option-7b59f").filter(":first").hasClass("highlighted-ea4c1"))k.scrollTop(-1);else if(0>b)k.scrollTop(c+b);else{var a=a.height(),e=k.height();b+a>e&&k.scrollTop(c+b+a-e+6)}}},J=function(a){if(!0===d.lists[t].hasOwnProperty("onEnd")&&"function"===typeof d.lists[t].onEnd)d.lists[t].onEnd();!0!==A(a)&&(a=d.initialList);t=a;if(!0===d.lists[t].hasOwnProperty("onStart")&&
"function"===typeof d.lists[t].onStart)d.lists[t].onStart()},O=function(a){var b=s(n);"function"===typeof d.onChange&&(b=d.onChange(a,b),!0===W(b)?a=b:g(3776,"Invalid Value returned from your custom onChange function.",b));n=a;xa();F()},A=function(a){return"string"===typeof a&&!0===d.lists.hasOwnProperty(a)},za=function(a){F();k.css("display","").html(a);w=!0},u=function(){k.css("display","none").html("");0===n.length&&!1===x&&Z();w=!1},ca=function(){return 1===v.find("div.selected-token-group-359b9").length},
Aa=function(a){a=parseInt(a,10);a===n.length-1&&(J(d.initialList),E=!0);var b=s(n);b.splice(a,1);O(b);"number"===typeof d.maxTokenGroups&&n.length<d.maxTokenGroups&&p.css("display","")},da=function(){if(!0===ca()){var a=parseInt(v.find("div.selected-token-group-359b9").attr("data-token-group-index"),10);!0!==ma(a)?D():(Aa(a),!0===x&&(u(),Ba()))}},ta=function(a,b){return!1===a.children?!1:"string"===typeof a.children&&!0===A(a.children)?a.children:"string"===typeof b.children&&!0===A(b.children)?b.children:
!1},P=function(){var a=k.find("li.highlighted-ea4c1");if(1===a.length){var b=a.attr("data-option-id");if(!0!==M.hasOwnProperty(b))g(8292,'Could not find optionID "'+b+'".'),u();else{var a=d.lists[t],b=M[b],c={tokenHTML:b.tokenHTML,value:b.value},e=s(n);!0===E?e.push([c]):e[e.length-1].push(c);O(e);a=ta(b,a);"string"===typeof a?(J(a),E=!1):(J(d.initialList),E=!0);u();p.val("");"number"===typeof d.maxTokenGroups&&n.length>=d.maxTokenGroups&&!0===E?p.css("display","none"):p.focus()}}},Da=function(a,
b,c,e){if(!0===x&&!0===w){"function"===typeof e&&(a=e(a,c,s(n)));e=[];if(!0===C(a))for(var d=0;d<a.length;d++)!0===X(a[d])&&(a[d]=N(a[d],b),a[d].optionHTML=Ca(a[d].optionHTML,c),e.push(a[d]));a="";0===e.length&&!1===0<k.find("li.option-7b59f").length&&(a=Y("no-results-902b5",b.noResultsHTML,c));0<e.length&&(a=ua(e,b,!0));k.find("li.ajax-loading-72914").replaceWith(a);ya();0!==k.find("li.highlighted-ea4c1").length===!1&&va()}},Ka=function(a,b){var c={dataType:"json",preProcess:!1,type:"GET"},e={};
"function"===typeof a.ajaxOpts&&(e=a.ajaxOpts(b,s(n)));!0===z(a.ajaxOpts)&&(e=$.extend(!0,{},a.ajaxOpts));"string"===typeof e.url&&(e.url=e.url.replace(/\{input\}/g,encodeURIComponent(b)));"function"===typeof e.url&&(e.url=e.url(b,s(n)));for(var d=["async","complete","error","statusCode","success"],f=0;f<d.length;f++)!0===e.hasOwnProperty(d[f])&&g(1273,'You cannot include properties that effect control flow on ajaxOpts: "async", "complete", "error", "statusCode", "success"',d[f]),delete c[d[f]];$.extend(c,
e);if("string"!==typeof c.url)g(8721,"AJAX url must be a string. Did you forget to include one on ajaxOpts?",c.url),u();else{var y=!1;"GET"===c.type.toUpperCase()&&(y="GET "+c.url);c.error=function(c,d,e){!0===x&&!0===w&&"abort"!==d&&(c='<li class="list-item-d13e9 ajax-error-8fd89">',"string"===typeof a.ajaxErrorHTML&&(c+=a.ajaxErrorHTML),"function"===typeof a.ajaxErrorHTML&&(c+=a.ajaxErrorHTML(d,b,s(n))),c+="</li>",k.find("li.ajax-loading-72914").replaceWith(c))};c.success=function(d){if(!0===a.cacheAjax&&
!1!==y){var e=y,f,h=a.cacheAjaxSeconds;f=JSON.stringify(d);var g="never";"number"===typeof h&&(g=T()+h);h=!1;if(!0===R)try{localStorage.setItem(e,f),localStorage.setItem(e+" expires",g),h=!0}catch(k){}!1===h&&(B[e]=f,B[e+" expires"]=g)}Da(d,a,b,c.preProcess)};if(!0===a.cacheAjax&&!1!==y&&(e=Ha(y),!1!==e)){Da(e,a,b,c.preProcess);return}ia=window.setTimeout(function(){L=$.ajax(c)},ga)}},Ea=function(a){a=(a+"").split("");for(var b=[],c=!1,d=!1,h=0;h<a.length;h++)"<"===a[h]?(c=!0,b.push({"char":"<",html:!0})):
!0===c&&">"===a[h]?(c=!1,b.push({"char":">",html:!0})):"&"===a[h]?(d=!0,b.push({"char":"&",html:!0})):!0===d&&";"===a[h]?(d=!1,b.push({"char":";",html:!0})):!0===c||!0===d?b.push({"char":a[h],html:!0}):b.push({"char":a[h],html:!1});return b},Ca=function(a,b){for(var c={},d=(b+"").split(""),h=0;h<d.length;h++)c[d[h].toLowerCase()]=!0,c[d[h].toUpperCase()]=!0;for(var d=Ea(a),f="",h=0;h<d.length;h++)var g=d[h]["char"],f=!1===d[h].html&&!0===c.hasOwnProperty(g)?f+("<strong>"+g+"</strong>"):f+g;for(h=
0;h<q.length;h++)!0===c.hasOwnProperty(q[h]["char"])&&(f=f.replace(q[h].htmlRegex,"<strong>"+q[h].html+"</strong>"));return f},La=function(a,b){a+="";b+="";if(""===a||""===b)return!1;var c=a.split(""),d={},h;for(h=0;h<c.length;h++)d[c[h].toLowerCase()]=!0;c=ka(d);b=b.toLowerCase();for(h=0;h<c.length;h++)if(-1===b.indexOf(c[h]))return!1;return!0},Fa=function(){var a=k.find("li.highlighted-ea4c1");a.removeClass("highlighted-ea4c1");a=a.prevAll("li.option-7b59f").first();1===a.length?a.addClass("highlighted-ea4c1"):
k.find("li.option-7b59f").last().addClass("highlighted-ea4c1");ba()},Ga=function(){var a=k.find("li.highlighted-ea4c1");a.removeClass("highlighted-ea4c1");a=a.nextAll("li.option-7b59f").first();1===a.length?a.addClass("highlighted-ea4c1"):k.find("li.option-7b59f").first().addClass("highlighted-ea4c1");ba()},ea=function(){window.clearTimeout(ia);!0===L.hasOwnProperty("abort")&&"function"===typeof L.abort&&L.abort();window.setTimeout(F,100);window.setTimeout(F,200);window.setTimeout(F,300);var a=p.val();
""!==a&&D();var b=d.lists[t],c;c=s(b.options);if(""!==a){for(var e=0;e<c.length;e++){for(var h=c[e],f=c[e].optionHTML,f=f+"",g=0;g<q.length;g++)f=f.replace(q[g].htmlRegex,Q[g].sentinel);for(var f=Ea(f),g="",k=0;k<f.length;k++)!1===f[k].html&&(g+=f[k]["char"]);f=g;f+="";for(g=0;g<q.length;g++)f=f.replace(Q[g].sentinelRegex,q[g].html);f+="";for(g=0;g<q.length;g++)f=f.replace(q[g].htmlRegex,q[g]["char"]);h._matchValue=f}h=c.length;f=[];for(e=0;e<h;e++)a.toLowerCase()===c[e]._matchValue.toLowerCase().substring(0,
a.length)===!0&&(f.push(c[e]),c[e]=!1);!0===b.allowFreeform&&f.push(N({optionHTML:r('"'+a+'"'),tokenHTML:r(a),value:a},b));for(e=0;e<h;e++)!1!==c[e]&&-1!==c[e]._matchValue.toLowerCase().indexOf(a.toLowerCase())===!0&&(f.push(c[e]),c[e]=!1);for(e=0;e<h;e++)!1!==c[e]&&!0===La(a,c[e]._matchValue)&&f.push(c[e]);c=f}!0===b.hasOwnProperty("matchOptions")&&"function"===typeof b.matchOptions&&(c=b.matchOptions(a,c,s(b.options),s(n)));if(0===c.length&&""===a&&!1===b.ajaxEnabled)u();else if(0===c.length&&!1===
b.ajaxEnabled)za(Y("no-results-902b5",b.noResultsHTML,a));else{if(!0===b.highlightMatches)for(e=0;e<c.length;e++)c[e].optionHTML=Ca(c[e].optionHTML,a);c=ua(c,b);!0===b.ajaxEnabled&&(c+=Y("ajax-loading-72914",b.ajaxLoadingHTML,a));za(c);ya();va();!0===b.ajaxEnabled&&Ka(b,a)}},Ma=function(a){-1===$(a.target).parents().index(m)&&u()},Na=function(){!0!==x&&p.focus()},Oa=function(a){a.stopPropagation();u();D();$(this).addClass("selected-token-group-359b9")},Pa=function(a){a.stopPropagation();u();D();$(this).parents("div.token-group-c7334").addClass("selected-token-group-359b9");
da()},Qa=function(a){a.stopPropagation();aa(this);P()},Ra=function(){aa(this)},Ba=function(){"number"===typeof d.maxTokenGroups&&n.length>=d.maxTokenGroups&&!0===E||(x=!0,!0!==A(t)&&J(d.initialList),H.css("display","none"),D(),F(),ea(),ba())},Sa=function(){x=!1;0===n.length&&!1===w&&""===p.val()&&Z()},Ta=function(a){var b=a.which,c=p.val();if(9===b&&""===c)u();else if(9!==b||!1!==w)13===b||108===b?(a.preventDefault(),P()):9===b&&""!==c?(a.preventDefault(),P()):8===b&&""===c?(a.preventDefault(),a.stopPropagation(),
!0===ca()?da():wa()):37===b&&""===c?wa():38===b?(a.preventDefault(),Fa()):40===b?(a.preventDefault(),Ga()):37!==b&&39!==b&&(27===b?(u(),D()):window.setTimeout(ea,5))},Ua=function(a){if(!0!==x&&!0!==w&&!0===ca()){var b=a.which;8===b||46===b?(a.preventDefault(),da()):27===b?D():37===b?(a=v.find("div.selected-token-group-359b9"),1===a.length&&(b=a.prev("div.token-group-c7334"),a.removeClass("selected-token-group-359b9"),1===b.length?b.addClass("selected-token-group-359b9"):v.find("div.token-group-c7334").filter(":last").addClass("selected-token-group-359b9"))):
39===b&&(a=v.find("div.selected-token-group-359b9"),1===a.length&&(b=a.next("div.token-group-c7334"),a.removeClass("selected-token-group-359b9"),1===b.length?b.addClass("selected-token-group-359b9"):v.find("div.token-group-c7334").filter(":first").addClass("selected-token-group-359b9")))}};l.addOption=function(a,b){if(!0!==I(a))return g(8366,"The first argument to the addOption method must be a non-empty string."),!1;if(!0!==A(a))return g(5732,'Error in addOption method. List "'+a+'" does not exist.'),
!1;if(!0!==X(b))return g(7887,"Invalid option passed to addOption method.",b),!1;b=N(b,d.lists[a]);d.lists[a].options.push(b);return!0};l.blur=function(){p.blur();u()};l.clear=function(){O([])};l.destroy=function(){m.html("");m.unbind()};l.focus=function(a){window.setTimeout(function(){p.focus();"function"===typeof a&&a()},5)};l.getList=function(a){return!0!==I(a)?(g(2789,"The first argument to the getList method must be a non-empty string."),!1):!0!==A(a)?!1:d.lists[a]};l.getLists=function(){return d.lists};
l.getValue=function(){return s(n)};l.list=function(a,b){if(1===arguments.length)return l.getList(a);if(2===arguments.length)return l.setList(a,b);g(5938,"Wrong number of arguments passed to list method.");return!1};l.pressDown=function(){!0===w&&Ga()};l.pressEnter=function(){!0===w&&P()};l.pressUp=function(){!0===w&&Fa()};l.removeList=function(a){if(!0!==I(a))return g(2231,"The first argument to the removeList method must be a non-empty string."),!1;if(!0!==A(a))return g(1328,'Error in removeList method. List "'+
a+'" does not exist.'),!1;if(a===d.initialList)return g(1424,'Error in removeList method. You cannot remove the initialList "'+a+'"'),!1;t===a&&J(d.initialList);delete d.lists[a];return!0};l.removeTokenGroup=function(a){if(!0!==ma(a))return g(4823,'Error in removeTokenGroup method. Token group index "'+a+'" does not exist.'),!1;Aa(a);return s(n)};l.setInput=function(a){if("string"!==typeof a)return g(4922,"The first argument to the setInput method must be a string."),!1;p.focus();p.val(a);ea();return!0};
l.setList=function(a,b){if(!0!==I(a))return g(7283,"The first argument to the setList method must be a non-empty string."),!1;if(!0!==na(b))return g(2732,"The list object passed to the setList method is not valid.",b),!1;d.lists[a]=sa(b);return!0};l.setValue=function(a){if(!0!==W(a))return g(6823,"Invalid value passed to the setValue method.",a),!1;O(qa(a));return!0};l.val=function(a){if(0===arguments.length)return l.getValue();if(1===arguments.length)return l.setValue(a);g(9992,"Wrong number of arguments passed to val method.");
return!1};!0===function(){if("string"===typeof G){if(""===G)return window.alert("AutoComplete Error 1037: The first argument to AutoComplete() cannot be an empty string.\n\nExiting..."),!1;var a=document.getElementById(G);if(!a)return window.alert('AutoComplete Error 1002: Element with id "'+G+'" does not exist in the DOM.\n\nExiting...'),!1;m=$(a)}else if(m=$(G),1!==m.length)return window.alert("AutoComplete Error 1044: The first argument to AutoComplete() must be an ID or a single DOM node.\n\nExiting..."),
!1;if(!window.JSON||"function"!==typeof JSON.stringify||"function"!==typeof JSON.parse)return window.alert("AutoComplete Error 1003: JSON does not exist. Please include a JSON polyfill.\n\nExiting..."),!1;if(a=typeof window.$)if(a=$.fn)if(a=$.fn.jquery)var a=$.fn.jquery,b="1.4.2",a=ja(a),b=ja(b),a=!0===1E8*a.major+1E4*a.minor+a.patch>=1E8*b.major+1E4*b.minor+b.patch;if(!a)return window.alert("AutoComplete Error 1004: Unable to find a valid version of jQuery. Please include jQuery 1.4.2 or higher on the page.\n\nExiting..."),
!1;var c;if(!0===C(d)||"string"===typeof d)d={lists:{"default":d}};"number"===typeof d.ajaxBuffer&&0<d.ajaxBuffer&&(ga=d.ajaxBuffer);if("number"!==typeof d.maxTokenGroups||0>d.maxTokenGroups)d.maxTokenGroups=!1;"number"===typeof d.maxTokenGroups&&(d.maxTokenGroups=parseInt(d.maxTokenGroups,10));"function"!==typeof d.onChange&&(d.onChange=!1);!0===d.hasOwnProperty("initialValue")&&(!0===W(d.initialValue)?n=s(qa(d.initialValue)):g(6447,"Invalid value passed to initialValue.",d.initialValue));"string"!==
typeof d.placeholderHTML&&(d.placeholderHTML="");"string"!==typeof d.tokenSeparatorHTML&&"function"!==typeof d.tokenSeparatorHTML&&(d.tokenSeparatorHTML=":");"console"!==d.showErrors&&"alert"!==d.showErrors&&"function"!==typeof d.showErrors&&(d.showErrors=!1);for(c in d.lists)!0===d.lists.hasOwnProperty(c)&&(!0!==I(c)?(g(2642,"You cannot use an empty string for a list name."),delete d.lists[c]):!0===na(d.lists[c])?d.lists[c]=sa(d.lists[c]):(g(2535,'The list object for list "'+c+'" is invalid.',d.lists[c]),
delete d.lists[c]));c=ka(d.lists);0===c.length?(window.alert("AutoComplete Error 1005: You must include at least one List Object on lists.\n\nExiting..."),c=!1):(1===c.length&&(d.initialList=c[0]),!0!==A(d.initialList)&&(g(2728,'initialList "'+d.initialList+'" does not exist on the lists object.'),d.initialList=c[0]),t=d.initialList,c=!0);return c}()&&(m.html('<div class="autocomplete-container-7a26d"><div class="placeholder-d722a"></div><div class="tokens-6a7a0"></div><input type="text" class="input-8f2fe" /><div class="clear-53545"></div><ul class="dropdown-a3d44" style="display:none"></ul></div><span class="input-width-proxy-1c13e" style="position:absolute; top:-9999px;"></span>'),
p=m.find("input.input-8f2fe"),k=m.find("ul.dropdown-a3d44"),H=m.find("div.placeholder-d722a"),v=m.find("div.tokens-6a7a0"),K=m.find("span.input-width-proxy-1c13e"),H.html(d.placeholderHTML),m.bind("click",Na),m.delegate("input.input-8f2fe","keydown",Ta),m.delegate("input.input-8f2fe","change keyup",Ja),m.delegate("input.input-8f2fe","focus",Ba),m.delegate("input.input-8f2fe","blur",Sa),m.delegate("li.option-7b59f","click",Qa),m.delegate("li.option-7b59f","mouseover",Ra),m.delegate("div.token-group-c7334",
"click",Oa),m.delegate("span.remove-token-group-53474","click",Pa),$("html").bind("click touchstart",Ma),$(window).bind("keydown",Ua),xa());return l};window.AutoComplete.htmlEncode=r})();
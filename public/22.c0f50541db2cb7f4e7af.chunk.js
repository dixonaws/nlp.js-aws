webpackJsonp([22],{"./app/components/ActionButton/index.js":function(e,t,n){"use strict";function o(e){return l("div",{style:e.customStyle,className:"btn-action"},void 0,l("a",{className:"btn-floating btn-large",onClick:e.onClick},void 0,i.a.createElement(a.d,e.label)))}var r=n("./node_modules/react/react.js"),i=n.n(r),a=n("./node_modules/react-intl/lib/index.es.js"),l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),s=0;s<a;s++)c[s]=arguments[s+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}();t.a=o},"./app/components/Content/index.js":function(e,t,n){"use strict";function o(e){return a("section",{className:"content-area"},void 0,a("div",{className:"container"},void 0,i.a.Children.toArray(e.children)))}var r=n("./node_modules/react/react.js"),i=n.n(r),a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),s=0;s<a;s++)c[s]=arguments[s+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}();t.a=o},"./app/components/ContentHeader/index.js":function(e,t,n){"use strict";function o(e){return c(l.a,{},void 0,c("header",{style:e.headerStyle,className:"main-title"},void 0,c("h1",{},void 0,i.a.createElement(a.d,e.title)),c("p",{},void 0,i.a.createElement(a.d,e.subTitle)),e.children))}var r=n("./node_modules/react/react.js"),i=n.n(r),a=n("./node_modules/react-intl/lib/index.es.js"),l=n("./app/components/Row/index.js"),c=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),s=0;s<a;s++)c[s]=arguments[s+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}();o.defaultProps={headerStyle:{}},t.a=o},"./app/components/Header/index.js":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n("./node_modules/react/react.js"),l=n.n(a),c=n("./node_modules/react-router/es/index.js"),s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),s=0;s<a;s++)c[s]=arguments[s+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),p=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.breadcrumbs,n=e.actionButtons;return s("header",{style:{position:"fixed",width:"calc(100% - 500px)"},className:"valign-wrapper"},void 0,s("div",{className:"nav-wrapper"},void 0,s("div",{className:"col s12 "},void 0,t.map(function(e,t){return e.link?s(c.d,{to:e.link,className:"breadcrumb"},"breadcrumb-"+t,s("span",{},void 0,e.label)):s("span",{className:"breadcrumb"},"breadcrumb-"+t,e.label)})),n))}}]),t}(l.a.Component);p.defaultProps={actionButtons:[]},t.a=p},"./app/components/Row/index.js":function(e,t,n){"use strict";function o(e){return a("div",{className:"row"},void 0,i.a.Children.toArray(e.children))}var r=n("./node_modules/react/react.js"),i=n.n(r),a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),s=0;s<a;s++)c[s]=arguments[s+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}();t.a=o},"./app/containers/WizardEntityIntentPage/index.js":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return{onCreateEntity:function(t){void 0!==t&&t.preventDefault&&t.preventDefault(),e(n.i(v.push)("/entities/create"))},onCreateIntent:function(t){void 0!==t&&t.preventDefault&&t.preventDefault(),e(n.i(b._25)(!1)),e(n.i(v.push)("/intents/create"))},onComponentMounted:function(){e(n.i(b._26)()),e(n.i(b.a)())}}}Object.defineProperty(t,"__esModule",{value:!0});var l=n("./node_modules/react-redux/lib/index.js"),c=(n.n(l),n("./node_modules/reselect/es/index.js")),s=n("./app/components/Header/index.js"),u=n("./app/components/Content/index.js"),p=n("./app/components/ContentHeader/index.js"),f=n("./app/components/ActionButton/index.js"),d=n("./node_modules/react/react.js"),y=n.n(d),m=n("./app/containers/WizardEntityIntentPage/messages.js"),v=n("./node_modules/react-router-redux/lib/index.js"),b=(n.n(v),n("./app/containers/App/actions.js"));n.d(t,"WizardEntityIntentPage",function(){return j}),t.mapDispatchToProps=a;var h=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),s=0;s<a;s++)c[s]=arguments[s+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),_=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),j=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),_(t,[{key:"componentWillMount",value:function(){this.props.onComponentMounted()}},{key:"render",value:function(){return h("div",{},void 0,h(s.a,{breadcrumbs:[{label:"Welcome: Getting Started"}],actionButtons:[h(f.a,{customStyle:{right:"500px"},label:m.a.actionButtonEntity,onClick:this.props.onCreateEntity},"btn_Entity"),h(f.a,{label:m.a.actionButtonIntent,onClick:this.props.onCreateIntent},"btn_Intent")]}),h(u.a,{},void 0,h(p.a,{title:m.a.welcomeTitle,subTitle:m.a.welcomeDescription})))}}]),t}(y.a.PureComponent),w=n.i(c.b)({});t.default=n.i(l.connect)(w,a)(j)},"./app/containers/WizardEntityIntentPage/messages.js":function(e,t,n){"use strict";var o=n("./node_modules/react-intl/lib/index.es.js");t.a=n.i(o.c)({welcomeTitle:{id:"app.components.WizardEntityIntentPage.welcomeTitle",defaultMessage:"Next Step: Create an Entity or Intent"},welcomeDescription:{id:"app.components.WizardEntityIntentPage.welcomeDescription",defaultMessage:"Nicelly done. We propose you to create either an intent to let your agent understand what are you trying to say, or maybe, you would like to create an entity to let your agent parse user text to identify known elements."},actionButtonEntity:{id:"app.components.WizardEntityIntentPage.actionButton",defaultMessage:"+ Create Entity"},actionButtonIntent:{id:"app.components.WizardEntityIntentPage.actionButton",defaultMessage:"+ Create Intent"}})}});
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fc9d64a"],{"2f72":function(t,e,s){"use strict";s("80f2")},"80f2":function(t,e,s){},a54c:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.dishes?s("div",{staticClass:"dishes"},[s("div",{staticClass:"dishes-title d-flex mb-2"},[s("h4",[t._v(t._s(t.dishes.title))]),s("button",{staticClass:"btn btn-outline-success ml-auto",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.$router.push({name:"DishesList"})}}},[t._v("Назад")])]),s("div",{staticClass:"dishes-container d-flex mb-4"},[s("div",{staticClass:"dishes-container__avatar mr-2"},[t.dishes.image?s("img",{staticClass:"mx-auto",attrs:{src:t.dishes.image}}):t._e()]),s("div",{staticClass:"dishes-container__information text-center w-100 mt-auto"},[s("p",{staticClass:"d-flex align-items-center justify-content-end mb-2"},[s("span",{staticClass:"mr-1"},[t._v("на")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.dishes.dishes_portion,expression:"dishes.dishes_portion"}],staticClass:"form-control gram",attrs:{type:"number"},domProps:{value:t.dishes.dishes_portion},on:{change:t.onChangeCalculate,input:function(e){e.target.composing||t.$set(t.dishes,"dishes_portion",e.target.value)}}}),s("span",{staticClass:"ml-1"},[t._v("г.")])]),s("div",{staticClass:"information-items d-flex"},[s("div",{staticClass:"information flex-fill d-flex flex-column"},[s("span",{staticClass:"information__header"},[t._v("БЖ")]),s("span",{staticClass:"information__footer"},[t._v(t._s(t.calcFixed(t.calculatePortion(t.bx_var,t.dishes.dishes_portion))))])]),s("div",{staticClass:"information flex-fill d-flex flex-column"},[s("span",{staticClass:"information__header"},[t._v("У")]),s("span",{staticClass:"information__footer"},[t._v(t._s(t.calcFixed(t.calculatePortion(t.y_var,t.dishes.dishes_portion))))])]),s("div",{staticClass:"information flex-fill d-flex flex-column"},[s("span",{staticClass:"information__header"},[t._v("ХЕ")]),s("span",{staticClass:"information__footer"},[t._v(t._s(t.calcFixed(t.calculatePortion(t.xe_var,t.dishes.dishes_portion))))])])])])]),s("div",{staticClass:"d-flex"},[s("b-button",{ref:"button",staticClass:"ml-auto",attrs:{variant:"danger",id:"popover-remove"}},[s("b-icon",{attrs:{icon:"x-circle","aria-hidden":"true"}})],1),s("b-popover",{ref:"popover",attrs:{target:"popover-remove",triggers:"click",show:t.popoverShow,placement:"auto",container:"my-container"},on:{"update:show":function(e){t.popoverShow=e}},scopedSlots:t._u([{key:"title",fn:function(){return[s("b-button",{staticClass:"close",attrs:{"aria-label":"Close"},on:{click:t.onClose}},[s("span",{staticClass:"d-inline-block",attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" Вы уверены что хотите удалить блюдо ")]},proxy:!0}],null,!1,68580160)},[s("div",{staticClass:"d-flex"},[s("b-button",{staticClass:"mr-2 w-100",attrs:{size:"sm",variant:"danger"},on:{click:t.onClose}},[t._v("Нет")]),s("b-button",{staticClass:"w-100",attrs:{size:"sm",variant:"primary"},on:{click:t.onOk}},[t._v("Да")])],1)])],1),s("div",{staticClass:"dishes-product"},[s("h3",[t._v("Продукты")]),t.productList?s("div",{staticClass:"dishes-items"},t._l(t.productList,(function(e,a){return s("div",{key:a,staticClass:"d-block card dishes-item text-decoration-none mb-2"},[s("div",{staticClass:"card-body d-flex"},[s("div",{staticClass:"dishes-item__avatar mr-2"},[e.doc.image?s("img",{staticClass:"mx-auto",attrs:{src:e.doc.image}}):t._e()]),s("div",{staticClass:"dishes-item__content w-100 d-flex flex-column"},[s("h6",[t._v(t._s(e.doc.title))]),s("div",{staticClass:"mt-auto"},[s("p",{staticClass:"text-center text-primary m-0"},[t._v("На "),s("strong",[t._v(t._s(e.doc.dishes_gram))]),t._v(" гр. продукту")]),s("div",{staticClass:"item-information d-flex text-center"},[s("div",{staticClass:"item-information__item flex-fill d-flex flex-column"},[s("span",{staticClass:"item-information__header"},[t._v("БЖ")]),s("span",{staticClass:"item-information__footer"},[t._v(t._s(t.bxbjCalc(t.bxCalc(e.doc.product_b,e.doc.dishes_gram),t.bjCalc(e.doc.product_j,e.doc.dishes_gram))))])]),s("div",{staticClass:"item-information__item flex-fill d-flex flex-column"},[s("span",{staticClass:"item-information__header"},[t._v("У")]),s("span",{staticClass:"item-information__footer"},[t._v(t._s(t.byCalc(e.doc.product_y,e.doc.dishes_gram)))])]),s("div",{staticClass:"item-information__item flex-fill d-flex flex-column"},[s("span",{staticClass:"item-information__header"},[t._v("ХЕ")]),s("span",{staticClass:"item-information__footer"},[t._v(t._s(t.allCalc(t.bxCalc(e.doc.product_b,e.doc.dishes_gram),t.bjCalc(e.doc.product_j,e.doc.dishes_gram),t.byCalc(e.doc.product_y,e.doc.dishes_gram))))])])])])])])])})),0):t._e()])]):t._e()},i=[],r=(s("b680"),s("159b"),s("96cf"),s("1da1")),n={name:"Dishes",data:function(){return{productIds:[],productList:[],percent:0,dishes:null,popoverShow:!1,bx_var:0,y_var:0,xe_var:0}},computed:{url:function(){return this.$route.params.id},isOnline:function(){return window.navigator.onLine},bx_param:{get:function(){return this.$store.state.option.bx_param}},bj_param:{get:function(){return this.$store.state.option.bj_param}}},methods:{prev:function(){this.$router.back()},calculate:function(t,e){return parseFloat(t)*e/100},calculatePortion:function(t,e){return parseFloat(t)*e/this.percent},bxCalc:function(t,e){return(this.calculate(t,e)*parseFloat(this.bx_param)/12).toFixed(1)},bjCalc:function(t,e){return(this.calculate(t,e)*parseFloat(this.bj_param)/12).toFixed(1)},byCalc:function(t,e){return(this.calculate(t,e)/12).toFixed(1)},bxbjCalc:function(t,e){return(parseFloat(t)+parseFloat(e)).toFixed(1)},allCalc:function(t,e,s){return(parseFloat(t)+parseFloat(e)+parseFloat(s)).toFixed(1)},calcFixed:function(t){return t.toFixed(1)},plusAllCalculate:function(t){var e=this;t.forEach((function(t){e.bx_var+=parseFloat(e.bxCalc(t.doc.product_b,t.doc.dishes_gram))+parseFloat(e.bjCalc(t.doc.product_j,t.doc.dishes_gram)),e.y_var+=parseFloat(e.byCalc(t.doc.product_y,t.doc.dishes_gram)),e.xe_var+=parseFloat(e.bxCalc(t.doc.product_b,t.doc.dishes_gram))+parseFloat(e.bjCalc(t.doc.product_j,t.doc.dishes_gram))+parseFloat(e.byCalc(t.doc.product_y,t.doc.dishes_gram))}))},setDishes:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$pouch.put(t.dishes,{},"dishes").then((function(e){t.dishes._rev=e.rev}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},getDishes:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$pouch.get(t.url,{},"dishes").then((function(e){t.dishes=e}));case 3:return t.dishes.itemIds.length&&t.dishes.itemIds.forEach((function(e){t.productIds.push(e.id)})),e.next=6,t.$pouch.allDocs({keys:t.productIds}).then((function(e){t.productList=e.rows,t.length=t.productList.length,t.productList.length&&(t.productList.forEach((function(e,s){e.doc.dishes_gram=t.dishes.itemIds[s].dishes_gram,t.percent+=parseInt(e.doc.dishes_gram)})),t.plusAllCalculate(t.productList))}));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},onChangeCalculate:function(){this.setDishes()},removeProductFB:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$firebase.database().ref().child("dishes/".concat(t.dishes._id)).remove();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},onOk:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$pouch.remove({_id:t.dishes._id,_rev:t.dishes._rev},{},"dishes").then((function(){t.isOnline?t.removeProductFB().then((function(){t.$router.push({name:"DishesList"})})):t.$router.push({name:"DishesList"})}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},onClose:function(){this.popoverShow=!1}},mounted:function(){this.getDishes()}},o=n,c=(s("2f72"),s("2877")),l=Object(c["a"])(o,a,i,!1,null,"64de229c",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-5fc9d64a.3bd44be1.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-470f9eae"],{"137c":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("a",{staticClass:"link--mallki",class:t.className,attrs:{href:"#"}},[t._v("\n  "+t._s(t.text)+"\n  "),e("span",{attrs:{"data-letters":t.text}}),t._v(" "),e("span",{attrs:{"data-letters":t.text}})])},s=[],n={props:{className:{type:String,default:""},text:{type:String,default:"vue-element-admin"}}},l=n,r=(e("8c05"),e("2877")),c=Object(r["a"])(l,a,s,!1,null,null,null);i["a"]=c.exports},3820:function(t,i,e){},"3cbc":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"pan-item",style:{zIndex:t.zIndex,height:t.height,width:t.width}},[e("div",{staticClass:"pan-info"},[e("div",{staticClass:"pan-info-roles-container"},[t._t("default")],2)]),t._v(" "),e("div",{staticClass:"pan-thumb",style:{backgroundImage:"url("+t.image+")"}})])},s=[],n=(e("c5f6"),{name:"PanThumb",props:{image:{type:String,required:!0},zIndex:{type:Number,default:1},width:{type:String,default:"150px"},height:{type:String,default:"150px"}}}),l=n,r=(e("f7e0"),e("2877")),c=Object(r["a"])(l,a,s,!1,null,"54d5a180",null);i["a"]=c.exports},"7abe":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("el-carousel",{attrs:{trigger:"click",height:"500px"},on:{change:t.loadAnimate}},t._l(t.sliderList,(function(i,a){return e("el-carousel-item",{key:a},[e("figure",[e("img",{attrs:{src:"/static/img/slider/"+i.img,width:"100%"}}),t._v(" "),e("figcaption",[e("h1",{class:{bounceInDown:t.slider_index==a}},[t._v(t._s(i.title))]),e("br"),t._v(" "),e("p",{class:{fadeInUp:t.slider_index==a}},[t._v(t._s(i.abstract))]),e("br"),t._v(" "),e("router-link",{attrs:{to:i.link}},[e("el-button",{staticClass:"slider-button",class:{fadeInUp:t.slider_index==a},attrs:{round:""}},[t._v("了解详情 >>")])],1)],1)])])})),1),t._v(" "),e("ul",{staticClass:"home-kind"},t._l(t.kind,(function(i,a){return e("li",{key:a},[e("h3",[t._v(t._s(i.title)),e("div")]),t._v(" "),e("p",[t._v(t._s(i.info))])])})),0),t._v(" "),e("div",{staticStyle:{padding:"20px"}},[t._m(0),t._v(" "),e("div",{staticStyle:{padding:"3% 2%"}},[e("el-row",{staticClass:"panel-group",staticStyle:{"padding-top":"30px","margin-top":"30px"},attrs:{gutter:20}},t._l(t.cards,(function(i,a){return e("el-col",{key:a,staticStyle:{"padding-top":"10px","padding-left":"5px","padding-right":"5px"},attrs:{span:6}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[e("mallki",{attrs:{"class-name":"mallki-text",text:i.title}})],1),t._v(" "),e("div",{staticClass:"component-item",staticStyle:{padding:"0px"}},[e("div",{staticClass:"card-panel",staticStyle:{"vertical-align":"middle"}},[e("div",{staticClass:"card-panel-icon-wrapper",staticStyle:{width:"20%"}},[e("pan-thumb",{attrs:{width:"70px",height:"70px",image:i.img}},[t._v("\n                    "+t._s(i.className)+"\n                  ")])],1),t._v(" "),e("div",{staticClass:"card-panel-description",staticStyle:{width:"65%"}},[e("div",{staticClass:"card-panel-text t-elli"},[e("span",{staticStyle:{color:"#ff8724"}},[t._v("描述:")]),t._v(t._s(i.abstract)+"\n                  ")])])])]),t._v(" "),e("div",[e("div",{staticClass:"bottom clearfix"},[e("router-link",{staticClass:"pan-btn duck-yellow-btn",staticStyle:{float:"right",margin:"5px",padding:"4px 8px","border-radius":"4px"},attrs:{to:i.link}},[t._v("\n                  更多>>\n                ")])],1)])])],1)})),1)],1)])],1)},s=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"home-service",staticStyle:{"text-align":"center",padding:"20px margin-top:3%"}},[e("h1",{staticStyle:{position:"relative"}},[t._v("丰富的车辆养护服务，最优的解决方案")])])}],n=e("3cbc"),l=e("137c"),r={name:"Home",components:{PanThumb:n["a"],Mallki:l["a"]},data:function(){return{slider_index:0,cards:[{title:"车漆镀膜/镀晶",className:"NLP",abstract:"无机质镀膜，膜层不分裂，不脱落， 具有很强的耐磨性，能长期持久的提供 对车漆的保护,让车漆不氧化",img:"/static/image/luanma.png",link:"/GTextDetectRouter/intro"},{title:"洗车/内饰清洁养护",className:"NLP",abstract:"内饰清洁采用专业、不伤原材质的清洁办法，通过专业的海绵，在不伤害原材质的情况下，达到干净、保养的作用。",img:"/static/image/bert.png",link:""},{title:"车辆维修",className:"NLP",abstract:"提供两个单词、短语或者短句的相似度",img:"/static/image/word2vec.png",link:""},{title:"VIP会员服务",className:"NLP",abstract:"爱车日常养护，成为靓车会的会员，不但享受细致的爱车服务，更重要得到的是靓车会对爱车的靓丽保证！",img:"/static/image/hdd.png",link:"/shortPornDetectRouter/intro"}],sliderList:[{title:"汽车深度清洗清洁",abstract:"低、中、高档轿车，跑车深度清洁",img:"xc.png",link:"/GTextDetectRouter/intro"},{title:"汽车美容保养",abstract:"机油更换、镀晶美容",img:"s2.png",link:"/getBlankRate/intro"},{title:"汽车维修",abstract:"原厂配件，价格公道，童叟无欺",img:"s3.png",link:"/vrAutoGui/intro"}],kind:[{title:"车辆外部升级",info:"车漆、镀膜、镀晶，美容洗车"},{title:"内饰清洁与养护",info:"内饰清洗焕然一些，内饰保养"},{title:"车辆检修",info:"维修、换件"}],services:[{title:"政府机构",info:"“纵向到企业、横向跨行业、覆盖全工业”，实现供给侧与需求侧双向互动。"},{title:"服务机构",info:"提供平台、智能终端、能效产品与新技术，实现“能源互联网+售电+能源服务”的综合能源服务。"},{title:"能源用户",info:"提供能源管理系统装备、技术、人才的整体服务解决方案，降低生产成本，提高竞争力。"}]}},created:function(){this.$emit("headFix",["fixed",!1])},methods:{loadAnimate:function(t){this.slider_index=t}}},c=r,d=(e("9203"),e("2877")),o=Object(d["a"])(c,a,s,!1,null,"6c533cb9",null);i["default"]=o.exports},"8c05":function(t,i,e){"use strict";var a=e("b948"),s=e.n(a);s.a},9203:function(t,i,e){"use strict";var a=e("c206"),s=e.n(a);s.a},b948:function(t,i,e){},c206:function(t,i,e){},f7e0:function(t,i,e){"use strict";var a=e("3820"),s=e.n(a);s.a}}]);
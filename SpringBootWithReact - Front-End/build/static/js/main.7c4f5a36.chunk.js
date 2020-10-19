(this["webpackJsonpspring-boot-react"]=this["webpackJsonpspring-boot-react"]||[]).push([[0],{43:function(e,t,a){e.exports=a(73)},48:function(e,t,a){},49:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},50:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(39),c=a.n(s),l=(a(48),a(8)),i=a(9),o=a(14),u=a(13),m=(a(49),a(50),a(10)),d=a(17),p=a.n(d),h="".concat("http://localhost:8080","/instructors/").concat("Remiel"),b=new(function(){function e(){Object(l.a)(this,e)}return Object(i.a)(e,[{key:"retrieveAllCourses",value:function(e){return p.a.get("".concat(h,"/courses"))}},{key:"deleteCourse",value:function(e,t){return p.a.delete("".concat(h,"/courses/").concat(t))}},{key:"retrieveCourse",value:function(e,t){return p.a.get("".concat(h,"/courses/").concat(t))}},{key:"updatedCourse",value:function(e,t,a){return p.a.put("".concat(h,"/courses/").concat(t),a)}},{key:"createCourse",value:function(e,t){return p.a.post("".concat(h,"/courses/"),t)}}]),e}()),f=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={courses:[],message:null},n.refreshCourses=n.refreshCourses.bind(Object(m.a)(n)),n.deleteCourseClicked=n.deleteCourseClicked.bind(Object(m.a)(n)),n.updateCourseClicked=n.updateCourseClicked.bind(Object(m.a)(n)),n.addCourseClicked=n.addCourseClicked.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.refreshCourses()}},{key:"refreshCourses",value:function(){var e=this;b.retrieveAllCourses("Remiel").then((function(t){e.setState({courses:t.data})}))}},{key:"deleteCourseClicked",value:function(e){var t=this;b.deleteCourse("Remiel",e).then((function(a){t.setState({message:"Delete of course ".concat(e," successful")}),t.refreshCourses()}))}},{key:"updateCourseClicked",value:function(e){console.log("update "+e),this.props.history.push("https://priceless-panini-9a249c.netlify.app//courses/".concat(e))}},{key:"addCourseClicked",value:function(){this.props.history.push("https://priceless-panini-9a249c.netlify.app//courses/-1")}},{key:"render",value:function(){var e=this,t=this.state.courses.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.id),r.a.createElement("td",null,t.description),r.a.createElement("td",null,t.username),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-warning",onClick:function(){return e.updateCourseClicked(t.id)}},"Update")),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.deleteCourseClicked(t.id)}},"Delete")))}));return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"All Courses"),this.state.message&&r.a.createElement("div",{class:"alert alert-success"},this.state.message),r.a.createElement("div",{className:"container"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null," Id"),r.a.createElement("th",null," Description"),r.a.createElement("th",null," Username "),r.a.createElement("th",null," Update "),r.a.createElement("th",null," Delete "))),r.a.createElement("tbody",null,t)),r.a.createElement("div",{className:"row"},r.a.createElement("button",{className:"btn btn-primary",onClick:this.addCourseClicked},"Add"))))}}]),a}(r.a.Component),v=a(42),E=a(2),C=a(15),y=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={id:n.props.match.params.id,username:"",description:""},n.onSubmit=n.onSubmit.bind(Object(m.a)(n)),n.validate=n.validate.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;-1!==this.state.id&&b.retrieveCourse("lA",this.state.id).then((function(t){return e.setState({username:t.data.username,description:t.data.description})}))}},{key:"onSubmit",value:function(e){var t=this,a={id:this.state.id,username:e.username,description:e.description,targetDate:e.targetDate};-1===this.state.id?b.createCourse(this.state.username,a).then((function(){return t.props.history.push("/courses")})):b.updatedCourse(this.state.username,this.state.id,a).then((function(){return t.props.history.push("/courses")}))}},{key:"validate",value:function(e){var t={};return e.description?e.description.length<5&&(t.description="Enter at least 5 Characters in Description"):t.description="Enter a Description",t}},{key:"render",value:function(){var e=this.state.id,t=this.state.description,a=this.state.username;return r.a.createElement("div",null,r.a.createElement("h3",null,"Course"),r.a.createElement("div",{className:"container"},r.a.createElement(C.d,{enableReinitialize:!0,initialValues:{id:e,description:t,username:a},onSubmit:this.onSubmit,validateOnBlur:!1,validateOnChange:!1,validate:this.validate},(function(e){return r.a.createElement(C.c,null,r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Id"),r.a.createElement(C.b,{className:"form-control",type:"text",name:"id",disabled:!0})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Description"),r.a.createElement(C.b,{className:"form-control",type:"text",name:"description"}),r.a.createElement(C.a,{name:"description",component:"div",className:"alert alert-warning"})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Username"),r.a.createElement(C.b,{className:"form-control",type:"text",name:"username"}),r.a.createElement(C.a,{name:"username",component:"div",className:"alert alert-warning"})),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Save"))}))))}}]),a}(r.a.Component),k=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Instructor Application"),r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"https://priceless-panini-9a249c.netlify.app",exact:!0,component:f}),r.a.createElement(E.a,{path:"https://priceless-panini-9a249c.netlify.app/courses",exact:!0,component:f}),r.a.createElement(E.a,{path:"https://priceless-panini-9a249c.netlify.app/courses/:id",component:y}))))}}]),a}(r.a.Component),O=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(k,null))}}]),a}(r.a.Component),g=document.getElementById("root");c.a.render(r.a.createElement(O,null),g)}},[[43,1,2]]]);
//# sourceMappingURL=main.7c4f5a36.chunk.js.map
import{u as f}from"./useApp.8bd6dbd4.js";import{_ as m}from"./index.2a9a64ca.js";const p=Vue.defineComponent({props:{config:{type:Object,default:()=>({})},model:{type:Object,default:()=>({})},vars:{type:Object,default:()=>({})}},setup(e){var s;f(e);const i=(s=Vue.getCurrentInstance())==null?void 0:s.proxy,t=Vue.inject("hoc");return{displayText:Vue.computed(()=>{var u,l;let c=((u=e.config)==null?void 0:u.text)||"";const{vars:o}=e;if((t==null?void 0:t.disabled)&&((l=e.config)==null?void 0:l.disabledText)&&(c=e.config.disabledText),typeof c=="function")return c.bind(i)(i,{model:e.model});if(Object.prototype.toString.call(o)==="[object Object]"){let a=c;return Object.entries(o).forEach(([r,d])=>{a=a.replace(new RegExp(`{{${r}}}`,"g"),d)}),a}return c||""})}},render(){var i,t,n,s;const e=(i=this.config)!=null&&i.multiple?"magic-ui-text":"magic-ui-text magic-ui-text--single-line";return typeof((t=this.$slots)==null?void 0:t.default)=="function"?Vue.h("div",{class:e},[((s=(n=this.$slots)==null?void 0:n.default)==null?void 0:s.call(n))||""]):Vue.h("div",{class:e,...this.displayText?{innerHTML:this.displayText}:{}})}}),b=m(p,[["__file","/parisma/github/tmagic-editor/packages/ui/src/text/src/index.vue"]]);export{b as default};
//# sourceMappingURL=index.55a4739f.js.map

import{_ as g,o as s,a as i,b as e,F as r,f as u,n as v,t as h,g as q,v as f,d,c as _}from"./index-B8f8afAW.js";import{a as T}from"./ComponentList-JKI6FIIF.js";const x={name:"Tabs",props:{tabs:{type:Array,required:!0,default:()=>[]}},data(){return{activeTab:0}},methods:{changeTab(a,o){o.preventDefault(),this.activeTab=a}}},y={class:"tabs-box"},L={class:"tabs"},w=["onClick"],k={href:"#",class:"tab-button"},C=["innerHTML"];function j(a,o,t,B,c,m){return s(),i("div",y,[e("ul",L,[(s(!0),i(r,null,u(t.tabs,(l,n)=>(s(),i("li",{key:n,class:v({current:c.activeTab===n}),onClick:b=>m.changeTab(n,b)},[e("a",k,h(l.label),1)],10,w))),128))]),(s(!0),i(r,null,u(t.tabs,(l,n)=>q((s(),i("div",{key:n,class:"content",innerHTML:l.content},null,8,C)),[[f,c.activeTab===n]])),128))])}const p=g(x,[["render",j]]),D={class:"rows"},R={class:"row"},V={open:""},$={class:"details-content"},A={components:{Tabs:p},data(){return{tabData:[{label:"Lorem, ipsum dolor.",content:`
            <h1>This is first box</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aspernatur eligendi similique nemo ipsam recusandae esse accusamus ipsa, distinctio tenetur.</p>
          `},{label:"Lorem, ipsum dolor sit.",content:`
            <h1>This is second box</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aspernatur eligendi similique nemo ipsam recusandae esse accusamus ipsa, distinctio tenetur.</p>
          `},{label:"Lorem, ipsum dolor sit amet.",content:`
            <h1>This is third box</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aspernatur eligendi similique nemo ipsam recusandae esse accusamus ipsa, distinctio tenetur.</p>
          `}]}}},F=Object.assign(A,{__name:"Tabs",setup(a){return(o,t)=>(s(),i(r,null,[e("div",D,[e("div",R,[t[1]||(t[1]=e("h1",{id:"description"},"Tabs",-1)),t[2]||(t[2]=e("p",null,"A tabs component allows to put multiple content into one row without need of creating multiple rows.",-1)),e("details",V,[t[0]||(t[0]=e("summary",null,"Component preview",-1)),e("div",$,[d(p,{tabs:o.tabData},null,8,["tabs"])])])]),t[3]||(t[3]=_(`<div class="row"><div class="alert slim error"><div class="icon"><i class="bi bi-info-circle-fill"></i></div><div class="data"><p>This component is available only for projects created with <a href="//vuejs.org">Vue.js</a></p></div></div><h3>Code for component</h3><small>Only for projects using <a href="//vuejs.org">Vue.js</a></small><ol><li>Create inside <code>components/</code> component with filename <code>Tabs.vue</code></li><li>Paste code into the file from the <strong>Component code - 1</strong> accordion</li><li>Import into project views component using <code>import Tabs from &quot;..location to component..&quot;</code></li><li>Put into view <code>&lt;script&gt;</code> tag code inside <strong>Component code - 2</strong></li><li>Using the template in given code from <strong>Component code - 2</strong> create labels and content for the tabs</li></ol><details><summary>Component code - 1</summary><div class="details-content"><div class="code-block"><pre><code>&lt;template&gt;
    &lt;div class=&quot;tabs-box&quot;&gt;
      &lt;ul class=&quot;tabs&quot;&gt;
        &lt;li
          v-for=&quot;(tab, index) in tabs&quot;
          :key=&quot;index&quot;
          :class=&quot;{ current: activeTab === index }&quot;
          @click=&quot;changeTab(index, $event)&quot;
        &gt;
          &lt;a href=&quot;#&quot; class=&quot;tab-button&quot;&gt;{{ tab.label }}&lt;/a&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
      &lt;div
        v-for=&quot;(tab, index) in tabs&quot;
        :key=&quot;index&quot;
        v-show=&quot;activeTab === index&quot;
        class=&quot;content&quot;
        v-html=&quot;tab.content&quot;
      &gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;
  
&lt;script&gt;
  export default {
    name: &quot;Tabs&quot;,
    props: {
      tabs: {
        type: Array,
        required: true,
        default: () =&gt; [],
      },
    },
    data() {
      return {
        activeTab: 0,
      };
    },
    methods: {
      changeTab(index, event) {
        event.preventDefault();
        this.activeTab = index;
      },
    },
  };
&lt;/script&gt;</code></pre></div></div></details><p></p><details><summary>Component code - 2</summary><div class="details-content"><div class="code-block"><pre><code>&lt;script&gt;
export default {
  components: {
    Tabs,
  },
  data() {
    return {
      tabData: [
        {
          label: &quot;Lorem, ipsum dolor.&quot;,
          content: \`
            &lt;h1&gt;This is first box&lt;/h1&gt;
            &lt;p&gt;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aspernatur eligendi similique nemo ipsam recusandae esse accusamus ipsa, distinctio tenetur.&lt;/p&gt;
          \`,
        },
        {
          label: &quot;Lorem, ipsum dolor sit.&quot;,
          content: \`
            &lt;h1&gt;This is second box&lt;/h1&gt;
            &lt;p&gt;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aspernatur eligendi similique nemo ipsam recusandae esse accusamus ipsa, distinctio tenetur.&lt;/p&gt;
          \`,
        },
        {
          label: &quot;Lorem, ipsum dolor sit amet.&quot;,
          content: \`
            &lt;h1&gt;This is third box&lt;/h1&gt;
            &lt;p&gt;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aspernatur eligendi similique nemo ipsam recusandae esse accusamus ipsa, distinctio tenetur.&lt;/p&gt;
          \`,
        },
      ],
    };
  },
};
&lt;/script&gt;</code></pre></div></div></details></div>`,1))]),e("aside",null,[d(T)])],64))}});export{F as default};

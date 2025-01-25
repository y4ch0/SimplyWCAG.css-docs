import{a}from"./ComponentList-BZe26pRw.js";import{a as u,b as n,e as l,d as o,w as e,c as r,F as g,r as p,o as m}from"./index-B1F31pKR.js";const v={class:"rows"},q={class:"row"},c={open:""},f={class:"details-content"},b={class:"docs"},w={href:"#",class:"nav-item dropdown"},k={href:"#",class:"nav-item dropdown"},N={__name:"NavigationBar",setup(y){return(s,t)=>{const i=p("RouterLink");return m(),u(g,null,[n("div",v,[n("div",q,[t[11]||(t[11]=n("h1",{id:"description"},"Links",-1)),t[12]||(t[12]=n("p",null,"A link connects users to a different page or further information.",-1)),n("details",c,[t[10]||(t[10]=n("summary",null,"Component preview",-1)),n("div",f,[n("nav",b,[n("ul",null,[t[6]||(t[6]=n("li",null,[n("a",{href:"#"},"Navigation link")],-1)),t[7]||(t[7]=n("li",null,[n("a",{href:"#"},"Navigation link")],-1)),t[8]||(t[8]=n("li",null,[n("a",{href:"#"},"Navigation link")],-1)),n("li",null,[n("a",w,[t[2]||(t[2]=l(" Dropdown ")),n("ul",null,[n("li",null,[o(i,{to:"#"},{default:e(()=>t[1]||(t[1]=[l("Lorem ipsum dolor")])),_:1})])])])]),n("li",null,[n("span",k,[t[5]||(t[5]=l(" Dropdown ")),n("ul",null,[n("li",null,[o(i,{to:"#"},{default:e(()=>t[3]||(t[3]=[l("Home")])),_:1})]),n("li",null,[o(i,{to:"#"},{default:e(()=>t[4]||(t[4]=[l("About")])),_:1})])])])])]),n("button",{class:"menu-collapse",onClick:t[0]||(t[0]=(...d)=>s.updateHidden&&s.updateHidden(...d))},t[9]||(t[9]=[n("i",{class:"bi bi-list"},null,-1)]))])])]),t[13]||(t[13]=n("div",{class:"alert slim information"},[n("p",null,[l("The "),n("code",null,"<a>"),l(" can be used inside paragraphs, span etc.")])],-1))]),t[14]||(t[14]=r(`<div class="row"><details><summary>Component code</summary><div class="details-content"><div class="code-block"><pre><code>&lt;nav&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Navigation link&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Navigation link&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Navigation link&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;
            &lt;a href=&quot;#&quot; class=&quot;nav-item dropdown&quot;&gt;
                Dropdown
                &lt;ul&gt;
                    &lt;li&gt;
                    &lt;a to=&quot;#&quot;&gt;Lorem ipsum dolor&lt;/a&gt;
                    &lt;/li&gt;
                &lt;/ul&gt;
            &lt;/a&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;span href=&quot;#&quot; class=&quot;nav-item dropdown&quot;&gt;
                Dropdown
                &lt;ul&gt;
                    &lt;li&gt;
                    &lt;a to=&quot;#&quot;&gt;Home&lt;/a&gt;
                    &lt;/li&gt;
                    &lt;li&gt;
                    &lt;a to=&quot;#&quot;&gt;About&lt;/a&gt;
                    &lt;/li&gt;
                &lt;/ul&gt;
            &lt;/span&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
    &lt;button class=&quot;menu-collapse&quot; v-on:click=&quot;updateHidden&quot;&gt;&lt;i class=&quot;bi bi-list&quot;&gt;&lt;/i&gt;&lt;/button&gt;
&lt;/nav&gt;</code></pre></div></div></details><p></p><details><summary>Component code (Menu collapse)</summary><div class="details-content"><div class="code-block"><pre><code>export default {
    data() {
        return {
            left: &quot;-70vw&quot;,
            isHidden: true,
        }
    },
    methods: {
        updateHidden() {
            this.isHidden = !this.isHidden;
            if(this.isHidden === true) {
                this.left = &quot;-70vw&quot;;
            } else {
                this.left = 0;
            }
        },
    }
}</code></pre></div></div></details><p></p><details><summary>Component code (JavaScript version)</summary><div class="details-content"><div class="code-block"><pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Navbar Toggle&lt;/title&gt;
    &lt;style&gt;
        #navbar {
            position: fixed;
            top: 0;
            left: -70vw;
            width: 70vw;
            height: 100%;
            background-color: #333;
            color: white;
            transition: left 3000ms ease-in-out;
        }

        #toggleButton {
            position: fixed;
            top: 10px;
            right: 10px;
            z-index: 100;
            padding: 10px;
            background-color: #007BFF;
            color: white;
            border: none;
            cursor: pointer;
        }

        @media (min-width: 768px) {
            #toggleButton {
                display: none;
            }
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id=&quot;navbar&quot;&gt;
        &lt;p&gt;Navbar content here&lt;/p&gt;
    &lt;/div&gt;
    &lt;button id=&quot;toggleButton&quot;&gt;Toggle Navbar&lt;/button&gt;

    &lt;script&gt;
        (function () {
            const navbar = document.getElementById(&#39;navbar&#39;);
            const toggleButton = document.getElementById(&#39;toggleButton&#39;);
            let isHidden = true;

            toggleButton.addEventListener(&#39;click&#39;, function () {
                isHidden = !isHidden;
                navbar.style.left = isHidden ? &#39;-70vw&#39; : &#39;0&#39;;
            });
        })();
    &lt;/script&gt;
&lt;/body&gt;</code></pre></div></div></details></div>`,1))]),n("aside",null,[o(a)])],64)}}};export{N as default};

<script setup>
import Tabs from "@/components/Tabs.vue"
import asideLinks from '@/components/ComponentList.vue'
</script>
<template>
    <div class="rows">
        <div class="row">
            <h1 id="description">Tabs</h1>
            <p>A tabs component allows to put multiple content into one row without need of creating multiple rows.</p>
            <details open>
                <summary>Component preview</summary>
                <div class="details-content">
                    <Tabs :tabs="tabData" />
                </div>
            </details>
        </div>
        <div class="row">
            <div class="alert slim error">
                <div class="icon">
                    <i class="bi bi-info-circle-fill"></i>
                </div>
                <div class="data">
                    <p>This component is available only for projects created with <a href="//vuejs.org">Vue.js</a></p>
                </div>
            </div>
            <h3>Code for component</h3>
            <small>Only for projects using <a href="//vuejs.org">Vue.js</a></small>
            <ol>
                <li>Create inside <code>components/</code> component with filename <code>Tabs.vue</code></li>
                <li>Paste code into the file from the <strong>Component code - 1</strong> accordion</li>
                <li>Import into project views component using <code>import Tabs from "..location to component.."</code></li>
                <li>Put into view <code>&lt;script></code> tag code inside <strong>Component code - 2</strong></li>
                <li>Using the template in given code from <strong>Component code - 2</strong> create labels and content for the tabs</li>
            </ol>
            <details>
                <summary>Component code - 1</summary>
                <div class="details-content">
                    <div class="code-block">
                        <pre><code>&lt;template&gt;
    &lt;div class="tabs-box"&gt;
      &lt;ul class="tabs"&gt;
        &lt;li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ current: activeTab === index }"
          @click="changeTab(index, $event)"
        &gt;
          &lt;a href="#" class="tab-button"&gt;&#123;&#123; tab.label &#125;&#125;&lt;/a&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
      &lt;div
        v-for="(tab, index) in tabs"
        :key="index"
        v-show="activeTab === index"
        class="content"
        v-html="tab.content"
      &gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;
  
&lt;script&gt;
  export default {
    name: "Tabs",
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
&lt;/script&gt;</code></pre>
                    </div>
                </div>
            </details>
            <p></p>
            <details>
                <summary>Component code - 2</summary>
                <div class="details-content">
                    <div class="code-block">
                        <pre><code>&lt;script&gt;
export default {
  components: {
    Tabs,
  },
  data() {
    return {
      tabData: [
        {
          label: "Lorem, ipsum dolor.",
          content: `
            &lt;h1&gt;This is first box&lt;/h1&gt;
            &lt;p&gt;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aspernatur eligendi similique nemo ipsam recusandae esse accusamus ipsa, distinctio tenetur.&lt;/p&gt;
          `,
        },
        {
          label: "Lorem, ipsum dolor sit.",
          content: `
            &lt;h1&gt;This is second box&lt;/h1&gt;
            &lt;p&gt;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aspernatur eligendi similique nemo ipsam recusandae esse accusamus ipsa, distinctio tenetur.&lt;/p&gt;
          `,
        },
        {
          label: "Lorem, ipsum dolor sit amet.",
          content: `
            &lt;h1&gt;This is third box&lt;/h1&gt;
            &lt;p&gt;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aspernatur eligendi similique nemo ipsam recusandae esse accusamus ipsa, distinctio tenetur.&lt;/p&gt;
          `,
        },
      ],
    };
  },
};
&lt;/script&gt;</code></pre>
                    </div>
                </div>
            </details>
        </div>
    </div>
    <aside>
        <asideLinks />
    </aside>
</template>

<script>
export default {
  components: {
    Tabs,
  },
  data() {
    return {
      tabData: [
        {
          label: "Lorem, ipsum dolor.",
          content: `
            <h1>This is first box</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aspernatur eligendi similique nemo ipsam recusandae esse accusamus ipsa, distinctio tenetur.</p>
          `,
        },
        {
          label: "Lorem, ipsum dolor sit.",
          content: `
            <h1>This is second box</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aspernatur eligendi similique nemo ipsam recusandae esse accusamus ipsa, distinctio tenetur.</p>
          `,
        },
        {
          label: "Lorem, ipsum dolor sit amet.",
          content: `
            <h1>This is third box</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aspernatur eligendi similique nemo ipsam recusandae esse accusamus ipsa, distinctio tenetur.</p>
          `,
        },
      ],
    };
  },
};
</script>
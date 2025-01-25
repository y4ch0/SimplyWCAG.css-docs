<script setup>
import asideLinks from '@/components/ComponentList.vue'
</script>
<template>
    <div class="rows">
        <div class="row">
            <h1 id="description">Footer</h1>
            <p>A footer serves site visitors who arrive at the bottom of a page information about website author or links to other pages.</p>
            <details open>
                <summary>Component preview</summary>
                <div class="details-content">
                    <footer class="docs-footer">
                        <div class="wrapper">
                            <hr>
                            <ul>
                                <li>
                                <RouterLink to="/">Home</RouterLink>
                                </li>
                                <li>
                                <RouterLink to="/about">About</RouterLink>
                                </li>
                            </ul>
                            <p>
                                &copy; 2025 Adrian Ciak | Website: created with <a href="//vuejs.org">Vue.js</a>, Styling: created with <a href="/">SimplyWCAG.css</a>, Icons: <a href="//icons.getbootstrap.com">Bootstrap icons</a>
                            </p>
                        </div>
                    </footer>
                </div>
            </details>
        </div>
        <div class="row">
            <details>
                <summary>Component code</summary>
                <div class="details-content">
                    <div class="code-block">
                        <pre><code>&lt;footer&gt;
    &lt;div class="wrapper"&gt;
        &lt;hr&gt;
        &lt;ul&gt;
            &lt;li&gt;
                &lt;a href="/"&gt;Home&lt;/a&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;a href="/about"&gt;About&lt;/a&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
        &lt;p&gt;
            &copy; 2025 SimplyWCAG.css
        &lt;/p&gt;
    &lt;/div&gt;
&lt;/footer&gt;</code></pre>
                    </div>
                </div>
            </details>
        </div>
    </div>
    <aside>
        <asideLinks />
    </aside>
</template>
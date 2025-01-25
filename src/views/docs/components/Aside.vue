<script setup>
import asideLinks from '@/components/ComponentList.vue'
</script>
<template>
    <div class="rows">
        <div class="row">
            <h1 id="description">Aside</h1>
            <p>An aside allows user to migrate between other pages related to the main one.</p>
            <details open>
                <summary>Component preview</summary>
                <div class="details-content">
                    <aside>
                        <ul>
                        <li><a href="#">Lorem ipsum dolor sit</a></li>
                        <li><a href="#">Lorem ipsum dolor sit</a></li>
                        <li><a href="#">Lorem ipsum dolor sit</a></li>
                        <li><a href="#">Lorem ipsum dolor sit</a></li>
                        <li><a href="#">Lorem ipsum dolor sit</a></li>
                        <li><a href="#">Lorem ipsum dolor sit</a></li>
                        <li><a href="#">Lorem ipsum dolor sit</a></li>
                        <li><a href="#">Lorem ipsum dolor sit</a></li>
                        <li><a href="#">Lorem ipsum dolor sit</a></li>
                        <li><a href="#">Lorem ipsum dolor sit</a></li>
                        </ul>
                    </aside>
                </div>
            </details>
            <div class="alert warning">
                <div class="icon">
                    <i class="bi bi-info-circle-fill"></i>
                </div>
                <div class="data">
                    <h3>Note for developer.</h3>
                    <p>Put <code>&lt;aside></code> among with the <code>rows</code> div inside <code>&lt;main>&lt;wrapper>...&lt;/wrapper>&lt;/main></code> in the webiste on the same level. Put <code>row</code> divs inside the <code>rows</code>.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <details>
                <summary>Component code</summary>
                <div class="details-content">
                    <div class="code-block">
                        <pre><code>&lt;aside&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;a href="#"&gt;Lorem ipsum dolor sit&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;Lorem ipsum dolor sit&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;Lorem ipsum dolor sit&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;Lorem ipsum dolor sit&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;Lorem ipsum dolor sit&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;Lorem ipsum dolor sit&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;Lorem ipsum dolor sit&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;Lorem ipsum dolor sit&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;Lorem ipsum dolor sit&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;Lorem ipsum dolor sit&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/aside&gt;</code></pre>
                    </div>
                </div>
            </details>
        </div>
    </div>
    <aside>
        <asideLinks />
    </aside>
</template>
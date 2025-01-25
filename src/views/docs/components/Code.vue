<script setup>
import asideLinks from '@/components/ComponentList.vue'
</script>
<template>
    <div class="rows">
        <div class="row">
            <h1 id="description">Code</h1>
            <p>A code contain unstyled, preformatted computer code.</p>
            <details open>
                <summary>Component preview</summary>
                <div class="details-content">
                    <pre><code>&lt;div class="row"&gt;
    &lt;h1&gt;Code&lt;/h1&gt;
    &lt;p&gt;A code contain computer code.&lt;/p&gt;
    &lt;details open&gt;
        &lt;summary&gt;Component preview&lt;/summary&gt;
        &lt;div class="details-content"&gt;
            &lt;code&gt;&lt;/code&gt;
        &lt;/div&gt;
    &lt;/details&gt;
&lt;/div&gt;</code></pre>
                    <pre><code class="code-preview">&lt;div class="row"&gt;
    &lt;h1&gt;Code&lt;/h1&gt;
    &lt;p&gt;A code contain computer code.&lt;/p&gt;
    &lt;details open&gt;
        &lt;summary&gt;Component preview&lt;/summary&gt;
        &lt;div class="details-content"&gt;
            &lt;code class="code-preview"&gt;&lt;/code&gt;
        &lt;/div&gt;
    &lt;/details&gt;
&lt;/div&gt;</code></pre>
                </div>
            </details>
            <div class="alert information">
                <div class="icon">
                    <i class="bi bi-info-circle-fill"></i>
                </div>
                <div class="data">
                    <h3>Tip for developer.</h3>
                    <p>It is recommended to use <code>&lt;code></code> among with <code>&lt;pre></code> tag to keep code formatted.</p>
                </div>
            </div>
            <div class="alert information">
                <div class="icon">
                    <i class="bi bi-info-circle-fill"></i>
                </div>
                <div class="data">
                    <h3>Tip for developer.</h3>
                    <p>If you want to display code formatted like in desktop Terminal add <code>code-preview</code> classname.</p>
                </div>
            </div>
            <div class="alert warning">
                <div class="icon">
                    <i class="bi bi-info-circle-fill"></i>
                </div>
                <div class="data">
                    <h3>Responsive layout issue.</h3>
                    <p>Using <code>&lt;pre></code> tag may interrupt responsive layout and lead to overflowing text of the <code>&lt;code></code> section.</p>
                </div>
            </div>
            <div class="alert warning">
                <div class="icon">
                    <i class="bi bi-info-circle-fill"></i>
                </div>
                <div class="data">
                    <h3>Missing functionality.</h3>
                    <p>There is not computer coding language markup. All code will be displayed in same color as in component preview.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <details>
                <summary>Component code</summary>
                <div class="details-content">
                    <div class="code-block">
                        <pre><code>&lt;code&gt;..computer code..&lt;/code&gt;</code></pre>
                    </div>
                </div>
            </details>
        </div>
    </div>
    <aside>
        <asideLinks />
    </aside>
</template>
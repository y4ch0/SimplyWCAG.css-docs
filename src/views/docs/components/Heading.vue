<script setup>
import asideLinks from '@/components/ComponentList.vue'
</script>
<template>
    <div class="rows">
        <div class="row">
            <h1 id="description">Heading</h1>
            <p>Heading helps user seperate paragraphs of content.</p>
            <details open>
                <summary>Component preview</summary>
                <div class="details-content">
                    <h1>This is <code>&lt;h1></code> heading</h1>
                    <h2>This is <code>&lt;h2></code> heading</h2>
                    <h3>This is <code>&lt;h3></code> heading</h3>
                    <h4>This is <code>&lt;h4></code> heading</h4>
                    <h5>This is <code>&lt;h5></code> heading</h5>
                    <h6>This is <code>&lt;h6></code> heading</h6>
                </div>
            </details>
            <div class="alert warning">
                <div class="icon"><i class="bi bi-info-circle-fill"></i></div>
                <div class="data">
                    <h3>Readability warning.</h3>
                    <p>It is suggested to avoid using <code>&lt;h5></code> and <code>&lt;h6></code> due to its low readibility level.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <details>
                <summary>Component code</summary>
                <div class="details-content">
                    <div class="code-block">
                        <pre><code>&lt;h1&gt;This is h1 heading&lt;/h1&gt;
&lt;h2&gt;This is h2 heading&lt;/h2&gt;
&lt;h3&gt;This is h3 heading&lt;/h3&gt;
&lt;h4&gt;This is h4 heading&lt;/h4&gt;
&lt;h5&gt;This is h5 heading&lt;/h5&gt;
&lt;h6&gt;This is h6 heading&lt;/h6&gt;</code></pre>
                    </div>
                </div>
            </details>
        </div>
    </div>
    <aside>
        <asideLinks />
    </aside>
</template>
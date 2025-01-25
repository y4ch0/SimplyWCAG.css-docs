<script setup>
import asideLinks from '@/components/ComponentList.vue'
</script>
<template>
    <div class="rows">
        <div class="row">
            <h1 id="description">Grid</h1>
            <p>Grid layout is created to help your webiste look organized. The grid is mobile-first, powered by flexbox.</p>
            <div class="alert warning">
                <div class="icon">
                    <i class="bi bi-info-circle-fill"></i>
                </div>
                <div class="data">
                    <h3>Pay attention to layout.</h3>
                    <p>Do not use more than 6 columns due to possible layout issues which may be difficult to read.</p>
                </div>
            </div>
            <details open>
                <summary>Component preview</summary>
                <div class="details-content">
                    <div class="docs-rows">
                        <div class="row-docs">
                            Single row, without columns
                        </div>
                        <div class="row-docs">
                            <div class="column-docs">Column</div>
                            <div class="column-docs">Column</div>
                            <div class="column-docs">Column</div>
                        </div>
                    </div>
                </div>
            </details>
        </div>
        <div class="row">
            <details>
                <summary>Component code</summary>
                <div class="details-content">
                    <div class="code-block">
                        <pre><code>&lt;div class="row"&gt;
    row without columns
&lt;/div&gt;
&lt;div class="row"&gt;
    &lt;div class="column"&gt;column&lt;/div&gt;
    &lt;div class="column"&gt;column&lt;/div&gt;
    &lt;div class="column"&gt;column&lt;/div&gt;
    &lt;div class="column"&gt;column&lt;/div&gt;
&lt;/div&gt;</code></pre>
                    </div>
                </div>
            </details>
        </div>
    </div>
    <aside>
        <asideLinks />
    </aside>
</template>

<style>
.docs-rows {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
.row-docs {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 8rem;
    background-color: rgba(0,0,255,0.2);
    border-radius: 0.35rem;
    gap: 0.5rem;
}
.row-docs:has(.column-docs) {
    background-color: transparent;
}
.row-docs .column-docs {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.35rem;
    background-color: rgba(0,0,255,0.2);
    height: 100%;
    min-height: 8rem;
}
@media screen and (max-width: 768px) {
    .row-docs {
        flex-direction: column;
    }
}
</style>
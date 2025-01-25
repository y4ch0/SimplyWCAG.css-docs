<script setup>
import asideLinks from '@/components/ComponentList.vue'
</script>
<template>
    <div class="rows">
        <div class="row">
            <h1 id="description">Spinner</h1>
            <p>A spinner is component that shows user loading process part of website.</p>
            <details open>
                <summary>Component preview</summary>
                <div class="details-content">
                    <h3>Non-centered spinner</h3>
                    <div class="spinner">
                        <span class="spinner"></span>
                    </div>
                    <h3>Centered spinner</h3>
                    <div class="spinner centered">
                        <span class="spinner"></span>
                    </div>
                </div>
            </details>
            <div class="alert warning slim">
                <p>To use centered version of this component add <code>centered</code> classname.</p>
            </div>
        </div>
        <div class="row">
            <details>
                <summary>Component code</summary>
                <div class="details-content">
                    <div class="code-block">
                        <pre><code>&lt;div class="spinner"&gt;
    &lt;span class="spinner"&gt;&lt;/span&gt;
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
<script setup>
import asideLinks from '@/components/ComponentList.vue'
</script>
<template>
    <div class="rows">
        <div class="row">
            <h1 id="description">Progress bar</h1>
            <p>Progress bar is used to show completion of file download.</p>
            <details open>
                <summary>Component preview</summary>
                <div class="details-content">
                    <progress id="file" value="32" max="100">32%</progress>
                </div>
            </details>
        </div>
        <div class="row">
            <details>
                <summary>Component code</summary>
                <div class="details-content">
                    <div class="code-block">
                        <pre><code>&lt;progress id="file" value="..progress value.." max="..max value.."&gt;&lt;/progress&gt;</code></pre>
                    </div>
                </div>
            </details>
        </div>
    </div>
    <aside>
        <asideLinks />
    </aside>
</template>
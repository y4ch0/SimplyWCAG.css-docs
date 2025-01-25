<script setup>
import asideLinks from '@/components/ComponentList.vue'
</script>
<template>
    <div class="rows">
        <div class="row">
            <h1 id="description">Cite</h1>
            <p>A cite is used to highlight quoted text.</p>
            <details open>
                <summary>Component preview</summary>
                <div class="details-content">
                    <p>
                        Section 1 in constitution of United States says <cite>All legislative Powers herein granted shall be vested in a Congress of the United States, which shall consist of a Senate and House of Representatives.</cite>
                    </p>
                </div>
            </details>
        </div>
        <div class="row">
            <details>
                <summary>Component code</summary>
                <div class="details-content">
                    <div class="code-block">
                        <pre><code>&lt;cite&gt;
    All legislative Powers herein granted shall be vested in a Congress of 
    the United States, which shall consist of a Senate and House of Representatives.
&lt;/cite&gt;</code></pre>
                    </div>
                </div>
            </details>
        </div>
    </div>
    <aside>
        <asideLinks />
    </aside>
</template>
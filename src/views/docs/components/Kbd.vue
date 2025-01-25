<script setup>
import asideLinks from '@/components/ComponentList.vue'
</script>
<template>
    <div class="rows">
        <div class="row">
            <h1 id="description">Kbd (keyboard input)</h1>
            <p>A kbd is used to define keyboard input. The content inside is displayed in the browser's default monospace font.</p>
            <details open>
                <summary>Component preview</summary>
                <div class="details-content">
                    <p>To copy selected text press <kbd>CTRL</kbd> + <kbd>C</kbd>.</p>
                </div>
            </details>
            <div class="alert slim information">
                <p>The <code>&lt;kbd></code> can be used inside paragraphs, span etc.</p>
            </div>
        </div>
        <div class="row">
            <details>
                <summary>Component code</summary>
                <div class="details-content">
                    <div class="code-block">
                        <pre><code>&lt;kbd&gt;key tag&lt;/kbd&gt;</code></pre>
                    </div>
                </div>
            </details>
        </div>
    </div>
    <aside>
        <asideLinks />
    </aside>
</template>
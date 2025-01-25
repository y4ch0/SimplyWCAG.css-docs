<script setup>
import asideLinks from '@/components/ComponentList.vue'
</script>
<template>
    <div class="rows">
        <div class="row">
            <h1 id="description">Links</h1>
            <p>A link connects users to a different page or further information.</p>
            <details open>
                <summary>Component preview</summary>
                <div class="details-content">
                    <p>Google browser is available at <a href="//google.com">google.com</a>.</p>
                </div>
            </details>
            <div class="alert slim information">
                <p>The <code>&lt;a></code> can be used inside paragraphs, span etc.</p>
            </div>
        </div>
        <div class="row">
            <details>
                <summary>Component code</summary>
                <div class="details-content">
                    <div class="code-block">
                        <pre><code>&lt;a href="..link other page.."&gt;..label displayed as link..&lt;/a&gt;</code></pre>
                    </div>
                </div>
            </details>
        </div>
    </div>
    <aside>
        <asideLinks />
    </aside>
</template>
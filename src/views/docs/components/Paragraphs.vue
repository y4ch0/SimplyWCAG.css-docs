<script setup>
import asideLinks from '@/components/ComponentList.vue'
</script>
<template>
    <div class="rows">
        <div class="row">
            <h1 id="description">Paragraphs</h1>
            <p>Paragraphs are used to seperate blocks of text for easier readability.</p>
            <details open>
                <summary>Component preview</summary>
                <div class="details-content">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit doloremque dignissimos nemo maxime alias perferendis, consectetur iusto minima dolorem earum incidunt quos aliquam obcaecati at corrupti, impedit distinctio similique minus?</p>
                </div>
            </details>
        </div>
        <div class="row">
            <details>
                <summary>Component code</summary>
                <div class="details-content">
                    <div class="code-block">
                        <pre><code>&lt;p&gt;
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit doloremque 
    dignissimos nemo maxime alias perferendis, consectetur iusto minima dolorem 
    earum incidunt quos aliquam obcaecati at corrupti, impedit distinctio 
    similique minus?
&lt;/p&gt;</code></pre>
                    </div>
                </div>
            </details>
        </div>
    </div>
    <aside>
        <asideLinks />
    </aside>
</template>
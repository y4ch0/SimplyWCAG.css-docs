<script setup>
import asideLinks from '@/components/ComponentList.vue'
</script>
<template>
    <div class="rows">
        <div class="row">
            <h1 id="description">Blockqoute</h1>
            <p>A blockqoute helps to present quote.</p>
            <details open>
                <summary>Component preview</summary>
                <div class="details-content">
                    <blockquote>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat saepe quas porro sequi eius quisquam magni quos modi alias incidunt. Placeat laudantium animi officiis? Eligendi, similique laudantium id maxime iste magnam. Suscipit quis doloremque ex in dicta, assumenda illum aperiam libero, vero amet repellat sed velit rerum ut! Exercitationem, sapiente.</blockquote>
                </div>
            </details>
        </div>
        <div class="row">
            <details>
                <summary>Component code</summary>
                <div class="details-content">
                    <div class="code-block">
                        <pre><code>&lt;blockquote&gt;
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat saepe 
    quas porro sequi eius quisquam magni quos modi alias incidunt. Placeat laudantium 
    animi officiis? Eligendi, similique laudantium id maxime iste magnam. Suscipit 
    quis doloremque ex in dicta, assumenda illum aperiam libero, vero amet repellat sed 
    velit rerum ut! Exercitationem, sapiente.
&lt;/blockquote&gt;</code></pre>
                    </div>
                </div>
            </details>
        </div>
    </div>
    <aside>
        <asideLinks />
    </aside>
</template>
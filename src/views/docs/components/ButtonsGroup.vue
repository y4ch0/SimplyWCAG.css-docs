<script setup>
import asideLinks from '@/components/ComponentList.vue'
</script>
<template>
    <div class="rows">
        <div class="row">
            <h1 id="description">Buttons group</h1>
            <p>A button group collects similar or related actions.</p>
            <details open>
                <summary>Component preview</summary>
                <div class="details-content">
                    <div class="button-group">
                        <button class="button primary">Lorem ipsum</button><button class="button primary">Lorem ipsum</button><button class="button primary">Lorem ipsum</button>
                    </div>
                    <div class="button-group">
                        <button class="button secondary">Lorem ipsum</button><button class="button primary">Lorem ipsum</button><a class="button" href="#">Lorem ipsum</a>
                    </div>
                </div>
            </details>
            <div class="alert slim information">
                <div class="icon">
                    <i class="bi bi-info-circle-fill"></i>
                </div>
                <div class="data">
                    <p>It is possible to mix <code>&lt;button></code> and <code>&lt;a></code> tags as buttons.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <details>
                <summary>Component code</summary>
                <div class="details-content">
                    <div class="code-block">
                        <pre><code>&lt;div class="button-group"&gt;
    &lt;button class="button primary"&gt;Lorem ipsum&lt;/button&gt;
    &lt;button class="button primary"&gt;Lorem ipsum&lt;/button&gt;
    &lt;button class="button primary"&gt;Lorem ipsum&lt;/button&gt;
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
<script setup>
import asideLinks from '@/components/ComponentList.vue'
</script>
<template>
    <div class="rows">
        <div class="row">
            <h1 id="description">Card</h1>
            <p>Cards contain content and actions about a single subject.</p>
            <details open>
                <summary>Component preview</summary>
                <div class="details-content">
                    <div class="card">
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde iure ipsam sint, culpa adipisci quam.</p>
                        <button class="button secondary">Read</button>
                    </div>
                </div>
            </details>
        </div>
        <div class="row">
            <details>
                <summary>Component code</summary>
                <div class="details-content">
                    <div class="code-block">
                        <pre><code>&lt;div class="card"&gt;
    &lt;h2&gt;Lorem ipsum dolor sit amet.&lt;/h2&gt;
    &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde iure ipsam 
    sint, culpa adipisci quam.&lt;/p&gt;
    &lt;button class="button secondary"&gt;Read&lt;/button&gt;
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
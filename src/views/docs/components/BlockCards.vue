<script setup>
import asideLinks from '@/components/ComponentList.vue'
</script>
<template>
    <div class="rows">
        <div class="row">
            <h1 id="description">Block cards</h1>
            <p>Block cards is variation of <RouterLink to="/docs/components/block-links">block links</RouterLink> component. It is used to sort and display in grid <RouterLink to="/docs/components/card">card</RouterLink> component.</p>
            <details open>
                <summary>Component preview</summary>
                <div class="details-content">
                    <h3>Block cards with seperate buttons in footer</h3>
                    <div class="cards-block">
                        <div class="card">
                            <h2>Lorem ipsum dolor sit amet.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde iure ipsam sint, culpa adipisci quam.</p>
                            <button class="button secondary">Read</button>
                        </div>
                        <div class="card">
                            <h2>Lorem ipsum dolor sit amet.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde iure ipsam sint, culpa adipisci quam.</p>
                            <button class="button secondary">Read</button>
                        </div>
                        <div class="card">
                            <h2>Lorem ipsum dolor sit amet.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde iure ipsam sint, culpa adipisci quam.</p>
                            <button class="button secondary">Read</button>
                        </div>
                        <div class="card">
                            <h2>Lorem ipsum dolor sit amet.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde iure ipsam sint, culpa adipisci quam.</p>
                            <button class="button secondary">Read</button>
                        </div>
                    </div>
                    <h3>Block cards with header as a link</h3>
                    <div class="cards-block">
                        <div class="card">
                            <h2><a href="#">Lorem ipsum dolor sit amet.</a></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde iure ipsam sint, culpa adipisci quam.</p>
                        </div>
                        <div class="card">
                            <h2><a href="#">Lorem ipsum dolor sit amet.</a></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde iure ipsam sint, culpa adipisci quam.</p>
                        </div>
                        <div class="card">
                            <h2><a href="#">Lorem ipsum dolor sit amet.</a></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde iure ipsam sint, culpa adipisci quam.</p>
                        </div>
                        <div class="card">
                            <h2><a href="#">Lorem ipsum dolor sit amet.</a></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde iure ipsam sint, culpa adipisci quam.</p>
                        </div>
                    </div>
                </div>
            </details>
            <div class="alert slim information">
                <div class="icon">
                    <i class="bi bi-info-circle-fill"></i>
                </div>
                <div class="data">
                    <p>It is possible to delete button in footer and use <code>&lt;a></code> tag in heading instead or completly remove any buttons from card.</p>
                </div>
            </div>
            <div class="alert slim warning">
                <div class="icon">
                    <i class="bi bi-info-circle-fill"></i>
                </div>
                <div class="data">
                    <p>To make entire card clickable use <a href="/docs/components/block-links">block links</a> component instead of block cards.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <details>
                <summary>Component code</summary>
                <div class="details-content">
                    <div class="code-block">
                        <pre><code>&lt;div class="cards-block"&gt;
    &lt;div class="card"&gt;
        &lt;h2&gt;Lorem ipsum dolor sit amet.&lt;/h2&gt;
        &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde iure 
        ipsam sint, culpa adipisci quam.&lt;/p&gt;
        &lt;button class="button secondary"&gt;Read&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class="card"&gt;
        &lt;h2&gt;Lorem ipsum dolor sit amet.&lt;/h2&gt;
        &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde iure 
        ipsam sint, culpa adipisci quam.&lt;/p&gt;
        &lt;button class="button secondary"&gt;Read&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class="card"&gt;
        &lt;h2&gt;Lorem ipsum dolor sit amet.&lt;/h2&gt;
        &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde iure 
        ipsam sint, culpa adipisci quam.&lt;/p&gt;
        &lt;button class="button secondary"&gt;Read&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class="card"&gt;
        &lt;h2&gt;Lorem ipsum dolor sit amet.&lt;/h2&gt;
        &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde iure 
        ipsam sint, culpa adipisci quam.&lt;/p&gt;
        &lt;button class="button secondary"&gt;Read&lt;/button&gt;
    &lt;/div&gt;
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
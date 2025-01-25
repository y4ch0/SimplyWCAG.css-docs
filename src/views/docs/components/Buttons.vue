<script setup>
import asideLinks from '@/components/ComponentList.vue'
</script>
<template>
    <div class="rows">
        <div class="row">
            <h1 id="description">Buttons</h1>
            <p>A button draws attention to important actions with a large selectable surface.</p>
            <details open>
                <summary>Component preview</summary>
                <div class="details-content">
                    <h3>Button as <code>&lt;button></code> tag</h3>
                    <p>
                        <button class="button primary">Default primary</button>
                        <button class="button secondary">Default secondary</button>
                        <button class="button">Default unstyled</button>
                        <button class="button primary" disabled>Default disabled</button>
                    </p>
                    <h3>Button as <code>&lt;a></code> tag</h3>
                    <p>
                        <a class="button primary">Default primary</a>
                        <a class="button secondary">Default secondary</a>
                        <a class="button">Default unstyled</a>
                        <a class="button disabled">Default disabled</a>
                    </p>
                    <h3>Button with icon</h3>
                    <p>
                        <button class="button primary">
                            <i class="bi bi-person-circle"></i>
                            Lorem, ipsum dolor.
                        </button>
                        <a href="#" class="button secondary">
                            <i class="bi bi-person-circle"></i>
                            Lorem ipsum dolor sit amet.
                        </a>
                    </p>
                </div>
            </details>
            <div class="alert warning">
                <div class="icon">
                    <i class="bi bi-info-circle-fill"></i>
                </div>
                <div class="data">
                    <h3>Unavailable type.</h3>
                    <p>There is no posibility to set <code>...disabled></code> tag to <code>&lt;a></code>. In order to assign disabled styling, use <code>disabled</code> classname.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <details>
                <summary>Component code</summary>
                <div class="details-content">
                    <h3>Button as <code>&lt;button></code> tag</h3>
                    <div class="code-block">
                        <pre><code>&lt;button class="button primary"&gt;Default primary&lt;/button&gt;</code></pre>
                    </div>
                    <h3>Button as <code>&lt;a></code> tag</h3>
                    <div class="code-block">
                        <pre><code>&lt;a class="button primary" href="#"&gt;Default primary&lt;/a&gt;</code></pre>
                    </div>
                    <h3>Button with icon</h3>
                    <div class="code-block">
                        <pre><code>&lt;button class="button primary"&gt;
    &lt;i class="bi bi-person-circle"&gt;&lt;/i&gt;
    Lorem, ipsum dolor.
&lt;/button&gt;
&lt;a href="#" class="button secondary"&gt;
    &lt;i class="bi bi-person-circle"&gt;&lt;/i&gt;
    Lorem ipsum dolor sit amet.
&lt;/a&gt;</code></pre>
                    </div>
                </div>
            </details>
        </div>
    </div>
    <aside>
        <asideLinks />
    </aside>
</template>
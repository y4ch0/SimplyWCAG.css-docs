<script setup>
import asideLinks from '@/components/ComponentList.vue'
</script>
<template>
    <div class="rows">
        <div class="row">
            <h1 id="description">Block links</h1>
            <p>A block links helps user with easier navigation to another pages.</p>
            <details open>
                <summary>Component preview</summary>
                <div class="details-content">
                    <h3>Standard block links</h3>
                    <ul class="block-links">
                        <li>
                            <a href="#">
                            <h3><i class="bi bi-person-circle block-icon"></i><span>Lorem ipsum dolor sit amet consectetur.</span></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum ad, commodi consequatur natus corporis?</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <h3><i class="bi bi-person-circle block-icon"></i><span>Lorem ipsum dolor sit amet consectetur.</span></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum ad, commodi consequatur natus corporis?</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <h3><i class="bi bi-person-circle block-icon"></i><span>Lorem ipsum dolor sit amet consectetur.</span></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum ad, commodi consequatur natus corporis?</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <h3><span>Lorem ipsum dolor sit amet consectetur.</span></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum ad, commodi consequatur natus corporis?</p>
                            </a>
                        </li>
                    </ul>
                    <h3>Borderless block links</h3>
                    <ul class="block-links no-border">
                        <li>
                            <a href="#">
                            <h3><i class="bi bi-person-circle block-icon"></i><span>Lorem ipsum dolor sit amet consectetur.</span></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum ad, commodi consequatur natus corporis?</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <h3><i class="bi bi-person-circle block-icon"></i><span>Lorem ipsum dolor sit amet consectetur.</span></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum ad, commodi consequatur natus corporis?</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <h3><i class="bi bi-person-circle block-icon"></i><span>Lorem ipsum dolor sit amet consectetur.</span></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum ad, commodi consequatur natus corporis?</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <h3><span>Lorem ipsum dolor sit amet consectetur.</span></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum ad, commodi consequatur natus corporis?</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </details>
            <div class="alert slim information">
                <div class="icon">
                    <i class="bi bi-info-circle-fill"></i>
                </div>
                <div class="data">
                    <p>The icon is not required. It is optional if you can assign an icon to the content box.</p>
                </div>
            </div>
            <div class="alert warning">
                <div class="icon">
                    <i class="bi bi-info-circle-fill"></i>
                </div>
                <div class="data">
                    <h3>Notice the classname for this component.</h3>
                    <p>To use borderless block links add <code>no-border</code> tag to classname of <code>&lt;ul></code>.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <details>
                <summary>Component code</summary>
                <div class="details-content">
                    <div class="code-block">
                        <pre><code>&lt;ul class="block-links no-border"&gt;
    &lt;li&gt;
        &lt;a href="#"&gt;
            &lt;h3&gt;
                &lt;i class="bi bi-person-circle block-icon"&gt;&lt;/i&gt;
                &lt;span&gt;Lorem ipsum dolor sit amet.&lt;/span&gt;
            &lt;/h3&gt;
            &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit.&lt;/p&gt;
        &lt;/a&gt;
    &lt;/li&gt;
&lt;/ul&gt;</code></pre>
                    </div>
                </div>
            </details>
        </div>
    </div>
    <aside>
        <asideLinks />
    </aside>
</template>
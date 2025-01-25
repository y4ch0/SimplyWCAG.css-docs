<script setup>
import asideLinks from '@/components/ComponentList.vue'
</script>
<template>
    <div class="rows">
        <div class="row">
            <h1 id="description">Form progress</h1>
            <p>A form progress updates users on their progress through a multi-step process.</p>
            <details open>
                <summary>Component preview</summary>
                <div class="details-content">
                    <div class="form-progress">
                        <div class="bars">
                            <div class="bar complete"></div>
                            <div class="bar complete"></div>
                            <div class="bar complete"></div>
                            <div class="bar"></div>
                            <div class="bar"></div>
                        </div>
                        <div class="description">
                            <h2 class="progress-heading"><span class="current-step">3</span><span class="steps-left">of 5</span></h2>
                            <h3>Personal data</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </details>
        </div>
        <div class="row">
            <details>
                <summary>Component code</summary>
                <div class="details-content">
                    <div class="code-block">
                        <pre><code>&lt;div class="form-progress"&gt;
    &lt;div class="bars"&gt;
        &lt;div class="bar complete"&gt;&lt;/div&gt;
        &lt;div class="bar complete"&gt;&lt;/div&gt;
        &lt;div class="bar complete"&gt;&lt;/div&gt;
        &lt;div class="bar"&gt;&lt;/div&gt;
        &lt;div class="bar"&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="description"&gt;
        &lt;h2 class="progress-heading"&gt;
            &lt;span class="current-step"&gt;3&lt;/span&gt;
            &lt;span class="steps-left"&gt;of 5&lt;/span&gt;
        &lt;/h2&gt;
        &lt;h3&gt;Personal data&lt;/h3&gt;
        &lt;p&gt;Lorem ipsum dolor sit, amet consectetur adipisicing elit.&lt;/p&gt;
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
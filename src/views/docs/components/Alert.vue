<script setup>
import asideLinks from '@/components/ComponentList.vue'
</script>
<template>
    <div class="rows">
        <div class="row">
            <h1 id="description">Alert</h1>
            <p>An alert keeps users informed of important and sometimes time-sensitive changes.</p>
            <p>Available types of alerts:</p>
            <ul>
                <li>
                    Standard
                    <ul>
                        <li>Information</li>
                        <li>Warning</li>
                        <li>Success</li>
                        <li>Error</li>
                    </ul>
                </li>
                <li>
                    Slim
                    <ul>
                        <li>Information</li>
                        <li>Warning</li>
                        <li>Success</li>
                        <li>Error</li>
                    </ul>
                </li>
            </ul>
            <details open>
                <summary>Component preview</summary>
                <div class="details-content">
                    <h3>Standard alerts</h3>
                    <div class="alert information">
                        <div class="icon">
                            <i class="bi bi-info-circle-fill"></i>
                        </div>
                        <div class="data">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolores!</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis debitis aliquid quod, odit necessitatibus accusamus ratione nam! Earum, quibusdam voluptatum.</p>
                        </div>
                    </div>
                    <div class="alert warning">
                        <div class="icon">
                            <i class="bi bi-info-circle-fill"></i>
                        </div>
                        <div class="data">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolores!</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis debitis aliquid quod, odit necessitatibus accusamus ratione nam! Earum, quibusdam voluptatum.</p>
                        </div>
                    </div>
                    <div class="alert success">
                        <div class="icon">
                            <i class="bi bi-info-circle-fill"></i>
                        </div>
                        <div class="data">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolores!</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis debitis aliquid quod, odit necessitatibus accusamus ratione nam! Earum, quibusdam voluptatum.</p>
                        </div>
                    </div>
                    <div class="alert error">
                        <div class="icon">
                            <i class="bi bi-info-circle-fill"></i>
                        </div>
                        <div class="data">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolores!</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis debitis aliquid quod, odit necessitatibus accusamus ratione nam! Earum, quibusdam voluptatum.</p>
                        </div>
                    </div>
                    <div class="alert slim information">
                        <div class="icon">
                            <i class="bi bi-info-circle-fill"></i>
                        </div>
                        <div class="data">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, recusandae.</p>
                        </div>
                    </div>
                    <h3>Outlined alerts</h3>
                    <div class="alert outlined information">
                        <div class="icon">
                            <i class="bi bi-info-circle-fill"></i>
                        </div>
                        <div class="data">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolores!</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis debitis aliquid quod, odit necessitatibus accusamus ratione nam! Earum, quibusdam voluptatum.</p>
                        </div>
                    </div>
                    <div class="alert outlined warning">
                        <div class="icon">
                            <i class="bi bi-info-circle-fill"></i>
                        </div>
                        <div class="data">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolores!</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis debitis aliquid quod, odit necessitatibus accusamus ratione nam! Earum, quibusdam voluptatum.</p>
                        </div>
                    </div>
                    <div class="alert outlined success">
                        <div class="icon">
                            <i class="bi bi-info-circle-fill"></i>
                        </div>
                        <div class="data">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolores!</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis debitis aliquid quod, odit necessitatibus accusamus ratione nam! Earum, quibusdam voluptatum.</p>
                        </div>
                    </div>
                    <div class="alert outlined error">
                        <div class="icon">
                            <i class="bi bi-info-circle-fill"></i>
                        </div>
                        <div class="data">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolores!</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis debitis aliquid quod, odit necessitatibus accusamus ratione nam! Earum, quibusdam voluptatum.</p>
                        </div>
                    </div>
                    <div class="alert outlined slim information">
                        <div class="icon">
                            <i class="bi bi-info-circle-fill"></i>
                        </div>
                        <div class="data">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, recusandae.</p>
                        </div>
                    </div>
                </div>
            </details>
            <div class="alert slim information">
                <div class="icon">
                    <i class="bi bi-info-circle-fill"></i>
                </div>
                <div class="data">
                    <p>The <code>icon</code> div is not required. It is optional if you can assign an icon to the alert.</p>
                </div>
            </div>
            <div class="alert warning">
                <div class="icon">
                    <i class="bi bi-info-circle-fill"></i>
                </div>
                <div class="data">
                    <h3>Notice the classname for this component.</h3>
                    <p>To use outlined alerts add <code>outlined</code> tag to classname of <code>&lt;div></code>.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <details>
                <summary>Component code</summary>
                <div class="details-content">
                    <div class="code-block">
                        <pre><code>&lt;div class="alert information"&gt;
    &lt;div class="icon"&gt;
        &lt;i class="bi bi-info-circle-fill"&gt;&lt;/i&gt;
    &lt;/div&gt;
    &lt;div class="data"&gt;
        &lt;h3&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit.&lt;/h3&gt;
        &lt;p&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit.&lt;/p&gt;
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
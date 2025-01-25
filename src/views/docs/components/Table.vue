<script setup>
import asideLinks from '@/components/ComponentList.vue'
</script>
<template>
    <div class="rows">
        <div class="row">
            <h1 id="description">Table</h1>
            <p>A table is used to show data in organized way with abiity to compare data or show them easier way.</p>
            <details open>
                <summary>Component preview</summary>
                <div class="details-content">
                    <div class="table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Table column</th>
                                    <th>Table column</th>
                                    <th>Table column</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Cell data</td>
                                    <td>Cell data</td>
                                    <td>Cell data</td>
                                </tr>
                                <tr>
                                    <td>Cell data</td>
                                    <td>Cell data</td>
                                    <td>Cell data</td>
                                </tr>
                                <tr>
                                    <td>Cell data</td>
                                    <td>Cell data</td>
                                    <td>Cell data</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </details>
        </div>
        <div class="row">
            <details>
                <summary>Component code</summary>
                <div class="details-content">
                    <div class="code-block">
                        <pre><code>&lt;div class="table"&gt;
        &lt;table&gt;
            &lt;thead&gt;
                &lt;tr&gt;
                    &lt;th&gt;Table column&lt;/th&gt;
                    &lt;th&gt;Table column&lt;/th&gt;
                    &lt;th&gt;Table column&lt;/th&gt;
                &lt;/tr&gt;
            &lt;/thead&gt;
            &lt;tbody&gt;
                &lt;tr&gt;
                    &lt;td&gt;Cell data&lt;/td&gt;
                    &lt;td&gt;Cell data&lt;/td&gt;
                    &lt;td&gt;Cell data&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td&gt;Cell data&lt;/td&gt;
                    &lt;td&gt;Cell data&lt;/td&gt;
                    &lt;td&gt;Cell data&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td&gt;Cell data&lt;/td&gt;
                    &lt;td&gt;Cell data&lt;/td&gt;
                    &lt;td&gt;Cell data&lt;/td&gt;
                &lt;/tr&gt;
            &lt;/tbody&gt;
        &lt;/table&gt;
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
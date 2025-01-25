<script setup>
import asideLinks from '@/components/ComponentList.vue'
</script>
<template>
    <div class="rows">
        <div class="row">
            <h1 id="description">Optgroup</h1>
            <p>A optgroup is used to group related options in a <code>&lt;select></code> element (drop-down list).</p>
            <details open>
                <summary>Component preview</summary>
                <div class="details-content">
                    <div class="form-group">
                        <select class="form-control">
                            <optgroup label="Swedish Cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                            </optgroup>
                            <optgroup label="German Cars">
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </details>
            <div class="alert information slim">
                <p>To let user select multiple options add <code>multiple</code> tag at <code>&lt;select></code></p>
            </div>
        </div>
        <div class="row">
            <details>
                <summary>Component code</summary>
                <div class="details-content">
                    <div class="code-block">
                        <pre><code>&lt;div class="form-group"&gt;
    &lt;select class="form-control"&gt;
        &lt;optgroup label="Swedish Cars"&gt;
            &lt;option value="volvo"&gt;Volvo&lt;/option&gt;
            &lt;option value="saab"&gt;Saab&lt;/option&gt;
        &lt;/optgroup&gt;
        &lt;optgroup label="German Cars"&gt;
            &lt;option value="mercedes"&gt;Mercedes&lt;/option&gt;
            &lt;option value="audi"&gt;Audi&lt;/option&gt;
        &lt;/optgroup&gt;
    &lt;/select&gt;
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
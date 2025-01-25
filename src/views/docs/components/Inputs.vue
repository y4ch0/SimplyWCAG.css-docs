<script setup>
import asideLinks from '@/components/ComponentList.vue'
</script>
<template>
    <div class="rows">
        <div class="row">
            <h1 id="description">Inputs</h1>
            <p>An inputs allows users to enter any combination of letters, numbers, symbols or choose option from data set. Text input boxes can span single or multiple lines.</p>
            <p>Usually input comes with <code>&lt;label></code> tag to describe meaning of the input.</p>
            <details open>
                <summary>Component preview</summary>
                <div class="details-content">
                    <h3>Text input</h3>
                    <div class="form-group">
                        <input type="text" class="form-control">
                    </div>
                    <h3>Number input</h3>
                    <div class="form-group">
                        <input type="number" id="input_id" class="form-control">
                    </div>
                    <h3>Search input</h3>
                    <div class="form-group">
                        <input type="search" class="form-control">
                    </div>
                    <h3>Range input</h3>
                    <div class="form-group">
                        <input type="range" class="form-control">
                    </div>
                    <h3>Password input</h3>
                    <div class="form-group">
                        <input type="password" class="form-control">
                    </div>
                    <h3>File input</h3>
                    <div class="form-group">
                        <input type="file" class="form-control">
                    </div>
                    <h3>Color picker input</h3>
                    <div class="form-group">
                        <input type="color">
                        <div class="alert warning slim">
                            <p>Do not use <code>form-control</code> classname with this input type.</p>
                        </div>
                    </div>
                    <h3>Radio input</h3>
                    <div class="form-group">
                        <input type="radio">
                        <div class="alert warning slim">
                            <p>Do not use <code>form-control</code> classname with this input type.</p>
                        </div>
                    </div>
                    <h3>Radio input as full-width button</h3>
                    <div class="form-group">
                        <label class="option-button">
                            <input type="radio">
                            Lorem ipsum dolor sit amet
                        </label>
                    </div>
                    <h3>Checkbox input</h3>
                    <div class="form-group">
                        <input type="checkbox">
                        <div class="alert warning slim">
                            <p>Do not use <code>form-control</code> classname with this input type.</p>
                        </div>
                    </div>
                    <h3>Checkbox input as full-width button</h3>
                    <div class="form-group">
                        <label class="option-button">
                            <input type="checkbox">
                            Lorem ipsum dolor sit amet
                        </label>
                    </div>
                    <h3>Textarea</h3>
                    <p>It is text input with bigger writing space.</p>
                    <div class="form-group">
                        <textarea class="form-control"></textarea>
                    </div>
                    <h3>Select (drop-down menu)</h3>
                    <div class="form-group">
                        <select name="" id="" class="form-control">
                            <option value="test">Lorem ipsum dolor sit.</option>
                            <option value="test">Lorem ipsum dolor sit.</option>
                            <option value="test">Lorem ipsum dolor sit.</option>
                        </select>
                    </div>
                </div>
            </details>
        </div>
        <div class="row">
            <details>
                <summary>Component code</summary>
                <div class="details-content">
                    <h3>Text/number based input</h3>
                    <div class="code-block">
                        <pre><code>&lt;div class="form-group"&gt;
    &lt;label for="input_id"&gt;Input:&lt;/label&gt;
    &lt;input type="number" id="input_id" class="form-control"&gt;
&lt;/div&gt;</code></pre>
                    </div>
                    <h3>Checkbox/radio as full-width button</h3>
                    <div class="code-block">
                        <pre><code>&lt;div class="form-group"&gt;
    &lt;label class="option-button"&gt;
        &lt;input type="checkbox"&gt;
        Lorem ipsum dolor sit amet
    &lt;/label&gt;
&lt;/div&gt;</code></pre>
                    </div>
                    <h3>Select (drop-down menu)</h3>
                    <div class="code-block">
                        <pre><code>&lt;div class="form-group"&gt;
    &lt;select name="" id="" class="form-control"&gt;
        &lt;option value="test"&gt;Lorem ipsum dolor sit.&lt;/option&gt;
        &lt;option value="test"&gt;Lorem ipsum dolor sit.&lt;/option&gt;
        &lt;option value="test"&gt;Lorem ipsum dolor sit.&lt;/option&gt;
    &lt;/select&gt;
&lt;/div&gt;</code></pre>
                    </div>
                    <h3>Textarea</h3>
                    <div class="code-block">
    <pre><code>&lt;div class="form-group"&gt;
    &lt;textarea class="form-control"&gt;&lt;/textarea&gt;
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
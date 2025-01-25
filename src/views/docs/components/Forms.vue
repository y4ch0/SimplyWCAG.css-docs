<script setup>
import asideLinks from '@/components/ComponentList.vue'
</script>
<template>
    <div class="rows">
        <div class="row">
            <h1 id="description">Forms</h1>
            <p>A form allows users to enter information into a page.</p>
            <details open>
                <summary>Component preview</summary>
                <div class="details-content">
                    <form>
                        <div class="form-group">
                            <label>Lorem ipsum dolor sit.</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Lorem ipsum dolor sit. <span class="required">*</span></label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Lorem ipsum dolor sit.</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Lorem ipsum dolor sit.</label>
                            <textarea class="form-control"></textarea>
                        </div>
                        <div class="form-group">
                            <label>Lorem ipsum dolor sit.</label>
                            <select name="" id="" class="form-control">
                                <option value="">Test</option>
                                <option value="">Test</option>
                                <option value="">Test</option>
                                <option value="">Test</option>
                                <option value="">Test</option>
                            </select>
                        </div>
                        <div class="button-footer">
                            <a href="#" class="button primary">Lorem ipsum dolor sit.</a>
                            <a href="#" class="button secondary">Lorem ipsum dolor sit.</a>
                        </div>
                    </form>
                </div>
            </details>
            <div class="alert warning">
                <div class="icon">
                    <i class="bi bi-info-circle-fill"></i>
                </div>
                <div class="data">
                    <h3>Pay attention to layout.</h3>
                    <p>Display form controls in the same order in the HTML as they appear on screen. <u>Don't use CSS to rearrange the form controls.</u> Screen readers narrate form elements in the order they appear in the HTML.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <details>
                <summary>Component code</summary>
                <div class="details-content">
                    <h3>Basic form code</h3>
                    <div class="code-block">
                        <pre><code>&lt;form action="/" method="post"&gt;
    ..form controls here..
&lt;/form&gt;</code></pre>
                    </div>
                    <h3>Basic form code with buttons in footer</h3>
                    <pre><code>&lt;form&gt;
    &lt;div class="form-group"&gt;
        &lt;label&gt;Lorem ipsum dolor sit.&lt;/label&gt;
        &lt;input type="text" class="form-control"&gt;
    &lt;/div&gt;
    &lt;div class="form-group"&gt;
        &lt;label&gt;Lorem ipsum dolor sit. &lt;span class="required"&gt;*&lt;/span&gt;&lt;/label&gt;
        &lt;input type="text" class="form-control"&gt;
    &lt;/div&gt;
    &lt;div class="form-group"&gt;
        &lt;label&gt;Lorem ipsum dolor sit.&lt;/label&gt;
        &lt;input type="text" class="form-control"&gt;
    &lt;/div&gt;
    &lt;div class="form-group"&gt;
        &lt;label&gt;Lorem ipsum dolor sit.&lt;/label&gt;
        &lt;textarea class="form-control"&gt;&lt;/textarea&gt;
    &lt;/div&gt;
    &lt;div class="form-group"&gt;
        &lt;label&gt;Lorem ipsum dolor sit.&lt;/label&gt;
        &lt;select name="" id="" class="form-control"&gt;
            &lt;option value=""&gt;Test&lt;/option&gt;
            &lt;option value=""&gt;Test&lt;/option&gt;
            &lt;option value=""&gt;Test&lt;/option&gt;
            &lt;option value=""&gt;Test&lt;/option&gt;
            &lt;option value=""&gt;Test&lt;/option&gt;
        &lt;/select&gt;
    &lt;/div&gt;
    &lt;div class="button-footer"&gt;
        &lt;a href="#" class="button primary"&gt;Lorem ipsum dolor sit.&lt;/a&gt;
        &lt;a href="#" class="button secondary"&gt;Lorem ipsum dolor sit.&lt;/a&gt;
    &lt;/div&gt;
&lt;/form&gt;</code></pre>
                </div>
            </details>
        </div>
    </div>
    <aside>
        <asideLinks />
    </aside>
</template>
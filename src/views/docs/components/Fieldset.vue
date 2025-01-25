<script setup>
import asideLinks from '@/components/ComponentList.vue'
</script>
<template>
    <div class="rows">
        <div class="row">
            <h1 id="description">Fieldset</h1>
            <p>A fieldset is used to seperate related to each other elements of website.</p>
            <p>Fieldset comes with <code>&lt;legend></code> tag. It is used to describe content of fieldset.</p>
            <details open>
                <summary>Component preview</summary>
                <div class="details-content">
                    <form autocomplete="off">
                        <fieldset>
                            <legend>Registration form</legend>
                            <p>This is registration form for training <cite>Web Accessibility for Public Services</cite></p>
                            <div class="form-group">
                                <label for="name">Full name: <span class="required">*</span></label>
                                <input type="text" id="name" name="name" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="phone">Contact phone number: <span class="required">*</span></label>
                                <input type="text" id="phone" name="phone" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="date">Attendance date: <span class="required">*</span></label>
                                <input type="date" id="date" name="date" class="form-control">
                            </div>
                            <div class="button-footer">
                                <button type="submit" class="button primary">Register</button>
                            </div>
                        </fieldset>
                    </form>
                    
                </div>
            </details>
        </div>
        <div class="row">
            <details>
                <summary>Component code</summary>
                <div class="details-content">
                    <div class="code-block">
                        <pre><code>&lt;fieldset&gt;
    &lt;legend&gt;Registration form&lt;/legend&gt;
    &lt;p&gt;This is registration form for training &lt;cite&gt;Web Accessibility for 
    Public Services&lt;/cite&gt;&lt;/p&gt;
    &lt;div class="form-group"&gt;
        &lt;label for="name"&gt;Full name: &lt;span class="required"&gt;*&lt;/span&gt;&lt;/label&gt;
        &lt;input type="text" id="name" class="form-control"&gt;
    &lt;/div&gt;
    &lt;div class="form-group"&gt;
        &lt;label for="phone"&gt;Contact phone number: &lt;span class="required"&gt;*&lt;/span&gt;&lt;/label&gt;
        &lt;input type="text" id="phone" class="form-control"&gt;
    &lt;/div&gt;
    &lt;div class="form-group"&gt;
        &lt;label for="date"&gt;Attendance date: &lt;span class="required"&gt;*&lt;/span&gt;&lt;/label&gt;
        &lt;input type="date" id="date" class="form-control"&gt;
    &lt;/div&gt;
    &lt;hr&gt;
    &lt;a href="#" class="button primary"&gt;Register&lt;/a&gt;
&lt;/fieldset&gt;</code></pre>
                    </div>
                </div>
            </details>
        </div>
    </div>
    <aside>
        <asideLinks />
    </aside>
</template>
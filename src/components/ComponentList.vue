<template>
    <h4>Introduction</h4>
    <ul>
        <li v-for="link in links['intro']" :key="link.path" :class="{ current: isCurrent(link.path) }">
            <RouterLink :to="link.path">{{ link.label }}</RouterLink>
        </li>
    </ul>
    <h4>Components</h4>
    <ul>
        <li v-for="link in links['components']" :key="link.path" :class="{ current: isCurrent(link.path) }">
            <RouterLink :to="link.path">{{ link.label }}</RouterLink>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            links: {
                ["intro"]: [
                    {
                        label: "Introduction",
                        path: "/docs/introduction"
                    },
                ],
                ["components"]: [
                    {
                        label: "Accordion",
                        path: "/docs/components/accordion",
                    },
                    {
                        label: "Alert",
                        path: "/docs/components/alert",
                    },
                    {
                        label: "Aside",
                        path: "/docs/components/aside",
                    },
                    {
                        label: "Badge",
                        path: "/docs/components/badge",
                    },
                    {
                        label: "Block cards",
                        path: "/docs/components/block-cards",
                    },
                    {
                        label: "Block links",
                        path: "/docs/components/block-links",
                    },
                    {
                        label: "Blockquote",
                        path: "/docs/components/blockqoute",
                    },
                    {
                        label: "Buttons",
                        path: "/docs/components/buttons",
                    },
                    {
                        label: "Buttons group",
                        path: "/docs/components/buttons-group",
                    },
                    {
                        label: "Card",
                        path: "/docs/components/card",
                    },
                    {
                        label: "Cite",
                        path: "/docs/components/cite",
                    },
                    {
                        label: "Code",
                        path: "/docs/components/code",
                    },
                    {
                        label: "Fieldset",
                        path: "/docs/components/fieldset",
                    },
                    {
                        label: "Footer",
                        path: "/docs/components/footer",
                    },
                    {
                        label: "Forms",
                        path: "/docs/components/forms",
                    },
                    {
                        label: "Form progress",
                        path: "/docs/components/form-progress",
                    },
                    {
                        label: "Grid",
                        path: "/docs/components/grid",
                    },
                    {
                        label: "Heading",
                        path: "/docs/components/heading",
                    },
                    {
                        label: "Inputs",
                        path: "/docs/components/inputs",
                    },
                    {
                        label: "Kbd",
                        path: "/docs/components/kbd",
                    },
                    {
                        label: "Links",
                        path: "/docs/components/links",
                    },
                    {
                        label: "Navigation bar",
                        path: "/docs/components/navigation-bar",
                    },
                    {
                        label: "Optgroup",
                        path: "/docs/components/optgroup",
                    },
                    {
                        label: "Paragraphs",
                        path: "/docs/components/paragraphs",
                    },
                    {
                        label: "Progress bar",
                        path: "/docs/components/progress-bar",
                    },
                    {
                        label: "Spinner",
                        path: "/docs/components/spinner",
                    },
                    {
                        label: "Table",
                        path: "/docs/components/table",
                    },
                    {
                        label: "Tabs",
                        path: "/docs/components/tabs",
                    },
                ],
            }
        }
    },
    methods: {
      isCurrent(path) {
        return this.$route.path === path;
      },
    },
}
</script>
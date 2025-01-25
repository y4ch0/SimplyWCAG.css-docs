import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/docs',
      redirect: '/docs/introduction',
      children: [
        {
          path: 'introduction',
          component: () => import('@/views/docs/Index.vue'), // Lazy-loaded child component
        },
        {
          path: 'components',
          redirect: '/docs/components/accordion',
          children: [
            {
              path: 'accordion',
              component: () => import('@/views/docs/components/Accordion.vue'), // Lazy-loaded child component
            },
            {
              path: 'alert',
              component: () => import('@/views/docs/components/Alert.vue'), // Lazy-loaded child component
            },
            {
              path: 'aside',
              component: () => import('@/views/docs/components/Aside.vue'), // Lazy-loaded child component
            },
            {
              path: 'badge',
              component: () => import('@/views/docs/components/Badge.vue'), // Lazy-loaded child component
            },
            {
              path: 'block-cards',
              component: () => import('@/views/docs/components/BlockCards.vue'), // Lazy-loaded child component
            },
            {
              path: 'block-links',
              component: () => import('@/views/docs/components/Blocklinks.vue'), // Lazy-loaded child component
            },
            {
              path: 'blockqoute',
              component: () => import('@/views/docs/components/Blockquote.vue'), // Lazy-loaded child component
            },
            {
              path: 'buttons',
              component: () => import('@/views/docs/components/Buttons.vue'), // Lazy-loaded child component
            },
            {
              path: 'buttons-group',
              component: () => import('@/views/docs/components/ButtonsGroup.vue'), // Lazy-loaded child component
            },
            {
              path: 'card',
              component: () => import('@/views/docs/components/Card.vue'), // Lazy-loaded child component
            },
            {
              path: 'cite',
              component: () => import('@/views/docs/components/Cite.vue'), // Lazy-loaded child component
            },
            {
              path: 'code',
              component: () => import('@/views/docs/components/Code.vue'), // Lazy-loaded child component
            },
            {
              path: 'fieldset',
              component: () => import('@/views/docs/components/Fieldset.vue'), // Lazy-loaded child component
            },
            {
              path: 'footer',
              component: () => import('@/views/docs/components/Footer.vue'), // Lazy-loaded child component
            },
            {
              path: 'forms',
              component: () => import('@/views/docs/components/Forms.vue'), // Lazy-loaded child component
            },
            {
              path: 'form-progress',
              component: () => import('@/views/docs/components/FormProgress.vue'), // Lazy-loaded child component
            },
            {
              path: 'grid',
              component: () => import('@/views/docs/components/Grid.vue'), // Lazy-loaded child component
            },
            {
              path: 'heading',
              component: () => import('@/views/docs/components/Heading.vue'), // Lazy-loaded child component
            },
            {
              path: 'inputs',
              component: () => import('@/views/docs/components/Inputs.vue'), // Lazy-loaded child component
            },
            {
              path: 'kbd',
              component: () => import('@/views/docs/components/Kbd.vue'), // Lazy-loaded child component
            },
            {
              path: 'links',
              component: () => import('@/views/docs/components/Links.vue'), // Lazy-loaded child component
            },
            {
              path: 'navigation-bar',
              component: () => import('@/views/docs/components/NavigationBar.vue'), // Lazy-loaded child component
            },
            {
              path: 'optgroup',
              component: () => import('@/views/docs/components/Optgroup.vue'), // Lazy-loaded child component
            },
            {
              path: 'paragraphs',
              component: () => import('@/views/docs/components/Paragraphs.vue'), // Lazy-loaded child component
            },
            {
              path: 'progress-bar',
              component: () => import('@/views/docs/components/ProgressBar.vue'), // Lazy-loaded child component
            },
            {
              path: 'spinner',
              component: () => import('@/views/docs/components/Spinner.vue'), // Lazy-loaded child component
            },
            {
              path: 'table',
              component: () => import('@/views/docs/components/Table.vue'), // Lazy-loaded child component
            },
            {
              path: 'tabs',
              component: () => import('@/views/docs/components/Tabs.vue'), // Lazy-loaded child component
            },
          ]
        }
      ]
    },
  ],
})

export default router
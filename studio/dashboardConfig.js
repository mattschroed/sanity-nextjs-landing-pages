export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6120ba8af67165b89b9bb372',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5umsiqdr',
                  apiId: '161cd81b-d1c8-4f00-9f42-a3d9717ec1aa'
                },
                {
                  buildHookId: '6120ba8a37b15a96d9d6f82e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-jqw3ry7x',
                  apiId: 'd85996d3-34aa-4ff4-9fac-006a104125f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mattschroed/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-jqw3ry7x.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

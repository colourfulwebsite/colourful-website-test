export default {
  widgets: [
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
                  buildHookId: '632eacd246da4555fe533eed',
                  title: 'Sanity Studio',
                  name: 'colourful-website-test-studio',
                  apiId: '8cdbe2d2-5592-49e5-84cf-9ec7b319018e'
                },
                {
                  buildHookId: '632eacd208aa9d5b0457df6a',
                  title: 'Blog Website',
                  name: 'colourful-website-test',
                  apiId: 'd23007d2-b15f-45be-a8b7-d0895f679c53'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/colourfulwebsite/colourful-website-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://colourful-website-test.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

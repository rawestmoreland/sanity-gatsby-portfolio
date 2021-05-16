export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '60a165907c3a31b863e7d98d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-53wj21wh',
                  apiId: '7942dc37-cadd-4d42-b1ea-7e4807dd801c'
                },
                {
                  buildHookId: '60a16590d4660ca0bc65f41e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ywxjqu5a',
                  apiId: '227e6678-b98a-48f3-9d0b-6a0c74e5f7ac'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rawestmoreland/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ywxjqu5a.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

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
                  buildHookId: '5dd2055835fa6cad53c61975',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-pd7a4v72',
                  apiId: '68268971-a7ef-48b9-b4ed-4739c55cc8a9'
                },
                {
                  buildHookId: '5dd20558f0cd9d8374b963ae',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ra98ynnq',
                  apiId: '9f9c7c6e-dc8f-4aaf-afec-a60b80da8f9e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/barri7n/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ra98ynnq.netlify.com',
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

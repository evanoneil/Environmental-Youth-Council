export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5df16e196f4cd4985d6cb45a',
                  title: 'Sanity Studio',
                  name: 'Environmental-Youth-Council-studio',
                  apiId: '79cca29f-f507-493c-95ad-d11c283920e5'
                },
                {
                  buildHookId: '5df16e194ecb3b4668bcf35f',
                  title: 'Blog Website',
                  name: 'Environmental-Youth-Council',
                  apiId: 'e7d99ecd-d018-4f43-a11b-a09d46eea18a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/evanoneil/Environmental-Youth-Council',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://Environmental-Youth-Council.netlify.com', category: 'apps'}
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

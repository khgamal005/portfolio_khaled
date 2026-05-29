export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'bgColor',
      title: 'Background Color',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Languages', value: 'languages' },
          { title: 'Frameworks & Libraries', value: 'frameworks' },
          { title: 'Databases & Caching', value: 'databases' },
          { title: 'Messaging & Queues', value: 'messaging' },
          { title: 'DevOps & Tools', value: 'devops' },
        ],
      },
    },
  ],
}

export default {
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: Rule => Rule.required()
      },
      {
        name: 'order',
        title: 'Order',
        type: 'number',
        description: 'The order in which this service should appear',
        validation: Rule => Rule.required()
      }
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'description'
      }
    }
  }
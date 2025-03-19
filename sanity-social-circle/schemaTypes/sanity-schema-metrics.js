export default {
  name: 'clientMetric',
  title: 'Client Metric',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Metric Label',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'value',
      title: 'Metric Value',
      type: 'number',
      description: 'The percentage value for this metric',
      validation: Rule => Rule.required()
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'The order in which this metric should appear',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'value'
    },
    prepare({title, subtitle}) {
      return {
        title,
        subtitle: `${subtitle}%`
      }
    }
  }
}
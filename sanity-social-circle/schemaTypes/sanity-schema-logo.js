export default {
    name: 'clientLogo',
    title: 'Client Logo',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Client Name',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'logo',
        title: 'Logo Image',
        type: 'image',
        options: {
          hotspot: true
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'order',
        title: 'Display Order',
        type: 'number',
        description: 'The order in which this logo should appear',
        validation: Rule => Rule.required()
      },
      {
        name: 'height',
        title: 'Custom Height',
        type: 'string',
        description: 'Optional custom height class (e.g., "h-40" or "h-23")',
        validation: Rule => Rule.optional()
      }
    ],
    preview: {
      select: {
        title: 'name',
        media: 'logo'
      }
    }
  }
export default {
    name: 'whatWeDo',
    title: 'What We Do',
    type: 'document',
    fields: [
      {
        name: 'statement',
        title: 'Statement',
        type: 'text',
        description: 'A short statement that describes what your company does.',
        validation: Rule => Rule.required().max(300)
      }
    ],
    preview: {
      select: {
        title: 'statement'
      }
    }
  }
  
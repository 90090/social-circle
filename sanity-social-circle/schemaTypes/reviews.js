export default {
    name: "review",
    title: "Reviews",
    type: "document",
    fields: [
      {
        name: "text",
        title: "Review Text",
        type: "text",
        validation: (Rule) => Rule.required().max(1000),
      },
      {
        name: "name",
        title: "Reviewer Name",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "date",
        title: "Review Date",
        type: "date",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "stars",
        title: "Star Rating",
        type: "string",
        options: {
          list: ["★☆☆☆☆", "★★☆☆☆", "★★★☆☆", "★★★★☆", "★★★★★"],
        },
        validation: (Rule) => Rule.required(),
      },
    ],
  };
  
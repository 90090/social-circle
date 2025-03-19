export default {
    name: "myStory",
    title: "My Story Section",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Section Title",
        type: "string",
      },
      {
        name: "cards",
        title: "Story Cards",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "text", title: "Text", type: "text" },
              { name: "bgColor", title: "Background Color", type: "string" },
            ],
          },
        ],
      },
    ],
  };
  
export default {
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Nuevos Lanzamientos', value: 'new'},
          {title: 'Charms', value: 'charms'},
          {title: 'Brazaletes', value: 'bracelets'},
          {title: 'Anillos', value: 'rings'},
          {title: 'Collares y dijes', value: 'necklaces'},
          {title: 'Llaveros', value: 'keyrings'},
          {title: 'Otros', value: 'others'},
          {title: 'Aretes', value: 'earrings'},
        ],
        layout: 'radio',
      },
    },
  ],
}

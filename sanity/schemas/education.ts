import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'institute',
      title: 'Institute',
      type: 'string',
    }),
 
    
    defineField({
      name: 'instituteImage',
      title: 'InstituteImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'dateStart',
      title: 'DateStart',
      type: 'string',
      
      
    }),
    defineField({
      name: 'dateEnd',
      title: 'DateEnd',
      type: 'string',
      
      
    }),
    defineField({
      name: 'degree',
      title: 'Degree',
      type: 'string',
    }),
    defineField({
      name: 'isCurrentlyWorkingHere',
      title: 'IsCurrentlyWorkingHere',
      type: 'boolean',
      
      
    }),
  
      
    
    defineField({
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{type: 'string'}],
      
      
    }),
    
  ],

  
})

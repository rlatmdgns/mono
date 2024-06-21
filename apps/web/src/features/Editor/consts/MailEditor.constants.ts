export const formats = [
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'code-block',
  'color',
  'background',
  'list',
  'bullet',
  'indent',
  'align',
  'image',
  'link',
  'mention',
]

export const module_mention = {
  mention: {
    allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
    mentionDenotationChars: [],
    source: function (searchTerm: any, renderList: any) {
      let values: any = []

      if (searchTerm.length === 0) {
        renderList(values, searchTerm)
      } else {
        const matches = []
        for (let i = 0; i < values.length; i++)
          if (~values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase()))
            matches.push(values[i])
        renderList(matches, searchTerm)
      }
    },
  },
}

export const fetchMessages = (query) => (
  $.ajax({
    method: 'GET',
    url: 'api/messages',
    data: {
      name: query.name,
      chatroomId: query.chatroomId
    }
  })
)

@messages.each do |message|
  json.set! message.id do
    json.user message.user
    json.chatroomId message.chatroomId
    json.content message.content
    json.created_at message.created_at
  end
end
